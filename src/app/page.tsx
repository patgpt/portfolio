import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { MasonryGrid } from "@/components/MasonryGrid";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home", {
    fetchLinks: [
      'blog_post.uid',
      'blog_post.page_title',
      'blog_post.excerpt',
      'blog_post.thumbnail',
      'blog_post.featured_image',
      'page.title'
    ]
  });

  console.log('Home page data:', JSON.stringify(page.data, null, 2)); // Debug log

  return (
    <MasonryGrid>
      <SliceZone slices={page.data.slices} components={components} />
    </MasonryGrid>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
