"use client"

import Image from "next/image"

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import QRCode from "react-qr-code"
import * as z from "zod"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BlurFade } from "@/components/magicui/blur-fade"

const formSchema = z.object({
  name: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  subject: z.string().min(5, "หัวข้อต้องมีอย่างน้อย 5 ตัวอักษร"),
  message: z.string().min(10, "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร"),
})

const contactInfo = [
  {
    icon: Mail,
    title: "อีเมล",
    details: ["info@adventex.com", "support@adventex.com"],
  },
  {
    icon: Phone,
    title: "โทรศัพท์",
    details: ["+66 81 234 5678", "+66 81 234 5679"],
  },
  {
    icon: MapPin,
    title: "ที่อยู่",
    details: ["121/2 เลขที่ 3 ต.เวียง", "อ.เชียงแสน จ.เชียงราย 57120"],
  },
]

const socialLinks = [
  {
    icon: "/images/shared/facebook.svg",
    title: "Adventexeducation",
    url: "https://facebook.com/yourusername",
    color: "#1877F2",
  },
  {
    icon: "/images/shared/instagram.svg",
    title: "Adventexeducation",
    url: "https://instagram.com/yourusername",
    color: "#E4405F",
  },
  {
    icon: "/images/shared/line.svg",
    title: "Adventexeducation",
    url: "https://line.me/ti/p/yourusername",
    color: "#00C300",
  },
  {
    icon: "/images/shared/tiktok.svg",
    title: "Adventexeducation",
    url: "https://tiktok.com/yourusername",
    color: "#000000",
  },
]

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data })
    toast({
      title: "ส่งข้อความสำเร็จ",
      description: "เราจะติดต่อกลับโดยเร็วที่สุด",
    })
    form.reset()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="grid gap-16 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-8">
          {contactInfo.map((item, idx) => (
            <BlurFade key={idx} delay={0.1 * idx}>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Social Networks */}
          <BlurFade delay={0.4}>
            <div className="mt-8">
              <h3 className="mb-4 font-semibold">ติดต่อเราผ่านโซเชียล</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: `${social.color}15`,
                      color: social.color,
                    }}
                  >
                    <Image
                      src={social.icon}
                      alt={social.title}
                      className="size-4"
                      width={20}
                      height={20}
                    />
                    <span>{social.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* QR Code */}
          <BlurFade delay={0.5}>
            <div className="mt-8">
              <h3 className="mb-4 font-semibold">สแกนเพื่อติดต่อ</h3>
              <div className="rounded-xl bg-white p-4">
                <QRCode
                  value="https://adventex.com/contact"
                  size={100}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <BlurFade delay={0.3}>
            <div className="rounded-xl border bg-white p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ชื่อ</FormLabel>
                          <FormControl>
                            <Input placeholder="กรุณากรอกชื่อ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>อีเมล</FormLabel>
                          <FormControl>
                            <Input placeholder="example@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>หัวข้อ</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="เรื่องที่ต้องการติดต่อ"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ข้อความ</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="รายละเอียดที่ต้องการติดต่อ..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 size-4" />
                    ส่งข้อความ
                  </Button>
                </form>
              </Form>
            </div>
          </BlurFade>
        </div>
      </div>
    </article>
  )
}
