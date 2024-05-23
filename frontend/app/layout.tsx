import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./_components/header"
import FooterComponent from "./_components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BoardGameKeep | Digital stronghold of your board game collection",
  description: "Designed and developed by DarrickDevelops",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className + ` flex flex-col min-h-screen`}>
        <Header />

        <main className="pb-12 flex-grow">
          <div className="container w-11/12 m-auto">{children}</div>
        </main>

        <FooterComponent />
      </body>
    </html>
  )
}
