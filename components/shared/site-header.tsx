"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"

export const SiteHeader = () => {
  const pathname = usePathname()

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[72px] border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="pl-1 text-2xl font-bold text-primary">
          ADVENTEX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-base font-normal transition-colors",
                pathname === "/" ? "text-primary" : "hover:text-primary"
              )}
            >
              หน้าแรก
            </Link>

            <DesktopNavigation />

            <Link
              href="/blogs"
              className={cn(
                "px-4 py-2 transition-colors",
                pathname === "/blogs" ? "text-primary" : "hover:text-primary"
              )}
            >
              บทความ
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-4 py-2 transition-colors",
                pathname === "/about" ? "text-primary" : "hover:text-primary"
              )}
            >
              เกี่ยวกับเรา
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 transition-colors",
                pathname === "/contact" ? "text-primary" : "hover:text-primary"
              )}
            >
              ติดต่อเรา
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  )
}
