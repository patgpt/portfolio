import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("service", uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
// generate meta date
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("service", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// Generate static params
export async function generateStaticParams() {
  // create a prismic client
  const client = createClient();
  // fetch all service type from prismic
  const pages = await client.getAllByType("service");
  // map through results and generate a dynamic page based on type.
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
