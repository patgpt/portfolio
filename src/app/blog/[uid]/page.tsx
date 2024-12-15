import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Container from "@/components/layout/container";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import TagCloud from "@/components/ui/tag-cloud";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());

  return (
    <Container className="prose prose-2xl flex-grow">
      <PrismicNextImage
        className="h-20 w-20 rounded-lg object-cover"
        field={page.data.featured_image}
      />
      <h1 className="my-8 text-center text-5xl">{page.data.page_title}</h1>
      <PrismicRichText field={page.data.content} />
      <TagCloud tags={page.tags} />

      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
