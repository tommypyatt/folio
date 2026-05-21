# Folio

A minimalist writing app for the browser. No distractions, no accounts — just a warm dark canvas and your words.

## Features

- Distraction-free textarea with a warm dark theme
- Open and save `.txt` files directly from the browser via the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
- Live word and character count
- Keyboard shortcuts: `Ctrl+O` to open, `Ctrl+S` to save
- Gold save flash animation on write
- Safari/Firefox notice for unsupported browsers

## Requirements

Chrome or Edge (the File System Access API is not supported in Safari or Firefox).

## Development

```bash
npm install
npm run dev    # Tailwind watch + local dev server
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

Outputs to `docs/` — served via GitHub Pages, or open `docs/index.html` directly.

## Stack

- [Alpine.js](https://alpinejs.dev/) — reactivity
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) + [Courier Prime](https://fonts.google.com/specimen/Courier+Prime) — typography
- File System Access API — native file read/write
