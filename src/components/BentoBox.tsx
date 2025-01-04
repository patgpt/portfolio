import clsx from "clsx";
import React, { type HTMLAttributes } from "react";

// Use const assertion for better type inference
const SIZES = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
} as const;

type BentoBoxSize = keyof typeof SIZES;

export interface BentoBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: BentoBoxSize;
}

export const BentoBox = React.memo(({
  children,
  className,
  size = 'small',
  ...props
}: BentoBoxProps) => {
  return (
    <div
      className={clsx(
        "card transition-all duration-300 group",
        "hover:scale-[1.02] hover:shadow-xl",
        "backdrop-blur-sm bg-opacity-90",
        "border border-base-content/10",
        "break-inside-avoid bg-base-100",
        SIZES[size],
        className
      )}
      {...props}
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
});

BentoBox.displayName = 'BentoBox';
