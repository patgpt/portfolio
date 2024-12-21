import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for parallaxed_banner_with_title (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ParallaxedBannerWithTitle;
