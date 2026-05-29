import Image from "next/image";
import { asset } from "../../lib/asset";

// 活動用的方形圖示:固定 1:1 外框(size×size),圖片以 object-contain 置中。
// 圖示為主、文字標籤另外放在按鈕下方。
// src 為 public/ 根相對路徑(例:/story/ingredients/pork.png),由 asset() 補 basePath。
export default function ActivityIcon({
  src,
  size = 72,
}: {
  src: string;
  size?: number;
}) {
  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={asset(src)}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain rounded-xl"
      />
    </span>
  );
}
