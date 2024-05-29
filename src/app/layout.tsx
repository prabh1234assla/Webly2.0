import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/styles/Navbar.css";

const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "webly2.0",
  description: "Personal Portfolio Web Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
