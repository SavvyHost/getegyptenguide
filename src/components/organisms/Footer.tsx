import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import useFetch from "@/hooks/UseFetch";
import LOGO from "../../../public/assets/raisen.png";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["settings?collection=contact"],
    endpoint: `settings?collection=contact`,
  });

  const contactInfo = data?.data[3]?.value || {
    companyName: "Egypt Rasain Tours",
    email: "dcjdjdjjd",
    phone: "kdkdkkdkd",
    address: "lddkdkkkd",
    footerDesc: "lkddldlld",
    whatsApp: "lddldlldll",
  };

  const learnMoreLinks = [
    { title: "Terms Condition", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Contact", href: "/contact" },
    { title: "About Us", href: "/about" },
    { title: "FAQ", href: "/faq" },
  ];

  const countries = ["Egypt", "Saudi Arabia", "Oman", "Qatar"];

  const socialLinks = [
    { platform: "Facebook", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "Twitter", url: "#" },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return <Facebook className="w-6 h-6" />;
      case "LinkedIn":
        return <Linkedin className="w-6 h-6" />;
      case "Instagram":
        return <Instagram className="w-6 h-6" />;
      case "Twitter":
        return <Twitter className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-100 px-6 py-5 font-sans tracking-wide mt-2 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            {/* <Image src={LOGO} alt="Logo" width={250} height={150} /> */}
            Get Egypten Guide
            <div className="mt-8 space-y-2 ">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-primary-dark" />
                <span className="text-gray-700">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary-dark" />
                <span className="text-gray-700">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Learn More
            </h4>
            <ul className="space-y-2">
              {learnMoreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-base hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Countries
            </h4>
            <ul className="space-y-2">
              {countries.map((country, index) => (
                <li key={index} className="text-gray-600 text-base">
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Follow Us
            </h4>
            <ul className="flex items-center justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className="text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {contactInfo.footerDesc && (
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p dangerouslySetInnerHTML={{ __html: contactInfo.footerDesc }} />
          </div>
        )}
      </div>
      <div className="bg-gray-200 py-4 mt-8 text-center text-gray-600 text-base">
        <p>
          © {new Date().getFullYear()} {contactInfo.companyName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
