"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ProductsMenu, ProductsMenuMobile } from "@/components/products-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#platform", label: "Platform" },
    { href: "#features", label: "Features" },
    { href: "#screens", label: "Screens" },
    { href: "#back-office", label: "Back Office" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Kernel Restaurant Suite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition">
              {link.label}
            </a>
          ))}
          <ProductsMenu />
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition font-semibold text-sm"
          >
            Request a Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ProductsMenuMobile onNavigate={() => setIsOpen(false)} />
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition font-semibold text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Request a Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
