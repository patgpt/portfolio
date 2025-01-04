
import { BentoBox } from "@/components/Layout/BentoBox";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // Import a proper UUID generator

interface BentoGridProps {
  children: React.ReactNode; // The child elements to render inside the grid. Should be valid React nodes.
  minItems?: number; // Add minimum items requirement
  maxItems?: number; // Add maximum items limit
  isLoading?: boolean;
}

/**
 * A responsive grid layout component for displaying a featured post and side posts.
 * @param {BentoGridProps} props - The props object.
 * @returns {JSX.Element | null} The rendered BentoGrid component or null if no valid children are provided.
 */
export default function BentoGrid({
  children,
  minItems = 1,
  maxItems = 5,
  isLoading = false,
}: BentoGridProps) {
  if (isLoading) {
    return (
      <div
        className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-6"
        role="region"
        aria-label="Loading content"
      >
        {/* Featured skeleton */}
        <div className="card-compact md:col-span-4">
          <BentoBox variant="featured" isLoading={true} />
        </div>
        {/* Side post skeletons */}
        <div className="card-compact flex flex-col gap-4 md:col-span-2">
          {[...Array(2)].map((_, index) => (
            <BentoBox key={index} isLoading={true} />
          ))}
        </div>
      </div>
    );
  }

  // Convert children to an array and filter out invalid React elements
  const childrenArray = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  );

  // Validate min/max items
  if (childrenArray.length < minItems || childrenArray.length > maxItems) {
    console.warn(`BentoGrid expects between ${minItems} and ${maxItems} items`);
    return null;
  }

  // If there are no valid children, return null to render nothing
  if (childrenArray.length === 0) return null;

  // Separate the first child as the featured post
  const featuredPost = childrenArray[0];
  // Remaining children are treated as side posts
  const sidePosts = childrenArray.slice(1);

  return (
    <div
      className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-6"
      role="region"
      aria-label="Content grid"
    >
      {/* Featured post - spans 4 columns on larger screens */}
      <div className="card-compact md:col-span-4" role="group">
        {featuredPost}
      </div>
      {/* Side posts - occupy the remaining 2 columns on larger screens, stacked vertically */}
      <div
        className="card-compact flex flex-col gap-4 md:col-span-2"
        role="group"
      >
        {sidePosts.map((child) => (
          <div key={uuidv4()} className="flex-1" role="group">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
