"use client";

import { useState } from "react";
import { stepSortCorrect } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";
import ActivityIcon from "./ActivityIcon";

// 活動・排步驟（CT：序列）。控肉五步驟排序：洗切肉塊→爆香蒜頭→淋醬上色→加水燉煮→收汁。
// 不評分、答錯不責備、可重試、拖放＋上下鍵操作。
const INITIAL: string[] = ["淋醬上色", "收汁", "洗切肉塊", "加水燉煮", "爆香蒜頭"];

export default function StepSort({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [order, setOrder] = useState<string[]>(INITIAL);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const move = (from: number, to: number) => {
    if (to < 0 || to >= order.length || from === to) return;
    setOrder((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
    setFeedback("none");
  };

  const check = () => {
    const correct = order.every((s, i) => s === stepSortCorrect[i]);
    if (correct) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>排步驟 ── 控肉愛按怎滷？</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        共五个步驟排做正確的順序。會使用滑鼠拖拉，抑是用逐張卡的 ⬆ ⬇ 徙位。
      </p>

      <ol className="space-y-3">
        {order.map((step, i) => (
          <li
            key={step}
            draggable
            onDragStart={() => setDragIndex(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (dragIndex !== null) move(dragIndex, i);
              setDragIndex(null);
            }}
            className="flex items-center justify-between gap-3 bg-white border-2 border-amber-200 rounded-2xl px-4 py-3 cursor-grab active:cursor-grabbing"
          >
            <span className="flex items-center gap-3">
              <span className="shrink-0 w-9 h-9 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <ActivityIcon
                src={`/story/steps/s${stepSortCorrect.indexOf(step) + 1}.png`}
                size={56}
              />
              <span className="text-2xl">{step}</span>
            </span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => move(i, i - 1)}
                disabled={i === 0}
                aria-label={`共「${step}」徛懸`}
                className="min-h-[48px] min-w-[48px] rounded-xl bg-stone-100 text-2xl enabled:hover:bg-stone-200 disabled:opacity-30"
              >
                ⬆
              </button>
              <button
                type="button"
                onClick={() => move(i, i + 1)}
                disabled={i === order.length - 1}
                aria-label={`共「${step}」徛低`}
                className="min-h-[48px] min-w-[48px] rounded-xl bg-stone-100 text-2xl enabled:hover:bg-stone-200 disabled:opacity-30"
              >
                ⬇
              </button>
            </span>
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={check}
        className="mt-5 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white hover:bg-amber-600"
      >
        看順序著無
      </button>

      {feedback === "wrong" && (
        <GuideMessage>
          順序猶閣亂亂。莫急——肉愛代先洗切，落尾才收汁，閣斟酌看覓。
        </GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>鼎仔「叮」一聲 ── 順序著矣，味就袂走精！</DoneBanner>
      )}
    </ActivityCard>
  );
}
