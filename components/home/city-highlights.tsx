import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

const cities = [
  {
    name: "HARBIN",
    image: "/images/city/harbin.jpg",
    href: "/destinations/harbin",
  },
  {
    name: "SHANGHAI",
    image: "/images/city/shanghai.jpg",
    href: "/destinations/shanghai",
  },
  {
    name: "CHENGDU",
    image: "/images/city/chengdu.jpg",
    href: "/destinations/chengdu",
  },
  {
    name: "BEIJING",
    image: "/images/city/beijing.jpg",
    href: "/destinations/beijing",
  },
  {
    name: "GUANGZHOU",
    image: "/images/city/guangzhou.jpg",
    href: "/destinations/guangzhou",
  },
  {
    name: "CHONGQING",
    image: "/images/city/chongqing.jpg",
    href: "/destinations/chongqing",
  },
]

export const CityHighlights = () => {
  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">เมืองยอดนิยม</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground"></p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        {/* Left side - 6 columns */}
        <div className="grid gap-4 md:col-span-6">
          {/* Top wide card */}
          <Link href={cities[0].href}>
            <Card className="group overflow-hidden">
              <CardContent className="relative aspect-[16/9] p-0 sm:aspect-[3/2]">
                <Image
                  src={cities[0].image}
                  alt={cities[0].name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="mb-1 font-semibold">{cities[0].name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Bottom two cards */}
          <div className="grid grid-cols-2 gap-4">
            {cities.slice(1, 3).map((city) => (
              <Link key={city.name} href={city.href}>
                <Card className="group overflow-hidden">
                  <CardContent className="relative p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - 6 columns */}
        <div className="grid h-full grid-cols-2 gap-4 md:col-span-6">
          {/* Left tall card */}
          <Link href={cities[3].href} className="h-full">
            <Card className="group h-full overflow-hidden">
              <CardContent className="relative h-full p-0">
                <div className="relative h-full">
                  <Image
                    src={cities[3].image}
                    alt={cities[3].name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="mb-1 font-semibold">{cities[3].name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Right stacked cards */}
          <div className="grid h-full gap-4">
            {[cities[4], cities[5]].map((city) => (
              <Link key={city.name} href={city.href} className="h-full">
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative h-full p-0">
                    <div className="relative h-full">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
