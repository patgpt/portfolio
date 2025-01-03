import Container from "@/components/layout/container";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `RichTextBlock`.
 */
export type RichTextBlockProps =
  SliceComponentProps<Content.RichTextBlockSlice>;

/**
 * Component for "RichTextBlock" Slices.
 */
const RichTextBlock = ({ slice }: RichTextBlockProps): JSX.Element => {
  return (
    <Container>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <PrismicRichText field={slice.primary.content} />
      </section>
    </Container>
  );
};

export default RichTextBlock;
