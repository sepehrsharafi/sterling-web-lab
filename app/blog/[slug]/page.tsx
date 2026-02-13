import { client } from "@/lib/sanity";
import { Blog } from "@/types";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog: Blog = await getBlog(slug);
  if (!blog) {
    return notFound();
  }

  const image = blog.image ? [{ url: blog.image, width: 1200, height: 630 }] : [];
  const twitterImages = blog.image ? [blog.image] : [];

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: twitterImages,
    },
  };
}

async function getBlog(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"]{
    "id": _id,
    title,
    excerpt,
    category,
    date,
    readTime,
    "image": image.asset->url,
    "slug": slug.current,
    mainContent
  }[0]`;
  const data = await client.fetch(query, {}, { next: { tags: ["blog"] } });
  return data;
}

export async function generateStaticParams() {
  const query = `*[_type == "blog" && defined(slug.current)]{
    "slug": slug.current
  }`;
  const data = await client.fetch<{ slug: string }[]>(query);
  return data.map((item) => ({
    slug: item.slug,
  }));
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blog: Blog = await getBlog(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          All Posts
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold my-4">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden my-8">
            {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              fill
            />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>

          <div className="prose prose-invert prose-lg max-w-none mx-auto">
            <PortableText value={blog.mainContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;