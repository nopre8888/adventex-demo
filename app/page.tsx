import { CityHighlights } from "@/components/home/city-highlights"
import { FeaturedTours } from "@/components/home/featured-tours"
import { Gallery } from "@/components/home/gallery"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { SearchDestinations } from "@/components/home/search-destinations"
import { Testimonials } from "@/components/home/testimonials"

export default function Home() {
  return (
    <article className="container mx-auto grid gap-8 px-4 py-8 lg:gap-16">
      <HeroCarousel />
      <SearchDestinations />
      <CityHighlights />
      <FeaturedTours />
      <Testimonials />
      <Gallery />
    </article>
  )
}
