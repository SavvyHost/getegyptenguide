"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Heart, Menu, Globe } from "lucide-react";
import { useWishlist } from "@/contexts/wishlist-context";
import MobileMenu from "./MobileMenu";
import NavigationTabs from "./NavigationTabs";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  header?: unknown;
  className?: string;
}

const useScrollHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return visible;
};

export const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { wishlistCount } = useWishlist();
  const visible = useScrollHeader();

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/hotels", label: "Hotels" },
    { href: "/top-packages", label: "Tour Packages" },
    { href: "/top-excursions", label: "Short Excursions" },
    { href: "/nile-cruises", label: "Nile Cruises" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <>
      <header
        className={` fixed top-0 w-full z-40 transition-transform duration-300 ${
          !visible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#003580] text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="lg:text-2xl text-lg font-bold">
                Get Egypten Guide
              </Link>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLanguageChange}
                  className="flex items-center space-x-2 hover:bg-[#004bb0] px-3 py-1.5 rounded"
                >
                  <Globe className="w-5 h-5" />
                  <span className="hidden sm:inline">EGP</span>
                </button>

                <button
                  onClick={() => router.push("/wishlist")}
                  className="relative hover:bg-[#004bb0] p-1.5 rounded"
                >
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                <Link
                  href="/inquire"
                  className="hidden sm:block bg-white text-[#003580] px-4 py-1.5 rounded font-medium hover:bg-gray-100"
                >
                  Tailored Made
                </Link>

                <button
                  className="lg:hidden text-white hover:bg-[#004bb0] p-1.5 rounded"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs navLinks={navLinks} currentPath={router.pathname} />
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
};
