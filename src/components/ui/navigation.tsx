import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import NavigationItem from "@/slices/NavigationItem";

export default async function Navigation() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <SliceZone
          slices={navigation.data.slices}
          components={{ navigation_item: NavigationItem }}
        />
      </ul>
    </nav>
  );
}
