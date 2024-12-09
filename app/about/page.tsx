import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { BlurFade } from "@/components/magicui/blur-fade"
import {
  PageHero,
  PageHeroContent,
  PageHeroDescription,
  PageHeroFooter,
  PageHeroImage,
  PageHeroItem,
  PageHeroText,
  PageHeroTitle,
} from "@/components/shared/page-hero"

const team = [
  {
    name: "สมศรี จันทร์เด่น",
    role: "ผู้ก่อตั้งและซีอีโอ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรมการท่องเที่ยว สมศรีได้ก่อตั้ง Wanderlust ด้วยวิสัยทัศน์ในการสร้างประสบการณ์การท่องเที่ยวที่มีความหมาย",
  },
  {
    name: "มานพ เฉิน",
    role: "หัวหน้าฝ่ายปฏิบัติการ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "มานพดูแลให้ทุกทริปดำเนินไปอย่างราบรื่น ตั้งแต่การวางแผนจนถึงการดำเนินการ ด้วยประสบการณ์อันยาวนานในด้านการจัดการการท่องเที่ยว",
  },
  {
    name: "เอมมี่ วิลสัน",
    role: "หัวหน้าฝ่ายจัดทัวร์",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "ความหลงใหลในการค้นพบสถานที่ซ่อนเร้นและประสบการณ์ที่แท้จริงของเอมมี่ช่วยสร้างการเดินทางที่น่าจดจำสำหรับลูกค้าของเรา",
  },
]

export default function AboutPage() {
  return (
    <article className="container mx-auto grid gap-8 p-4 lg:gap-16">
      {/* Hero Section */}
      <PageHero>
        <PageHeroContent>
          <PageHeroItem>
            <PageHeroImage
              src="/images/shared/about-me-hero.png"
              alt="About Us"
              width={1200}
              height={400}
            />
            <PageHeroText>
              <PageHeroTitle>เกี่ยวกับเรา</PageHeroTitle>
              <PageHeroDescription>
                แอดเวนเท็กซ์ คือศูนย์รวมทัวร์และแพ็คเกจทัวร์หลากหลายเส้นทาง
                เรามีความมุ่งมั่นที่จะให้บริการลูกค้าด้วยความจริงใจ
                ไม่ว่าจะเป็นโปรแกรมเดินทาง และราคาทัวร์ที่ดีที่สุด
                และมีคุณภาพตามความต้องการของลูกค้า
                เราเป็นบริษัทที่จดทะเบียนถูกต้องตามกฎหมาย
                และได้รับใบอนุญาตประกอบธุรกิจนำเที่ยวประเภทนิติบุคคล
                จดทะเบียนภายใต้บริษัทธัญ โฮลดิ้ง จำกัด
                ซึ่งเป็นบริษัทที่ประกอบธุรกิจโรงแรมหลายแห่งในประเทศไทย
                และมีทุนจดทะเบียนอยู่ที่ 203,000,000 บาท
              </PageHeroDescription>
            </PageHeroText>
          </PageHeroItem>
        </PageHeroContent>
        <PageHeroFooter />
      </PageHero>

      {/* Mission Section */}
      <section className="rounded-lg bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade>
              <h2 className="mb-6 text-3xl font-bold">พันธกิจของเรา</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                เราจะดูแลท่านด้วยความเอาใจใส่ในทุกรายละเอียด
                ตั้งแต่ขั้นตอนการจัดสรรโปรแกรมการเดินทางที่ให้เหมาะสมกับความต้องการ
                และงบประมาณไปจนถึงการบริการหลังการขายที่มุ่งเน้นให้ทุกคนที่เดินทางกับเราได้ประสบการณ์เดินทางที่ประทับใจที่สุด
                ดังนั้นเราจึงมีความพร้อมเป็นอย่างยิ่งที่จะรับใช้ทุกท่านด้วยใจที่รักในงานบริการอย่างเต็มเปี่ยม
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            พบกับทีมของเรา
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, idx) => (
              <BlurFade key={idx} delay={0.1 * idx}>
                <Card className="size-full overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={2977}
                      width={3951}
                      className="size-full object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <CardTitle className="mb-1 text-xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="mb-4 text-primary">
                      {member.role}
                    </CardDescription>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
