"use client"

import * as React from "react"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

import { tours, type TourType } from "@/lib/tours"
import { cn } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  PageHero,
  PageHeroContent,
  PageHeroDescription,
  PageHeroFooter,
  PageHeroImage,
  PageHeroItem,
  PageHeroText,
  PageHeroTitle,
} from "@/components/shared/page-hero"
import {
  TourSearch,
  TourSearchControls,
  TourSearchHeader,
} from "@/components/shared/tour-search"
import { TourCard } from "@/components/tours/tour-card"
import { TourFilters } from "@/components/tours/tour-filters"

type ViewMode = "grid" | "list"

export default function TourPackages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TourPackagesContent />
    </Suspense>
  )
}

function TourPackagesContent() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)

  const searchParams = useSearchParams()
  const type = searchParams.get("type") as TourType

  const itemsPerPage = viewMode === "grid" ? 9 : 5

  const pageHeroData = {
    study: {
      title: "แพ็คเกจเรียนต่อ",
      description:
        "ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร",
      image: "/images/tours/study-tour-hero.png",
    },
    travel: {
      title: "แพ็คเกจท่องเที่ยว",
      description:
        "ค้นพบประสบการณ์การท่องเที่ยวที่น่าจดจำกับแพ็คเกจทัวร์ที่หลากหลายของเรา เราคัดสรรสถานที่ท่องเที่ยวยอดนิยมและกิจกรรมที่น่าสนใจมาให้คุณได้เลือกสรร",
      image: "/images/tours/travel-tour-hero.png",
    },
  }

  const filteredTours = tours.filter((tour) => {
    // Text search
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  // Reset to first page when view mode, search, or filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [viewMode, searchQuery, searchParams])

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTours = filteredTours.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <article className="container mx-auto p-4">
      <PageHero>
        <PageHeroContent>
          <PageHeroItem>
            <PageHeroImage
              src={pageHeroData[type].image}
              alt={pageHeroData[type].title}
              width={1200}
              height={400}
            />
            <PageHeroText>
              <PageHeroTitle>{pageHeroData[type].title}</PageHeroTitle>
              <PageHeroDescription>
                {pageHeroData[type].description}
              </PageHeroDescription>
            </PageHeroText>
          </PageHeroItem>
        </PageHeroContent>
        <PageHeroFooter />
      </PageHero>

      <TourSearch>
        <TourSearchHeader totalCount={filteredTours.length} />
        <TourSearchControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </TourSearch>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Desktop Filters */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-24 rounded-lg border bg-white p-6">
            <h2 className="mb-6 text-sm font-semibold">
              เลือกการแสดงผลแพ็คเกจ
            </h2>
            <TourFilters />
          </div>
        </aside>

        {/* Tour Grid */}
        <div className="flex-1">
          <div
            className={cn(
              "grid gap-2",
              viewMode === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            )}
          >
            {paginatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 grid grid-cols-2 items-center gap-4">
              <div className="hidden text-sm text-muted-foreground md:block">
                แสดงผลลัพธ์ {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, filteredTours.length)}{" "}
                จากทั้งหมด {filteredTours.length} รายการ
              </div>
              <div className="text-sm text-muted-foreground md:hidden">
                {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, filteredTours.length)} จาก{" "}
                {filteredTours.length}
              </div>
              <Pagination className="justify-end">
                <PaginationContent>
                  <PaginationItem>
                    {currentPage === 1 ? (
                      <PaginationPrevious
                        href="#"
                        className="pointer-events-none opacity-50"
                      />
                    ) : (
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }}
                      />
                    )}
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
                      // Show first page, last page, current page, and pages around current
                      const shouldShowPage =
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(currentPage - page) <= 1

                      if (!shouldShowPage) {
                        // Show ellipsis if there's a gap
                        if (page === 2 || page === totalPages - 1) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )
                        }
                        return null
                      }

                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(page)
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    }
                  )}

                  <PaginationItem>
                    {currentPage === totalPages ? (
                      <PaginationNext
                        href="#"
                        className="pointer-events-none opacity-50"
                      />
                    ) : (
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }}
                      />
                    )}
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
