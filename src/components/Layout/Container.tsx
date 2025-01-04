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
        "container prose prose-2xl mx-auto my-8 h-full px-4 prose-a:no-underline",
        className,
      )}
    >
      {children}
    </div>
  );
}
