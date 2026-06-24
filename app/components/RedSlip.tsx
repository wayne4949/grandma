"use client";

import { useState } from "react";

// 紅單機關（規格 §4）：
//  - P.3（blank）：辦給誰那欄空空的，全書的戲劇性問題開環。
//  - P.24（reveal）：點一下翻面，空白欄翻成「謝桃姨」，是全書最大的轉。
export default function RedSlip({ mode }: { mode: "blank" | "reveal" }) {
  const [flipped, setFlipped] = useState(false);

  if (mode === "blank") {
    return (
      <div className="flex justify-center my-2">
        <div className="w-full max-w-sm bg-red-600 text-amber-50 rounded-2xl shadow-lg px-6 py-5 border-4 border-red-700">
          <p className="text-center text-lg tracking-widest mb-3">辦 桌 訂 單</p>
          <dl className="space-y-2 text-xl">
            <div className="flex justify-between gap-4">
              <dt className="opacity-80">道數</dt>
              <dd className="font-bold">十道</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-80">時間</dt>
              <dd className="font-bold">傍晚開桌</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-80">地點</dt>
              <dd className="font-bold">廟埕</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-amber-50/40 pt-2">
              <dt className="opacity-80">辦予啥人</dt>
              <dd className="font-bold tracking-widest text-amber-200/70">
                ＿＿＿＿
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }

  // reveal：可翻面的紅單卡片
  return (
    <div className="flex flex-col items-center my-2">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-label={flipped ? "紅單已翻面：謝桃姨" : "翻開紅單，看辦予啥人"}
        className="group [perspective:1000px] w-full max-w-sm"
      >
        <div
          className={`relative h-44 w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* 正面：空白欄 */}
          <div className="absolute inset-0 [backface-visibility:hidden] bg-red-600 text-amber-50 rounded-2xl shadow-lg px-6 py-5 border-4 border-red-700 flex flex-col items-center justify-center">
            <p className="text-lg tracking-widest mb-2">辦予啥人</p>
            <p className="text-3xl tracking-widest text-amber-200/70">＿＿＿＿</p>
            <p className="mt-3 text-base opacity-80 group-hover:opacity-100">
              👆 翻開看覓
            </p>
          </div>
          {/* 背面：謝桃姨 */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-amber-100 text-red-700 rounded-2xl shadow-lg px-6 py-5 border-4 border-red-600 flex flex-col items-center justify-center">
            <p className="text-5xl font-black tracking-widest">謝 桃 姨</p>
            <p className="mt-3 text-base text-red-600/80">這桌，是辦予妳的</p>
          </div>
        </div>
      </button>
    </div>
  );
}
