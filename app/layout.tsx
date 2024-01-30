import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Trevor Demo Project",
  description:
    "Made using Next JS ~ 14. Interface with databases and scraped api from server of Booking.com to help you get the best property possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
