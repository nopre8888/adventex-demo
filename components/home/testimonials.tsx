import Image from "next/image"

import { Star } from "lucide-react"

import { BlurFade } from "@/components/magicui/blur-fade"

const testimonials = [
  {
    id: 1,
    name: "Park Taeyang",
    role: "",
    text: "แพลตฟอร์มนี้มีประโยชน์มาก เพราะมีสถานที่สวยงามมากมายให้เลือก และยังช่วยฉันค้นหาจุดหมายปลายทางที่น่าสนใจได้ดีมาก บริการก็ดีมาก ฉันจึงชอบใช้ Adventex เมื่อฉันต้องการเดินทางกับครอบครัวของฉัน.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Thompson",
    role: "",
    text: "ฉันใช้ Adventex สำหรับการผจญภัยในการเดินทางทั้งหมดของฉัน และรู้สึกประทับใจในความใส่ใจในรายละเอียดและบริการที่เป็นส่วนตัวมาก ไกด์ท้องถิ่นที่พวกเขาร่วมงานด้วยมีความรู้และหลงใหลในการแบ่งปันวัฒนธรรมของพวกเขา.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "",
    text: "สิ่งที่ทำให้ Adventex แตกต่างคือความมุ่งมั่นในการสร้างประสบการณ์ที่แท้จริง ทุกทริปที่ฉันจองกับพวกเขาได้รับการคัดสรรมาอย่างดี ทำให้ฉันสามารถดื่มด่ำไปกับประเพณีท้องถิ่นได้อย่างเต็มที่ พร้อมทั้งได้พักในที่พักที่สะดวกสบาย.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
]

export const Testimonials = () => {
  return (
    <section>
      <div className="mb-12">
        <p className="mb-4 font-semibold uppercase tracking-wide text-primary">
          สิ่งที่พวกเขาพูด
        </p>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          ลูกค้าของเรา
          <br />
          พูดถึงเรายังไงบ้าง
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <BlurFade key={testimonial.id} delay={0.1 * idx}>
            <div className="relative rounded-2xl bg-white p-6 shadow-lg">
              {/* Decorative Elements */}
              <div className="absolute -right-2 -top-2 size-4 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-full"
                >
                  <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" />
                </svg>
              </div>

              <div className="absolute -left-2 -top-2 size-4 text-teal-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-full"
                >
                  <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" />
                </svg>
              </div>

              <div className="relative">
                {/* Testimonial Content */}
                <div className="mb-6">
                  <p className="leading-relaxed text-gray-600">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="size-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        height={2977}
                        width={3951}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 rounded-full bg-teal-500 p-1.5">
                      <svg
                        className="size-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <div className="mt-1 flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
