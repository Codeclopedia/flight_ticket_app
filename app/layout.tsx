import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Custom_Promotion from "@/components/custom_header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlyBuddy",
  description: "A Flight Ticket App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Custom_Promotion/>
        {children}
      </body>
    </html>
  );
}


