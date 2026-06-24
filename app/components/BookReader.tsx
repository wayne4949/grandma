"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { pages } from "../lib/story";
import { getActivity } from "../lib/activities";
import { BASE_PATH } from "../lib/asset";
import StoryImage from "./StoryImage";
import Narration from "./Narration";
import RedSlip from "./RedSlip";

const TOTAL = pages.length;

export default function BookReader({ initialPage = 1 }: { initialPage?: number }) {
  const clampIndex = (n: number) => Math.min(Math.max(0, n), TOTAL - 1);
  const [index, setIndex] = useState(() => clampIndex(initialPage - 1));
  const touchStartX = useRef<number | null>(null);

  const page = pages[index];
  const activity = page.activity ? getActivity(page.activity) : undefined;

  const go = (target: number) => setIndex(clampIndex(target));

  // 同步可分享的網址（cosmetic，不重新導頁）
  useEffect(() => {
    const url = `${BASE_PATH}/book/${index + 1}/`;
    window.history.replaceState(null, "", url);
  }, [index]);

  // 鍵盤左右翻頁；整頁切換、不垂直捲動
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const canPrev = index > 0;
  const canNext = index < TOTAL - 1;

  return (
    <main
      className="min-h-screen flex items-start justify-center p-4 sm:p-8"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-5 sm:p-8 my-4">
        {/* 頂列：回首頁、玩活動、頁碼 */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            href="/"
            className="min-h-[48px] px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 text-lg flex items-center"
          >
            ← 回首頁
          </Link>
          <span
            className="text-2xl font-black text-amber-700 tabular-nums"
            aria-label={`第 ${index + 1} 頁，共 ${TOTAL} 頁`}
          >
            {index + 1} / {TOTAL}
          </span>
          <Link
            href="/activities"
            className="min-h-[48px] px-4 py-2 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 text-lg flex items-center"
          >
            玩活動
          </Link>
        </div>

        {/* 細進度條 */}
        <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / TOTAL) * 100}%` }}
          />
        </div>

        <h1 className="font-bold text-amber-800 mb-5">
          <span className="text-amber-500 mr-2">{page.id}</span>
          {page.title}
        </h1>

        <StoryImage pageId={page.id} />

        {page.redSlip && (
          <div className="mt-6">
            <RedSlip mode={page.redSlip} />
          </div>
        )}

        {/* 食物特寫頁：文字最少；其餘頁正常顯示旁白＋對話 */}
        <div className="mt-6">
          <Narration narration={page.narration} dialogue={page.dialogue} />
        </div>

        {/* 選配活動深連結：故事頁保持乾淨，不硬插測驗 */}
        {activity && (
          <div className="mt-7">
            <Link
              href={`/activities/${activity.id}`}
              className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-emerald-500 text-white hover:bg-emerald-600"
            >
              ▶ 來試這頁的活動：{activity.title}
            </Link>
            <p className="mt-2 text-base text-stone-500">
              （想練才點，毋影響看故事）
            </p>
          </div>
        )}

        {/* 翻頁 */}
        <nav className="flex items-center justify-between gap-4 mt-10">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={!canPrev}
            className="min-h-[48px] min-w-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-stone-200 text-stone-800 enabled:hover:bg-stone-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← 頂一頁
          </button>

          {canNext ? (
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="min-h-[48px] min-w-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white hover:bg-amber-600"
            >
              下一頁 →
            </button>
          ) : (
            <Link
              href="/activities"
              className="min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-emerald-500 text-white hover:bg-emerald-600 flex items-center"
            >
              讀完矣，來玩活動 →
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
