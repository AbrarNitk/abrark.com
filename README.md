# Static Site with Tailwind CSS and Markdown

This is a static site generator that uses Handlebars templates, Tailwind CSS, and Markdown content.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How It Works

The site is built using a custom static site generator with the following components:

- **Handlebars Templates** - For creating reusable page layouts
- **Tailwind CSS** - For styling
- **Markdown** - For content
- **JSON Data** - For page configuration

### File Structure

```
.
├── dist/                # Generated output files
│   ├── css/             # Compiled CSS
│   ├── images/          # Images and other assets
│   └── *.html           # Generated HTML pages
├── scripts/             # Build scripts
├── src/
│   ├── content/         # Markdown content files
│   ├── data/            # JSON data files
│   ├── static/          # Static assets
│   │   ├── css/         # CSS files (including compiled Tailwind)
│   │   ├── images/      # Image files
│   │   └── js/          # JavaScript files
│   ├── templates/       # Handlebars templates
│   │   └── partials/    # Template partials
│   └── input.css        # Tailwind input CSS
├── package.json
└── README.md
```

### Creating a New Page

1. **Create a Markdown content file** in `src/content/`
   ```markdown
   # Page Title
   
   Content goes here...
   ```

2. **Create a JSON data file** in `src/data/`
   ```json
   {
     "sections": [...],
     "subsections": [...],
     "toc": {...},
     "content_file": "your-markdown-file.md"
   }
   ```

3. **Create a Handlebars template** in `src/templates/`
   ```handlebars
   <html>
     <!-- Template markup -->
     <article>{{{ content }}}</article>
   </html>
   ```

### Build Commands

- `npm run build:css` - Build CSS only (outputs to src/static/css/styles.css)
- `npm run build:pages` - Build HTML pages only
- `npm run build` - Build both CSS and HTML
- `npm run dev` - Run development server with hot reload

## Customization

### CSS

Edit the `src/input.css` file to customize the Tailwind configuration. The compiled CSS will be placed in `src/static/css/styles.css`.

### Adding Static Files

Place all static files (images, additional CSS, JavaScript) in the appropriate subdirectory under `src/static/`. These files will be copied to the `dist` directory during the build process.

### Templates

Edit the templates in `src/templates/` to customize the page layouts.

### Content

Edit the markdown files in `src/content/` to update the content.

## License

MIT
