const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const chokidar = require('chokidar');

// Configuration
const config = {
  templatesDir: path.join(__dirname, '../src/templates'),
  outputDir: path.join(__dirname, '../dist'),
  dataDir: path.join(__dirname, '../src/data'),
  staticDir: path.join(__dirname, '../src/static'),
};

// Ensure output directory exists
fs.ensureDirSync(config.outputDir);

// Copy static files
async function copyStaticFiles() {
  try {
    await fs.copy(config.staticDir, config.outputDir, { overwrite: true });
    console.log('Static files copied successfully');
  } catch (error) {
    console.warn('No static files to copy or error copying static files:', error);
  }
}

// Register Handlebars helpers
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});

// Load template data
function loadTemplateData(templateName) {
  const dataPath = path.join(config.dataDir, `${templateName}.json`);
  try {
    return fs.readJsonSync(dataPath);
  } catch (error) {
    console.warn(`No data file found for ${templateName}, using empty data`);
    return {};
  }
}

// Compile a single template
async function compileTemplate(templatePath) {
  const templateName = path.basename(templatePath, '.handlebars');
  const templateContent = await fs.readFile(templatePath, 'utf8');
  const template = Handlebars.compile(templateContent);
  
  // Load template data
  const data = loadTemplateData(templateName);
  
  // Compile the template with data
  const html = template(data);
  
  // Write the output file
  const outputPath = path.join(config.outputDir, `${templateName}.html`);
  await fs.writeFile(outputPath, html, 'utf8');
  console.log(`Built ${outputPath}`);
}

// Build all templates
async function buildAll() {
  await copyStaticFiles();
  const templates = await fs.readdir(config.templatesDir);
  for (const template of templates) {
    if (template.endsWith('.handlebars')) {
      await compileTemplate(path.join(config.templatesDir, template));
    }
  }
}

// Watch mode
function watch() {
  console.log('Watching for template changes...');
  const watcher = chokidar.watch([
    path.join(config.templatesDir, '**/*.handlebars'),
    path.join(config.dataDir, '**/*.json'),
    path.join(config.staticDir, '**/*')
  ]);
  
  watcher.on('change', async (filePath) => {
    console.log(`File ${filePath} has changed`);
    if (filePath.endsWith('.handlebars')) {
      await compileTemplate(filePath);
    } else if (filePath.endsWith('.json')) {
      // Rebuild all templates when data changes
      await buildAll();
    } else if (filePath.startsWith(config.staticDir)) {
      // Copy static files when they change
      await copyStaticFiles();
    }
  });
}

// Main execution
if (process.argv.includes('--watch')) {
  watch();
} else {
  buildAll().catch(console.error);
} 