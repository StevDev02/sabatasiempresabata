import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/assets/Fonts/Index";
import FooterGlobal from "@/components/FooterGlobal";
import NavbarGlobal from "@/components/NavbarGlobal";

export const metadata: Metadata = {
  title: "Sabata siempre sabata",
  twitter: {
    description: "E-commerce de ropa femenina",
    images: ["https://www.elvineclothing.com/cdn/shop/files/Fabbe_ELVINE_wooljacket_black_reference.jpg?v=1718349031&width=1500"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavbarGlobal />
        {children}
        <FooterGlobal/>
      </body>
    </html>
  );
}
