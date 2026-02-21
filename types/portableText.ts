import type { PortableTextBlock, TypedObject } from "@portabletext/types";

export interface PortableImageBlock extends TypedObject {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
    url?: string;
    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
        aspectRatio?: number;
      };
    };
  };
  alt?: string;
  caption?: string;
}

export interface PortableRichTextBlock extends PortableTextBlock {
  _type: "block";
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  level?: number;
}