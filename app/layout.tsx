import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阿桃師的辦桌",
  description:
    "一本給銀髮族的互動繪本:跟著總鋪師桃姨辦一桌十道菜,用運算思維把一輩子的手藝重新整理出條理。",
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
