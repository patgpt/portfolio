import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Timeline } from "@/components/Timeline";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("experience");
  const experiences = await client.getByType("experience_detail");

  return (
    <div className="container mx-auto my-8">
      <Link href="/blog" className="btn btn-ghost gap-2">
        <FaChevronLeft className="h-4 w-4" />
        Back
      </Link>
      <h1 className="prose prose-2xl mx-auto mb-8 text-center text-5xl">
        {page.data.title}
      </h1>
      <Timeline experiences={experiences.results} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("experience");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
