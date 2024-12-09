import * as React from "react"
import { Metadata } from "next"

interface TourLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "แพ็คเกจทัวร์ - แพ็คเกจเรียนต่อ - แพ็คเกจท่องเที่ยว",
}

export default function TourLayout({ children }: TourLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
