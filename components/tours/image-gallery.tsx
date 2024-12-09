"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export const ImageGallery = ({
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
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={tourData.images[selectedImage]}
          alt={tourData.title}
          height={2977}
          width={3951}
          className="size-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {tourData.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg",
              selectedImage === index && "ring-2 ring-primary"
            )}
          >
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              height={2977}
              width={3951}
              className="size-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
