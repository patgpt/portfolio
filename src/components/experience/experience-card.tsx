import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";
import type { ExperienceDetailDocument } from "../../../prismicio-types";

type ExperienceCardProps = {
  experience: ExperienceDetailDocument<string>;
  index: number;
  totalExperiences: number;
};

export default function ExperienceCard({
  experience,
  index,
  totalExperiences,
}: ExperienceCardProps) {
  return (
    <Link className="prose w-1/2" href={`experience/${experience.uid}`}>
      {index !== 0 && <hr className="bg-primary" />}
      <div
        className={`timeline-${index % 2 === 0 ? "start" : "end"} timeline-box`}
      >
        <PrismicNextImage
          className="h-24 w-24 rounded-sm"
          field={experience.data.company_logo}
        />
        <h2>{experience.data.company_name}</h2>
        <div className="flex">
          <p className="text-sm text-neutral">
            From: <span>{experience.data.start_date}</span> To:{" "}
            <span>{experience.data.end_date}</span>
          </p>
        </div>
        <PrismicRichText field={experience.data.job_title} />
        <PrismicRichText field={experience.data.experience_summary} />
        {experience.data.skill_tags.length > 0 &&
          experience.data.skill_tags.map((tag) => (
            <span className="badge badge-primary m-1 p-4" key={tag.tag}>
              {tag.tag}
            </span>
          ))}
        <div className="link-primary mt-4 flex items-center">
          <FaGlobe className="mr-2" />
          <PrismicNextLink field={experience.data.project_website}>
            {experience.data.company_name} &rarr;
          </PrismicNextLink>
        </div>
      </div>
      <div className="timeline-middle mx-4">
        <PrismicNextImage
          className="h-8 w-8 rounded-full"
          field={experience.data.company_logo}
        />
      </div>
      {index !== totalExperiences - 1 && <hr className="bg-primary" />}
    </Link>
  );
}
