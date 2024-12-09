import * as React from "react"

import { LayoutGrid, List, Search, SlidersHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TourFilters } from "@/components/tours/tour-filters"

interface TourSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  totalCount?: number
}

interface TourSearchHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  totalCount?: number
}

interface TourSearchControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  searchQuery: string
  onSearchChange: (value: string) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}

const TourSearch = React.forwardRef<HTMLDivElement, TourSearchProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-4 md:flex-row",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TourSearch.displayName = "TourSearch"

const TourSearchHeader = React.forwardRef<
  HTMLDivElement,
  TourSearchHeaderProps
>(({ className, totalCount, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      <h2 className="text-2xl font-semibold">ค้นหาแพ็คเกจ</h2>
      <p className="text-sm text-muted-foreground">
        พบทั้งหมด{" "}
        <span className="font-medium text-orange-500">{totalCount}</span> รายการ
      </p>
    </div>
  )
})
TourSearchHeader.displayName = "TourSearchHeader"

const TourSearchControls = React.forwardRef<
  HTMLDivElement,
  TourSearchControlsProps
>(
  (
    {
      className,
      searchQuery,
      onSearchChange,
      viewMode,
      onViewModeChange,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex w-full items-center gap-4 md:w-auto", className)}
        {...props}
      >
        <div className="relative flex-1 md:w-64">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search tours..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Mobile Filters */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>กรองแพ็คเกจท่องเที่ยว</SheetTitle>
                <SheetDescription>
                  กรองแพ็คเกจท่องเที่ยวตามความต้องการของคุณ
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <TourFilters />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex rounded-md border">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none transition-colors hover:bg-primary/10"
            onClick={() => onViewModeChange("grid")}
          >
            <LayoutGrid
              className={cn("size-4", viewMode === "grid" && "text-primary")}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none transition-colors hover:bg-primary/10"
            onClick={() => onViewModeChange("list")}
          >
            <List
              className={cn("size-4", viewMode === "list" && "text-primary")}
            />
          </Button>
        </div>
      </div>
    )
  }
)
TourSearchControls.displayName = "TourSearchControls"

export { TourSearch, TourSearchHeader, TourSearchControls }
