import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const SITE_URL = "https://pawelkrauch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((p) => !p.placeholder)
      .map((p) => ({
        url: `${SITE_URL}/work/${p.slug}`,
        changeFrequency: "yearly" as const,
        priority: p.featured ? 0.8 : 0.6,
      })),
  ];
}
