import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";


const firaSans = localFont({
  src: "../../public/fronts/fira-sans/FiraSans-Regular.ttf",
  weight: "400",
  style: "normal"
});

// TODO: Update the metadata with your own information
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: "Portfolio | Nguyễn Ngọc Khánh Đoan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.className}`}>
      <head>
        <meta name="google-site-verification" content="w9CwguktKUu2wLtA19QQZYsbHpV_-A6Mu2sECfrid8A" />
      </head>
      <body className="overflow-x-hidden min-h-screen">
        <Navbar />
        <main className="justify-center pt-[72] overflow-x-hidden 2xl:overflow-x-visible">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
