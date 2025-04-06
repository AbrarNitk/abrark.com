const fs = require('fs-extra');
const path = require('path');

// Configuration
const config = {
  srcDir: path.join(__dirname, '../src'),
  outputDir: path.join(__dirname, '../dist'),
};

console.log('Building CV page...');

try {
  // Copy CV HTML from src to dist
  const srcHtmlPath = path.join(config.srcDir, 'cv.html');
  const distHtmlPath = path.join(config.outputDir, 'cv.html');
  
  // Read the HTML content
  let htmlContent = fs.readFileSync(srcHtmlPath, 'utf8');
  
  // Replace output.css reference with cv-style.css
  htmlContent = htmlContent.replace(
    /<link href="\.\/output\.css" rel="stylesheet">/,
    '<link href="./cv-style.css" rel="stylesheet">'
  );
  
  // Write updated HTML to dist
  fs.writeFileSync(distHtmlPath, htmlContent);
  
  console.log('CV HTML copied to dist directory with updated CSS reference');
  
  // Ensure cv-style.css exists in dist directory (should be built by build-cv-css.js)
  const cssPath = path.join(config.outputDir, 'cv-style.css');
  if (!fs.existsSync(cssPath)) {
    console.warn('Warning: cv-style.css not found. Run npm run build:cv-css first.');
  } else {
    console.log('CV CSS file found in dist directory');
  }
  
  console.log('CV page build complete.');
} catch (error) {
  console.error('Error building CV page:', error);
  process.exit(1);
} 