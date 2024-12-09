import * as React from "react"
import { Metadata } from "next"

interface AboutLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - บริษัท แอดแวนซ์เท็ก จำกัด - ศูนย์รวมทัวร์ที่ดีที่สุด",
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
