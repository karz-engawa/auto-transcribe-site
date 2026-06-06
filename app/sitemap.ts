import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.自動採譜.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}`, lastModified: new Date() },
  { url: `${BASE_URL}/tool`, lastModified: new Date() },
  { url: `${BASE_URL}/articles`, lastModified: new Date() },
  { url: `${BASE_URL}/about`, lastModified: new Date() },
  { url: `${BASE_URL}/privacy`, lastModified: new Date() },
  { url: `${BASE_URL}/terms`, lastModified: new Date() },
  { url: `${BASE_URL}/contact`, lastModified: new Date() },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articlesDir = path.join(process.cwd(), "app", "articles");
  const slugs = fs
    .readdirSync(articlesDir)
    .filter((name) =>
      fs.statSync(path.join(articlesDir, name)).isDirectory()
    );

  const articleRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
