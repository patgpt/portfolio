import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { isFilled } from "@prismicio/client";
import Container from "@/components/layout/container";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <Container>
      {isFilled.keyText(page.data.title) && <h2>{page.data.title} </h2>}
      <SliceZone slices={page.data.slices} components={components} />
    </Container>
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
