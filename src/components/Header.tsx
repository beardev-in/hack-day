"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/0x.Day-white.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Overview",
    "Guidelines",
    "BUIDL Statements",
    "Prizes",
    "Partner With Us",
    "2024 Cities",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="0x.Day"
              width={1000}
              height={32}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={item}
                  onClick={() => {
                    const targetSection = document.getElementById(sectionId);
                    if (sectionId) {
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#login"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Login
            </Link>
            <Link
              href="#register"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Register
            </Link>
            <button
              className="text-white hover:text-white/80 p-2"
              aria-label="Change language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              className="text-white hover:text-white/80 p-2"
              aria-label="Change language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 p-2"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Hack Global"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-white/80 p-2"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <nav className="flex-grow">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-lg font-medium text-white hover:text-white/80 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto space-y-4">
                  <Link
                    href="#login"
                    className="inline-flex w-full h-12 items-center justify-center rounded-full border border-white px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="#registerr"
                    className="inline-flex w-full h-12 items-center justify-center rounded-full border border-white px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
