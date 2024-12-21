import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import type { BlogPostDocument } from "../../prismicio-types";

function BlogPostCard({ post }: { post: BlogPostDocument<string> }) {
  return (
    <Link
      href={`/blog/${post.uid}`}
      passHref
      key={post.uid}
      className="card card-compact mt-0 border border-white/20 bg-white/30 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
    >
      <figure className="mt-0">
        <PrismicNextImage className="w-full" field={post.data.featured_image} />
      </figure>
      <div className="card-body">
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
