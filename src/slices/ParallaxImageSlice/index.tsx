import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ParallaxImage from "@/components/ParallaxImage";

export type ParallaxImageSliceProps = SliceComponentProps<Content.ParallaxImageSlice>;

export default function ParallaxImageSlice({ slice }: ParallaxImageSliceProps) {
  return (
    <ParallaxImage
      image={slice.primary.image}
      text={slice.primary.text}
      centerText={slice.primary.center_text}
      className={slice.primary.custom_class || ""}
    />
  );
}
