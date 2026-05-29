"use client";

import { useState } from "react";
import { marketOptions } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";
import ActivityIcon from "./ActivityIcon";

// 延伸活動:市場挑五花肉(觀察/條件)。不評分、答錯不責備、可重試、點擊操作。
export default function MarketPick({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [chosenId, setChosenId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const choose = (id: string, correct: boolean) => {
    setChosenId(id);
    if (correct) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>延伸活動・挑五花肉 ── 哪一塊肥瘦三比七?</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        攤位上有三塊肉,點點看你覺得哪一塊最適合做滷肉飯。
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        {marketOptions.map((opt) => {
          const showRight = feedback === "right" && opt.correct;
          const isWrongPick =
            feedback === "wrong" && opt.id === chosenId && !opt.correct;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => choose(opt.id, opt.correct)}
              aria-pressed={opt.id === chosenId}
              className={`min-h-[140px] min-w-[96px] flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 border-2 transition-colors ${
                showRight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950 font-bold"
                  : isWrongPick
                    ? "bg-rose-50 border-rose-300"
                    : "bg-white border-stone-200 hover:bg-amber-50"
              }`}
            >
              <ActivityIcon src={`/story/market/${opt.id}.png`} size={80} />
              <span className="text-base font-bold text-center leading-snug">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>
          再看看,太瘦的燉起來會柴、太肥的會膩,阿公要的是三比七喔?
        </GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>
          對,就是這塊。肥瘦三比七,燉起來才油亮不膩。
        </DoneBanner>
      )}
    </ActivityCard>
  );
}
