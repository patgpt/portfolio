"use client";

import { ImageField, type RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  image: ImageField;
  text?: RichTextField | null | undefined;
  centerText?: boolean;
  className?: string;
}

export default function ParallaxImage({
  image,
  className,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className={`relative h-[50vh] w-full overflow-hidden ${className || ""}`}
    >
      <motion.div className="absolute inset-0 h-[120%] w-full" style={{ y }}>
        <PrismicNextImage
          field={image}
          className="h-full w-full object-cover brightness-[0.85]"
          priority
        />
      </motion.div>
    </section>
  );
}
