import Image from "next/image"

import {
  Activity,
  CalendarRange,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BookingCalendar } from "@/components/blogs/booking-calendar"

// In a real app, this would come from an API
const tourBlogs = {
  "1": {
    title: "Bali Paradise Explorer: A Journey Through the Island of Gods",
    subtitle:
      "Discover the magic of Bali through our carefully curated 10-day adventure",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 2499,
    rating: 4.8,
    duration: "10 days",
    groupSize: "12 max",
    difficulty: "Easy",
    location: "Bali, Indonesia",
    sections: [
      {
        title: "Journey Overview",
        content:
          "Embark on a transformative journey through Bali, where ancient traditions meet natural wonders. Our 10-day adventure takes you from pristine beaches to mystical temples, through emerald rice terraces, and into the heart of Balinese culture.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      },
      {
        title: "Cultural Immersion",
        content:
          "Experience the rich tapestry of Balinese culture through traditional dance performances, temple ceremonies, and authentic cooking classes. Learn the art of offering-making and participate in ancient rituals guided by local spiritual leaders.",
        image: "https://images.unsplash.com/photo-1604841940360-c6461033e060",
      },
      {
        title: "Natural Wonders",
        content:
          "Trek through the stunning Tegalalang rice terraces, witness the sunrise from Mount Batur, and snorkel in the crystal-clear waters of Nusa Penida. Each day brings new adventures in Bali's diverse landscapes.",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      },
    ],
    highlights: [
      "Sunrise trek to Mount Batur",
      "Traditional blessing ceremony at Tirta Empul",
      "Cooking class in Ubud",
      "Snorkeling at Nusa Penida",
      "Visit to ancient temples",
      "Rice terrace walking tour",
    ],
    includes: [
      "Luxury villa accommodation",
      "Daily breakfast and select meals",
      "Professional English-speaking guide",
      "All entrance fees",
      "Private transportation",
      "Airport transfers",
    ],
  },
}

export default async function TourBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = tourBlogs[slug as keyof typeof tourBlogs]

  if (!blog) {
    return <div>Tour not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge className="mb-4">{blog.difficulty}</Badge>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              {blog.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="border-y bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{blog.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Group Size</p>
                <p className="font-medium">{blog.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{blog.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-5 text-yellow-400" />
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="font-medium">{blog.rating} / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-12 lg:col-span-2">
            {blog.sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <Image
                  src={section.image}
                  alt={section.title}
                  height={2977}
                  width={3951}
                  className="h-[400px] w-full rounded-lg object-cover"
                />
                <p className="leading-relaxed text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Tour Highlights */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Tour Highlights</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {blog.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Activity className="size-5 text-primary" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What&apos;s Included</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {blog.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <DollarSign className="size-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="space-y-6 rounded-lg border bg-white p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold">${blog.price}</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">
                      Book This Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Book Your Tour</DialogTitle>
                    </DialogHeader>
                    <BookingCalendar
                      basePrice={blog.price}
                      maxGroupSize={blog.groupSize}
                    />
                  </DialogContent>
                </Dialog>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2 flex items-center gap-2">
                    <CalendarRange className="size-4" />
                    Free cancellation up to 24h before the tour
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="size-4" />
                    Small groups or private tours available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
