import * as React from "react"
import { Metadata } from "next"

interface ContactLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "ติดต่อเรา - บริษัท แอดแวนซ์เท็ก จำกัด - ศูนย์รวมทัวร์ที่ดีที่สุด",
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
