import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import NavigationItem from "@/slices/NavigationItem";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const components = {
  navigation_item: NavigationItem,
};

async function Footer() {
  const client = createClient();
  const legal = await client.getByUID("navigation", "navigation-legal");
  // const company = await client.getByUID("navigation", "navigation-company");
  // const services = await client.getByUID("navigation", "navigation-services");

  return (
    <footer className="footer relative w-full bg-base-300 p-10 text-base-content">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Services</h6>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <nav className="flex-col">
            <SliceZone slices={legal.data.slices} components={components} />
          </nav>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link href="https://www.twitter.com">
              <FaXTwitter className="h-6 w-6" />
            </Link>
            <Link href="https://www.twitter.com">
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
