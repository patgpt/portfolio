import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Container from "@/components/layout/container";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import TagCloud from "@/components/ui/tag-cloud";
import BlogPostCard from "@/components/BlogPostCard";

type Params = { uid: string; key?: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());
  const relatedPosts = await client.getByType("blog_post", { pageSize: 3 });
  return (
    <Container className="prose prose-2xl flex-grow">
      <PrismicNextImage
        height={400}
        width={800}
        className="h-full w-full rounded-lg object-contain"
        field={page.data.featured_image}
      />
      <h1 className="my-8 text-center text-5xl">{page.data.page_title}</h1>
      <PrismicRichText field={page.data.content} />
      <TagCloud tags={page.tags} />

      <SliceZone slices={page.data.slices} components={components} />
      <h2 className="text-3xl">Related Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {relatedPosts.results.map((post) => (
          <BlogPostCard post={post} key={post.id} />
        ))}
      </div>
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
