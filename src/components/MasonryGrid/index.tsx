import { ReactNode } from 'react';

interface MasonryGridProps {
  children: ReactNode;
}

export const MasonryGrid = ({ children }: MasonryGridProps) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
      {children}
    </div>
  );
};
