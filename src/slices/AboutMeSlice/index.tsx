import { BentoBox } from "@/components/BentoBox";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `AboutMeSlice`.
 */
export type AboutMeSliceProps = SliceComponentProps<Content.AboutMeSliceSlice>;

/**
 * Component for "AboutMeSlice" Slices.
 */
const AboutMeSlice = ({ slice }: AboutMeSliceProps): JSX.Element => {
  return (
    <BentoBox size="small" className="text-center mb-4 break-inside-avoid">
      <div className="space-y-4">
        <PrismicNextImage field={slice.primary.profile_image} className="rounded-full max-w-30 mx-auto" />
        <PrismicRichText field={slice.primary.about_me_text} />
        <PrismicNextLink
          field={slice.primary.get_in_touch_cta}
          className="btn btn-primary btn-outline prose:a:no-underline"
        >
          {slice.primary.get_in_touch_cta.text}
        </PrismicNextLink>
      </div>
    </BentoBox>
  );
};

export default AboutMeSlice;
