"use client";

import { useState } from "react";
import { conditionOptions } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

// 活動・條件判斷（CT：IF）。P.14 危機：上好老豆油焦去，按怎救色？
// 資料沿用 canon v2 conditionOptions（A 蠔油+冰糖✅／B 加水❌／C 不做❌）。
// 可重試、答錯不責備、桃姨口氣提示。
const WRONG_HINT: Record<string, string> = {
  B: "干焦加水落去，色sîn去、味嘛走矣，這鼎控肉就無魂。閣想看覓。",
  C: "都欲開桌矣，哪會使按呢放棄。咱來想步數，無一定愛豆油。",
};

export default function ConditionChoice({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [picked, setPicked] = useState<string | null>(completed ? "A" : null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const solved = feedback === "right";

  const pick = (id: string, correct: boolean) => {
    setPicked(id);
    if (correct) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <ActivityCard>
      <ActivityHeading>條件判斷 ── 老豆油焦去矣，按怎救色？</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        招牌控肉拄欲上色，彼矸上好的老豆油拄好焦。人客欲到矣——你欲按怎？
      </p>

      <div className="space-y-3">
        {conditionOptions.map((opt) => {
          const isPicked = picked === opt.id;
          const showRight = solved && opt.correct;
          const showWrong = feedback === "wrong" && isPicked;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={solved}
              onClick={() => pick(opt.id, opt.correct)}
              className={`w-full text-left min-h-[56px] px-5 py-4 rounded-2xl border-2 text-xl font-bold transition-colors ${
                showRight
                  ? "bg-emerald-200 border-emerald-500 text-emerald-950"
                  : showWrong
                    ? "bg-rose-100 border-rose-400 text-rose-900"
                    : "bg-white border-stone-200 text-stone-800 enabled:hover:bg-amber-50 disabled:opacity-60"
              }`}
            >
              <span className="text-amber-600 mr-2">{opt.id}.</span>
              {opt.label}
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && picked && (
        <GuideMessage>{WRONG_HINT[picked] ?? "閣想看覓，揣會當救色的步數。"}</GuideMessage>
      )}
      {feedback === "right" && (
        <DoneBanner>
          著！蠔油加少許冰糖救色——這正是幾十年前師父料無夠時，烏白舞煞舞出的成名菜步數。
        </DoneBanner>
      )}
    </ActivityCard>
  );
}
