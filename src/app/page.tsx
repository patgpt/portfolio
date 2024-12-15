import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { isFilled } from "@prismicio/client";
import Container from "@/components/layout/container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <Container className="prose prose-2xl flex-grow">
      <div className="text-balance text-center">
        {isFilled.image(page.data.pfp) && (
          <PrismicNextImage
            className="mx-auto rounded-full border-4 border-primary shadow-xl"
            field={page.data.pfp}
          />
        )}
        {isFilled.richText(page.data.introheading) && (
          <PrismicRichText field={page.data.introheading} />
        )}
        {isFilled.richText(page.data.introsubheading) && (
          <PrismicRichText field={page.data.introsubheading} />
        )}
        {isFilled.link(page.data.cta) && (
          <PrismicNextLink className="btn btn-outline" field={page.data.cta}>
            {page.data.cta.text}
          </PrismicNextLink>
        )}
        <SliceZone slices={page.data.slices} components={components} />
      </div>
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
