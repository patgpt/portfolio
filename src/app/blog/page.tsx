import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import BlogPostCard from "@/components/BlogPostCard";
import Container from "@/components/Layout/Container";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blog");
  const posts = await client.getByType("blog_post", { pageSize: 3 });
  // TODO: implement this.
  // const getAllByTag = async (tag:string)=> await client.getAllByTag(tag);
  return (
    <Container>
      <div className="mb-8"></div>
      <h1 className="my-8 text-center text-5xl text-base-content">
        {page.data.title}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
