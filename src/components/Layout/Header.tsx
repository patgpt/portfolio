import Navigation from "@/components/Navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

async function Header() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "global-navigation");

  return (
    <header className="navbar sticky top-0 z-50 bg-base-100/50 shadow-2xl backdrop-blur-sm">
      <div className="navbar-start">
        <Link className="prose prose-2xl ml-8 font-display" href="/">
          <span className="font-display">Patrick Kelly</span>
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMenu className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 font-sans shadow"
          >
            {navigation.data.slices.map((item, index) => (
              <li key={index}>
                <PrismicNextLink
                  field={item.primary.link}
                  className="btn btn-ghost"
                >
                  {item.primary.link.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navigation />
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
