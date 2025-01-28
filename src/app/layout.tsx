import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Barlus Page",
  description: "Welcome to Barlus Page, a young software engineer!",
  keywords: [
    "Barlus",
    "Barlathcuda",
    "Software Engineer",
    "Tech User",
    "Programming",
    "Lao Developer",
    "Young Software Engineer",
    "Tech",
    "Coding",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Golang",
    "Frontend Development",
    "Backend Development"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
