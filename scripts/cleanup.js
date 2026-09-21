const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Create docs dir if not exists
const docsDir = path.join(ROOT, 'docs');
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

// Move miband images to docs/
const moves = [
  ['src/common/miband9.png', 'docs/miband9.png'],
  ['src/common/miband10.png', 'docs/miband10.png'],
];
for (const [from, to] of moves) {
  const srcPath = path.join(ROOT, from);
  const dstPath = path.join(ROOT, to);
  if (fs.existsSync(srcPath)) {
    fs.renameSync(srcPath, dstPath);
    console.log('MOVE:', from, '->', to);
  }
}

// Delete unused image files
const deleteFiles = [
  'src/common/image/icons/grey-che.png',
  'src/common/image/icons/grey-xiao.png',
];
for (const f of deleteFiles) {
  const fp = path.join(ROOT, f);
  if (fs.existsSync(fp)) {
    fs.unlinkSync(fp);
    console.log('DEL:', f);
  }
}

// Delete unused component dirs
const deleteDirs = [
  'src/components/IconDisplay',
  'src/components/GameModal',
];
for (const d of deleteDirs) {
  const dp = path.join(ROOT, d);
  if (fs.existsSync(dp)) {
    const files = fs.readdirSync(dp);
    for (const f of files) fs.unlinkSync(path.join(dp, f));
    fs.rmdirSync(dp);
    console.log('DEL DIR:', d);
  }
}

// Delete unused pages
const deletePages = [
  'src/pages/levels/oldlevel01.ux',
  'src/pages/level_select/detail.ux',
];
for (const f of deletePages) {
  const fp = path.join(ROOT, f);
  if (fs.existsSync(fp)) {
    fs.unlinkSync(fp);
    console.log('DEL:', f);
  }
}

console.log('\nCleanup complete!');
