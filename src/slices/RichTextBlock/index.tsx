import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for rich_text_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RichTextBlock;
