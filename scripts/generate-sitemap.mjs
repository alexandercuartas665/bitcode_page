// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';

const publicPages = [
  '', // Representa la página de inicio
  'services',
  'products',
  'about',
  'privacy-policy',
];
const baseUrl = 'https://bitcode.com.co';

const sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publicPages
    .map((page) => {
      const route = page === '' ? '' : `/${page}`;
      return `
        <url>
          <loc>${`${baseUrl}${route}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

// Escribe el sitemap en la carpeta de salida 'out'
const outDirPath = path.resolve(process.cwd(), 'out');
if (!fs.existsSync(outDirPath)) {
  fs.mkdirSync(outDirPath);
}
fs.writeFileSync(path.join(outDirPath, 'sitemap.xml'), sitemap.trim());

console.log('sitemap.xml generated successfully!');