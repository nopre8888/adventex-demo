"use client"

import * as React from "react"

import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blogs/blog-card"
import { BlogCategories } from "@/components/blogs/blog-categories"

// ในแอพจริง ข้อมูลนี้จะมาจาก API
const blogs = [
  {
    id: "1",
    title: "สำรวจสวรรค์บาหลี: การเดินทางผ่านเกาะแห่งเทพเจ้า",
    excerpt:
      "ค้นพบความมหัศจรรย์ของบาหลีผ่านการผจญภัย 10 วันที่คัดสรรมาอย่างพิถีพิถัน พาคุณไปตั้งแต่ชายหาดที่บริสุทธิ์ไปจนถึงวัดโบราณ",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    category: "จุดหมายปลายทาง",
    readTime: "อ่าน 5 นาที",
    publishDate: "2024-03-15",
    author: {
      name: "ซาร่า จอห์นสัน",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    id: "2",
    title: "วัฒนธรรมญี่ปุ่น: การผสมผสานระหว่างดั้งเดิมและสมัยใหม่",
    excerpt:
      "สัมผัสการผสมผสานที่ลงตัวระหว่างประเพณีโบราณและความมหัศจรรย์สมัยใหม่ในดินแดนอาทิตย์อุทัย",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    category: "วัฒนธรรม",
    readTime: "อ่าน 4 นาที",
    publishDate: "2024-03-14",
    author: {
      name: "ไมเคิล เชน",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  },
  {
    id: "3",
    title: "เกาะกรีก: สวรรค์แห่งทะเลเมดิเตอร์เรเนียน",
    excerpt:
      "การผจญภัยข้ามเกาะผ่านน้ำทะเลใสของทะเลอีเจียน สำรวจซากปรักหักพังโบราณและชายหาดที่สวยงาม",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    category: "การผจญภัย",
    readTime: "อ่าน 6 นาที",
    publishDate: "2024-03-13",
    author: {
      name: "เอ็มม่า วิลสัน",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
]

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ส่วนหัว */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            เรื่องราวและข้อมูลเชิงลึกการท่องเที่ยว
          </h1>
          <p className="mx-auto mb-8 max-w-[53ch] text-lg text-muted-foreground">
            ค้นพบเคล็ดลับการท่องเที่ยว ข้อมูลเชิงลึกทางวัฒนธรรม
            และคู่มือแนะนำโดยละเอียด เพื่อช่วยคุณวางแผนการผจญภัยครั้งต่อไป
          </p>
          <div className="relative mx-auto max-w-lg">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="ค้นหาบทความ..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* แถบด้านข้าง */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogCategories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>

          {/* ตารางบทความ */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                โหลดบทความเพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
