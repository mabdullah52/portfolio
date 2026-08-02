import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
