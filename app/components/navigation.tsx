"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <li>
        <Link href="/">Home</Link> {path === "/" && "⬅️"}
      </li>
      <li>
        <Link href="/about-us">AboutUs</Link> {path === "/about-us" && "⬅️"}
      </li>
    </nav>
  );
}

export default Navigation;
