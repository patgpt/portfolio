import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import type { BlogPostDocument } from "../../prismicio-types";

function BlogPostCard({
  post,
  key,
}: {
  post: BlogPostDocument<string>;
  key: string | number;
}) {
  return (
    <Link
      href={`/blog/${post.uid}`}
      passHref
      key={key}
      className="card card-normal shadow-2xl hover:shadow-md"
    >
      <div className="card-body">
        <PrismicNextImage
          className="h-30 w-30"
          field={post.data.featured_image}
        />
        <h2 className="prose prose-2xl">{post.data.page_title}</h2>
        <p className="line-clamp-4 overflow-hidden text-ellipsis">
          {post.data.excerpt}
        </p>
        <section className="card-actions">
          {post.tags.map((tag) => (
            <span className="badge badge-primary" key={tag}>
              {tag}
            </span>
          ))}
        </section>
      </div>
    </Link>
  );
}

export default BlogPostCard;
