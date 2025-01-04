import { motion } from 'framer-motion';

interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  isPaused: boolean;
  onPauseToggle: () => void;
}

export const SliderControls = ({
  currentIndex,
  totalSlides,
  onSlideChange,
  isPaused,
  onPauseToggle
}: SliderControlsProps) => {
  return (
    <>
      {/* Navigation controls */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10"
        role="tablist"
        aria-label="Slides"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-base-300 w-2 hover:bg-primary/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
          />
        ))}
      </div>

      {/* Auto-play control */}
      <button
        onClick={onPauseToggle}
        className="absolute top-4 right-4 z-10 p-2 bg-base-200/80 rounded-full hover:bg-base-200"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? "▶️" : "⏸️"}
      </button>
    </>
  );
};
