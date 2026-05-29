import type { ReactNode } from "react";
import type { Page } from "../lib/story";
import StoryImage from "./StoryImage";
import Narration from "./Narration";
import ProgressBar from "./ProgressBar";

export default function PageShell({
  page,
  pageIndex,
  total,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
  children,
}: {
  page: Page;
  pageIndex: number;
  total: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  children?: ReactNode;
}) {
  const lockedByActivity = !!page.activity && !canGoNext;

  return (
    <main className="min-h-screen flex items-start justify-center p-4 sm:p-8">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-5 sm:p-8 my-4">
        <ProgressBar current={pageIndex} total={total} />

        <div className="flex items-center justify-between mt-4 mb-5 gap-4">
          <h1 className="font-bold text-amber-800">
            <span className="text-amber-500 mr-2">{page.id}</span>
            {page.title}
          </h1>
          {/* 本版不發聲,保留語音鈕位 */}
          <button
            type="button"
            disabled
            aria-label="聆聽阿嬤的聲音(目前尚未開放)"
            title="這個版本還沒有聲音喔"
            className="shrink-0 min-h-[48px] px-4 rounded-full bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200"
          >
            {/* TODO: TTS */}
            🔊 聆聽阿嬤的聲音
          </button>
        </div>

        <StoryImage pageId={page.id} />

        <div className="mt-6">
          <Narration narration={page.narration} dialogue={page.dialogue} />
        </div>

        {children && <div className="mt-8">{children}</div>}

        <nav className="flex items-center justify-between gap-4 mt-10">
          <button
            type="button"
            onClick={onPrev}
            disabled={!canGoPrev}
            className="min-h-[48px] min-w-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-stone-200 text-stone-800 enabled:hover:bg-stone-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← 上一頁
          </button>

          <div className="flex flex-col items-end">
            {lockedByActivity && (
              <span className="text-base text-amber-700 mb-1">
                完成上面的活動就可以繼續喔
              </span>
            )}
            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className="min-h-[48px] min-w-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white enabled:hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              下一頁 →
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
}
