const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if the scripts directory exists, create it if not
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

console.log('Building CV CSS...');

try {
  // Run Tailwind CLI to build the CSS
  execSync('npx tailwindcss -i ./src/input.css -o ./dist/cv-style.css --minify', { 
    stdio: 'inherit' 
  });
  
  console.log('CV CSS built successfully as cv-style.css!');
} catch (error) {
  console.error('Error building CV CSS:', error);
  process.exit(1);
} 