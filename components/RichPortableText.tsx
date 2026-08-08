import Image from "next/image";
import { PortableText, type PortableTextReactComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { createImageUrlBuilder } from "@sanity/image-url";
import clsx from "clsx";
import { client } from "@/lib/sanity";
import type { PortableImageBlock } from "@/types/portableText";

const dimensions = (asset?: PortableImageBlock["asset"]) => {
  const data = asset?.metadata?.dimensions;
  const width = Math.max(1, Math.round(data?.width || 1200));
  const height = Math.max(1, Math.round(data?.height || (data?.aspectRatio ? width / data.aspectRatio : 800)));
  return { width, height };
};

const components: PortableTextReactComponents = {
  block: {
    normal: ({ children }) => <p className="text-[1.05rem] leading-[1.85] text-[#4f5a5d]">{children}</p>,
    h1: ({ children }) => <h2 className="mt-10 text-4xl font-medium leading-[1.04] tracking-[-.045em] text-[#20292b]">{children}</h2>,
    h2: ({ children }) => <h2 className="mt-10 text-[clamp(1.8rem,3vw,2.4rem)] font-medium leading-[1.08] tracking-[-.04em] text-[#20292b]">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-.03em] text-[#263033]">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-8 rounded-r-2xl border-l-4 border-[#ffc36d] bg-[#eef2f3] px-6 py-5 text-xl leading-8 tracking-[-.02em] text-[#364144]">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="ml-5 list-disc space-y-3 text-[1.05rem] leading-8 text-[#4f5a5d] marker:text-[#7c9180]">{children}</ul>,
    number: ({ children }) => <ol className="ml-5 list-decimal space-y-3 text-[1.05rem] leading-8 text-[#4f5a5d] marker:font-semibold marker:text-[#596568]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#252e30]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#465154]">{children}</em>,
    underline: ({ children }) => <span className="underline decoration-[#9ed7ff] decoration-2 underline-offset-4">{children}</span>,
    code: ({ children }) => <code className="rounded-md bg-[#e4e9ea] px-1.5 py-1 font-mono text-sm text-[#293335]">{children}</code>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = /^https?:\/\//i.test(href);
      return <a href={href} className="font-medium text-[#315b73] underline decoration-[#9ed7ff] decoration-2 underline-offset-4 transition hover:text-[#172f3e]" target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as PortableImageBlock;
      const src = image.asset?._ref ? createImageUrlBuilder(client).image(image.asset._ref).width(1400).url() : image.asset?.url;
      if (!src) return null;
      const size = dimensions(image.asset);
      return <figure className="my-10"><div className="overflow-hidden rounded-[1.25rem] bg-[#e7ecec]"><Image src={src} alt={image.alt?.trim() || "Article illustration"} width={size.width} height={size.height} className="h-auto w-full object-cover" sizes="(min-width:1024px) 760px, 100vw"/></div>{image.caption&&<figcaption className="mt-3 text-center text-xs leading-5 text-[#778184]">{image.caption}</figcaption>}</figure>;
    },
  },
  hardBreak: () => <br/>,
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownType: ({ children }) => <span>{children}</span>,
  unknownBlockStyle: ({ children }) => <p>{children}</p>,
  unknownList: ({ children }) => <ul>{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
};

export interface RichPortableTextProps { value?: PortableTextBlock[]; className?: string }

export function RichPortableText({ value, className }: RichPortableTextProps) {
  if (!Array.isArray(value) || !value.length) return null;
  return <div className={clsx("article-rich flex flex-col gap-6", className)}><PortableText value={value} components={components}/></div>;
}
