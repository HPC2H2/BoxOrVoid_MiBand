/**
 * 图片资源压缩脚本
 * 1. title.png: 缩放至约134x34px + PNG8 索引色
 * 2. 所有图标: PNG8 索引色（256色）
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const IMAGE_DIR = path.join(SRC, 'common', 'image');
const ICONS_DIR = path.join(IMAGE_DIR, 'icons');

async function compressTitle() {
  const input = path.join(IMAGE_DIR, 'title.png');
  const temp = path.join(IMAGE_DIR, '_temp_title.png');

  if (!fs.existsSync(input)) {
    console.log('[SKIP] title.png not found');
    return;
  }

  const origStat = fs.statSync(input);
  console.log(`[title.png] Original: ${origStat.size} bytes`);

  // Resize to ~134x34 (maintaining aspect ratio), convert to PNG8 with palette
  await sharp(input)
    .resize(134, 34, { fit: 'inside' })
    .png({ palette: true, colours: 256, quality: 90 })
    .toFile(temp);

  // Replace original
  fs.unlinkSync(input);
  fs.renameSync(temp, input);

  const newStat = fs.statSync(input);
  const saved = origStat.size - newStat.size;
  const pct = ((saved / origStat.size) * 100).toFixed(1);
  console.log(`[title.png] Compressed: ${newStat.size} bytes (saved ${saved} bytes, ${pct}%)`);
}

async function compressIcons() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.log('[SKIP] icons directory not found');
    return;
  }

  const files = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.png'));
  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const file of files) {
    const input = path.join(ICONS_DIR, file);
    const temp = path.join(ICONS_DIR, `_temp_${file}`);

    const origStat = fs.statSync(input);
    totalOriginal += origStat.size;

    try {
      await sharp(input)
        .png({ palette: true, colours: 256, quality: 90 })
        .toFile(temp);

      const newStat = fs.statSync(temp);
      totalCompressed += newStat.size;

      // Replace original
      fs.unlinkSync(input);
      fs.renameSync(temp, input);

      const saved = origStat.size - newStat.size;
      if (saved > 0) {
        const pct = ((saved / origStat.size) * 100).toFixed(1);
        console.log(`[${file}] ${origStat.size} → ${newStat.size} (saved ${pct}%)`);
      } else {
        console.log(`[${file}] ${origStat.size} → ${newStat.size} (already optimal)`);
      }
    } catch (err) {
      console.error(`[${file}] Error: ${err.message}`);
      // Clean up temp file
      if (fs.existsSync(temp)) fs.unlinkSync(temp);
    }
  }

  const totalSaved = totalOriginal - totalCompressed;
  const totalPct = ((totalSaved / totalOriginal) * 100).toFixed(1);
  console.log(`\n[Icons Total] ${totalOriginal} → ${totalCompressed} (saved ${totalSaved} bytes, ${totalPct}%)`);
}

async function main() {
  console.log('=== Image Compression ===\n');
  await compressTitle();
  console.log('');
  await compressIcons();
  console.log('\n=== Done ===');
}

main().catch(err => {
  console.error('Compression failed:', err);
  process.exit(1);
});
