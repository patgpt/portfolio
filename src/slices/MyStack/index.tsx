"use client"
import { BentoBox } from "@/components/BentoBox";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { JSX } from "react";

/**
 * Props for `MyStack`.
 */
export type MyStackProps = SliceComponentProps<Content.MyStackSlice>;

/**
 * Component for "MyStack" Slices.
 */
const MyStack = ({ slice }: MyStackProps): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={ref}
    >
      <BentoBox>
        <PrismicRichText field={slice.primary.my_stack_text} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {slice.primary.stack_items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <PrismicNextImage field={item.stack_icon} className="w-8 h-8" />
              <div className="flex-1 space-y-1">
                <div className="font-medium text-base-content">
                  <PrismicRichText field={item.stack_title_text} />
                </div>
                <div className="bg-base-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    variants={itemVariants}
                    custom={item.stack_skill_number}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </BentoBox>
    </section>
  );
};

export default MyStack;
