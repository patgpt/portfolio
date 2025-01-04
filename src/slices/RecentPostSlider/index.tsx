"use client"
import { BentoBox } from "@/components/BentoBox";
import { SliderControls } from "@/components/SliderControls";
import { Content, type ImageFieldImage } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useCallback, useMemo, useState, memo } from "react";

type RelatedPost = {
  blog_posts: {
    id: string;
    uid: string;
    data: {
      page_title: string;
      excerpt: string;
      thumbnail: ImageFieldImage | null | undefined;
    }
  }
}

export type RecentPostSliderProps = SliceComponentProps<Content.RecentPostSliderSlice>;

const SLIDE_INTERVAL = 5000;
const MIN_POSTS = 1;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const RecentPostSlider = ({ slice }: RecentPostSliderProps) => {
  const posts = useMemo(() => {
    const postData = slice.primary.related_post as unknown as RelatedPost[];
    if (!Array.isArray(postData)) return [];
    return postData;
  }, [slice.primary.related_post]);

  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  const paginate = useCallback((newDirection: number) => {
    const nextIndex = (currentIndex + newDirection + posts.length) % posts.length;
    setCurrentIndex([nextIndex, newDirection]);
  }, [currentIndex, posts.length]);

  // Verify we have posts before proceeding
  if (!posts?.length || posts.length < MIN_POSTS) {
    return (
      <div
        className="text-error p-4 rounded bg-error/10"
        role="alert"
        aria-live="polite"
      >
        No posts available
      </div>
    );
  }

  const currentPost = posts[currentIndex]?.blog_posts;
  if (!currentPost) {
    console.log('Current post not found:', currentIndex);
    return <div className="text-error p-4" role="alert">Post not found</div>;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      aria-roledescription="carousel"
      aria-label="Recent blog posts"
    >
      <BentoBox
        className="relative overflow-hidden min-h-[600px] bg-base-200 shadow-xl prose:a:no-underline"
        size="large"
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
          onExitComplete={() => {
            if (!isPaused) {
              controls.start("animate");
            }
          }}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate={controls}
            exit="exit"
            className="absolute inset-0 w-full h-full"
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') paginate(-1);
              if (e.key === 'ArrowRight') paginate(1);
            }}
            transition={{
              repeat: isPaused ? 0 : Infinity,
              repeatDelay: SLIDE_INTERVAL / 1000,
            }}
          >
            {currentPost && (
              <Link
                href={`/blog/${currentPost.uid}`}
                className="block h-full group prose:a:no-underline no-underline focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={`Read ${currentPost.data.page_title}`}
              >
                <article className="relative h-full flex flex-col">
                  <div className="w-full h-[300px] relative overflow-hidden">
                    {currentPost.data.thumbnail && (
                      <PrismicNextImage
                        field={currentPost.data.thumbnail}
                        fill
                        className="mt-0 object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority={currentIndex === 0}
                        loading={currentIndex === 0 ? "eager" : "lazy"}

                      />
                    )}
                  </div>
                  <div className="flex-1 p-6 Prose:a no-underline">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                      {currentPost.data.page_title}
                    </h3>
                    <p className="text-base-content/80 line-clamp-3 text-lg">
                      {currentPost.data.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-primary font-medium">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        <SliderControls
          currentIndex={currentIndex}
          totalSlides={posts.length}
          onSlideChange={(index) => {
            const newDirection = index > currentIndex ? 1 : -1;
            setCurrentIndex([index, newDirection]);
            controls.start("animate");
          }}
          isPaused={isPaused}
          onPauseToggle={() => {
            setIsPaused(!isPaused);
            if (!isPaused) {
              controls.stop();
            } else {
              controls.start("animate");
            }
          }}
        />
      </BentoBox>
    </section>
  );
};

export default memo(RecentPostSlider);
