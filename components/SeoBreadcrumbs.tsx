import { site } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type SeoBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const SeoBreadcrumbs = ({ items }: SeoBreadcrumbsProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default SeoBreadcrumbs;
