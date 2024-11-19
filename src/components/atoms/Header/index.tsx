import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Menu,
  Heart,
  User,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useRouter } from "next/router";
import { useWishlist } from "@/contexts/wishlist-context";

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
      const isScrollingDown = prevScrollPos < currentScrollPos;

      // Show header if:
      // 1. Scrolling up
      // 2. At the top of the page (within first 10px)
      // 3. User hasn't scrolled much (less than 50px) to prevent jumpiness
      setVisible(
        !isScrollingDown ||
          currentScrollPos < 10 ||
          Math.abs(currentScrollPos - prevScrollPos) < 50
      );

      setPrevScrollPos(currentScrollPos);
    };

    // Add throttling to prevent too many updates
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [prevScrollPos]);

  return visible;
};

export const Header: React.FC<HeaderProps> = ({ header, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const { wishlistCount } = useWishlist();
  const visible = useScrollHeader();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  const handleWishlistClick = () => {
    router.push("/wishlist");
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/top-packages", label: "Tour Packages" },
    { href: "/top-excursions", label: "Short Excursions" },
    { href: "/nile-cruises", label: "Nile Cruises" },
    { href: "/blogs", label: "Blogs" },
  ];


   useEffect(() => {
     console.group("Wishlist Count Debug");
     console.log("Current Wishlist Count:", wishlistCount);
     console.groupEnd();
   }, [wishlistCount]);

   return (
     <>
       <header
         className={`fixed top-0 w-full z-40 bg-accent-white shadow-md transition-transform duration-300 ${
           !visible ? "-translate-y-full" : "translate-y-0"
         }`}
       >
         <div className="container mx-auto px-4 lg:px-8">
           <div className="flex items-center justify-between">
             {/* Logo */}
             <div className="flex-shrink-0 py-5 font-bold">
               <Link href="/" className="block">
                 Get Egypten Guide
               </Link>
             </div>

             {/* Desktop Menu */}
             <div className="hidden lg:flex justify-center flex-grow px-8">
               <DesktopMenu navLinks={navLinks} />
             </div>

             {/* Right side items */}
             <div className="flex items-center space-x-4">
               {/* Language Selector */}
               <div className="hidden lg:flex items-center space-x-2">
                 <button
                   className="focus:outline-none hover:text-gray-900 transition-colors"
                   onClick={handleLanguageChange}
                   title="Change Language"
                 >
                   <Globe className="w-5 h-5 text-primary-dark" />
                 </button>
                 <span className="text-primary-dark text-sm font-medium">
                   EN
                 </span>
               </div>

               <button
                 onClick={handleWishlistClick}
                 className="relative text-gray-600 hover:text-gray-900 transition-colors"
                 aria-label={`View wishlist containing ${wishlistCount} items`}
               >
                 <Heart className="w-5 h-5" />
                 {wishlistCount > 0 && (
                   <span
                     className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                     data-testid="wishlist-count"
                   >
                     {wishlistCount}
                   </span>
                 )}
               </button>

               {/* Tailored Made Button */}
               <Link
                 href="/inquire"
                 className="lg:flex hidden items-center text-primary-dark border border-primary-dark px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-light hover:text-accent-white hover:border-primary-light transition-colors duration-200"
               >
                 Tailored Made
               </Link>

               {/* Mobile Menu Toggle */}
               <button
                 className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                 onClick={() => setIsMenuOpen(true)}
                 aria-label="Toggle mobile menu"
               >
                 <Menu className="w-6 h-6 text-primary-dark hover:text-primary-light" />
               </button>
             </div>
           </div>
         </div>
       </header>

       {/* Mobile Menu */}
       <MobileMenu
         isOpen={isMenuOpen}
         onClose={() => setIsMenuOpen(false)}
         navLinks={navLinks}
         onLanguageChange={handleLanguageChange}
       />
     </>
   );
};

export default Header;
