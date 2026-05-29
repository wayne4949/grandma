import type { NextConfig } from "next";

// GitHub Pages 子路徑:build 時設 NEXT_PUBLIC_BASE_PATH=/grandma-storybook(實際 repo 名);
// 本機開發 / 根路徑部署留空即可。
// 用 NEXT_PUBLIC_ 前綴,讓前端程式碼(app/lib/asset.ts)也能讀到同一個值,
// 為 public/ 圖片補上正確的 basePath。(保留舊的 BASE_PATH 作為後備。)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "";

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
