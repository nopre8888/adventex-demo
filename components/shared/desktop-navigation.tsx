"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface TravelItem {
  title: string
  href: string
  description: string
}

const travelItems: TravelItem[] = [
  {
    title: "เมืองฮาร์บิน",
    href: "/tours?type=travel&location=harbin",
    description:
      "สัมผัสเทศกาลน้ำแข็งที่ใหญ่ที่สุดในโลก ชมสถาปัตยกรรมรัสเซียโบราณ และลิ้มรสอาหารเหนือแท้ๆ ของจีน",
  },
  {
    title: "เมืองเซี่ยงไฮ้",
    href: "/tours?type=travel&location=xian",
    description:
      "เยือนมหานครทันสมัยริมแม่น้ำหวงผู่ ตื่นตากับตึกระฟ้า The Bund และสัมผัสวัฒนธรรมผสมผสานตะวันออก-ตะวันตก",
  },
  {
    title: "เมืองเฉิงตู",
    href: "/tours?type=travel&location=chengdu",
    description:
      "พบกับหมีแพนด้ายักษ์ในศูนย์อนุรักษ์ ลิ้มรสอาหารเสฉวนแท้ และสัมผัสวิถีชีวิตที่ผ่อนคลายของชาวเฉิงตู",
  },
  {
    title: "เมืองปักกิ่ง",
    href: "/tours?type=travel&location=beijing",
    description:
      "สำรวจพระราชวังต้องห้าม เดินบนกำแพงเมืองจีน และสัมผัสประวัติศาสตร์อันยิ่งใหญ่ของจีนในเมืองหลวง",
  },
  {
    title: "เมืองกว่างโจว",
    href: "/tours?type=travel&location=guangzhou",
    description:
      "เมืองท่าการค้าสำคัญพร้อมอาหารกวางตุ้งชื่อดัง ผสมผสานความทันสมัยกับวัฒนธรรมดั้งเดิมได้อย่างลงตัว",
  },
  {
    title: "เมืองฉงชิ่ง",
    href: "/tours?type=travel&location=chongqing",
    description:
      "สัมผัสมหานครบนภูเขาริมแม่น้ำแยงซี ลิ้มรสหม้อไฟฉงชิ่ง และชมวิวตึกระฟ้ายามค่ำคืนที่สวยงาม",
  },
]

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const DesktopNavigation = () => {
  const searchParams = useSearchParams()

  const type = searchParams.get("type") as "study" | "travel"

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "study" ? "text-primary" : "hover:text-primary"
            )}
          >
            <a href="/tours?type=study">แพ็คเกจเรียนต่อ</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/tours?type=study"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      แพ็คเกจทั้งหมด
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      ค้นพบประสบการณ์การเรียนรู้และการท่องเที่ยวในประเทศจีน
                      พร้อมแพ็คเกจที่ครอบคลุมทั้งที่พัก การเดินทาง
                      และกิจกรรมต่างๆ
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/tours?type=study&duration=short-term"
                title="แพ็คเกจเรียนต่อระยะสั้น"
              >
                เรียนรู้ภาษาและวัฒนธรรมจีนผ่านหลักสูตรระยะสั้น 1-6 เดือน
                พร้อมที่พักและกิจกรรมครบครัน
              </ListItem>
              <ListItem
                href="/tours?type=study&duration=long-term"
                title="แพ็คเกจท่องเที่ยวระยะยาว"
              >
                หลักสูตรการศึกษาระยะยาว 1-4 ปี
                พร้อมโอกาสฝึกงานและเรียนรู้วิถีชีวิตในประเทศจีน
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "travel" ? "text-primary" : "hover:text-primary"
            )}
          >
            <a href="/tours?type=travel">แพ็คเกจท่องเที่ยว</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {travelItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
