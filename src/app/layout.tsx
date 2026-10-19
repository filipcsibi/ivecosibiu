import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: { default: `${site.name} | Vehicule comerciale IVECO`, template: `%s | ${site.name}` },
  description: "Vânzări, service autorizat și piese pentru vehicule comerciale IVECO în Sibiu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
