import { client } from "@/lib/sanity";
import { Blog } from "@/types";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read our latest blog posts on design, technology, and more.",
};

async function getBlogs() {
  const query = `*[_type == "blog"]{
    "id": _id,
    title,
    excerpt,
    category,
    date,
    readTime,
    "image": image.asset->url,
    "slug": slug.current,
    seo
  }`;
  const data = await client.fetch(query, {}, { next: { tags: ["blog"] } });
  return data;
}

const BlogPage = async () => {
  const blogs: Blog[] = await getBlogs();
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">
            Insights & News
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300">
            Thoughts on design, technology, and the future of digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {blogs.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      fill
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-display font-bold group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-brand-accent font-medium text-sm mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read Article <ArrowUpRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
