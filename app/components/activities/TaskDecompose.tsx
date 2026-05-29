"use client";

import { useMemo, useState } from "react";
import { decomposeStages, decomposeTasks } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";
import RecipeCard from "../RecipeCard";
import ActivityIcon from "./ActivityIcon";

type Assignment = Record<string, string | null>;

const REVIEW = [
  "① 認識了六種食材,還有阿公的故事",
  "② 排出滷肉飯的五個步驟",
  "③ 找到每道菜共同的「爆香」規律",
  "④ 學會沒醬油時的「阿公版本」",
  "⑤ 回想今天用過的全部食材",
];

export default function TaskDecompose({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const correctStageOf = useMemo(() => {
    const map: Record<string, string> = {};
    for (const stage of decomposeStages) {
      for (const id of stage.taskIds) map[id] = stage.id;
    }
    return map;
  }, []);

  const initialAssignment = useMemo<Assignment>(() => {
    const a: Assignment = {};
    for (const t of decomposeTasks) a[t.id] = completed ? correctStageOf[t.id] : null;
    return a;
  }, [completed, correctStageOf]);

  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );

  const solved = feedback === "right";

  const assign = (taskId: string, stageId: string | null) => {
    setAssignment((prev) => ({ ...prev, [taskId]: stageId }));
    setSelected(null);
    setFeedback("none");
  };

  const placeSelected = (stageId: string | null) => {
    if (selected) assign(selected, stageId);
  };

  const pool = decomposeTasks.filter((t) => assignment[t.id] == null);

  const check = () => {
    const allCorrect = decomposeTasks.every(
      (t) => assignment[t.id] === correctStageOf[t.id],
    );
    if (allCorrect) {
      setFeedback("right");
      if (!completed) onComplete();
    } else {
      setFeedback("wrong");
    }
  };

  const label = (id: string) =>
    decomposeTasks.find((t) => t.id === id)?.label ?? id;

  return (
    <ActivityCard>
      <ActivityHeading>活動 ⑥ 問題分解 ── 把整道菜拆成三個階段</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        把下面六個小任務,分到「備料 → 烹調 → 完成」三個階段。
        可以用拖拉,或先點一個任務、再點要放的階段。
      </p>

      {/* 待分類任務池 */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const id = e.dataTransfer.getData("text/plain");
          if (id) assign(id, null);
        }}
        className="bg-white border-2 border-dashed border-stone-300 rounded-2xl p-4 min-h-[72px]"
      >
        <p className="text-base text-stone-500 mb-2">待分類的任務:</p>
        <div className="flex flex-wrap gap-3">
          {pool.length === 0 && (
            <span className="text-stone-400 text-lg">(都分好了)</span>
          )}
          {pool.map((t) => (
            <button
              key={t.id}
              type="button"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", t.id)}
              onClick={() => setSelected(selected === t.id ? null : t.id)}
              aria-pressed={selected === t.id}
              className={`min-h-[96px] min-w-[96px] flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-2 border-2 cursor-grab active:cursor-grabbing ${
                selected === t.id
                  ? "bg-amber-300 border-amber-500"
                  : "bg-stone-50 border-stone-200 hover:bg-amber-50"
              }`}
            >
              <ActivityIcon src={`/story/decompose/${t.id}.png`} size={56} />
              <span className="text-lg font-bold">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 三個階段 */}
      <div className="grid gap-4 sm:grid-cols-3 mt-4">
        {decomposeStages.map((stage, idx) => {
          const here = decomposeTasks.filter(
            (t) => assignment[t.id] === stage.id,
          );
          return (
            <div
              key={stage.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const id = e.dataTransfer.getData("text/plain");
                if (id) assign(id, stage.id);
              }}
              className="bg-amber-100/60 border-2 border-amber-300 rounded-2xl p-4 min-h-[140px]"
            >
              <p className="text-xl font-bold text-amber-800 mb-1">
                {idx + 1}. {stage.label}
              </p>
              <button
                type="button"
                onClick={() => placeSelected(stage.id)}
                disabled={!selected}
                className="text-base text-amber-700 underline disabled:opacity-40 disabled:no-underline mb-3"
              >
                放到這裡
              </button>
              <div className="flex flex-wrap gap-2">
                {here.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", t.id)
                    }
                    onClick={() => assign(t.id, null)}
                    aria-label={`把「${t.label}」移回待分類`}
                    className="min-h-[96px] min-w-[96px] flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 bg-white border-2 border-amber-300 hover:bg-rose-50"
                  >
                    <ActivityIcon src={`/story/decompose/${t.id}.png`} size={48} />
                    <span className="text-base font-bold">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={check}
        disabled={pool.length > 0}
        className="mt-5 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white enabled:hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        檢查分類
      </button>

      {feedback === "wrong" && (
        <GuideMessage>
          有幾個好像放錯階段了 ── 想想看,這件事是備料、烹調,還是完成?
        </GuideMessage>
      )}

      {solved && (
        <>
          <DoneBanner>
            就是這樣,你阿公也是這樣教我的 ── 整道菜你都記住了!
          </DoneBanner>

          <div className="mt-5 bg-white border border-amber-200 rounded-2xl p-5">
            <p className="text-xl font-bold text-amber-800 mb-3">
              今天你學會了:
            </p>
            <ul className="space-y-1 text-lg text-stone-700">
              {REVIEW.map((r) => (
                <li key={r}>{r}</li>
              ))}
              <li>
                ⑥ 把「
                {decomposeStages
                  .map((s) => s.taskIds.map(label).join("、"))
                  .join(" → ")}
                」拆成三個階段
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xl font-bold text-amber-800 mb-3">
              🎉 解鎖:傳家食譜卡
            </p>
            <RecipeCard />
          </div>
        </>
      )}
    </ActivityCard>
  );
}
