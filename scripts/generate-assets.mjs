/**
 * Brand asset generator.
 *
 * Produces the favicon set, PWA icons, Apple touch icon, and the 1200×630
 * Open Graph / Twitter share card from `public/muregiscore-logo.svg`.
 *
 * Usage:
 *   node scripts/generate-assets.mjs
 *
 * Outputs (all in `public/`):
 *   favicon.svg, favicon-16x16.png, favicon-32x32.png, favicon.ico,
 *   apple-touch-icon.png, icon-192.png, icon-512.png, og.png, og-twitter.png
 */
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** Rasterise a raw SVG string at an exact output size. */
function svgToPng(svg, width, height) {
  return sharp(Buffer.from(svg))
    .resize(width, height, { fit: "fill" })
    .png()
    .toBuffer();
}

/** Make the browser/app tile (square, brand tile, transparent padding). */
function makeTile(svgMarkup, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${svgMarkup}</svg>`;
}

// ---- 1. SVG favicon (square brand tile, no text so it stays legible) ----
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#0b0f17"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#g)" stroke-width="4"/>
  <path d="M34 72 L40 28 L50 60 L60 28 L66 72" fill="none" stroke="url(#g)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="100">
      <stop offset="0" stop-color="#f9d976"/>
      <stop offset="0.5" stop-color="#f6c34b"/>
      <stop offset="1" stop-color="#d89b24"/>
    </linearGradient>
  </defs>
</svg>`;

// ---- 2. PNG favicons from the same SVG ----
const png16 = await svgToPng(faviconSvg, 16, 16);
const png32 = await svgToPng(faviconSvg, 32, 32);
const png192 = await svgToPng(faviconSvg, 192, 192);
const png512 = await svgToPng(faviconSvg, 512, 512);

// ---- 3. ICO (32px PNG embedded — supported by every modern browser) ----
function makeIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const dir = Buffer.alloc(16);
  dir[0] = 32; // width
  dir[1] = 32; // height
  dir[2] = 0; // palette
  dir[3] = 0; // reserved
  dir.writeUInt16LE(1, 4); // planes
  dir.writeUInt16LE(32, 6); // bpp
  dir.writeUInt32LE(pngBuffer.length, 8); // size
  dir.writeUInt32LE(22, 12); // offset
  return Buffer.concat([header, dir, pngBuffer]);
}

// ---- 4. Apple touch icon: brand tile on the site background, 180×180 ----
const appleIconSvg = makeTile(
  `<rect width="180" height="180" fill="#0b0f17"/>
   <circle cx="90" cy="90" r="63" fill="none" stroke="#f6c34b" stroke-width="7"/>
   <path d="M61 128 L69 49 L90 94 L111 49 L119 128" fill="none" stroke="#f6c34b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`,
  180
);
const appleIcon = await svgToPng(appleIconSvg, 180, 180);

// ---- 5. Open Graph / Twitter share card (1200×630) ----
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
      <stop offset="0" stop-color="#020617"/>
      <stop offset="0.45" stop-color="#07111f"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f9d976"/>
      <stop offset="0.5" stop-color="#f6c34b"/>
      <stop offset="1" stop-color="#d89b24"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#57c7ff" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#57c7ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="520" height="520" x="680" y="-120" fill="url(#glow)"/>
  <rect width="520" height="520" x="-180" y="240" fill="url(#glow)" transform="rotate(20 80 500)"/>
  <g stroke="#ffffff" stroke-opacity="0.06" stroke-width="1">
    <line x1="90" y1="180" x2="90" y2="540"/>
    <line x1="150" y1="180" x2="150" y2="540"/>
    <line x1="90" y1="180" x2="150" y2="180"/>
    <line x1="90" y1="540" x2="150" y2="540"/>
  </g>
  <g transform="translate(96 96) scale(0.4)">
    <rect width="400" height="400" rx="64" fill="#0b0f17"/>
    <circle cx="200" cy="200" r="150" fill="none" stroke="url(#gold)" stroke-width="26"/>
    <path d="M140 280 L160 120 L200 240 L240 120 L260 280" fill="none" stroke="url(#gold)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="280" y="190" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="700" fill="#ffffff">Victor Muregi</text>
  <text x="282" y="252" font-family="Arial, Helvetica, sans-serif" font-size="30" letter-spacing="3" fill="#9fb3c8">FULL-STACK DEVELOPER · FOUNDER</text>
  <text x="280" y="420" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#e5eef9">Polyglot engineer building enterprise software for</text>
  <text x="280" y="462" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#e5eef9">African businesses — M-Pesa, React, Node.js, Java.</text>
  <rect x="280" y="516" width="76" height="4" rx="2" fill="url(#gold)"/>
  <text x="280" y="566" font-family="Arial, Helvetica, sans-serif" font-size="24" letter-spacing="6" fill="#f6c34b">MUREGISCORE TECHNOLOGIES</text>
</svg>`;

const ogCard = await svgToPng(ogSvg, 1200, 630);

// Write everything
const writes = [
  ["favicon.svg", Buffer.from(faviconSvg)],
  ["favicon-16x16.png", png16],
  ["favicon-32x32.png", png32],
  ["favicon.ico", makeIco(png32)],
  ["apple-touch-icon.png", appleIcon],
  ["icon-192.png", png192],
  ["icon-512.png", png512],
  ["og.png", ogCard]
];

for (const [name, buffer] of writes) {
  await writeFile(join(publicDir, name), buffer);
  console.log(`wrote public/${name} (${buffer.length.toLocaleString()} bytes)`);
}
console.log("Asset generation complete.");
