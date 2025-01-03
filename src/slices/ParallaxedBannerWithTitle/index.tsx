import ParallaxImage from "@/components/ParallaxImage";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `ParallaxedBannerWithTitle`.
 */
export type ParallaxedBannerWithTitleProps =
  SliceComponentProps<Content.ParallaxedBannerWithTitleSlice>;

/**
 * Component for "ParallaxedBannerWithTitle" Slices.
 */
const ParallaxedBannerWithTitle = ({
  slice,
}: ParallaxedBannerWithTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>
        <ParallaxImage
          centerText
          text={slice.primary.title}
          image={slice.primary.parallax_image}
        />
      </>
    </section>
  );
};

export default ParallaxedBannerWithTitle;
