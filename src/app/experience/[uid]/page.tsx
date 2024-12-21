import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Container from "@/components/layout/container";
import { PrismicNextImage } from "@prismicio/next";
import ParallaxImage from "@/components/ParallaxImage";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("experience_detail", uid)
    .catch(() => notFound());

  return (
    <>
      <ParallaxImage image={page.data.banner} />

      <Container>
        <PrismicNextImage
          className="mx-auto rounded-box shadow-lg"
          field={page.data.company_logo}
        />
        <h1 className="my-8 text-center text-5xl">{page.data.company_name}</h1>
        <PrismicRichText field={page.data.job_title} />
        <p className="text-sm text-base-content/60">
          From: <span>{page.data.start_date}</span> To:{" "}
          <span>{page.data.end_date}</span>
        </p>
        <PrismicRichText field={page.data.experience_description} />

        {page.data.skill_tags.length > 0 &&
          page.data.skill_tags.map((tag) => (
            <span className="badge badge-primary mr-4 p-4" key={tag.tag}>
              {tag.tag}
            </span>
          ))}
        <SliceZone slices={page.data.slices} components={components} />
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
  const page = await client
    .getByUID("experience_detail", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("experience_detail");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
