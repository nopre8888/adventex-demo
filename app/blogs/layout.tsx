import * as React from "react"
import { Metadata } from "next"

interface BlogsLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "บทความ - บทความเรียนต่อ - บทความท่องเที่ยว",
}

export default function BlogsLayout({ children }: BlogsLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
