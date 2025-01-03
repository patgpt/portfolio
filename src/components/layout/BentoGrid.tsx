interface BentoGridProps {
  children: React.ReactNode[];
}

export default function BentoGrid({ children }: BentoGridProps) {
  if (!children || children.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-6">
      {/* Featured post - spans 4 columns */}
      <div className="transition-transform duration-300 hover:scale-[1.02] md:col-span-4">
        {children[0]}
      </div>
      {/* Side posts - stack in remaining 2 columns */}
      <div className="flex flex-col gap-4 md:col-span-2">
        {children.slice(1).map((child, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-[1.02]"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
