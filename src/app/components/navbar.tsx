"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons for mobile menu

const navItems = [
  { name: "How it Works", href: "#how-it-works", activeColor: "bg-purple-900" },
  { name: "Partner", href: "#partner", activeColor: "bg-yellow-600" },
  { name: "Roadmap", href: "#roadmap", activeColor: "bg-purple-300" },
  { name: "About Us", href: "#about-us", activeColor: "bg-yellow-500" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/90 backdrop-blur-sm fixed w-full z-50 border-b border-yellow-500/50 overflow-hidden">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="SynthOS Logo"
                width={150}
                height={150}
                className="w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center h-full flex-grow justify-between">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  ${
                    activeItem === item.name
                      ? `text-white ${item.activeColor}`
                      : "text-white hover:text-yellow-300"
                  }
                  h-20 flex items-center justify-center px-2 md:px-3 lg:px-4 text-sm md:text-base lg:text-lg font-medium transition-colors flex-1 whitespace-nowrap
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Launch App Button (right-aligned) */}
          <div className="hidden md:block flex-shrink-0 ml-2">
            <Link
              href="https://app.synthos.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-md font-medium transition-colors text-sm md:text-base lg:text-lg whitespace-nowrap"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-end p-2 rounded-md text-purpleTheme hover:text-purple-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 border-t border-yellow-500/20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
              className={`
                ${
                  activeItem === item.name
                    ? `${item.activeColor} text-yellow-300 border-l-4 border-yellow-400`
                    : "text-white hover:text-yellow-300 border-l-4 border-transparent"
                }
                block pl-3 pr-4 py-2 text-base font-medium whitespace-nowrap
              `}
            >
              {item.name}
            </Link>
          ))}
          {/* Launch App in mobile menu */}
          <Link
            href="https://app.synthos.fun"
            onClick={() => setIsMenuOpen(false)}
            className="block pl-3 pr-4 py-2 text-base font-medium mt-4 bg-yellow-500 text-white rounded-md mx-4 whitespace-nowrap"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
} 