"use client";

import { useEffect, useState } from "react";
import { ingredients } from "../../lib/story";
import {
  ActivityCard,
  ActivityHeading,
  DoneBanner,
} from "./Feedback";

export default function IngredientReveal({
  completed,
  onComplete,
}: {
  completed: boolean;
  onComplete: () => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [viewed, setViewed] = useState<Set<string>>(new Set());

  const allViewed = viewed.size === ingredients.length;

  useEffect(() => {
    if (allViewed && !completed) onComplete();
  }, [allViewed, completed, onComplete]);

  const selected = ingredients.find((i) => i.id === selectedId);

  return (
    <ActivityCard>
      <ActivityHeading>活動 ① 認識食材 ── 每一種都有阿公的故事</ActivityHeading>
      <p className="text-lg text-stone-600 mb-4">
        點點看每一樣食材,聽阿嬤說它的故事。六樣都看過,就可以繼續。
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ingredients.map((ing) => {
          const isViewed = viewed.has(ing.id);
          const isActive = ing.id === selectedId;
          return (
            <button
              key={ing.id}
              type="button"
              onClick={() => {
                setSelectedId(ing.id);
                setViewed((prev) => new Set(prev).add(ing.id));
              }}
              aria-pressed={isActive}
              className={`min-h-[64px] rounded-2xl text-2xl font-bold border-2 px-3 py-4 transition-colors ${
                isActive
                  ? "bg-amber-300 border-amber-500 text-amber-950"
                  : isViewed
                    ? "bg-amber-100 border-amber-300 text-amber-900"
                    : "bg-white border-stone-200 text-stone-800 hover:bg-amber-50"
              }`}
            >
              {ing.name}
              {isViewed && (
                <span className="ml-1 text-emerald-600" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-5 bg-white border border-amber-200 rounded-2xl p-5 space-y-3">
          <p className="text-2xl">
            <span className="font-bold text-amber-800">{selected.name}</span>
          </p>
          <p className="text-xl text-rose-900">
            <span className="font-bold mr-1">阿嬤:</span>
            {selected.ahmaIntro}
          </p>
          <p className="text-xl text-stone-700">
            <span className="font-bold mr-1">阿公的故事:</span>
            {selected.ahgongStory}
          </p>
        </div>
      )}

      <p className="mt-4 text-lg text-amber-700">
        已認識 {viewed.size} / {ingredients.length} 種食材
      </p>

      {allViewed && <DoneBanner>六樣都認識了,我們繼續吧。</DoneBanner>}
    </ActivityCard>
  );
}
