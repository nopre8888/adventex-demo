import Image from "next/image"
import Link from "next/link"

import { MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Tour {
  id: string
  tourCode: string
  title: string
  description: string
  image: string
  duration: string
  location: string
  prices: {
    shared?: number
    single?: number
    default?: number
  }
}

interface TourCardProps {
  tour: Tour
  viewMode: "grid" | "list"
}

export const TourCard = ({ tour, viewMode }: TourCardProps) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden shadow-none transition-shadow hover:shadow-md",
        viewMode === "list" && "flex flex-col md:flex-row"
      )}
    >
      <div
        className={cn("relative", viewMode === "list" ? "md:w-1/3" : "w-full")}
      >
        <Image
          src={tour.image}
          alt={tour.title}
          height={2977}
          width={3951}
          className="h-64 w-full bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          viewMode === "list" && "md:max-w-2xl"
        )}
      >
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{tour.location}</span>
          </div>
          <CardTitle className="text-sm font-medium">{tour.title}</CardTitle>
          <CardDescription className="line-clamp-2 leading-normal">
            {tour.description}
          </CardDescription>
        </CardHeader>

        <CardFooter
          className={cn(
            "mt-auto space-x-2",
            viewMode === "list" && "md:justify-end"
          )}
        >
          <Button asChild>
            <Link href={`/tours/${tour.id}`}>ดูรายละเอียด</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
