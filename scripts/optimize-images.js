const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_DIRS = ['images/services', 'images/gallery'];

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✓ Optimisé: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Erreur lors de l'optimisation de ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const fullPath = path.join(PUBLIC_DIR, dir);
  if (!fs.existsSync(fullPath)) return;

  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(fullPath, file);
      const outputPath = path.join(fullPath, `${path.parse(file).name}.webp`);
      await optimizeImage(inputPath, outputPath);
    }
  }
}

async function main() {
  console.log('🚀 Début de l\'optimisation des images...');
  for (const dir of IMAGE_DIRS) {
    await processDirectory(dir);
  }
  console.log('✨ Optimisation terminée !');
}

main().catch(console.error); 