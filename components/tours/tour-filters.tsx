"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

export interface FilterState {
  priceRange: [number, number]
}

const ListItem = React.forwardRef<
  React.ComponentRef<"li">,
  React.ComponentPropsWithoutRef<"li"> & {
    checked: boolean
    onChange: (checked: boolean) => void
  }
>(({ className, id, title, checked, onChange, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <Checkbox
        id={id}
        className="border-muted-foreground shadow-none data-[state=checked]:border-primary data-[state=checked]:bg-primary"
        checked={checked}
        onCheckedChange={(checked: boolean) => onChange(checked)}
      />
      <Label htmlFor={id} className="text-sm font-normal leading-none">
        {title}
      </Label>
    </li>
  )
})
ListItem.displayName = "ListItem"

const PACKAGE_FILTERS = [
  { id: "all", title: "แพ็คเกจทั้งหมด", checked: true },
  { id: "study", title: "แพ็คเกจเรียนต่อ", checked: false },
  { id: "travel", title: "แพ็คเกจท่องเที่ยว", checked: false },
]

const CITY_FILTERS = [
  { id: "all", title: "เมืองทั้งหมด", checked: true },
  { id: "harbin", title: "เมืองฮาร์บิน", checked: false },
  { id: "shanghai", title: "เมืองเซี่ยงไฮ้", checked: false },
  { id: "chengdu", title: "เมืองเฉิงตู", checked: false },
  { id: "beijing", title: "เมืองปักกิ่ง", checked: false },
  { id: "guangzhou", title: "เมืองกว่างโจว", checked: false },
  { id: "chongqing", title: "เมืองฉงชิ่ง", checked: false },
]

const MONTH_FILTERS = [
  { id: "all", title: "เดือนทั้งหมด", checked: true },
  { id: "1", title: "มกราคม", checked: false },
  { id: "2", title: "กุมภาพันธ์", checked: false },
  { id: "3", title: "มีนาคม", checked: false },
  { id: "4", title: "เมษายน", checked: false },
  { id: "5", title: "พฤษภาคม", checked: false },
  { id: "6", title: "มิถุนายน", checked: false },
  { id: "7", title: "กรกฎาคม", checked: false },
  { id: "8", title: "สิงหาคม", checked: false },
  { id: "9", title: "กันยายน", checked: false },
  { id: "10", title: "ตุลาคม", checked: false },
  { id: "11", title: "พฤศจิกายน", checked: false },
  { id: "12", title: "ธันวาคม", checked: false },
]

const ACTIVITY_FILTERS = [
  { id: "all", title: "กิจกรรมทั้งหมด", checked: true },
  { id: "short", title: "เรียนต่อระยะสั้น", checked: false },
  { id: "long", title: "เรียนต่อระยะยาว", checked: false },
]

export const TourFilters = () => {
  const min_price = 0
  const max_price = 200000

  // Initialize state from URL parameters
  const [filters, setFilters] = React.useState<FilterState>({
    priceRange: [min_price, max_price],
  })

  const handlePriceChange = (value: [number, number]) => {
    const newFilters = { ...filters, priceRange: value }
    setFilters(newFilters)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-semibold leading-none">ช่วงราคา</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) =>
              handlePriceChange([+e.target.value, filters.priceRange[1]])
            }
            className="w-24 rounded-md border px-3 py-2"
          />
          <span className="font-normal text-muted-foreground">-</span>
          <Input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handlePriceChange([filters.priceRange[0], +e.target.value])
            }
            className="w-24 rounded-md border px-3 py-2"
          />
        </div>
        <div className="pt-2">
          <Slider
            min={min_price}
            max={max_price}
            step={1000}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full cursor-grab"
          />
        </div>
      </div>

      <Separator className="text-muted-foreground" />

      <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-sm font-normal leading-none text-muted-foreground hover:no-underline">
            แพ็คเกจ
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {PACKAGE_FILTERS.map((item) => (
                <ListItem
                  key={item.id}
                  {...item}
                  checked={item.checked}
                  onChange={() => {}}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="text-sm font-normal leading-none text-muted-foreground hover:no-underline">
            เมือง
          </AccordionTrigger>
          <AccordionContent>
            <ul className="h-24 space-y-2 overflow-y-auto">
              {CITY_FILTERS.map((item) => (
                <ListItem
                  key={item.id}
                  {...item}
                  checked={item.checked}
                  onChange={() => {}}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="text-sm font-normal leading-none text-muted-foreground hover:no-underline">
            เดือน
          </AccordionTrigger>
          <AccordionContent>
            <ul className="h-24 space-y-2 overflow-y-auto">
              {MONTH_FILTERS.map((item) => (
                <ListItem
                  key={item.id}
                  {...item}
                  checked={item.checked}
                  onChange={() => {}}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className="text-sm font-normal leading-none text-muted-foreground hover:no-underline">
            ประเภทกิจกรรม
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {ACTIVITY_FILTERS.map((item) => (
                <ListItem
                  key={item.id}
                  {...item}
                  checked={item.checked}
                  onChange={() => {}}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
