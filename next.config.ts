import type { NextConfig } from "next";

// basePath/assetPrefix 策略：
// - Vercel（vercel.app 是根網域）：basePath 一律為空，毋免任何子路徑前綴。
//   Vercel build 會自動帶 process.env.VERCEL=1，所以就算殘留 NEXT_PUBLIC_BASE_PATH
//   也會被正規化成空字串，避免 _next/* 資產、路由連結、public/ 圖片全被加錯前綴而 404。
// - 非 Vercel（例如 GitHub Pages 子路徑部署）：才吃 NEXT_PUBLIC_BASE_PATH（後備 BASE_PATH）。
const isVercel = !!process.env.VERCEL;
const basePath = isVercel
  ? ""
  : process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "";

// 讓前端的 app/lib/asset.ts（讀 NEXT_PUBLIC_BASE_PATH 為 public/ 圖片補前綴）與此處一致：
// 在這裡把該變數正規化成最終 basePath，build 時會內聯進前端程式碼，兩邊永遠同步。
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // 靜態匯出必須關閉預設 image optimization
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
