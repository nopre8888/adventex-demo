import Link from "next/link"

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"

const footerLinks = {
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ติดต่อเรา", href: "/contact" },
  ],
  tours: [
    { label: "แพ็คเกจทั้งหมด", href: "/tours" },
    { label: "แพ็คเกจเรียนต่อ", href: "/tours?type=study" },
    { label: "แพ็คเกจท่องเที่ยว", href: "/tours?type=travel" },
  ],
  blogs: [
    { label: "บทความทั้งหมด", href: "/blogs" },
    { label: "บทความยอดนิยม", href: "/blogs?featured=true" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://youtube.com" },
]

const contactInfo = [
  { icon: Phone, text: "+66 81 123 4567" },
  { icon: Mail, text: "contact@advantex.com" },
  {
    icon: MapPin,
    text: "121/2 เลขที่ 3 ต.เวียง อ.เชียงแสน จ.เชียงราย 57120",
  },
]

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <aside className="lg:col-span-2">
            <Link
              href="/"
              className="mb-4 block text-xl font-bold uppercase text-primary"
            >
              advantex international group co., ltd.
            </Link>
            <p className="mb-6 max-w-[30ch] text-muted-foreground">
              ทะเบียนพานิชย์เลขที่ 0575567001670
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="size-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">บริษัท</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">แพ็คเกจ</h3>
            <ul className="space-y-3">
              {footerLinks.tours.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">บทความ</h3>
            <ul className="space-y-3">
              {footerLinks.blogs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              © {currentYear} Advantex. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
