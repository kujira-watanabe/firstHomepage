"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#hero", label: "はじめに" },
  { href: "#features", label: "特徴" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#instructor", label: "講師紹介" },
  { href: "#best-effort", label: "正直告知" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow duration-300",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link
          href="#hero"
          className="font-sans text-lg font-black tracking-tight text-foreground hover:text-accent transition-colors"
        >
          AI実践起業塾
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="#cta">無料カウンセリング</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border bg-card"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-medium text-foreground/80 hover:text-accent border-b border-border transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Link href="#cta" onClick={() => setIsOpen(false)}>
                  無料カウンセリング
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
