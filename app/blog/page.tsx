import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const blogs = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt:
      "From AI-generated layouts to immersive 3D experiences, here is what the next year holds for digital design.",
    category: "Design",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Optimizing Core Web Vitals for Better SEO",
    excerpt:
      "Performance isn't just about speed; it's about visibility. Learn how to tune your site for Google's latest metrics.",
    category: "Development",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Why Minimalist Design Converts Better",
    excerpt:
      "Less is more. Discover the psychology behind why simple interfaces lead to higher user engagement.",
    category: "UX/UI",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Building a Design System from Scratch",
    excerpt:
      "A step-by-step guide to creating a scalable design language for your product team.",
    category: "Product",
    date: "Aug 30, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const BlogPage = () => {
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
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
