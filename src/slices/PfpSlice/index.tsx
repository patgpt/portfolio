import { BentoBox } from "@/components/BentoBox";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `PfpSlice`.
 */
export type PfpSliceProps = SliceComponentProps<Content.PfpSliceSlice>;

/**
 * Component for "PfpSlice" Slices.
 */
const PfpSlice = ({ slice }: PfpSliceProps): JSX.Element => {
  return (
    <BentoBox  size="small" className="mx-auto">
      <PrismicNextImage field={slice.primary.profile_image} className="rounded-full max-w-10 mx-auto" />
    </BentoBox>
  );
};

export default PfpSlice;
