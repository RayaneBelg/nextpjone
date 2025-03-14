// src/app/sitemap.js
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://www.rosalyon.fr"; // URL de ton site

  const pages = [
    "", // Accueil
    "menu",
    "events",
    "contact",
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach((page) => {
    sitemap += `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
      </url>
    `;
  });

  sitemap += `</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
