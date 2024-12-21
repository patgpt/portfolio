import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Navigation() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <nav>
      <ul>
        {/* Renders top-level links */}
        {navigation.data.slices.map((slice) => (
          <li key={slice.id}>
            <PrismicNextLink field={slice.primary.link} />
            {/* Renders child links, if present */}
            {slice.items.length > 0 && (
              <ul>
                {slice.items.map((item) => (
                  <li key={JSON.stringify(item)}>
                    {/* @ts-expect-error - gotta type this correctly*/}
                    <PrismicNextLink field={item.child_link} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
