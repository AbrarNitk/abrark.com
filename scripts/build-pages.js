const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const chokidar = require('chokidar');
const { marked } = require('marked');

// Configuration
const config = {
  templatesDir: path.join(__dirname, '../src/templates'),
  outputDir: path.join(__dirname, '../dist'),
  dataDir: path.join(__dirname, '../src/data'),
  staticDir: path.join(__dirname, '../src/static'),
  contentDir: path.join(__dirname, '../src/content'),
  partialsDir: path.join(__dirname, '../src/templates/partials'),
  srcDir: path.join(__dirname, '../src'),
};

// Ensure output directory exists
fs.ensureDirSync(config.outputDir);
fs.ensureDirSync(config.partialsDir);

// Copy static files
async function copyStaticFiles() {
  try {
    // Create static directory structure in dist
    await fs.copy(config.staticDir, path.join(config.outputDir), { overwrite: true });
    console.log('Static files copied successfully');
  } catch (error) {
    console.warn('Error copying static files:', error);
  }
}

// Copy HTML files from src root to dist
async function copyRootHtmlFiles() {
  try {
    // Copy index.html and cv.html from src to dist
    const htmlFiles = ['index.html', 'cv.html'];
    for (const file of htmlFiles) {
      const srcPath = path.join(config.srcDir, file);
      const destPath = path.join(config.outputDir, file);
      
      if (await fs.pathExists(srcPath)) {
        await fs.copy(srcPath, destPath, { overwrite: true });
        console.log(`Copied ${file} to dist folder`);
      } else {
        console.warn(`${file} not found in src folder`);
      }
    }
  } catch (error) {
    console.warn('Error copying root HTML files:', error);
  }
}

// Register Handlebars partials
async function registerPartials() {
  // First, register templates as partials so they can be included in other templates
  const templates = await fs.readdir(config.templatesDir);
  for (const template of templates) {
    if (template.endsWith('.handlebars')) {
      const templateName = path.basename(template, '.handlebars');
      const templateContent = await fs.readFile(path.join(config.templatesDir, template), 'utf8');
      Handlebars.registerPartial(templateName, templateContent);
    }
  }
  
  // Then register dedicated partials if they exist
  try {
    const partials = await fs.readdir(config.partialsDir);
    for (const partial of partials) {
      if (partial.endsWith('.handlebars')) {
        const partialName = path.basename(partial, '.handlebars');
        const partialContent = await fs.readFile(path.join(config.partialsDir, partial), 'utf8');
        Handlebars.registerPartial(partialName, partialContent);
      }
    }
  } catch (error) {
    console.warn('No dedicated partials folder found or other error:', error.message);
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

// Load markdown content
async function loadMarkdownContent(contentPath) {
  try {
    const content = await fs.readFile(contentPath, 'utf8');
    return marked.parse(content);
  } catch (error) {
    console.warn(`No content file found at ${contentPath}, using empty content`);
    return '';
  }
}

// Compile a single template
async function compileTemplate(templatePath) {
  const templateName = path.basename(templatePath, '.handlebars');
  const templateContent = await fs.readFile(templatePath, 'utf8');
  const template = Handlebars.compile(templateContent);
  
  // Load template data
  const data = loadTemplateData(templateName);
  
  // Load markdown content if specified in data
  if (data.content_file) {
    const contentPath = path.join(config.contentDir, data.content_file);
    data.content = await loadMarkdownContent(contentPath);
  }
  
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
  await copyRootHtmlFiles(); // Copy index.html and cv.html
  await registerPartials();
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
    path.join(config.staticDir, '**/*'),
    path.join(config.contentDir, '**/*.md'),
    path.join(config.srcDir, 'index.html'),
    path.join(config.srcDir, 'cv.html')
  ]);
  
  watcher.on('change', async (filePath) => {
    console.log(`File ${filePath} has changed`);
    // Re-register partials when any template changes
    await registerPartials();
    
    if (filePath.endsWith('.handlebars')) {
      await compileTemplate(filePath);
    } else if (filePath.endsWith('.json')) {
      // Rebuild all templates when data changes
      await buildAll();
    } else if (filePath.startsWith(config.staticDir)) {
      // Copy static files when they change
      await copyStaticFiles();
    } else if (filePath.endsWith('.md')) {
      // Rebuild all templates when content changes
      await buildAll();
    } else if (filePath.endsWith('index.html') || filePath.endsWith('cv.html')) {
      // Copy HTML files when they change
      await copyRootHtmlFiles();
    }
  });
}

// Main execution
if (process.argv.includes('--watch')) {
  watch();
} else {
  buildAll().catch(console.error);
} 