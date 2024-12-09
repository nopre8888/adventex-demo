"use client"

import * as React from "react"

import { addDays, format } from "date-fns"
import { th } from "date-fns/locale"
import { CalendarIcon, Search } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const SearchDestinations = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  })

  const formatThaiDate = (date: Date) => {
    return format(date, "dd MMMM", { locale: th })
  }

  return (
    <div className="relative z-10 rounded border bg-white p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">ปลายทาง</label>
          <Input
            placeholder="เลือกเมืองปลายทาง"
            className="w-full bg-white/90"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">แพ็คเกจทัวร์</label>
          <Input
            placeholder="เลือกแพ็คเกจทัวร์"
            className="w-full bg-white/90"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">วันเดินทาง</label>
          <div className="grid gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {formatThaiDate(date.from)} - {formatThaiDate(date.to)}
                      </>
                    ) : (
                      formatThaiDate(date.from)
                    )
                  ) : (
                    <span>เลือวันที่</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={th}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex items-end">
          <Button className="w-full" size="lg">
            <Search className="mr-2 size-4" /> ค้นหา
          </Button>
        </div>
      </div>
    </div>
  )
}
