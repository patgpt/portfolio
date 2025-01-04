
import Bounded from "@/components/Bounded";
import React from "react";

interface TagCloudProps {
  tags: string[];
  index?: number;
}

function TagCloud({ tags }: TagCloudProps) {
  return (
    <Bounded>
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
    </Bounded>
  );
}

export default TagCloud;
