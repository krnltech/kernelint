"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">SecureVision</div>

        {/* Desktop Navigation */}
        {/*<nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-foreground/80 hover:text-primary transition">
            Features
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-primary transition">
            Solutions
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition">
            Pricing
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition">
            Contact
          </a>
          <Button size="sm">Get Started</Button>
        </nav> /*}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground/80 hover:text-primary transition">
              Features
            </a>
            <a href="#solutions" className="text-foreground/80 hover:text-primary transition">
              Solutions
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition">
              Pricing
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition">
              Contact
            </a>
            <Button className="w-full">Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
