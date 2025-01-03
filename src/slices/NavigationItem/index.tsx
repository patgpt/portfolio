import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FilledLinkToDocumentField } from "@prismicio/types";
import type { JSX } from "react";

type NavigationItemType = {
  child_link: FilledLinkToDocumentField<string, string, { title: string }>;
};

export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice>;

const NavigationItem = ({ slice }: NavigationItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.length > 0 ? (
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="link-hover link link-primary mr-2 transform no-underline transition-transform duration-200 hover:scale-110">
              <PrismicNextLink className="" field={slice.primary.link}>
                {slice.primary.link.text}
              </PrismicNextLink>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {slice.items.map((item: NavigationItemType, index) => (
              <li key={index}>
                <div className="transform transition-transform duration-200 hover:scale-110">
                  <PrismicNextLink field={item.child_link}>
                    {item.child_link.data?.title}
                  </PrismicNextLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mr-4 transform no-underline transition-transform duration-200 hover:scale-110">
          <PrismicNextLink
            className="link no-underline underline-offset-2 hover:text-primary hover:underline"
            field={slice.primary.link}
          >
            {slice.primary.link.text}
          </PrismicNextLink>
        </div>
      )}
    </section>
  );
};

export default NavigationItem;
