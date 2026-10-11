import type { MetadataRoute } from "next";
import { site, projects } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: project.isFlagship ? "weekly" : "monthly",
    priority: project.isFlagship ? 0.9 : 0.8
  }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${site.url}/academic`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...projectRoutes
  ];
}
