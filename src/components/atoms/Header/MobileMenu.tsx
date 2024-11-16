import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navLinks, onLanguageChange }) => {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setBgVisible(true); // Show background after sidebar is fully open
    } else {
      setBgVisible(false); // Hide background when sidebar closes
    }
  }, [isOpen]);

  return (
    <>
      {/* Right-Side Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 bg-accent-white lg:hidden`}
      >
        <nav className="relative z-10 px-8 py-4 h-full">
          {/* Close Button and Menu Title */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={onClose}
              className="text-primary-dark hover:text-primary-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-primary-dark hover:text-primary-light transition-colors"
                  onClick={onClose}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/inquire"
            className="block py-2 text-primary-dark hover:text-primary-light transition-colors"
          >
            Tailored Made
          </Link>
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-primary-dark transition-opacity duration-300 ${
            bgVisible ? "opacity-65" : "opacity-0"
          }`}
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
