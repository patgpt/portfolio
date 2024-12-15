import React from "react";

interface TagCloudProps {
  tags: string[];
  index?: number;
}

function TagCloud({ tags }: TagCloudProps) {
  return (
    <div>
      {tags.map((tag) => (
        <span
          className="badge badge-primary mr-4 p-4"
          key={tag + Math.random()}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagCloud;
