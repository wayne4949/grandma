import Image from "next/image";
import { storyImages } from "../lib/story-images";

const PLACEHOLDER_BG = [
  "#f6d8a8",
  "#f1c38a",
  "#e9b08c",
  "#e7c699",
  "#f0cda0",
  "#ecbf94",
];

export default function StoryImage({ pageId }: { pageId: string }) {
  const img = storyImages[pageId];
  const index = Math.max(0, Number(pageId.replace("P.", "")) - 1);
  const bg = PLACEHOLDER_BG[index % PLACEHOLDER_BG.length];

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-4 border-amber-200 shadow-inner">
      {img?.src ? (
        // next/image + unoptimized:靜態匯出可用,並自動套用 basePath
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={img?.alt ?? "故事插圖"}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ backgroundColor: bg }}
        >
          <span className="text-5xl mb-3" aria-hidden="true">
            🍲
          </span>
          <span className="text-amber-900/80 text-xl font-bold">
            {img?.placeholderLabel ?? pageId}
          </span>
          <span className="mt-2 text-amber-900/50 text-sm">
            (插圖待補)
          </span>
        </div>
      )}
    </div>
  );
}
