"use client";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { client, repositoryName } from "@/prismicio";

export default function PrismicClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrismicProvider client={client}>
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </PrismicProvider>
  );
}
