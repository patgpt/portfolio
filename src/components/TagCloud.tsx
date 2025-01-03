import React from "react";

interface TagCloudProps {
  tags: string[];
  index?: number;
}

function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          className="badge badge-primary mr-4 text-nowrap p-4"
          key={tag + Math.random()}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagCloud;
