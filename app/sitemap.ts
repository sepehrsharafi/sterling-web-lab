import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { site } from "@/lib/site";

type BlogSitemapEntry = {
  slug: string;
  updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/agency`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${site.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogs = await client.fetch<BlogSitemapEntry[]>(
    `*[_type == "blog" && defined(slug.current)]{
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`,
    {},
    { next: { tags: ["blog"] } }
  );

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${site.url}/blog/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
