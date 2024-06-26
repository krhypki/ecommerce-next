import DarkModeSwitch from "@/components/DarkModeSwitch";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Container from "@/components/ui/Container";
import { Toaster } from "@/components/ui/Sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Demo App",
  description: "Ecommerce Demo App",
  openGraph: {
    siteName: "Ecommerce Demo App",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fm=jpg&h=600&w=800",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen overflow-x-hidden flex flex-col ${inter.className}`}
      >
        <Providers>
          <Header />
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <Container className="flex-1 py-10">
            <DarkModeSwitch />
            {children}
          </Container>
          <Toaster position="top-right" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
