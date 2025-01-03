import Bounded from "@/components/Layout/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
        <PrismicRichText field={slice.primary.about_me_text} />
        <PrismicNextLink field={slice.primary.get_in_touch_cta}>
          {slice.primary.get_in_touch_cta.text}
        </PrismicNextLink>
      </Bounded>
    </section>
  );
};

export default AboutMeSlice;
