"use client";

import { useState } from "react";
import { conditionOptions } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

export default function ConditionChoice({
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
      <ActivityHeading>活動 ④ 條件判斷 ── 醬油用完了,怎麼辦?</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        醬油剛好用完了。你會怎麼做?選選看「阿公的版本」。
      </p>

      <div className="space-y-3">
        {conditionOptions.map((opt) => {
          const isChosen = opt.id === chosenId;
          const showRight = feedback === "right" && opt.correct;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => choose(opt.id, opt.correct)}
              aria-pressed={isChosen}
              className={`w-full min-h-[56px] text-left rounded-2xl text-2xl px-5 py-4 border-2 transition-colors ${
                showRight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950 font-bold"
                  : isChosen && feedback === "wrong"
                    ? "bg-rose-50 border-rose-300"
                    : "bg-white border-stone-200 hover:bg-amber-50"
              }`}
            >
              <span className="font-bold text-amber-700 mr-2">{opt.id}.</span>
              {opt.label}
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>
          <span className="mr-1">(阿咪:喵?)</span>
          妳阿公一定不會這樣⋯再想想?
        </GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>來,我們今天就試試看「阿公的版本」!</DoneBanner>
      )}
    </ActivityCard>
  );
}
