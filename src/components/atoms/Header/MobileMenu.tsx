<<<<<<< HEAD
"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  Globe,
  Bed,
  Compass,
  Ship,
  BookOpen,
  Package,
  Home,
} from "lucide-react";

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "home":
      return Home;
    case "hotels":
      return Bed;
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

const MobileMenu = ({ isOpen, onClose, navLinks, onLanguageChange }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 bg-[#003580] text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-[#004bb0] rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => {
                  const Icon = getIcon(label);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        onClick={onClose}
                      >
                        <Icon className="w-5 h-5 mr-3 text-[#003580]" />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="p-4 border-t">
            <Link
              href="/inquire"
              className="flex items-center justify-center w-full bg-[#003580] text-white px-4 py-2 rounded font-medium hover:bg-[#004bb0]"
              onClick={onClose}
            >
              Tailored Made
            </Link>
            <button
              onClick={onLanguageChange}
              className="flex items-center justify-center w-full mt-3 px-4 py-2 text-[#003580] hover:bg-gray-100 rounded"
            >
              <Globe className="w-5 h-5 mr-2" />
              Change Language
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
        />
=======
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
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
      )}
    </>
  );
};

export default MobileMenu;
