import type { MetadataRoute } from "next";
import { CONTENT_TYPES } from "@/config/navigation";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { absoluteLanguageAlternates, absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static paths that always exist
  const staticPaths = [
    "/",
    ...CONTENT_TYPES.map((contentType) => `/${contentType}`),
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: absoluteUrl(path, locale),
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : CONTENT_TYPES.some((contentType) => path === `/${contentType}`) ? 0.8 : 0.6,
      alternates: {
        languages: absoluteLanguageAlternates(path),
      },
    })),
  );
}
