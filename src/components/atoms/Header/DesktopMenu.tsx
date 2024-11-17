import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopMenu = ({ navLinks }) => {
  const router = useRouter();

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-6">
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className={`relative transition-transform duration-500`}
          >
            <Link
              href={href}
              className={`font-semibold text-sm relative ${
                router.pathname === href
                  ? `text-primary-light after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 after:scale-x-100`
                  : `text-primary-dark hover:text-primary-light after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100`
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
