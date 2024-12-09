"use client"

import * as React from "react"

import { format, isBefore, startOfToday } from "date-fns"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface BookingCalendarProps {
  basePrice: number
  maxGroupSize: string
}

export const BookingCalendar = ({
  basePrice,
  maxGroupSize,
}: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>()
  const [travelers, setTravelers] = React.useState("1")
  const { toast } = useToast()
  const maxTravelers = parseInt(maxGroupSize.split(" ")[0])

  const handleBooking = () => {
    if (!selectedDate) {
      toast({
        title: "Select a Date",
        description: "Please select a travel date to continue.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Booking Initiated",
      description: `Your booking request for ${format(selectedDate, "PPP")} has been received.`,
    })
  }

  const calculatePrice = () => {
    const numTravelers = parseInt(travelers)
    let price = basePrice * numTravelers

    // Apply group discount
    if (numTravelers >= 4) {
      price = price * 0.9 // 10% discount for groups of 4 or more
    }

    return price.toFixed(2)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Select Date</label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => isBefore(date, startOfToday())}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Number of Travelers
            </label>
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger>
                <SelectValue placeholder="Select travelers" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: maxTravelers }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1} {i === 0 ? "Person" : "People"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-2 flex justify-between">
              <span>Base Price:</span>
              <span>${basePrice}/person</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Travelers:</span>
              <span>× {travelers}</span>
            </div>
            {parseInt(travelers) >= 4 && (
              <div className="mb-2 flex justify-between text-green-600">
                <span>Group Discount:</span>
                <span>-10%</span>
              </div>
            )}
            <div className="mt-2 border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${calculatePrice()}</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleBooking}
            disabled={!selectedDate}
          >
            Book Now
          </Button>

          <p className="text-sm text-muted-foreground">
            * Free cancellation up to 24 hours before the tour
          </p>
        </div>
      </div>
    </div>
  )
}
