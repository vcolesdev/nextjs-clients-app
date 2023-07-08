"use client";

import useNav from "@/api/hooks/components/useNav";
import { NavContainer } from "@/components/Navigation/NavContainer";
import { NavMenu } from "@/components/Navigation/NavMenu";
import { NavItem } from "@/components/Navigation/NavItem";
import { NavLink } from "@/components/Navigation/NavLink";
import { usePathname } from "next/navigation";

export function Navigation() {
  const { getRoute, links: navLinks } = useNav();

  // Get the current route from the pathname.
  const pathname = usePathname();
  const currentRoute = getRoute(pathname);

  // Define the classes for the active and inactive links.
  const linkClasses = `
    bg-transparent font-semibold text-gray-500 hover:bg-slate-100 hover:text-gray-700 active:bg-slate-200
  `;
  const activeClasses = `
    bg-violet-50 font-semibold text-violet-500 active:bg-violet-100
  `;

  return (
    <NavContainer navClasses="nav">
      <NavMenu menuClasses="nav__menu">
        {navLinks ? (
          navLinks.map((link) => (
            <NavItem key={link.title} itemClasses="nav__item">
              <NavLink
                linkClasses={`nav__link ${
                  currentRoute === getRoute(link.route)
                    ? activeClasses
                    : linkClasses
                }`}
                href={link.route}
                label={link.title}
              />
            </NavItem>
          ))
        ) : (
          <p>Error fetching nav items...</p>
        )}
      </NavMenu>
    </NavContainer>
  );
}
