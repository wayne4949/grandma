import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阿嬤的料理日記:傳家滷肉飯",
  description:
    "一本給銀髮族的互動繪本:跟著阿桃阿嬤,把家傳滷肉飯的味道一頁一頁傳下去。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
