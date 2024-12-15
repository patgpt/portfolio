import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { FaGlobe } from "react-icons/fa6";
import type { ExperienceDetailDocument } from "../../../prismicio-types";

type ExperienceCardProps = {
  experience: ExperienceDetailDocument<string>;
  index: number;
  totalExperiences: number;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="card prose card-bordered shadow-lg">
      <div className="card-body">
        <PrismicNextImage
          className="h-24 w-24 rounded-sm"
          field={experience.data.company_logo}
        />
        <div className="flex">
          <p className="text-sm text-neutral">
            From: <span>{experience.data.start_date}</span> To:{" "}
            <span>{experience.data.end_date}</span>
          </p>
        </div>
        <PrismicRichText field={experience.data.job_title} />
        <PrismicRichText field={experience.data.experience_summary} />
        <div className="flex flex-wrap gap-2">
          {experience.data.skill_tags.length > 0 &&
            experience.data.skill_tags.map((tag) => (
              <span className="badge badge-primary" key={tag.tag}>
                {tag.tag}
              </span>
            ))}
        </div>
        <div className="link-primary mt-4 flex items-center">
          <FaGlobe className="mr-2" />
          <PrismicNextLink field={experience.data.project_website}>
            Visit Project &rarr;
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
}
