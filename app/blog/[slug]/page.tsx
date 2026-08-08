import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { RichPortableText } from "@/components/RichPortableText";
import { getBlog, getBlogSlugs } from "@/lib/blogs";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
const readableDate = (date?: string) => date ? new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date}T00:00:00`)) : "";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) return { title: "Article" };
  const title = blog.seo?.metaTitle?.trim() || blog.title;
  const description = blog.seo?.metaDescription?.trim() || blog.excerpt;
  const image = blog.seo?.image || blog.image;
  const url = `${site.url}/blog/${blog.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "article",
      publishedTime: blog.date || undefined,
      authors: [site.name],
      tags: blog.category ? [blog.category] : undefined,
      images: image ? [{ url: image, alt: blog.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export async function generateStaticParams() { return getBlogSlugs(); }

export default async function BlogDetailsPage({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();

  return <main className="min-h-screen bg-[#f4f7f8] text-[#25292a]">
    <header className="relative overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-40">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,195,109,.42),transparent_28%),radial-gradient(circle_at_72%_5%,rgba(180,166,255,.32),transparent_30%),radial-gradient(circle_at_94%_70%,rgba(158,215,255,.5),transparent_34%)]"/>
      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-[#59666b] transition hover:text-[#25292a]"><ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1"/>All insights</Link>
        <div className="mt-12 max-w-[960px]">
          <p className="micro-label">{blog.category || "Insight"}</p>
          <h1 className="mt-6 max-w-[900px] text-[clamp(2.15rem,3.2vw,3.35rem)] font-medium leading-[1.08] tracking-[-.032em]">{blog.title}</h1>
          {blog.excerpt && <p className="mt-7 max-w-3xl text-lg leading-8 text-[#566164]">{blog.excerpt}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#667174]"><span className="flex items-center gap-2"><Calendar size={15}/>{readableDate(blog.date)}</span>{blog.readTime&&<span className="flex items-center gap-2"><Clock size={15}/>{blog.readTime}</span>}<span className="hidden h-5 w-px bg-[#aeb6b8] sm:block"/><span>By Sterling Web Lab</span></div>
        </div>
      </div>
    </header>

    {blog.image && <div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="relative aspect-[1.75] overflow-hidden rounded-[1.5rem] bg-[#dfe5e6] shadow-[0_22px_55px_rgba(42,51,53,.1)]"><Image src={blog.image} alt={blog.title} fill priority sizes="(min-width:1280px) 1200px, 100vw" className="object-cover"/></div></div>}

    <article className="mx-auto grid max-w-[1120px] gap-12 px-6 py-16 lg:grid-cols-[220px_1fr] lg:px-10 lg:py-24">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="micro-label">A useful read for</p>
        <p className="mt-4 text-sm leading-6 text-[#616b6d]">Business owners and teams making decisions about their website, positioning, and digital experience.</p>
        <div className="mt-8 h-1 w-12 rounded-full bg-[#ffc36d]"/>
      </aside>
      <RichPortableText value={blog.mainContent} className="max-w-[760px]"/>
    </article>

    <section className="bg-[#2d3536] py-16 text-white lg:py-20">
      <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 px-6 md:flex-row md:items-end lg:px-10"><div><p className="micro-label !text-white/50">Turn the idea into action</p><h2 className="mt-5 max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">A clearer website starts with a clearer diagnosis.</h2></div><Link href="/contact" className="cta-primary group inline-flex w-fit items-center gap-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#25292a] hover:bg-[#ffc36d]">Start a conversation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link></div>
    </section>
  </main>;
}
