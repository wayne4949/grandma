"use client";

import { useState } from "react";
import { ingredients } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";
import ActivityIcon from "./ActivityIcon";

export default function MemoryRecall({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const toggle = (id: string) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setFeedback("none");
  };

  const submit = () => {
    const allChosen = ingredients.every((i) => picked.has(i.id));
    if (allChosen) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>活動 ⑤ 記憶回想 ── 我們剛剛放了什麼?</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        阿嬤考考你:今天的滷肉飯,我們用了哪些食材?把用過的都選起來。
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ingredients.map((ing) => {
          const isPicked = picked.has(ing.id);
          return (
            <button
              key={ing.id}
              type="button"
              onClick={() => toggle(ing.id)}
              aria-pressed={isPicked}
              className={`min-h-[112px] min-w-[96px] flex flex-col items-center justify-center gap-2 rounded-2xl border-2 px-3 py-3 transition-colors ${
                isPicked
                  ? "bg-indigo-200 border-indigo-500 text-indigo-950"
                  : "bg-white border-stone-200 text-stone-800 hover:bg-indigo-50"
              }`}
            >
              <ActivityIcon src={`/story/ingredients/${ing.id}.png`} />
              <span className="text-lg font-bold flex items-center gap-1">
                {isPicked && (
                  <span className="text-indigo-700" aria-hidden="true">
                    ✓
                  </span>
                )}
                {ing.name}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={submit}
        className="mt-5 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white hover:bg-amber-600"
      >
        我選好了
      </button>

      {feedback === "wrong" && (
        <GuideMessage>再想想,今天好像還有用到別的喔?</GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>妳記得不錯喔 ── 有些東西啊,身體會記得。</DoneBanner>
      )}
    </ActivityCard>
  );
}
