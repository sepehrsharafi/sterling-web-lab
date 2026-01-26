export type PageView = 'home' | 'about' | 'services' | 'contact' | 'agency' | 'blog';

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
  id: string;
  client: string;
  category: string;
  image: string;
  stats: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}