import type { AbilityCard } from "../../lib/activities";

// 能力卡（格式照 canon §7）：
//   【這題咧練的是 ⟨CT/認知能力⟩】
//   ⟨一句白話說明這個能力是什麼⟩
//   ⟨你剛剛做的哪个動作 = 用到這个能力⟩
export default function AbilityCardView({ ability }: { ability: AbilityCard }) {
  return (
    <section className="rounded-3xl bg-white border-2 border-amber-200 shadow-md p-6">
      <p className="text-lg text-amber-600 font-bold mb-1">能力卡</p>
      <h2 className="font-black text-amber-800 mb-3">
        這題在練的是 ── {ability.skill}
      </h2>
      <p className="text-xl text-stone-700 mb-2">{ability.what}</p>
      <p className="text-xl text-stone-700">
        <span className="font-bold text-amber-700">你的動作：</span>
        {ability.did}
      </p>
      <p className="mt-4 text-base text-stone-400">
        （比挑戰賽簡單，重點是讓你知道自己剛才動到了什麼腦。）
      </p>
    </section>
  );
}
