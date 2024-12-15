import { PrismicRichText, SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ExperienceCard from "@/components/experience/experience-card";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("experience");
  const experiences = await client.getByType("experience_detail");

  return (
    <div className="container mx-auto my-8">
      <h1 className="prose prose-2xl mx-auto mb-8 text-center text-5xl">
        {page.data.title}
      </h1>
      <ul className="timeline timeline-vertical prose-a:no-underline">
        {experiences.results.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            totalExperiences={experiences.results.length}
          />
        ))}
      </ul>
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
