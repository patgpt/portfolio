import clsx from "clsx";
import React, { type JSX } from "react";

/**
 * Props for the BentoBox component.
 */
export interface BentoBoxProps {
  /**
   * The child elements to render inside the box.
   * Optional when isLoading is true.
   */
  children?: React.ReactNode;

  /**
   * The variant of the BentoBox. Defaults to "regular".
   */
  variant?: "featured" | "regular";

  /**
   * Additional custom class names for the BentoBox.
   */
  className?: string;

  /**
   * Click handler for the BentoBox.
   */
  onClick?: () => void;

  /**
   * Disabled state for the BentoBox.
   */
  disabled?: boolean;

  /**
   * Loading state for the BentoBox.
   */
  isLoading?: boolean;
}

/**
 * A flexible box component with hover effects, used to display content in different visual styles.
 *
 * @param props - The props object.
 * @returns The rendered BentoBox component.
 */
export function BentoBox({
  children,
  variant = "regular",
  className = "",
  onClick,
  disabled = false,
  isLoading = false,
}: BentoBoxProps): JSX.Element {
  return (
    <div
      className={clsx(
        "card overflow-hidden bg-base-100 transition-all duration-300 ease-in-out",
        !disabled && !isLoading && "hover:scale-[1.02] hover:shadow-xl",
        disabled && "cursor-not-allowed opacity-60",
        variant === "featured" ? "aspect-video" : "aspect-square",
        className,
      )}
      role={variant === "featured" ? "region" : "article"}
      onClick={!disabled && !isLoading ? onClick : undefined}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="card-body animate-pulse p-4">
          <div className="skeleton h-32 w-full" />
          <div className="space-y-3">
            <div className="skeleton h-4 w-3/4" />
            <div className="skeleton h-4 w-1/2" />
          </div>
        </div>
      ) : (
        <div className="card-body p-4">{children}</div>
      )}
    </div>
  );
}
