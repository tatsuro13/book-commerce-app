import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "Book Commerce",
  description: "様々な本が見つかる、買える",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
