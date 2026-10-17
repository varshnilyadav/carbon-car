import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Locate source folder
const defaultSourceDir = path.join(rootDir, "public", "carbon s pic");
const sourceDir = process.argv[2] ? path.resolve(process.argv[2]) : defaultSourceDir;

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

console.log(`Processing images from: ${sourceDir}\n`);

const tasks = [
  // 1. Service Card / Hero Images (1600x1000, 16:10, cover attention, quality ~80)
  {
    src: "Interior Exterior Detailing.jpg",
    dest: "public/images/services/interior-exterior-detailing.webp",
    type: "hero",
  },
  {
    src: "Graphene-Coating.jpg",
    dest: "public/images/services/graphene-coating.webp",
    type: "hero",
  },
  {
    src: "ceramic Coating.jpg",
    dest: "public/images/services/ceramic-coating.webp",
    type: "hero",
  },
  {
    src: "paint-protection-film.jpeg",
    dest: "public/images/services/ppf.webp",
    type: "hero",
  },
  {
    src: "Color PPF.jpg",
    dest: "public/images/services/color-ppf.webp",
    type: "hero",
  },
  {
    src: "Window Film.jpg",
    dest: "public/images/services/sun-films.webp",
    type: "hero",
  },

  // 2. Extra Gallery Images (max 1600px wide, preserve aspect ratio, quality ~80)
  {
    src: "Exterior Detailing.jpg",
    dest: "public/services/interior-exterior-detailing/exterior-detailing.webp",
    type: "gallery",
  },
  {
    src: "Interior Detailing.jpg",
    dest: "public/services/interior-exterior-detailing/interior-detailing.webp",
    type: "gallery",
  },
  {
    src: "Color ppf 2.webp",
    dest: "public/services/color-ppf/color-ppf-2.webp",
    type: "gallery",
  },

  // 3. Designed Artwork / Text (max 1600px wide, keep full image, do NOT crop, quality ~85)
  {
    src: "Claro PPF.png",
    dest: "public/images/claro-ppf.webp",
    type: "artwork",
  },
  {
    src: "Studio photo.png",
    dest: "public/images/studio.webp",
    type: "artwork",
  },
];

async function processImage(task) {
  const inputPath = path.join(sourceDir, task.src);
  const outputPath = path.join(rootDir, task.dest);

  if (!fs.existsSync(inputPath)) {
    return {
      name: task.src,
      dest: task.dest,
      status: "MISSING",
      sizeKB: 0,
    };
  }

  // Ensure destination folder exists
  const destDir = path.dirname(outputPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  let pipeline = sharp(inputPath);

  if (task.type === "hero") {
    // 1600x1000, 16:10 cover with attention focus
    pipeline = pipeline
      .resize(1600, 1000, {
        fit: "cover",
        position: "attention",
      })
      .webp({ quality: 80, effort: 4 });
  } else if (task.type === "gallery") {
    // max 1600 wide, keep aspect ratio
    pipeline = pipeline
      .resize({
        width: 1600,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: 80, effort: 4 });
  } else if (task.type === "artwork") {
    // max 1600 wide, do not crop, quality 85
    pipeline = pipeline
      .resize({
        width: 1600,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: 85, effort: 4 });
  }

  await pipeline.toFile(outputPath);

  const stats = fs.statSync(outputPath);
  const sizeKB = (stats.size / 1024).toFixed(1);

  return {
    name: task.src,
    dest: task.dest,
    status: "OK",
    sizeKB: Number(sizeKB),
  };
}

async function run() {
  const results = [];

  for (const task of tasks) {
    try {
      const res = await processImage(task);
      results.push(res);
    } catch (err) {
      console.error(`Error processing ${task.src}:`, err.message);
      results.push({
        name: task.src,
        dest: task.dest,
        status: `ERROR: ${err.message}`,
        sizeKB: 0,
      });
    }
  }

  console.log("--------------------------------------------------------------------------------------------------");
  console.log(
    "| Source File".padEnd(30) +
    "| Target Path".padEnd(58) +
    "| Status".padEnd(10) +
    "| Size (KB) |"
  );
  console.log("--------------------------------------------------------------------------------------------------");

  for (const r of results) {
    console.log(
      `| ${r.name.padEnd(28)} | ${r.dest.padEnd(56)} | ${r.status.padEnd(8)} | ${String(r.sizeKB + " KB").padStart(9)} |`
    );
  }

  console.log("--------------------------------------------------------------------------------------------------");
}

run();
