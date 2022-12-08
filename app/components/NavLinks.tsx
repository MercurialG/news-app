"use client";

import { categories } from "../../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
type Props = {};

function NavLinks({}: Props) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    // grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7  gap-4
    <nav className="flex flex-wrap justify-center text-xs md:text-sm pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
