import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
    }
  ];
}
