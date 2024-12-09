import { Activity, DollarSign } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/tours/image-gallery"
import { TourInfo } from "@/components/tours/tour-info"

// In a real app, this would come from an API
const tourData = {
  id: "1",
  title: "Bali Paradise Explorer",
  description:
    "Experience the magic of Bali through this carefully curated 10-day adventure that takes you from pristine beaches to ancient temples, lush rainforests, and vibrant cultural sites.",
  price: 2499,
  rating: 4.8,
  reviewCount: 124,
  duration: "10 days",
  groupSize: "12 max",
  difficulty: "Easy",
  location: "Bali, Indonesia",
  images: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
  ],
  highlights: [
    "Visit the iconic Tanah Lot temple at sunset",
    "Trek through the stunning Tegalalang rice terraces",
    "Snorkel in crystal-clear waters of Nusa Penida",
    "Experience traditional Balinese dance performances",
    "Stay in luxury villas with private pools",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Denpasar",
      description:
        "Welcome to Bali! Transfer to your luxury villa in Seminyak, followed by a welcome dinner.",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"],
    },
    {
      day: 2,
      title: "Exploring Ubud",
      description:
        "Discover the cultural heart of Bali with visits to ancient temples and art galleries.",
      activities: [
        "Temple visits",
        "Art gallery tour",
        "Traditional dance show",
      ],
    },
    {
      day: 3,
      title: "Rice Terraces & Waterfalls",
      description:
        "Trek through the famous Tegalalang rice terraces and visit hidden waterfalls.",
      activities: ["Rice terrace trek", "Waterfall swimming", "Local lunch"],
    },
  ],
  included: [
    "Luxury accommodation",
    "Daily breakfast and select meals",
    "Professional English-speaking guide",
    "All entrance fees",
    "Private transportation",
    "Airport transfers",
  ],
  excluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Optional activities",
  ],
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  console.log({ slug })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ImageGallery tourData={tourData} />

          {/* Tour Info */}
          <TourInfo tourData={tourData} />
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="itinerary" className="mt-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="included">What&apos;s Included</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="itinerary" className="mt-6">
            <div className="space-y-8">
              {tourData.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="relative border-l-2 border-gray-200 pb-8 pl-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary" />
                  <div>
                    <h3 className="mb-2 font-semibold">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {day.description}
                    </p>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Activity className="size-4 text-primary" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="included" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <DollarSign className="size-5 text-primary" />
                  What&apos;s Included
                </h3>
                <ul className="space-y-2">
                  {tourData.included.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Activity className="size-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <DollarSign className="size-5 text-primary" />
                  What&apos;s Not Included
                </h3>
                <ul className="space-y-2">
                  {tourData.excluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Activity className="size-4 text-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Reviews coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
