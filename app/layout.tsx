import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css'

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dorata Solar",
  description: "Conectamos você ao futuro com energia limpa e soluções inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
