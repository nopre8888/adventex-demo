"use client"

import { usePathname } from "next/navigation"

import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNavigation() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>เมนู</SheetTitle>
          <SheetDescription>เลือกหมวดหมู่ที่คุณสนใจ</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a
                href="/"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/" ? "text-primary" : "hover:text-primary"
                )}
              >
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="/tours"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/tours" ? "text-primary" : "hover:text-primary"
                )}
              >
                แพ็คเกจ
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/blogs" ? "text-primary" : "hover:text-primary"
                )}
              >
                บทความ
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/about" ? "text-primary" : "hover:text-primary"
                )}
              >
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/contact"
                    ? "text-primary"
                    : "hover:text-primary"
                )}
              >
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
