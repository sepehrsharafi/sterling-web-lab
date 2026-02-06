import { createClient, groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2024-05-01",
  });

  const query = groq`*[_type == "project"]{
    _id,
    client,
    category,
    "image": image.asset->url,
    stats,
    description,
    deliverables,
    highlights,
    tech,
    result,
    year,
    link
  }`;

  const projects = await client.fetch(query);

  return NextResponse.json({ result: projects });
}