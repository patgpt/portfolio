"use client"
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { BentoBox } from "@/components/BentoBox";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { JSX } from "react";

/**
 * Props for `CompaniesIHaveWorkedWithSlice`.
 */
export type CompaniesIHaveWorkedWithSliceProps =
  SliceComponentProps<Content.CompaniesIHaveWorkedWithSliceSlice>;

/**
 * Component for "CompaniesIHaveWorkedWithSlice" Slices.
 */
const CompaniesIHaveWorkedWithSlice = ({
  slice,
}: CompaniesIHaveWorkedWithSliceProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slice.primary.logo.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slice.primary.logo.length]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="col-span-1 lg:col-span-2"
    >
      <BentoBox variant="primary" size="medium">
        <PrismicRichText field={slice.primary.title} />
        <div className="relative h-60 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-full h-full"
            >
              <PrismicNextImage
                field={slice.primary.logo[currentIndex].company_logo}
                className="h-60 w-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </BentoBox>
    </section>
  );
};

export default CompaniesIHaveWorkedWithSlice;
