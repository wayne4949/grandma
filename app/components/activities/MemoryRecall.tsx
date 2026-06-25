"use client";

import { useState } from "react";
import { memoryStoves } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

// 活動・點數（認知：短期＋工作記憶＋更新）。框成「鬥相共記」，考阿明（代讀者）。
// 鐵則：絕不出現失憶／失智／健忘等醫療字眼；用日常的「記咧／鬥相共記」。
// 先看三口爐當咧煮啥（自己控制看到飽），崁起來，閣共菜配轉去對的爐。

const CORRECT = memoryStoves.map((s) => s.dish);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MemoryRecall({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"study" | "recall">(
    completed ? "recall" : "study",
  );
  const [assign, setAssign] = useState<(string | null)[]>(
    completed ? [...CORRECT] : [null, null, null],
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );
  const [chips] = useState<string[]>(() => shuffle(CORRECT));

  const solved = feedback === "right";
  const tray = chips.filter((d) => !assign.includes(d));

  const assignTo = (stoveIdx: number) => {
    if (!selected) return;
    setAssign((prev) => {
      const next = prev.map((d) => (d === selected ? null : d));
      next[stoveIdx] = selected;
      return next;
    });
    setSelected(null);
    setFeedback("none");
  };

  const removeFrom = (stoveIdx: number) => {
    setAssign((prev) => {
      const next = [...prev];
      next[stoveIdx] = null;
      return next;
    });
    setFeedback("none");
  };

  const check = () => {
    if (assign.some((d) => d === null)) {
      setFeedback("wrong");
      return;
    }
    const ok = memoryStoves.every((s, i) => assign[i] === s.dish);
    if (ok) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>一起記住 ── 剛才三口爐在煮什麼？</ActivityHeading>

      {phase === "study" ? (
        <>
          <p className="text-lg text-stone-600 mb-4">
            桃姨忙不過來，你幫她看清楚：現在三口爐正在煮什麼？看個夠，再把它蓋起來。
          </p>
          <ul className="space-y-3">
            {memoryStoves.map((s) => (
              <li
                key={s.stove}
                className="flex items-center gap-4 bg-white border-2 border-amber-200 rounded-2xl px-5 py-4"
              >
                <span className="text-lg font-bold text-stone-600 w-16">
                  {s.stove}
                </span>
                <span className="text-2xl font-bold text-amber-800">
                  {s.dish}
                </span>
                <span className="text-lg text-stone-500">（{s.state}）</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setPhase("recall")}
            className="mt-5 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white hover:bg-amber-600"
          >
            記好了，蓋起來 →
          </button>
        </>
      ) : (
        <>
          <p className="text-lg text-stone-600 mb-4">
            蓋起來了。剛才哪一口爐在煮哪一道？點一下菜，再點它的爐。
          </p>

          {/* 三口爐 */}
          <div className="space-y-3">
            {memoryStoves.map((s, i) => {
              const dish = assign[i];
              const showRight = solved;
              return (
                <div key={s.stove} className="flex items-center gap-4">
                  <span className="text-lg font-bold text-stone-600 w-16 shrink-0">
                    {s.stove}
                  </span>
                  <button
                    type="button"
                    disabled={solved}
                    onClick={() => (dish ? removeFrom(i) : assignTo(i))}
                    className={`flex-1 min-h-[60px] px-5 py-3 rounded-2xl border-2 text-xl font-bold transition-colors ${
                      dish
                        ? showRight
                          ? "bg-emerald-200 border-emerald-500 text-emerald-950"
                          : "bg-amber-100 border-amber-400 text-amber-900"
                        : selected
                          ? "bg-amber-50 border-amber-400 border-dashed text-stone-400"
                          : "bg-stone-50 border-stone-200 border-dashed text-stone-400"
                    }`}
                  >
                    {dish ?? "點這裡放菜"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* 待配的菜 */}
          {tray.length > 0 && (
            <div className="mt-5">
              <p className="text-base text-stone-500 mb-2">這幾道菜：</p>
              <div className="flex flex-wrap gap-2">
                {tray.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelected((v) => (v === d ? null : d))}
                    className={`min-h-[48px] px-4 py-2 rounded-xl border-2 text-lg font-bold ${
                      selected === d
                        ? "bg-amber-500 border-amber-600 text-white"
                        : "bg-white border-amber-300 text-amber-800 hover:bg-amber-50"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="button"
              onClick={check}
              disabled={solved}
              className="min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white enabled:hover:bg-amber-600 disabled:opacity-50"
            >
              看對了沒
            </button>
            {!solved && (
              <button
                type="button"
                onClick={() => setPhase("study")}
                className="min-h-[48px] px-5 py-3 rounded-2xl text-lg font-bold bg-stone-100 text-stone-700 hover:bg-stone-200"
              >
                再看一遍
              </button>
            )}
          </div>

          {feedback === "wrong" && (
            <GuideMessage>
              別急，可以再看一遍。頭爐正在燉的是什麼、哪道已經好了，慢慢想。
            </GuideMessage>
          )}
          {feedback === "right" && (
            <DoneBanner>
              三鍋都被你記得清清楚楚！邊顧火邊一起記住，這就是真本事。
            </DoneBanner>
          )}
        </>
      )}
    </ActivityCard>
  );
}
