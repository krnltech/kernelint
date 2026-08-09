"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { products } from "@/features/landing/data/landing-data"

/**
 * Cross-product navigation for the product microsite headers. Styled with theme
 * tokens so it works on the product pages; the company-site header in
 * `features/landing/components/Header.tsx` has its own light-theme version.
 */
export function ProductsMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition"
      >
        Products
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-2">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200 group/item"
                onClick={() => setIsOpen(false)}
              >
                <product.icon size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <span className="block font-semibold group-hover/item:text-primary transition-colors">
                    {product.name}
                  </span>
                  <span className="block text-xs text-foreground/60 mt-0.5">{product.tagline}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/** Flat product list for mobile drawers, where a hover dropdown is unusable. */
export function ProductsMenuMobile({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div>
      <div className="text-foreground/80 font-medium">Products</div>
      <div className="mt-1 ml-3 border-l border-border pl-3 space-y-1">
        {products.map((product) => (
          <Link
            key={product.href}
            href={product.href}
            className="block py-1.5 text-sm text-foreground/70 hover:text-primary transition"
            onClick={onNavigate}
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
