import Image from "next/image"

import { BlurFade } from "@/components/magicui/blur-fade"

export const Gallery = () => {
  const images = Array.from({ length: 9 }, (_, i) => ({
    url: `https://picsum.photos/seed/${i + 1}/${i % 2 === 0 ? "800/600" : "600/800"}`,
    isLandscape: i % 2 === 0,
  }))

  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">แกลลอรี่</h2>
      </div>

      <div className="columns-2 gap-4 sm:columns-3">
        {images.map(({ url, isLandscape }, idx) => (
          <BlurFade key={url} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={url}
              height={isLandscape ? 600 : 800}
              width={isLandscape ? 800 : 600}
              alt={`Travel moment ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
