import { BentoBox } from "@/components/BentoBox";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import type { JSX } from "react";

/**
 * Props for `WelcomeTextSlice`.
 */
export type WelcomeTextSliceProps =
  SliceComponentProps<Content.WelcomeTextSliceSlice>;

/**
 * Component for "WelcomeTextSlice" Slices.
 */
const WelcomeTextSlice = ({ slice }: WelcomeTextSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BentoBox>
            <PrismicRichText field={slice.primary.welcome_text_heading} />
     <PrismicRichText field={slice.primary.welcome_text_subheading} />
      </BentoBox>
    </section>
  );
};

export default WelcomeTextSlice;
