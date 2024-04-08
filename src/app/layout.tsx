import DarkModeSwitch from "@/components/DarkModeSwitch";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Container from "@/components/ui/container";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Demo App",
  description: "Ecommerce Demo App",
};

export default function RootLayout({
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
