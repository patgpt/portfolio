import { BentoBox } from "@/components/BentoBox";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `AvailablitySlice`.
 */
export type AvailablitySliceProps =
  SliceComponentProps<Content.AvailablitySliceSlice>;

/**
 * Component for "AvailablitySlice" Slices.
 */
const AvailablitySlice = ({ slice }: AvailablitySliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BentoBox size="large" className="text-center" >
        <div className="flex items-center justify-center gap-3">
          <PrismicRichText field={slice.primary.availability_text} />
          <div className="inline-block h-3 w-3 shrink-0 overflow-hidden rounded-full bg-[#33d94e] shadow-[0_0_12px_#33d94e] animate-green-pulse" />
        </div>
      </BentoBox>
    </section>
  );
};

export default AvailablitySlice;
