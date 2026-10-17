import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const sourceDir = path.join(rootDir, "public", "car bon gal");
const targetDir = path.join(rootDir, "public", "gallery");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map of the 16 authentic photos (excluding the uncropped full-desktop screenshot 3.33.07)
const galleryMap = [
  {
    src: "Screenshot 2026-10-17 at 3.33.14\u202FPM.png",
    dest: "gallery-1.webp",
    alt: "Ferrari 488 GTB Full Body Paint Protection Film & Detailing",
    category: "PPF",
  },
  {
    src: "Screenshot 2026-10-17 at 3.33.27\u202FPM.png",
    dest: "gallery-2.webp",
    alt: "Audi Q7 Exterior Deep Clean & Multi-Stage Paint Correction",
    category: "DETAILING",
  },
  {
    src: "Screenshot 2026-10-17 at 3.33.54\u202FPM.png",
    dest: "gallery-3.webp",
    alt: "Porsche High-Performance Brake Caliper Servicing",
    category: "PERFORMANCE",
  },
  {
    src: "Screenshot 2026-10-17 at 3.34.11\u202FPM.png",
    dest: "gallery-4.webp",
    alt: "Porsche Red Brake Calipers & Alloy Wheel Refinement",
    category: "PERFORMANCE",
  },
  {
    src: "Screenshot 2026-10-17 at 3.34.49\u202FPM.png",
    dest: "gallery-5.webp",
    alt: "Ferrari Underbody Inspection & Suspension Tune on Hydraulic Lift",
    category: "PERFORMANCE",
  },
  {
    src: "Screenshot 2026-10-17 at 3.34.59\u202FPM.png",
    dest: "gallery-6.webp",
    alt: "Ferrari F430 Classic Restoration & Multi-Stage Paint Correction",
    category: "RESTORATION",
  },
  {
    src: "Screenshot 2026-10-17 at 3.35.37\u202FPM.png",
    dest: "gallery-7.webp",
    alt: "BMW M2 Aerodynamic Bodykit & Lamborghini Huracan at Carbon Studio",
    category: "BODYKITS",
  },
  {
    src: "Screenshot 2026-10-17 at 3.39.16\u202FPM.png",
    dest: "gallery-8.webp",
    alt: "Classic Ferrari F430 Complete Studio Restoration & Finish",
    category: "RESTORATION",
  },
  {
    src: "Screenshot 2026-10-17 at 3.39.28\u202FPM.png",
    dest: "gallery-9.webp",
    alt: "Custom BMW M2 Performance Build & Handover",
    category: "BODYKITS",
  },
  {
    src: "Screenshot 2026-10-17 at 3.39.40\u202FPM.png",
    dest: "gallery-10.webp",
    alt: "Mercedes-Maybach Luxury Detailing & VIP Studio Handover",
    category: "DETAILING",
  },
  {
    src: "Screenshot 2026-10-17 at 3.39.57\u202FPM.png",
    dest: "gallery-11.webp",
    alt: "Purple Audi RS Ultra-Gloss Nano Ceramic Coating & Wheel Protection",
    category: "DETAILING",
  },
  {
    src: "Screenshot 2026-10-17 at 3.40.03\u202FPM.png",
    dest: "gallery-12.webp",
    alt: "Dust-Controlled PPF Installation Bay with Aegis SPX Film",
    category: "PPF",
  },
  {
    src: "Screenshot 2026-10-17 at 3.40.10\u202FPM.png",
    dest: "gallery-13.webp",
    alt: "Range Rover Velar Deep Black Gloss Paint Correction & Protection",
    category: "DETAILING",
  },
  {
    src: "Screenshot 2026-10-17 at 3.40.23\u202FPM.png",
    dest: "gallery-14.webp",
    alt: "Lamborghini Huracan Spyder Custom Vinyl Wrap & Detailing",
    category: "WRAPPING",
  },
  {
    src: "Screenshot 2026-10-17 at 3.40.54\u202FPM.png",
    dest: "gallery-15.webp",
    alt: "BMW Precision TPU Paint Protection Film Installation",
    category: "PPF",
  },
  {
    src: "Screenshot 2026-10-17 at 3.41.04\u202FPM.png",
    dest: "gallery-16.webp",
    alt: "Range Rover Custom Bulk Film Application & Edge Tucking",
    category: "PPF",
  },
];

async function convertGallery() {
  console.log(`Starting conversion of ${galleryMap.length} gallery images...`);

  const results = [];

  for (const item of galleryMap) {
    const inputPath = path.join(sourceDir, item.src);
    const outputPath = path.join(targetDir, item.dest);

    if (!fs.existsSync(inputPath)) {
      console.error(`Missing input file: ${inputPath}`);
      continue;
    }

    await sharp(inputPath)
      .resize({
        width: 1600,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    results.push({
      dest: item.dest,
      category: item.category,
      sizeKB,
      alt: item.alt,
    });
  }

  console.log("\nGallery optimization complete:\n");
  console.table(results);
}

convertGallery();
