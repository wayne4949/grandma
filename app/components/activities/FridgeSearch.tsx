"use client";

import { useState } from "react";
import { fridgeItems } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";
import ActivityIcon from "./ActivityIcon";

// 活動・揣冰櫥（認知：視覺短期記憶／集中注意）。佇干擾矸罐中揣出蠔油。
// 不評分、答錯不責備、可重試、點擊操作。
export default function FridgeSearch({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const solved = feedback === "right";

  const pick = (isAnswer: boolean) => {
    if (isAnswer) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>找冰箱 ── 哪一瓶是蠔油？</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        冰箱裡瓶瓶罐罐，找出那瓶顏色較深、較濃稠的蠔油。點點看。
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {fridgeItems.map((item) => {
          const highlight = solved && item.isAnswer;
          return (
            <button
              key={item.id}
              type="button"
              disabled={solved}
              onClick={() => pick(item.isAnswer)}
              className={`min-h-[112px] min-w-[96px] flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-3 border-2 transition-colors ${
                highlight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-800 enabled:hover:bg-amber-50 disabled:opacity-60"
              }`}
            >
              <ActivityIcon src={`/story/fridge/${item.id}.png`} />
              <span className="text-lg font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>
          不是那瓶啦。再找找看 ── 顏色較深、較濃稠，和醬油比較像的那瓶。
        </GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>對，就是蠔油！色深又鹹，等一下醬油不夠就靠它救色。</DoneBanner>
      )}
    </ActivityCard>
  );
}
