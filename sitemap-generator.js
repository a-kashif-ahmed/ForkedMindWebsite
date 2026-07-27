const fs = require('fs');

// 1. Set your Vercel URL here
const BASE_URL = 'https://forked-mind.vercel.app';

// 2. List all the paths you want Google to find
const pages = [
  "/",
  "/arena",
  "/about",
  "/community",
  "/download",

];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${BASE_URL}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

// 3. Write it to the public folder so Vercel can host it
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap ');