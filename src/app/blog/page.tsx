import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Container from "@/components/layout/container";
import BlogPostCard from "@/components/BlogPostCard";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blog");
  const posts = await client.getByType("blog_post", { pageSize: 3 });
  // TODO: implement this.
  // const getAllByTag = async (tag:string)=> await client.getAllByTag(tag);
  return (
    <Container>
      <h1 className="my-8 text-center text-5xl">{page.data.title}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.results.map((post) => (
          <BlogPostCard post={post} key={post.id} />
        ))}
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
