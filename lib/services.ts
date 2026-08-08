export type ServiceDetail = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  color: string;
  hero: string;
  problem: string;
  outcome: string;
  promise: string;
  includes: string[];
  deliverables: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  goodFit: string[];
  notFit: string[];
  faqs: { question: string; answer: string }[];
};

export const services: ServiceDetail[] = [
  {
    number: "01", slug: "website-strategy", title: "Website strategy", color: "#ffc36d",
    summary: "Positioning, messaging, structure, and a clear plan.",
    hero: "Know what your website needs to say, show, and do before spending money building it.",
    problem: "A website without a strategy becomes a collection of pages. It may look polished, but visitors still have to work out who it is for, why the offer matters, and what to do next.",
    outcome: "A practical blueprint connecting your business goals, customer questions, message, content, and conversion path.",
    promise: "Make the important decisions once, in the right order, before design and development make them expensive to change.",
    includes: ["Positioning review", "Sitemap and user journeys", "Messaging direction", "Prioritized roadmap"],
    deliverables: [
      { title: "Clarity before creativity", copy: "Define the audience, offer, objections, proof, and primary action before choosing layouts." },
      { title: "A page-by-page plan", copy: "Know the purpose of every page, what belongs on it, and where it should lead." },
      { title: "Message hierarchy", copy: "Turn internal business language into a clear story customers can understand quickly." },
      { title: "A buildable roadmap", copy: "Separate what matters now from what can wait, so scope follows value rather than wish lists." },
    ],
    process: [
      { title: "Diagnose", copy: "Review the current site, offer, audience, competitors, analytics, and business goals." },
      { title: "Decide", copy: "Resolve positioning, priorities, user journeys, and the action each page should support." },
      { title: "Structure", copy: "Create the sitemap, content hierarchy, and page-level recommendations." },
    ],
    goodFit: ["Your offer has changed", "The current site feels unclear", "A redesign is planned", "Stakeholders need alignment"],
    notFit: ["You only need a new color palette", "You want to skip customer and offer decisions", "You need a large research engagement"],
    faqs: [
      { question: "Can strategy be a standalone project?", answer: "Yes. You receive a usable roadmap that can guide Sterling or another capable design and development team." },
      { question: "Do we need analytics?", answer: "No. Analytics help when available, but the work can begin with your offer, customers, current site, and commercial priorities." },
    ],
  },
  {
    number: "02", slug: "design-development", title: "Design & development", color: "#9ed7ff",
    summary: "Custom, responsive websites built around the business.",
    hero: "A website that looks credible, explains the value clearly, and makes the next step easy.",
    problem: "A dated or generic website quietly taxes every introduction, referral, and sales conversation. Prospects arrive interested, then leave less certain than before.",
    outcome: "A custom, responsive website that reflects the quality of the business and performs reliably across devices.",
    promise: "One connected process from message and original design through custom Next.js development, testing, and launch—with fewer handoffs and fewer gaps.",
    includes: ["UX and visual design", "Responsive development", "CMS integration", "Testing and launch"],
    deliverables: [
      { title: "Original UX and design", copy: "Layouts, journeys, and visual direction shaped around your offer and audience—not adapted from a pre-built theme." },
      { title: "Credible visual system", copy: "Typography, color, imagery, spacing, and components that make the business feel considered." },
      { title: "Custom production build", copy: "Fast, responsive Next.js code with reusable components, sensible content management, and no dependency on WordPress themes or plugin stacks." },
      { title: "Launch confidence", copy: "Quality assurance across common devices, browsers, forms, metadata, and essential performance checks." },
    ],
    process: [
      { title: "Align", copy: "Confirm goals, scope, audience, content responsibilities, and the definition of a successful launch." },
      { title: "Design", copy: "Build the visual direction and key pages, then extend an approved system across the site." },
      { title: "Develop", copy: "Implement responsively, connect content, test thoroughly, and prepare the launch." },
    ],
    goodFit: ["The business has outgrown its site", "Trust matters to the sale", "The offer needs clearer presentation", "You value direct collaboration"],
    notFit: ["You need a same-week template", "Lowest price is the primary requirement", "No one can provide or approve content"],
    faqs: [
      { question: "Will we be able to edit the site?", answer: "Where ongoing content changes are useful, we build a sensible editing experience rather than exposing every design decision." },
      { question: "Do you write the content?", answer: "We shape hierarchy and messaging throughout. The exact writing scope is agreed based on how much source material already exists." },
    ],
  },
  {
    number: "03", slug: "conversion-optimization", title: "Conversion optimization", color: "#b4a6ff",
    summary: "Sharper journeys that turn attention into action.",
    hero: "Make it easier for interested visitors to understand the offer, trust it, and take the next step.",
    problem: "More traffic cannot rescue an unclear offer or a difficult journey. If visitors hesitate, the problem is often the message, proof, sequence, or next step—not the button color.",
    outcome: "Focused improvements to the pages and moments most likely to affect enquiries, bookings, or purchases.",
    promise: "Prioritize high-leverage friction before adding more pages, more traffic, or more complexity.",
    includes: ["Journey review", "CTA strategy", "Page-level improvements", "Measurement priorities"],
    deliverables: [
      { title: "Friction review", copy: "Identify where visitors lose context, confidence, momentum, or a clear reason to continue." },
      { title: "Offer clarity", copy: "Strengthen the relationship between the problem, promise, proof, mechanism, and action." },
      { title: "Page improvements", copy: "Redesign or rewrite the highest-priority sections and journeys instead of changing everything." },
      { title: "Measurement plan", copy: "Define the few useful signals needed to judge whether an improvement is helping." },
    ],
    process: [
      { title: "Observe", copy: "Review journeys, analytics where available, page intent, traffic context, and conversion points." },
      { title: "Prioritize", copy: "Rank issues by likely impact, confidence, and effort rather than personal preference." },
      { title: "Improve", copy: "Implement the strongest opportunities and define what should be measured next." },
    ],
    goodFit: ["The site receives qualified traffic", "Visitors are not taking action", "A key page underperforms", "The offer is commercially proven"],
    notFit: ["There is no traffic or offer yet", "You want guaranteed conversion lifts", "Tracking and customer context are unavailable"],
    faqs: [
      { question: "Do you guarantee a conversion increase?", answer: "No honest partner can guarantee how users will behave. We improve the quality of the decisions, remove evident friction, and define what to measure." },
      { question: "Is this a full redesign?", answer: "Not necessarily. Often the highest-value work is improving a few important pages before deciding whether a broader redesign is justified." },
    ],
  },
  {
    number: "04", slug: "seo-foundations", title: "SEO foundations", color: "#e2a0f4",
    summary: "Technical and on-page essentials for sustainable visibility.",
    hero: "Give useful content a technically sound, clearly structured place to be discovered.",
    problem: "A beautiful website can remain invisible when search engines cannot understand its structure, pages target no clear intent, or basic technical issues undermine it.",
    outcome: "A clean technical and on-page foundation aligned with how potential customers search for the problems you solve.",
    promise: "Fix the fundamentals that compound over time before paying for volume, content, or complicated SEO retainers.",
    includes: ["Technical checks", "On-page structure", "Metadata essentials", "Content recommendations"],
    deliverables: [
      { title: "Technical baseline", copy: "Review indexing, crawlability, canonicals, sitemaps, performance, mobile behavior, and common errors." },
      { title: "Search alignment", copy: "Connect priority pages with relevant customer intent instead of chasing disconnected keywords." },
      { title: "On-page structure", copy: "Improve titles, descriptions, headings, internal links, and content hierarchy." },
      { title: "Content priorities", copy: "Identify useful gaps and next steps without recommending content simply for volume." },
    ],
    process: [
      { title: "Audit", copy: "Review the technical setup, indexation, page structure, and current search footprint." },
      { title: "Map", copy: "Match high-value services and questions to the pages best suited to answer them." },
      { title: "Implement", copy: "Resolve priority issues and leave a clear list of recommended next actions." },
    ],
    goodFit: ["The website is launching or relaunching", "Core services need visibility", "SEO basics were never addressed", "You want a practical foundation"],
    notFit: ["You expect immediate rankings", "You need enterprise international SEO", "You want high-volume outsourced articles"],
    faqs: [
      { question: "How quickly will rankings improve?", answer: "Search performance depends on competition, authority, content, history, and implementation. Foundations remove avoidable constraints; they do not create instant rankings." },
      { question: "Is this ongoing SEO?", answer: "This service establishes and improves the foundation. Ongoing content or authority work can be scoped only if it serves a clear commercial case." },
    ],
  },
  {
    number: "05", slug: "ongoing-support", title: "Ongoing support", color: "#d9f0cf",
    summary: "Careful improvements and reliable help after launch.",
    hero: "Keep the website useful, current, and improving after the launch excitement is over.",
    problem: "Websites rarely fail all at once. They become less useful through postponed updates, broken details, slow pages, stale offers, and missed opportunities.",
    outcome: "Reliable senior support for the improvements and decisions that keep the website aligned with the business.",
    promise: "Access the right level of help without rebuilding the team or starting a new agency search for every change.",
    includes: ["Content updates", "Performance care", "UX refinements", "Practical guidance"],
    deliverables: [
      { title: "Reliable maintenance", copy: "Handle agreed updates, fixes, dependencies, and routine website care." },
      { title: "Continuous refinement", copy: "Improve pages as the offer, audience, evidence, and business priorities become clearer." },
      { title: "Performance attention", copy: "Monitor the practical issues that can quietly erode speed, usability, and trust." },
      { title: "Senior guidance", copy: "Get a direct recommendation when a request needs a decision—not just an estimate." },
    ],
    process: [
      { title: "Prioritize", copy: "Maintain a clear queue based on urgency, impact, effort, and business timing." },
      { title: "Execute", copy: "Complete agreed work in a predictable rhythm with concise communication." },
      { title: "Review", copy: "Revisit priorities regularly so support follows the business rather than a stale task list." },
    ],
    goodFit: ["The site is business-critical", "Changes happen regularly", "You want continuity after launch", "Senior judgment is valuable"],
    notFit: ["You need 24/7 emergency operations", "Requests require a large embedded team", "There is no clear website owner"],
    faqs: [
      { question: "Is support only for sites Sterling built?", answer: "No. We can first review an existing site for technical quality, maintainability, and fit before agreeing to support it." },
      { question: "How is work prioritized?", answer: "By business impact, urgency, dependencies, and effort. You retain visibility into what is being done and why it comes next." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find(service => service.slug === slug);
