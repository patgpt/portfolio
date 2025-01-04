
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";
import { BentoBox } from "@/components/BentoBox";


/**
 * Props for `SocialSlice`.
 */
export type SocialSliceProps = SliceComponentProps<Content.SocialSliceSlice>;

/**
 * Component for "SocialSlice" Slices.
 */
const SocialSlice = ({ slice }: SocialSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

        <BentoBox variant="secondary" size="small" className="flex items-center justify-center gap-4">
        <PrismicRichText field={slice.primary.social_text} />
        <div className="flex gap-4 mx-auto">
          {slice.primary.social_network.map((link, index) => (
          <PrismicNextLink key={index} field={link.network_url} className="text-base-content">
            <PrismicNextImage  field={link.icon} className="w-16 h-16 hover:animate-pulse " />
          </PrismicNextLink>
        ))}
        </div>

        </BentoBox>

    </section>
  );
};

export default SocialSlice;
