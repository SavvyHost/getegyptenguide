import React, { useState } from "react";
import { Share2, Facebook, Copy, Link } from "lucide-react";
import { WhatsAppIcon } from "@/components/atoms/icons/WhatsAppIcon";

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copyText, setCopyText] = useState("Copy Link");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyText("Copied!"); // Update the button text
      setTimeout(() => setCopyText("Copy Link"), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (platform: string) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-[99999] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <button
              onClick={() => handleShare("facebook")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              role="menuitem"
            >
              <Facebook className="w-4 h-4 mr-3" color="blue" />
              Share on Facebook
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              role="menuitem"
            >
              <div className="mr-2">
                <WhatsAppIcon />
              </div>
              Share on WhatsApp
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full border-t"
              role="menuitem"
            >
              <Link className="w-4 h-4 mr-3" />
              {copyText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
