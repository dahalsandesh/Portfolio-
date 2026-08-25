import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sandesh Dahal — Creative Engineer & Independent Studio",
  description: "Sandesh Dahal builds expressive digital products, thoughtful interfaces, and ambitious web experiences for people with something worth shipping.",
  openGraph: { title: "Sandesh Dahal — Creative Engineer", description: "Independent creative engineering studio for bold digital products.", type: "website" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-ink"><body>{children}</body></html>
}
