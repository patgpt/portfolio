import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      <PrismicRichText field={slice.primary.about_me_text} />
      <PrismicNextLink field={slice.primary.get_in_touch_cta}>
        {slice.primary.get_in_touch_cta.text}
      </PrismicNextLink>
    </section>
  );
};

export default AboutMeSlice;
