import { cn } from "@/app/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-2xl prose-a:no-underline container mx-auto my-8 px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
