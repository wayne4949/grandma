"use client";

import { useState } from "react";
import { fridgeItems } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

// 延伸活動:冰箱搜尋(搜尋/模式)。從瓶罐中找出蠔油。
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
      <ActivityHeading>延伸活動・冰箱搜尋 ── 哪一罐是蠔油?</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        冰箱裡瓶瓶罐罐,找出顏色深、較稠的那一罐蠔油。點點看。
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {fridgeItems.map((item) => {
          const highlight = solved && item.isAnswer;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => pick(item.isAnswer)}
              className={`min-h-[64px] rounded-2xl text-2xl font-bold px-3 py-4 border-2 transition-colors ${
                highlight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-800 hover:bg-amber-50"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <GuideMessage>再揣看覓,顏色深、較稠,跟醬油較像的那一罐?</GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>著,就是蠔油!顏色深又鹹,等咧醬油無夠就靠它。</DoneBanner>
      )}
    </ActivityCard>
  );
}
