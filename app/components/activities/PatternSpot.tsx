"use client";

import { useState } from "react";
import { patternDishes, patternCommonStep } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

export default function PatternSpot({
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

  const pick = (step: string) => {
    if (step === patternCommonStep) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>活動 ③ 辨識規律 ── 找出共同的動作</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        看看這三道菜的步驟,圈出每一道都有的那個動作。點點看你覺得是哪一個。
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {patternDishes.map((dish) => (
          <div
            key={dish.name}
            className="bg-white border-2 border-amber-200 rounded-2xl p-4"
          >
            <p className="text-xl font-bold text-amber-800 mb-3">
              {dish.name}
            </p>
            <ul className="space-y-2">
              {dish.steps.map((step, i) => {
                const isCommon = step === patternCommonStep;
                const highlight = solved && isCommon;
                return (
                  <li key={`${dish.name}-${i}`}>
                    <button
                      type="button"
                      onClick={() => pick(step)}
                      className={`w-full min-h-[48px] rounded-xl text-xl px-3 py-2 border-2 transition-colors ${
                        highlight
                          ? "bg-emerald-200 border-emerald-500 text-emerald-950 font-bold"
                          : "bg-stone-50 border-stone-200 hover:bg-amber-50"
                      }`}
                    >
                      {step}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>再看看,哪個動作每道菜都有?</GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>找到了!學會一個規律,勝過背十道菜。</DoneBanner>
      )}
    </ActivityCard>
  );
}
