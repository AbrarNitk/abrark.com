# CSS Fundamentals

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Basic CSS Syntax

```css
selector {
  property: value;
  property: value;
}
```

Example: CSS

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

## Different Ways to Apply CSS

### Inline CSS
```html
<p style="color: red; font-size: 20px;">This is a paragraph with inline CSS.</p>
```

### Internal CSS
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

### External CSS
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

## Common CSS Properties

| Property | Description |
|----------|-------------|
| `color` | Text color |
| `background-color` | Background color |
| `font-size` | Size of the font |
| `margin` | Space outside an element |
| `padding` | Space inside an element |

> CSS is what makes the web beautiful. Without CSS, websites would be plain text documents with minimal formatting. 

.copy-button::before {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
} 

padding-top: 40px !important; /* Add space at top for the button */ 