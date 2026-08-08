import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughtful notes on websites, clarity, and growth.",
  alternates: { canonical: "/blog" },
};
const colors = ["#ffc36d", "#9ed7ff", "#b4a6ff", "#d9f0cf"];
const readableDate = (date?: string) =>
  date
    ? new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
        new Date(`${date}T00:00:00`),
      )
    : "";

export default async function BlogPage() {
  const blogs = await getBlogs();
  const [featured, ...posts] = blogs;

  return (
    <main className="min-h-screen bg-[#f4f7f8] text-[#25292a]">
      <section className="relative overflow-hidden pb-20 pt-36 lg:pb-24 lg:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(255,195,109,.48),transparent_28%),radial-gradient(circle_at_56%_5%,rgba(180,166,255,.35),transparent_30%),radial-gradient(circle_at_92%_45%,rgba(158,215,255,.5),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[#59666b] transition hover:text-[#25292a]"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
            <div>
              <p className="micro-label">Insights</p>
              <h1 className="mt-6 max-w-3xl text-[clamp(3rem,4.5vw,4.85rem)] font-medium leading-[1] tracking-[-.042em]">
                Useful thinking.
                <br />
                <span className="text-[#667376]">Clearly explained.</span>
              </h1>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-[#566164]">
                Practical notes on clearer positioning, stronger websites, useful technology, and the decisions that
                help digital work perform.
              </p>
              <div className="mt-7 flex items-center gap-3 text-xs text-[#657073]">
                <span className="h-2 w-2 rounded-full bg-[#83a176]" />
                Written for people building real businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[1.6rem] bg-[#eef2f3] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(42,51,53,.12)] lg:grid-cols-[1.15fr_.85fr]"
            >
              <div className="relative min-h-[330px] overflow-hidden lg:min-h-[500px]">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width:1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035]"
                  />
                ) : (
                  <div className="h-full bg-[#dbe3e5]" />
                )}
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[.65rem] font-bold uppercase tracking-[.12em] backdrop-blur">
                  Featured insight
                </span>
              </div>
              <article className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="micro-label">{featured.category || "Insight"}</p>
                  <h2 className="mt-6 max-w-xl text-[clamp(1.65rem,2.2vw,2.35rem)] font-medium leading-[1.08] tracking-[-.035em]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-7 text-[#5d6769]">{featured.excerpt}</p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-[#687275]">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {readableDate(featured.date)}
                  </span>
                  {featured.readTime && (
                    <span className="flex items-center gap-2">
                      <Clock size={14} />
                      {featured.readTime}
                    </span>
                  )}
                  <span className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-[#2d3536] text-white transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </article>
            </Link>
          )}

          {posts.length > 0 && (
            <div className="mt-16">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="micro-label">More from the agency</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-.04em]">Latest articles</h2>
                </div>
                <span className="hidden text-xs text-[#6d7678] sm:block">
                  {blogs.length.toString().padStart(2, "0")} published notes
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {posts.map((post, index) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    className="group overflow-hidden rounded-[1.35rem] bg-[#f0f3f4] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(42,51,53,.1)]"
                  >
                    <article>
                      <div className="relative aspect-[1.65] overflow-hidden">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(min-width:768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="h-full" style={{ backgroundColor: colors[index % colors.length] }} />
                        )}
                        <span
                          className="absolute bottom-0 left-0 h-1 w-0 transition-[width] duration-700 group-hover:w-full"
                          style={{ backgroundColor: colors[index % colors.length] }}
                        />
                      </div>
                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-3 text-[.68rem] uppercase tracking-[.12em] text-[#697376]">
                          <span>{post.category || "Insight"}</span>
                          <span className="h-1 w-1 rounded-full bg-[#9aa3a5]" />
                          <span>{readableDate(post.date)}</span>
                        </div>
                        <h3 className="mt-4 max-w-xl text-2xl font-medium leading-[1.08] tracking-[-.035em]">
                          {post.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#606a6c]">{post.excerpt}</p>
                        <div className="mt-6 flex items-center justify-between text-sm font-semibold">
                          <span>Read article</span>
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
