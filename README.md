# Inna Campo - Portfolio Website

A high-performance, static portfolio website designed to showcase innovations in Agentic AI, Bioinformatics, and Neuroendocrine Health.

## Technical Stack Report

This project utilizes a modern **Build-Free Stack**, prioritizing performance, longevity, and simplicity. It runs natively in the browser without the need for complex bundlers (Webpack/Vite) or package managers for deployment.

### Core Architecture
-   **Runtime**: Browser Native (ES6+ Modules).
-   **Architecture**: Static Site (HTML/CSS/JS).
-   **Dependencies**: Zero build-time dependencies. All libraries are loaded via CDN.

### Technologies
| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Structure** | **HTML5** | Semantic, accessible markup. |
| **Styling** | **Tailwind CSS** (v3.4) | Utility-first styling loaded via CDN script for rapid development and consistency. |
| **Logic** | **Vanilla JavaScript** | efficient DOM manipulation without framework overhead. Data is separated in `data.js`. |
| **Icons** | **Lucide Icons** | Beautiful, consistent, and lightweight SVG icons loaded from unpkg. |
| **Typography** | **Google Fonts** | Inter and Roboto families for clean, scientific aesthetics. |
| **Forms** | **Formspree** | Serverless form handling for the contact section (AJAX submission). |

## Local Development

Since this is a static website, **do not use `npm run dev`**. There is no `package.json` or `node_modules`.

To run the site locally, you simply need to serve the directory files.

### Using Python (Recommended)
If you have Python installed (Mac/Linux usually do):
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.


## Project Structure

-   **`index.html`**: The main entry point containing the document structure and layout.
-   **`main.js`**: Contains all application logic, including dynamic rendering, event listeners (theme toggle, scroll reveal), and form handling.
-   **`data.js`**: A centralized data store `window.APP_DATA` containing purely content (Profile, Projects, Publications, etc.). This allows for easy content updates without touching the logic.
-   **`style.css` / `<style>`**: Custom animations and overrides (DNA loader, organic background) are located in the `<head>` of `index.html`.

## Deployment

This site is ready for deployment on any static hosting provider (GitHub Pages, Vercel, Netlify) by simply serving the root directory.
