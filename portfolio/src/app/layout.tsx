import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
