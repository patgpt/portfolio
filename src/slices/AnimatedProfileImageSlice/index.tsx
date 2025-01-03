import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

export type AnimatedProfileImageSliceProps = SliceComponentProps<Content.AnimatedProfileImageSlice>;

export default function AnimatedProfileImage({ slice }: AnimatedProfileImageSliceProps) {
  return (
    <div className="relative h-48 w-48 rounded-full overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="h-full w-full"
      >
        <PrismicNextImage
          field={slice.primary.profile_image}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
