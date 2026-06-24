"use client";

import { useRef, useState } from "react";
import { scheduleStoves } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
  GuideMessage,
} from "./Feedback";

// 活動・多爐並進（CT：平行化＋排程＋條件）★招牌。
// 簡化長者版：3 口爐、5 道菜、拖放排時段＋大粒按鈕微調、可重試、桃姨口氣提示。
// 目標只要「開桌時全部是熱的」＝逐道攏排入爐、無相疊、開桌前燉好（毋逼最佳解）。

const SLOT = 5; // 一格 5 分鐘
const WIN = scheduleStoves.windowMinutes; // 45 分
const COLS = WIN / SLOT; // 9 格
const STOVES = scheduleStoves.stoveCount; // 3 口爐
const DISHES = scheduleStoves.dishes;

const dur = (id: string) =>
  (DISHES.find((d) => d.id === id)!.cookMinutes) / SLOT;

const COLORS: Record<string, string> = {
  kongrou: "bg-rose-400 border-rose-600",
  crabrice: "bg-amber-400 border-amber-600",
  soup4: "bg-emerald-400 border-emerald-600",
  sesamechicken: "bg-orange-400 border-orange-600",
  poachchicken: "bg-sky-400 border-sky-600",
};

type Placement = { stove: number; start: number };
type State = Record<string, Placement | null>;

const initialState = (): State =>
  Object.fromEntries(DISHES.map((d) => [d.id, null])) as State;

