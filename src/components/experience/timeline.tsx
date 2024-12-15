"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import type { ExperienceDetailDocument } from "../../../prismicio-types";
import ExperienceCard from "./experience-card";

interface TimelineProps {
  experiences: ExperienceDetailDocument<string>[];
}

export const Timeline = ({ experiences }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="relative mx-auto max-w-7xl pb-20" ref={ref}>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-base-100">
                <div className="h-4 w-4 rounded-full border border-base-300 bg-base-200 p-2" />
              </div>
              <h3 className="hidden text-xl font-bold text-base-content/50 md:block md:pl-20 md:text-5xl">
                {experience.data.company_name}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <ExperienceCard
                experience={experience}
                index={index}
                totalExperiences={experiences.length}
              />
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-base-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-secondary via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
