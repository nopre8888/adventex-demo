"use client"

import * as React from "react"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const slides = [
    "https://cdn.weon.website/WOW/8546/MainSlider/33027.jpg?v=23",
    "https://cdn.weon.website/WOW/8546/MainSlider/33329.jpg?v=46",
    "https://cdn.weon.website/WOW/8546/MainSlider/32655.jpg?v=18",
    "https://cdn.weon.website/WOW/8546/MainSlider/33027.jpg?v=23",
    "https://cdn.weon.website/WOW/8546/MainSlider/33329.jpg?v=46",
    "https://cdn.weon.website/WOW/8546/MainSlider/32655.jpg?v=18",
  ]

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={300}
                className="size-full rounded-lg object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      current === i ? "w-8 bg-white" : "w-2 bg-white/50"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
