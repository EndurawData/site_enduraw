const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html for GitHub Pages SPA routing
const buildDir = path.join(__dirname, 'build');
const indexPath = path.join(buildDir, 'index.html');
const notFoundPath = path.join(buildDir, '404.html');

fs.copyFileSync(indexPath, notFoundPath);
console.log('✓ Copied index.html to 404.html for GitHub Pages routing');
