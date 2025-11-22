const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

  // Lista de imágenes a optimizar - crear versiones optimizadas
  const imagesToOptimize = [
    { original: 'rotating-card-bg-front.jpeg', optimized: 'rotating-card-bg-front-optimized.jpeg' },
    { original: 'rotating-card-bg-back.jpeg', optimized: 'rotating-card-bg-back-optimized.jpeg' },
    { original: 'bg-presentation.jpg', optimized: 'bg-presentation-optimized.jpg' },
    { original: 'imagenreparacionbaxi-C4WH1ZTe.webp', optimized: 'imagenreparacionbaxi-optimized.webp' }
  ];

  for (const { original, optimized } of imagesToOptimize) {
    const inputPath = path.join(imagesDir, original);
    const outputPath = path.join(imagesDir, optimized);

    if (!fs.existsSync(inputPath)) {
      console.log(`Imagen no encontrada: ${original}`);
      continue;
    }

    try {
      const image = sharp(inputPath);

      if (original.endsWith('.jpeg') || original.endsWith('.jpg')) {
        await image
          .jpeg({ quality: 80, progressive: true })
          .resize(1200, null, { withoutEnlargement: true })
          .toFile(outputPath);
      } else if (original.endsWith('.png')) {
        await image
          .png({ quality: 80, progressive: true })
          .resize(1200, null, { withoutEnlargement: true })
          .toFile(outputPath);
      } else if (original.endsWith('.webp')) {
        await image
          .webp({ quality: 80 })
          .resize(1200, null, { withoutEnlargement: true })
          .toFile(outputPath);
      }

      const stats = fs.statSync(outputPath);
      console.log(`✅ Optimizada: ${original} → ${optimized} - ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (error) {
      console.error(`❌ Error optimizando ${original}:`, error.message);
    }
  }
}

optimizeImages().catch(console.error);
