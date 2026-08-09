"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/landing-data";

type NavKey = "home" | "about" | "services" | "expertise";

interface HeaderProps {
  /** Which nav item to mark as the current page */
  active?: NavKey;
}

const navLinks: { key: NavKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "services", href: "/services", label: "Services" },
  { key: "expertise", href: "/#expertise", label: "Expertise" },
];

export function Header({ active }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the landing page "Home" scrolls to the top rather than re-navigating
  const homeHref = active === "home" ? "#home" : "/";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center animate-fade-in-left">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/kernel-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={222}
                  height={456}
                  priority
                  className="h-11 w-auto"
                />
                <span>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent cursor-pointer">
                    Kernel International
                  </h1>
                  <span className="block text-xs text-gray-500 font-mono tracking-wider">
                    EST. 2013
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block animate-fade-in-up">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.key === "home" ? homeHref : link.href}
                  className={
                    active === link.key
                      ? "text-primary font-medium relative group"
                      : "text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
                  }
                >
                  {link.label}
                  <span
                    className={
                      active === link.key
                        ? "absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                        : "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                    }
                  ></span>
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  aria-expanded={isProductsOpen}
                  className="flex items-center gap-1 text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>

                {isProductsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                      {products.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200 group/item"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <product.icon
                            size={20}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <span>
                            <span className="block font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                              {product.name}
                            </span>
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {product.tagline}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.key === "home" ? homeHref : link.href}
                className={`block px-3 py-2 font-medium ${
                  active === link.key
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-3 py-2">
              <div className="text-gray-700 font-medium">Products</div>
              <div className="mt-1 ml-3 border-l border-gray-200 pl-3 space-y-1">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
