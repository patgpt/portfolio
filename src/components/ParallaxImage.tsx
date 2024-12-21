"use client";

import { useRef } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  image: ImageField;
}

export default function ParallaxImage({ image }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[50vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0 h-[120%] w-full" style={{ y }}>
        <PrismicNextImage
          field={image}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
