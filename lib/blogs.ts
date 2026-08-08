import type { PortableTextBlock } from "@portabletext/types";
import type { Blog } from "@/types";
import { client } from "@/lib/sanity";

const block = (key: string, text: string, style: "normal" | "h2" | "h3" = "normal"): PortableTextBlock => ({
  _type: "block", _key: key, style, markDefs: [], children: [{ _type: "span", _key: `${key}-span`, text, marks: [] }],
});

export const fallbackBlogs: Blog[] = [
  {
    id: "fallback-website-cost", slug: "the-real-cost-of-not-having-a-website-and-why-it-s-hurting-your-business-more-than-you-think",
    title: "The Real Cost of NOT Having a Website (And Why It's Hurting Your Business More Than You Think)",
    excerpt: "The quiet cost of being difficult to find, verify, and trust online—and what a useful website should actually do for a local business.",
    category: "Business Growth", date: "2026-02-27", readTime: "5 min",
    image: "https://cdn.sanity.io/images/9dkoa55s/production/4498d2fa8b758b581154b05700f32c2103109e22-5311x2987.jpg",
    mainContent: [
      block("a1", "Let's be real for a second. If someone hears about your business—from a friend, a flyer, or social media—the first thing they are likely to do is look you up. If they cannot find you, many will simply move on to someone they can verify."),
      block("a2", "The quiet cost of being absent", "h2"),
      block("a3", "The cost of not having a website rarely appears as a line item. It shows up as referrals that go cold, searches you never appear in, and prospects who choose a competitor that feels easier to trust."),
      block("a4", "Word of mouth still needs somewhere to land", "h2"),
      block("a5", "Referrals are valuable, but even referred prospects want to check reviews, understand the offer, and get a feel for the business before making contact. Word of mouth creates curiosity; a good website turns that curiosity into confidence."),
      block("a6", "What you are actually losing", "h2"),
      block("a7", "Without a useful web presence, the business loses visibility, trust, enquiries outside working hours, and ground to competitors who make the decision easier."),
      block("a8", "What a good website should do", "h2"),
      block("a9", "It should load quickly, work beautifully on mobile, explain what you do without guesswork, show evidence, and make contacting you feel simple. It does not need to be elaborate. It needs to be clear, credible, and useful."),
      block("a10", "The bottom line", "h2"),
      block("a11", "A well-built website is not decoration. It is the place where attention becomes understanding, trust, and a next step."),
    ], seo: {},
  },
  {
    id: "fallback-speed", slug: "how-we-improved-ecommerce-load-speed",
    title: "From 8 Seconds to 4: How We Doubled Page Load Speed for an E-commerce Brand",
    excerpt: "A practical look at the image, JavaScript, and delivery changes that cut load time in half and helped improve conversion.",
    category: "Case Study", date: "2026-02-14", readTime: "5 min read",
    image: "https://cdn.sanity.io/images/9dkoa55s/production/f30ae570c52b1b4922d52c1355f1e2ec8efc55a7-1024x1024.png",
    mainContent: [
      block("b1", "The challenge", "h2"),
      block("b2", "A growing e-commerce brand was facing an 8.4-second mobile load time. Traffic was healthy, but slow delivery was creating friction before shoppers could meaningfully engage with the products."),
      block("b3", "What the audit uncovered", "h2"),
      block("b4", "The largest constraints were oversized product imagery, render-blocking third-party JavaScript, and inconsistent server response times."),
      block("b5", "The optimization approach", "h2"),
      block("b6", "We converted key assets to modern formats, added deliberate lazy loading, split non-critical JavaScript away from the first render, and moved delivery closer to customers through edge caching."),
      block("b7", "The result", "h2"),
      block("b8", "Load time fell from 8.4 seconds to 3.9 seconds. Bounce rate improved by 22%, and conversion increased by 15% during the first 30 days after the work shipped."),
      block("b9", "Performance is a customer-experience decision", "h2"),
      block("b10", "Speed is not a score to chase in isolation. It shapes how quickly customers can understand a product, trust the experience, and complete the action they came to take."),
    ], seo: {},
  },
  {
    id: "fallback-design", slug: "the-future-of-web-design-trends-to-watch-in-2025",
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "From AI-assisted workflows to richer interaction, the useful shifts worth watching—and the fundamentals that still matter more.",
    category: "Design", date: "2026-02-12", readTime: "5 min",
    image: "https://cdn.sanity.io/images/9dkoa55s/production/0e45a178053e84618a5450492e2cad423e416ad9-1400x935.heif",
    mainContent: [
      block("c1", "New tools are changing how websites are made, but not why the best ones work. Clarity, relevance, trust, and ease still determine whether a digital experience is useful."),
      block("c2", "AI becomes part of the workflow", "h2"),
      block("c3", "AI-assisted research, content exploration, and prototyping can reduce repetitive work. The advantage comes from using that speed to make better decisions—not from producing more generic output."),
      block("c4", "Motion becomes more purposeful", "h2"),
      block("c5", "The strongest interaction design explains hierarchy, gives feedback, and helps people stay oriented. Movement for its own sake quickly becomes noise."),
      block("c6", "Distinctive systems beat visual trends", "h2"),
      block("c7", "Brands will continue moving away from interchangeable templates toward flexible systems with recognizable typography, imagery, color, and behavior."),
      block("c8", "The useful future is still human", "h2"),
      block("c9", "The tools will change quickly. Understanding the customer, articulating the value, and making the next step feel obvious will remain the durable work."),
    ], seo: {},
  },
];

const listingQuery = `*[_type == "blog"] | order(date desc){"id":_id,title,excerpt,category,date,readTime,"image":image.asset->url,"slug":slug.current,seo}`;
const articleQuery = `*[_type == "blog" && slug.current == $slug]{"id":_id,title,excerpt,category,date,readTime,"image":image.asset->url,"slug":slug.current,mainContent,seo}[0]`;

export async function getBlogs() {
  const remote = await client.fetch<Blog[]>(listingQuery, {}, { next: { tags: ["blog"] } }).catch(() => []);
  return remote.length ? remote : fallbackBlogs;
}

export async function getBlog(slug: string) {
  const remote = await client.fetch<Blog | undefined>(articleQuery, { slug }, { next: { tags: ["blog"] } }).catch(() => undefined);
  return remote ?? fallbackBlogs.find(post => post.slug === slug);
}

export async function getBlogSlugs() {
  const remote = await client.fetch<{ slug: string }[]>(`*[_type == "blog" && defined(slug.current)]{"slug":slug.current}`).catch(() => []);
  return remote.length ? remote : fallbackBlogs.map(({ slug }) => ({ slug }));
}
