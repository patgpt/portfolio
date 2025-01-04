import React, { type JSX } from "react";
import clsx from "clsx"; // Utility for conditional className merging. Preferred over string concatenation for cleaner, more maintainable code and handling conditional class logic effectively.

/**
 * Props for the Bounded component.
 * @typedef {Object} BoundedProps
 * @property {React.ElementType} [as="div"] - The component or HTML tag to render (e.g., div, section, article, custom components). Must be a valid React element type.
 * @property {React.ReactNode} children - The content to be wrapped within the component.
 * @property {string} [className=""] - Additional custom classes to be applied. If a conflict arises between default and custom classes, the custom `className` will override defaults where applicable. Test edge cases where className conflicts with padding or width classes to ensure predictable behavior.
 * @property {"small" | "base" | "wide" | "widest"} [size="base"] - Predefined size options for width classes.
 * @property {string} [paddingXClass="px-4 sm:px-8 md:px-12 lg:px-16"] - Custom horizontal padding classes to override defaults.
 * @property {string} [paddingYClass=""] - Custom vertical padding classes to override defaults.
 */

// Props definition for the Bounded component
interface BoundedProps {
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>; // Allows specifying any valid HTML tag or custom component for rendering. Must adhere to valid React element types.
  children: React.ReactNode; // Defines the content to be wrapped within the component, ensure proper validation when rendered
  className?: string; // Additional custom classes to be applied. If conflicts arise, custom classes take precedence.
  size?: "small" | "base" | "wide" | "widest"; // Predefined size options for width classes
  paddingXClass?: string; // Custom horizontal padding classes for flexibility in layout design
  paddingYClass?: string; // Custom vertical padding classes for flexibility in layout design
}

/**
 * Bounded is a layout component that provides consistent padding,
 * maximum width, and centering for its children.
 *
 * Example usage:
 * ```jsx
 * <Bounded as="section" size="wide" className="bg-gray-100" paddingXClass="px-6" paddingYClass="py-4">
 *   <h1 className="text-2xl font-bold">Welcome</h1>
 *   <p>This is a flexible and reusable layout component.</p>
 * </Bounded>
 * ```
 *
 * @component
 * @param {BoundedProps} props - The properties for the component.
 * @returns {JSX.Element} A React component with specified padding and layout styles.
 */
const Bounded = ({
  as: Component = "div", // Default to rendering a <div> if no tag is provided
  children,
  className = "", // Default to an empty string if no className is passed
  size = "base", // Default size option
  paddingXClass = "px-4 sm:px-8 md:px-12 lg:px-16", // Default horizontal padding classes
  paddingYClass = "", // Default vertical padding classes
}: BoundedProps): JSX.Element => {
  const sizeClass = clsx(
    size === "small" && "max-w-xl",
    size === "base" && "max-w-3xl",
    size === "wide" && "max-w-4xl",
    size === "widest" && "max-w-6xl",
  );

  return (
    <Component
      /**
       * Combines the base padding, width, and centering classes
       * with any additional classes provided through className.
       * The padding classes ensure flexible spacing, while width classes control content width for readability and alignment.
       */
      className={clsx(
        paddingXClass,
        paddingYClass,
        sizeClass,
        "mx-auto",
        className,
      )}
    >
      {children} {/* Render the children elements inside the component */}
    </Component>
  );
};

export default Bounded;
