"use client";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

interface AnimatedProfileImageProps {
  image: ImageField;
}

export default function AnimatedProfileImage({
  image,
}: AnimatedProfileImageProps) {
  if (!isFilled.image(image)) return null;

  return (
    <div className="animate-profileFadeIn opacity-0">
      <PrismicNextImage
        className="mx-auto rounded-full border-2 border-primary shadow-lg shadow-primary/80"
        field={image}
      />
    </div>
  );
}
