"use client";

import type { ActivityMeta } from "../../lib/activities";
import type { ActivityKind } from "../../lib/story";
import { useProgress, setProgress } from "../../lib/progress";
import AbilityCardView from "./AbilityCardView";
import StepSort from "./StepSort";
import FridgeSearch from "./FridgeSearch";
import ScheduleStoves from "./ScheduleStoves";
import ConditionChoice from "./ConditionChoice";
import MemoryRecall from "./MemoryRecall";

// 把活動導言、互動本體、能力卡串起來。能力卡照 canon §7：做完才出現。
// 互動本體已實作（built）者渲染對應元件；未實作者出「建置中」殼＋能力卡預覽。
export default function ActivityRunner({ meta }: { meta: ActivityMeta }) {
  const progress = useProgress();
  const done = progress.completed.includes(meta.id);

  const markComplete = () =>
    setProgress((prev) =>
      prev.completed.includes(meta.id)
        ? prev
        : { ...prev, completed: [...prev.completed, meta.id] },
    );

  const body = renderBody(meta.id, done, markComplete);

  return (
    <>
      {/* 桃姨口氣導言 */}
      <p className="text-xl text-amber-900 bg-amber-50 border-l-8 border-amber-300 rounded-r-xl px-5 py-4 mb-8">
        <span className="mr-2" aria-hidden="true">
          👵
        </span>
        {meta.intro}
      </p>

      {body ? (
        <div className="mb-8">{body}</div>
      ) : (
        <section className="rounded-3xl border-2 border-dashed border-stone-300 bg-stone-50 p-8 text-center mb-8">
          <span className="block text-5xl mb-3" aria-hidden="true">
            🛠️
          </span>
          <p className="text-2xl font-bold text-stone-600 mb-1">活動建置中</p>
          <p className="text-lg text-stone-500">
            這個互動小遊戲下一輪就會做出來。下面先看看會練到什麼能力。
          </p>
        </section>
      )}

      {/* 能力卡：互動本體做完才出；未實作者直接預覽 */}
      {(!body || done) && <AbilityCardView ability={meta.ability} />}
    </>
  );
}

function renderBody(
  id: ActivityKind,
  done: boolean,
  onComplete: () => void,
) {
  const props = { completed: done, onComplete };
  switch (id) {
    case "scheduleStoves":
      return <ScheduleStoves {...props} />;
    case "fridgeSearch":
      return <FridgeSearch {...props} />;
    case "stepSort":
      return <StepSort {...props} />;
    case "condition":
      return <ConditionChoice {...props} />;
    case "memory":
      return <MemoryRecall {...props} />;
    default:
      return null; // 其餘活動下一輪實作
  }
}
