import type { NextConfig } from "next";

// GitHub Pages 子路徑:build 時設 BASE_PATH=/grandma-storybook(實際 repo 名);
// 本機開發 / 根路徑部署留空即可。
const basePath = process.env.BASE_PATH ?? "";

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
