/**
 * Fetches license-clean (CC0) landscape "splash" photos from the Openverse API
 * for each project card and saves optimised JPEGs to public/images/projects/.
 *
 * Usage:
 *   node scripts/fetch-splash-images.mjs
 *
 * Each result prints the chosen image's title and creator so the alt text in
 * src/lib/site.ts can stay truthful. CC0 means no attribution is required.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "projects");
const OPENVERSE = "https://api.openverse.org/v1/images/";

const queries = [
  { slug: "educore", q: "classroom education school books" },
  { slug: "sawa-solar", q: "solar panels sunlight" },
  { slug: "school-site", q: "university students campus" },
  { slug: "stockcore", q: "warehouse storage boxes" },
  { slug: "clientcore", q: "business team meeting office" },
  { slug: "nuru-ai", q: "robot technology" }
];

const params = new URLSearchParams({
  license: "cc0",
  aspect_ratio: "wide",
  page_size: "20"
});

const BLACKLIST = ["logo", "fest", "icon", "poster", "wordmark", "emblem", "vector", "cartoon"];

async function pickBest(query) {
  const url = `${OPENVERSE}?${new URLSearchParams({ q: query.q, ...Object.fromEntries(params) })}`;
  const res = await fetch(url, { headers: { "User-Agent": "codebuff-asset-fetch/1.0" } });
  if (!res.ok) throw new Error(`Openverse ${res.status} for "${query.q}"`);
  const data = await res.json();
  const words = query.q.split(" ");
  const candidates = (data.results ?? []).filter(
    (r) => r.url && r.license === "cc0" && r.thumbnail
  );
  // Prefer results whose own tags confirm the subject; reject logos/graphics.
  const scored = candidates
    .map((r) => {
      const tags = (r.tags ?? []).map((t) => String(t.name).toLowerCase());
      const hay = [r.title ?? "", ...tags].join(" ").toLowerCase();
      const hits = words.filter((w) => hay.includes(w.toLowerCase())).length;
      const blocked = BLACKLIST.some((w) => hay.includes(w));
      return { r, hits, blocked };
    })
    .filter((s) => !s.blocked);
  scored.sort(
    (a, b) => b.hits - a.hits || (a.r.creator ? 0 : 1) - (b.r.creator ? 0 : 1)
  );
  return scored[0]?.r;
}

await mkdir(outDir, { recursive: true });

const onlySlug = process.argv[2];

for (const query of queries) {
  if (onlySlug && query.slug !== onlySlug) continue;
  try {
    const photo = await pickBest(query);
    if (!photo) throw new Error(`no suitable CC0 image found for "${query.q}"`);
    const raw = await fetch(photo.url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; asset-fetch/1.0)" }
    });
    if (!raw.ok) throw new Error(`download ${raw.status} from ${photo.url}`);
    const buffer = Buffer.from(await raw.arrayBuffer());
    // Crop to a consistent 16:9, optimise for the web.
    const out = await sharp(buffer)
      .resize(1200, 675, { fit: "cover", position: "attention" })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    const file = join(outDir, `${query.slug}.jpg`);
    await writeFile(file, out);
    console.log(
      `✔ ${query.slug}.jpg  (${(out.length / 1024).toFixed(0)} KB)\n  title:   "${photo.title ?? "(untitled)"}"\n  creator: ${photo.creator ?? "unknown"}\n  license: ${photo.license} ${photo.license_version ?? ""}`
    );
  } catch (err) {
    console.error(`✘ ${query.slug}: ${err.message}`);
  }
}
console.log("Done.");
