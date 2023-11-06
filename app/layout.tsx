import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Car Select",
  description: "Discover the best car deals to suit your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "bg-orange-400 hover:bg-orange-500",
              footerActionLink: "text-orange-400 hover:text-orange-500",
            },
          }}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
