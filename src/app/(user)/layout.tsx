import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";

export const metadata: Metadata = {
  title: "Orebi Shopping Store || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
