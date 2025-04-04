# HTML Basics

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements.

![HTML5 Structure Diagram](https://avatars.githubusercontent.com/u/17473503?v=4)
*HTML5 semantic structure diagram showing how different elements are typically organized on a webpage*

## Basic HTML Document Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <header>
        <h1>This is a heading</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
        <img src="image.jpg" alt="Description of image">
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>
</html>
```

## Common HTML Elements

Here's a comprehensive list of HTML elements:

- **Heading Elements**
  - `<h1>` - Main heading
  - `<h2>` - Section heading
  - `<h3>` - Sub-section heading
  - `<h4>`, `<h5>`, `<h6>` - Lower level headings

- **Text Elements**
  - `<p>` - Paragraphs
  - `<span>` - Inline container
  - `<strong>` or `<b>` - Bold text
  - `<em>` or `<i>` - Italic text
  - `<mark>` - Highlighted text
  - `<del>` - Deleted text
  - `<ins>` - Inserted text
  - `<sub>` - Subscript
  - `<sup>` - Superscript

- **Link Elements**
  - `<a href="https://example.com">` - External link
  - `<a href="/page">` - Internal link
  - `<a href="#section">` - Anchor link
  - `<a href="mailto:user@example.com">` - Email link

- **Media Elements**
  - `<img>` - Images
  - `<video>` - Video content
  - `<audio>` - Audio content
  - `<canvas>` - Drawing element
  - `<svg>` - Scalable Vector Graphics

- **Container Elements**
  - `<div>` - Generic block container
  - `<section>` - Section of content
  - `<article>` - Independent content
  - `<aside>` - Sidebar content
  - `<header>` - Header content
  - `<footer>` - Footer content
  - `<nav>` - Navigation menu

> HTML is the backbone of every website. Understanding HTML is essential for web development. Without HTML, there would be no web pages, and the internet as we know it wouldn't exist.

## Nested Lists Example

Here's how you can nest different types of lists:

1. First ordered item
2. Second ordered item
   * Unordered sub-list item
   * Another unordered sub-list item
     1. Ordered sub-sub-list
     2. Another ordered sub-sub-list
3. Third ordered item
   - [ ] Unchecked task
   - [x] Checked task

## JSON Example

Here's an example of a JSON configuration:

```json
{
  "name": "HTML Tutorial",
  "author": {
    "firstName": "John",
    "lastName": "Doe",
    "credentials": ["PhD", "Web Developer"]
  },
  "topics": [
    "Basic Structure",
    "Elements",
    "Attributes",
    "Forms",
    "Semantics"
  ],
  "difficulty": 1,
  "isPublished": true,
  "lastUpdated": "2023-10-15T14:30:00Z"
}
```

## Advanced Table Examples

### Simple Table

| Tag | Description | Category |
|-----|-------------|----------|
| `<html>` | Root element | Structure |
| `<head>` | Contains meta information | Structure |
| `<body>` | Contains the visible content | Structure |

### Table with Alignment

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|-------------:|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Long text that spans multiple words | Short text | 123.45 |
| Code: `<div>` | **Bold text** | *Italic text* |

### Nested Elements in Tables

| Feature | Syntax | Example |
|---------|--------|---------|
| Links | `<a href="url">text</a>` | [HTML Tutorial](https://www.example.com) |
| Images | `<img src="url" alt="text">` | ![HTML5 Logo](https://www.example.com/html5.png) |
| Code blocks | `<pre><code>...</code></pre>` | `function hello() { return "world"; }` |

## Formatting Examples

**Bold text** and *italic text* can be combined to create ***bold and italic text***.

Superscript: E=mc^2^

Subscript: H~2~O

~~Strikethrough~~ text

## Horizontal Rule

Above the line

---

Below the line

## Definition Lists

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for styling web pages.</dd>
</dl>

## Block Quotes with Nested Content

> This is a blockquote
> 
> > This is a nested blockquote
> >
> > * With a list inside
> > * And another item
>
> Back to the first level

## Links with Titles

[HTML5 Specification](https://html.spec.whatwg.org/ "HTML Living Standard")

## Image with Alt Text and Title

![HTML5 Logo](https://via.placeholder.com/150 "HTML5 Logo Example")

## Footnotes

Here's a statement with a footnote[^1].

[^1]: This is the footnote content.

## Table of Contents

- [HTML Basics](#html-basics)
  - [Basic HTML Document Structure](#basic-html-document-structure)
  - [Common HTML Elements](#common-html-elements)
  - [Nested Lists Example](#nested-lists-example)
  - [JSON Example](#json-example)
  - [Advanced Table Examples](#advanced-table-examples)

---

*This document demonstrates various Markdown syntax features for testing rendering capabilities.* 