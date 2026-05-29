"use client";

import { useState } from "react";
import { heatOptions } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

// 延伸活動:火候(序列/條件補強)。不評分、答錯不責備、可重試、點擊操作。
export default function HeatControl({
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
      <ActivityHeading>延伸活動・火候 ── 燉煮要用什麼火?</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        肉下鍋、水也加了,接下來要慢慢燉。你會開大火還是小火?
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {heatOptions.map((opt) => {
          const showRight = feedback === "right" && opt.correct;
          const isWrongPick =
            feedback === "wrong" && opt.id === chosenId && !opt.correct;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => choose(opt.id, opt.correct)}
              aria-pressed={opt.id === chosenId}
              className={`min-h-[64px] rounded-2xl text-2xl px-5 py-4 border-2 transition-colors ${
                showRight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950 font-bold"
                  : isWrongPick
                    ? "bg-rose-50 border-rose-300"
                    : "bg-white border-stone-200 hover:bg-amber-50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>大火會把湯燒焦,肉也會硬,再想想?</GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>
          著,小火慢慢燉,肉才會爛;等收汁的時候才轉大火。
        </DoneBanner>
      )}
    </ActivityCard>
  );
}
