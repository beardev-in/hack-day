import Link from "next/link";
import Image from "next/image";
import {
  DiscIcon as Discord,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Discord, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="w-full bg-[#111111] py-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Initiative By */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-sm font-medium mb-4">
              An Initiative By
            </h3>
            <Image
              src="/placeholder.svg"
              alt="AngelHack"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-sm font-medium mb-6">
              Stay Connected
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-white/90 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#111111]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <Link
              href="#code-of-conduct"
              className="text-white hover:text-white/80 text-sm transition-colors"
            >
              Code of Conduct
            </Link>
            <Link
              href="#privacy-policy"
              className="text-white hover:text-white/80 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms-of-service"
              className="text-white hover:text-white/80 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
