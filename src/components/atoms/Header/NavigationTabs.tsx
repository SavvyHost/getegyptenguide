"use client";

import React from "react";
import Link from "next/link";
import {
  Bed,
  Compass,
  Ship,
  BookOpen,
  Package,
  Home,
  Plane,
} from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavigationTabsProps {
  navLinks: NavLink[];
  currentPath: string;
}

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "home":
      return Home;
    case "hotels":
      return Bed;
    case "planes":
      return Plane;
    case "tour packages":
      return Package;
    case "short excursions":
      return Compass;
    case "nile cruises":
      return Ship;
    case "blogs":
      return BookOpen;
    default:
      return Home;
  }
};

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  navLinks,
  currentPath,
}) => {
  return (
    <div className="bg-[#003580] border-t border-[#1a4b8f] lg:block hidden ">
      <div className="container mx-auto px-4">
        <nav className="overflow-x-auto">
          <div className="flex space-x-1 py-1 min-w-max">
            {navLinks.map(({ href, label }) => {
              const Icon = getIcon(label);
              const isActive = currentPath === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center px-4 py-2 rounded-sm text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-white text-[#003580]"
                      : "text-white hover:bg-[#004bb0]"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationTabs;
