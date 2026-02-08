import { PortableTextBlock } from "@portabletext/types";

export type PageView =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "agency"
  | "blog";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content: PortableTextBlock[];
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  _id: string;
  client: string;
  category: string;
  image: string;
  stats: string;
  description: string;
  deliverables: string[];
  highlights: string[];
  tech: string[];
  result: string;
  year?: string;
  link?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}