import type { MetadataRoute } from "next";
import { site } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/biographie", "/spectacles", "/news", "/music", "/appearances", "/contact", "/privacy-policy"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
