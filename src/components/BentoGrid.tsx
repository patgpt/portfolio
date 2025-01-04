import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {children}
      </div>
    </div>
  );
}
