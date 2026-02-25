import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { site } from "@/lib/site";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";

type BlogSitemapEntry = {
  title: string;
  slug: string;
};

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse a complete list of Sterling Web Lab pages and posts.",
  alternates: {
    canonical: "/site-map",
  },
};

async function getBlogSlugs() {
  const query = `*[_type == "blog" && defined(slug.current)]{
    "slug": slug.current,
    title
  }`;
  return client.fetch<BlogSitemapEntry[]>(query, {}, { next: { tags: ["blog"] } });
}

const SitemapPage = async () => {
  const blogs = await getBlogSlugs();

  return (
    <main className="pt-32 pb-20 min-h-screen bg-brand-black">
      <SeoBreadcrumbs
        items={[
          { name: "Home", url: site.url },
          { name: "Sitemap", url: `${site.url}/site-map` },
        ]}
      />
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Sitemap
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A structured list of Sterling Web Lab pages for quick navigation.
          </p>
        </header>

        <nav aria-label="HTML sitemap">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link className="hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/about">
                  About Sterling Web Lab
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/agency">
                  Agency
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
            {blogs.length === 0 ? (
              <p className="text-gray-500">No blog posts available.</p>
            ) : (
              <ul className="space-y-3 text-gray-300">
                {blogs.map((blog) => (
                  <li key={blog.slug}>
                    <Link
                      className="hover:text-white"
                      href={`/blog/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </nav>
      </div>
    </main>
  );
};

export default SitemapPage;
