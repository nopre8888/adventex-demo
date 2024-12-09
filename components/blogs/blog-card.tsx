"use client"

import Image from "next/image"
import Link from "next/link"

import { Calendar, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const BlogCard = ({
  blog,
}: {
  blog: {
    id: string
    title: string
    excerpt: string
    coverImage: string
    category: string
    readTime: string
    publishDate: string
    author: {
      name: string
      avatar: string
    }
  }
}) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-[16/9] md:aspect-auto">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            height={2977}
            width={3951}
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <div className="flex flex-col p-6">
          <CardHeader className="p-0">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">{blog.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 size-4" />
                {blog.readTime}
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>
          </CardHeader>

          <CardContent className="p-0">
            <p className="mb-4 text-muted-foreground">{blog.excerpt}</p>
            <div className="flex items-center gap-3">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                height={2977}
                width={3951}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{blog.author.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 size-4" />
                  {new Intl.DateTimeFormat("th-TH", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(blog.publishDate))}
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="mt-6 p-0">
            <Button asChild>
              <Link href={`/blogs/${blog.id}`}>อ่านเพิ่มเติม</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
