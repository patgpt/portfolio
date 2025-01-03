import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";

import Container from "@/components/Layout/Container";

import ParallaxImage from "@/components/ParallaxImage";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());

  return (
    <>
      <ParallaxImage
        className="object-contain"
        image={page.data.featured_image}
      />

      <Container>
        <Link href="/blog" className="btn btn-ghost gap-2">
          <FaChevronLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        <PrismicRichText field={page.data.content} />
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </Container>
    </>
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
