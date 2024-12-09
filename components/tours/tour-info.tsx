"use client"

import * as React from "react"

import { Activity, Clock, Heart, MapPin, Star, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BookingCalendar } from "@/components/tours/booking-calendar"

export const TourInfo = ({
  tourData,
}: {
  tourData: {
    id: string
    title: string
    description: string
    price: number
    rating: number
    reviewCount: number
    duration: string
    groupSize: string
    difficulty: string
    location: string
    images: string[]
    highlights: string[]
    itinerary: {
      day: number
      title: string
      description: string
      activities: string[]
    }[]
    included: string[]
    excluded: string[]
  }
}) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false)

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <Badge>{tourData.difficulty}</Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={cn(
                "size-5",
                isWishlisted && "fill-red-500 text-red-500"
              )}
            />
          </Button>
        </div>
        <h1 className="mb-2 text-3xl font-bold">{tourData.title}</h1>
        <div className="mb-4 flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span>{tourData.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <Star className="mr-1 size-4 text-yellow-400" />
            <span>{tourData.rating}</span>
            <span className="ml-1 text-muted-foreground">
              ({tourData.reviewCount} reviews)
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 size-4" />
            <span>{tourData.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 size-4" />
            <span>{tourData.groupSize}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Price per person</p>
            <p className="text-3xl font-bold">${tourData.price}</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Book Your Tour</DialogTitle>
              </DialogHeader>
              <BookingCalendar
                basePrice={tourData.price}
                maxGroupSize={tourData.groupSize}
              />
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-sm text-muted-foreground">
          * Price may vary depending on selected date
        </p>
      </div>

      <div className="prose max-w-none">
        <p>{tourData.description}</p>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Tour Highlights</h3>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {tourData.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Activity className="size-4 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
