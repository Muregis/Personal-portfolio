import { writeFile, copyFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "projects");

async function generateRatibaImage() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="675" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#030712"/>
        <stop offset="50%" stop-color="#0b172b"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
      </linearGradient>
      <linearGradient id="accentCyan" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>
      <linearGradient id="accentPurple" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8b5cf6"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
      <radialGradient id="glow1" cx="0.8" cy="0.2" r="0.6">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glow2" cx="0.2" cy="0.8" r="0.6">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="675" fill="url(#bg)"/>
    <rect width="1200" height="675" fill="url(#glow1)"/>
    <rect width="1200" height="675" fill="url(#glow2)"/>

    <!-- Subtle Tech Grid -->
    <g stroke="#334155" stroke-opacity="0.25" stroke-width="1">
      <line x1="80" y1="0" x2="80" y2="675"/>
      <line x1="200" y1="0" x2="200" y2="675"/>
      <line x1="320" y1="0" x2="320" y2="675"/>
      <line x1="440" y1="0" x2="440" y2="675"/>
      <line x1="560" y1="0" x2="560" y2="675"/>
      <line x1="680" y1="0" x2="680" y2="675"/>
      <line x1="800" y1="0" x2="800" y2="675"/>
      <line x1="920" y1="0" x2="920" y2="675"/>
      <line x1="1040" y1="0" x2="1040" y2="675"/>
      <line x1="0" y1="80" x2="1200" y2="80"/>
      <line x1="0" y1="200" x2="1200" y2="200"/>
      <line x1="0" y1="320" x2="1200" y2="320"/>
      <line x1="0" y1="440" x2="1200" y2="440"/>
      <line x1="0" y1="560" x2="1200" y2="560"/>
    </g>

    <!-- Header Pill -->
    <rect x="80" y="65" width="280" height="36" rx="18" fill="#06b6d4" fill-opacity="0.12" stroke="#06b6d4" stroke-opacity="0.4"/>
    <circle cx="98" cy="83" r="5" fill="#06b6d4"/>
    <text x="114" y="88" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#67e8f9" letter-spacing="1">ACADEMIC TIMETABLING ENGINE</text>

    <!-- Main Title -->
    <text x="80" y="150" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-0.5">EduCore Ratiba</text>
    <text x="80" y="195" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#94a3b8">Constraint-Satisfaction Automated Timetabling &amp; Room Allocation</text>

    <!-- Schedule Matrix Preview Card -->
    <g transform="translate(80, 240)">
      <!-- Outer Card Container -->
      <rect width="1040" height="370" rx="20" fill="url(#cardGrad)" stroke="#334155" stroke-opacity="0.6" stroke-width="1.5"/>
      
      <!-- Table Header Bar -->
      <rect x="20" y="20" width="1000" height="44" rx="10" fill="#0f172a" stroke="#334155" stroke-opacity="0.4"/>
      <text x="50" y="48" font-family="monospace" font-size="13" font-weight="600" fill="#38bdf8">PERIOD / DAY</text>
      <text x="230" y="48" font-family="monospace" font-size="13" font-weight="600" fill="#94a3b8">MON (8:00 - 10:00)</text>
      <text x="430" y="48" font-family="monospace" font-size="13" font-weight="600" fill="#94a3b8">TUE (10:30 - 12:30)</text>
      <text x="630" y="48" font-family="monospace" font-size="13" font-weight="600" fill="#94a3b8">WED (13:30 - 15:30)</text>
      <text x="830" y="48" font-family="monospace" font-size="13" font-weight="600" fill="#94a3b8">THU (8:00 - 10:00)</text>

      <!-- Slot 1 -->
      <rect x="230" y="80" width="180" height="70" rx="12" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="245" y="106" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#e0f2fe">Math Form 4A</text>
      <text x="245" y="126" font-family="-apple-system, sans-serif" font-size="12" fill="#7dd3fc">Tr. Kamau · Room 12</text>
      <circle cx="390" cy="98" r="4" fill="#38bdf8"/>

      <!-- Slot 2 -->
      <rect x="430" y="80" width="180" height="70" rx="12" fill="#8b5cf6" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.2"/>
      <text x="445" y="106" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ede9fe">Physics Lab Form 3</text>
      <text x="445" y="126" font-family="-apple-system, sans-serif" font-size="12" fill="#c4b5fd">Tr. Ochieng · Sci-Lab 1</text>
      <circle cx="590" cy="98" r="4" fill="#a78bfa"/>

      <!-- Slot 3 -->
      <rect x="630" y="80" width="180" height="70" rx="12" fill="#10b981" fill-opacity="0.25" stroke="#34d399" stroke-width="1.2"/>
      <text x="645" y="106" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ecfdf5">Chemistry Form 2B</text>
      <text x="645" y="126" font-family="-apple-system, sans-serif" font-size="12" fill="#6ee7b7">Tr. Mutua · Room 08</text>
      <circle cx="790" cy="98" r="4" fill="#34d399"/>

      <!-- Slot 4 -->
      <rect x="830" y="80" width="180" height="70" rx="12" fill="#f59e0b" fill-opacity="0.25" stroke="#fbbf24" stroke-width="1.2"/>
      <text x="845" y="106" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#fffbeb">Biology Form 1A</text>
      <text x="845" y="126" font-family="-apple-system, sans-serif" font-size="12" fill="#fde68a">Tr. Wanjiku · Room 04</text>
      <circle cx="990" cy="98" r="4" fill="#fbbf24"/>

      <!-- Row 2 -->
      <!-- Slot 5 -->
      <rect x="230" y="165" width="180" height="70" rx="12" fill="#ec4899" fill-opacity="0.25" stroke="#f472b6" stroke-width="1.2"/>
      <text x="245" y="191" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#fdf2f8">English Lit Form 3B</text>
      <text x="245" y="211" font-family="-apple-system, sans-serif" font-size="12" fill="#fbcfe8">Tr. Achieng · Room 10</text>

      <!-- Slot 6 -->
      <rect x="430" y="165" width="180" height="70" rx="12" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="445" y="191" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#e0f2fe">Computer Studies</text>
      <text x="445" y="211" font-family="-apple-system, sans-serif" font-size="12" fill="#7dd3fc">Tr. Muregi · ICT Lab</text>

      <!-- Slot 7 -->
      <rect x="630" y="165" width="180" height="70" rx="12" fill="#8b5cf6" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.2"/>
      <text x="645" y="191" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ede9fe">Kiswahili Form 4B</text>
      <text x="645" y="211" font-family="-apple-system, sans-serif" font-size="12" fill="#c4b5fd">Tr. Otieno · Room 14</text>

      <!-- Constraint Engine Stats Pill -->
      <g transform="translate(40, 260)">
        <rect width="960" height="85" rx="14" fill="#030712" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
        
        <text x="30" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" letter-spacing="1">ALGORITHM ENGINE</text>
        <text x="30" y="62" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#38bdf8">Constraint Satisfaction (CSP)</text>

        <line x1="280" y1="20" x2="280" y2="65" stroke="#334155" stroke-width="1"/>
        
        <text x="310" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" letter-spacing="1">COLLISION DETECTOR</text>
        <text x="310" y="62" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#34d399">0 Teacher / Room Clashes</text>

        <line x1="560" y1="20" x2="560" y2="65" stroke="#334155" stroke-width="1"/>

        <text x="590" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" letter-spacing="1">GENERATION LATENCY</text>
        <text x="590" y="62" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#fbbf24">&lt; 2.4s for 40 Streams</text>

        <line x1="790" y1="20" x2="790" y2="65" stroke="#334155" stroke-width="1"/>

        <text x="820" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" letter-spacing="1">EXPORT INTEGRATION</text>
        <text x="820" y="62" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#a78bfa">PDF &amp; EduCore Sync</text>
      </g>
    </g>
  </svg>`;

  const buffer = await sharp(Buffer.from(svg))
    .resize(1200, 675, { fit: "cover" })
    .jpeg({ quality: 84, mozjpeg: true })
    .toBuffer();

  const file = join(outDir, "educore-ratiba.jpg");
  await writeFile(file, buffer);
  console.log(`✔ Generated educore-ratiba.jpg (${(buffer.length / 1024).toFixed(0)} KB)`);
}

async function generateCoreCrmImage() {
  const file = join(outDir, "core-crm.jpg");
  const clientCoreFile = join(outDir, "clientcore.jpg");
  await copyFile(clientCoreFile, file);
  console.log("✔ Created core-crm.jpg from clientcore.jpg");
}

await generateRatibaImage();
await generateCoreCrmImage();
console.log("Card generation finished.");