export default function ScheduleStoves({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [place, setPlace] = useState<State>(initialState);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"none" | "wrong" | "right">(
    completed ? "right" : "none",
  );
  const [hint, setHint] = useState<string | null>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  const clampStart = (id: string, start: number) =>
    Math.max(0, Math.min(start, COLS - dur(id)));

  const setDish = (id: string, stove: number, start: number) => {
    setPlace((p) => ({ ...p, [id]: { stove, start: clampStart(id, start) } }));
    setFeedback("none");
    setHint(null);
  };
  const unplace = (id: string) => {
    setPlace((p) => ({ ...p, [id]: null }));
    setFeedback("none");
    setHint(null);
  };

  const slotFromX = (stove: number, clientX: number) => {
    const ref = trackRefs.current[stove];
    if (!ref) return 0;
    const r = ref.getBoundingClientRect();
    return Math.floor(((clientX - r.left) / r.width) * COLS);
  };

  const onDrop = (stove: number, e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (!id) return;
    setDish(id, stove, slotFromX(stove, e.clientX));
  };

  const onTrackClick = (stove: number, e: React.MouseEvent) => {
    if (!selected) return;
    setDish(selected, stove, slotFromX(stove, e.clientX));
    setSelected(null);
  };

  const nudge = (id: string, delta: number) => {
    const pl = place[id];
    if (pl) setDish(id, pl.stove, pl.start + delta);
  };
  const switchStove = (id: string) => {
    const pl = place[id];
    if (pl) setDish(id, (pl.stove + 1) % STOVES, pl.start);
  };

  // 相疊偵測（仝一口爐兩道時間重疊）
  const bad = new Set<string>();
  for (let st = 0; st < STOVES; st++) {
    const on = DISHES.filter((d) => place[d.id]?.stove === st).map((d) => ({
      id: d.id,
      s: place[d.id]!.start,
      e: place[d.id]!.start + dur(d.id),
    }));
    for (let i = 0; i < on.length; i++)
      for (let j = i + 1; j < on.length; j++)
        if (on[i].s < on[j].e && on[j].s < on[i].e) {
          bad.add(on[i].id);
          bad.add(on[j].id);
        }
  }

  const unplaced = DISHES.filter((d) => !place[d.id]);
  const solved = feedback === "right";

  const check = () => {
    if (unplaced.length) {
      setFeedback("wrong");
      setHint(`閣有 ${unplaced.length} 道菜猶未排——逐道攏愛排入爐才會使開桌。`);
      return;
    }
    if (bad.size) {
      setFeedback("wrong");
      setHint("仝一口爐袂使兩道做伙煮，紅框彼幾道相疊矣，用下跤的按鈕徙較開咧。");
      return;
    }
    setFeedback("right");
    if (!completed) onComplete();
  };

  const reset = () => {
    setPlace(initialState());
    setSelected(null);
    setFeedback("none");
    setHint(null);
  };

  const giveHint = () =>
    setHint(
      "控肉愛燉40分，上食時間，叫伊代先起爐（排佇上頭前）上穩當。其他較緊的菜，揣空的爐囥入去就好，毋免逼甲拄拄好。",
    );

  return (
    <ActivityCard>
      <ActivityHeading>多爐並進 ── 三口爐，按怎排予開桌攏燒？</ActivityHeading>
      <p className="text-lg text-stone-600 mb-1">
        共下跤的菜<strong>拖</strong>入三口爐的時間軸；抑是先點一道菜、閣點爐欲囥的位。
      </p>
      <p className="text-base text-stone-500 mb-4">
        規工干焦{WIN}分鐘，開桌佇上尾。排予逐道開桌進前燉好、仝爐莫相疊就好。
      </p>

      {/* 時間軸標頭 */}
      <div className="flex justify-between text-sm text-stone-500 px-1 mb-1">
        <span>開桌前 {WIN} 分</span>
        <span className="font-bold text-amber-700">開桌 →</span>
      </div>

      {/* 三口爐 */}
      <div className="space-y-3">
        {Array.from({ length: STOVES }).map((_, st) => (
          <div key={st} className="flex items-center gap-2">
            <span className="shrink-0 w-14 text-base font-bold text-stone-600">
              {["頭爐", "二爐", "三爐"][st]}
            </span>
            <div
              ref={(el) => {
                trackRefs.current[st] = el;
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(st, e)}
              onClick={(e) => onTrackClick(st, e)}
              className={`relative flex-1 h-16 rounded-xl border-2 overflow-hidden ${
                selected
                  ? "border-amber-400 bg-amber-50 cursor-pointer"
                  : "border-stone-200 bg-stone-50"
              }`}
            >
              {/* 格線 */}
              <div
                className="absolute inset-0 grid"
                style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
                aria-hidden="true"
              >
                {Array.from({ length: COLS }).map((_, c) => (
                  <div key={c} className="border-r border-stone-200/70 last:border-r-0" />
                ))}
              </div>
              {/* 這口爐的菜 */}
              {DISHES.filter((d) => place[d.id]?.stove === st).map((d) => {
                const pl = place[d.id]!;
                return (
                  <div
                    key={d.id}
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", d.id)
                    }
                    className={`absolute inset-y-1 rounded-lg border-2 text-white text-sm font-bold flex items-center justify-center px-1 cursor-grab active:cursor-grabbing ${
                      COLORS[d.id]
                    } ${bad.has(d.id) ? "ring-4 ring-red-500" : ""}`}
                    style={{
                      left: `${(pl.start / COLS) * 100}%`,
                      width: `${(dur(d.id) / COLS) * 100}%`,
                    }}
                  >
                    {d.name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 待排的菜（tray） */}
      {unplaced.length > 0 && (
        <div className="mt-5">
          <p className="text-base text-stone-500 mb-2">猶未排的菜（點一下抑是拖入爐）：</p>
          <div className="flex flex-wrap gap-2">
            {unplaced.map((d) => (
              <button
                key={d.id}
                type="button"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", d.id)}
                onClick={() => setSelected((s) => (s === d.id ? null : d.id))}
                className={`min-h-[48px] px-4 py-2 rounded-xl border-2 text-lg font-bold text-white ${
                  COLORS[d.id]
                } ${selected === d.id ? "ring-4 ring-amber-400" : ""}`}
              >
                {d.name}　{d.cookMinutes}分
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 已排的菜・大粒按鈕微調 */}
      {DISHES.some((d) => place[d.id]) && (
        <div className="mt-5">
          <p className="text-base text-stone-500 mb-2">已排的菜，會使閣徙：</p>
          <ul className="space-y-2">
            {DISHES.filter((d) => place[d.id]).map((d) => (
              <li
                key={d.id}
                className="flex items-center gap-2 flex-wrap bg-white border border-stone-200 rounded-xl px-3 py-2"
              >
                <span
                  className={`w-3 h-3 rounded-full ${COLORS[d.id].split(" ")[0]}`}
                  aria-hidden="true"
                />
                <span className="text-lg font-bold w-28">
                  {d.name}
                  <span className="text-sm text-stone-400 font-normal">
                    （{d.cookMinutes}分）
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => nudge(d.id, -1)}
                  aria-label={`${d.name}較早煮`}
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-stone-100 text-xl hover:bg-stone-200"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={() => nudge(d.id, 1)}
                  aria-label={`${d.name}較晏煮`}
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-stone-100 text-xl hover:bg-stone-200"
                >
                  ▶
                </button>
                <button
                  type="button"
                  onClick={() => switchStove(d.id)}
                  aria-label={`${d.name}換一口爐`}
                  className="min-h-[44px] px-3 rounded-lg bg-stone-100 text-base hover:bg-stone-200"
                >
                  換爐
                </button>
                <button
                  type="button"
                  onClick={() => unplace(d.id)}
                  aria-label={`${d.name}提出來`}
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-stone-100 text-base hover:bg-stone-200"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 操作鈕 */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button
          type="button"
          onClick={check}
          disabled={solved}
          className="min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-500 text-white enabled:hover:bg-amber-600 disabled:opacity-50"
        >
          開桌！看好矣未
        </button>
        <button
          type="button"
          onClick={giveHint}
          className="min-h-[48px] px-5 py-3 rounded-2xl text-lg font-bold bg-stone-100 text-stone-700 hover:bg-stone-200"
        >
          👵 予我一个提示
        </button>
        <button
          type="button"
          onClick={reset}
          className="min-h-[48px] px-5 py-3 rounded-2xl text-lg font-bold bg-stone-100 text-stone-700 hover:bg-stone-200"
        >
          重排
        </button>
      </div>

      {hint && feedback !== "right" && <GuideMessage>{hint}</GuideMessage>}
      {feedback === "right" && (
        <DoneBanner>
          鼎鼎攏燒燙燙，拄拄好開桌！你用三口爐鬥陣煮，共一百外分鐘的工夫，排佇開桌進前攏煮便！五道菜並行走、用時間咧控制——這就是辦桌才有的硬功夫（並行化＋排程）。
        </DoneBanner>
      )}
    </ActivityCard>
  );
}
