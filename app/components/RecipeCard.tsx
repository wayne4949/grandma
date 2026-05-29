"use client";

import { ingredients, stepSortCorrect } from "../lib/story";

export default function RecipeCard() {
  return (
    <div>
      <article className="recipe-print bg-amber-50 border-4 border-amber-300 rounded-3xl p-6 sm:p-8 text-amber-950">
        <header className="text-center border-b-2 border-amber-300 pb-4 mb-5">
          <h2 className="font-bold text-amber-800">傳家食譜卡 ── 阿嬤的滷肉飯</h2>
          <p className="text-lg text-amber-700 mt-1">好幾代傳下來的味道</p>
        </header>

        <section className="mb-5">
          <h3 className="text-xl font-bold mb-2">食材</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-lg">
            {ingredients.map((ing) => (
              <li key={ing.id}>・{ing.name}</li>
            ))}
          </ul>
          <p className="text-base text-amber-700 mt-2">
            五花肉選肥瘦三比七的最好。
          </p>
        </section>

        <section className="mb-5">
          <h3 className="text-xl font-bold mb-2">步驟</h3>
          <ol className="space-y-1 text-lg">
            {stepSortCorrect.map((step, i) => (
              <li key={step}>
                <span className="font-bold text-amber-700 mr-2">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-5">
          <h3 className="text-xl font-bold mb-2">阿公的小撇步</h3>
          <p className="text-lg">
            醬油用完了?用蠔油加一點點糖,就是「阿公的版本」,意外好吃。
          </p>
        </section>

        <footer className="border-t-2 border-amber-300 pt-4 text-lg italic text-amber-800">
          鍋留阿嬤家,鏟子跟你走。一年後回來,煮給我吃。
        </footer>
      </article>

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print mt-4 min-h-[48px] px-6 py-3 rounded-2xl text-xl font-bold bg-amber-600 text-white hover:bg-amber-700"
      >
        🖨 列印食譜卡
      </button>
    </div>
  );
}
