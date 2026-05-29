// 取得 public/ 資源的完整路徑(含 GitHub Pages 子路徑 basePath)。
//
// 為什麼需要這個:next/image 在 unoptimized 模式下,「不會」自動為 public/ 圖片
// 補上 basePath(只有 _next/* 靜態資產會透過 assetPrefix 補)。因此 public/story
// 的圖片必須在 src 手動加上 basePath,靜態輸出到 GitHub Pages 子路徑才不會 404。
//
// basePath 透過 NEXT_PUBLIC_BASE_PATH 注入:此變數會在 build 時被內聯進前端程式碼,
// 與 next.config.ts 的 basePath / assetPrefix 使用同一個值,保持一致、且不會重複前綴。
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  // path 以 / 開頭;basePath 為空(本機 / 根路徑部署)時原樣返回。
  return `${BASE_PATH}${path}`;
}
