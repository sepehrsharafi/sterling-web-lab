import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blogs";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

// Generate this route during `next build`, alongside the statically generated
// blog pages. A new deployment therefore always publishes a sitemap containing
// the posts that exist in Sanity at build time.
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, priority: 1 },
    { url: `${site.url}/about`, priority: 0.7 },
    { url: `${site.url}/services`, priority: 0.9 },
    { url: `${site.url}/agency`, priority: 0.7 },
    { url: `${site.url}/blog`, priority: 0.8 },
    { url: `${site.url}/contact`, priority: 0.7 },
    { url: `${site.url}/site-map`, priority: 0.4 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    priority: 0.8,
  }));

  // Use the same source as the blog listing and article routes. This keeps the
  // sitemap in sync with published CMS posts, and includes the built-in posts
  // when the CMS is temporarily unavailable during a build.
  const blogs = await getBlogs();

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${site.url}/blog/${blog.slug}`,
    lastModified: blog.date ? new Date(`${blog.date}T00:00:00`) : undefined,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
