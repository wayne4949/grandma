import Link from "next/link";
import { activities } from "../lib/activities";

const PRIORITY_NOTE: Record<string, string> = {
  P0: "招牌活動",
  P1: "進階",
  P2: "延伸",
  P3: "輕鬆",
};

const DOMAIN_STYLE: Record<string, string> = {
  CT: "bg-sky-100 text-sky-800 border-sky-200",
  認知: "bg-rose-100 text-rose-800 border-rose-200",
};

export default function ActivitiesIndex() {
  return (
    <main className="min-h-screen p-5 sm:p-8">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <Link
            href="/"
            className="min-h-[48px] px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 text-lg flex items-center"
          >
            ← 回首頁
          </Link>
          <Link
            href="/book/1"
            className="min-h-[48px] px-4 py-2 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 text-lg flex items-center"
          >
            看繪本
          </Link>
        </div>

        <h1 className="font-black text-amber-900 mb-2">動腦活動</h1>
        <p className="text-xl text-stone-700 mb-7">
          逐个活動攏標明咧練啥物能力。會使重試，做了會出一張能力卡。
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {activities.map((a) => (
            <li key={a.id}>
              <Link
                href={`/activities/${a.id}`}
                className="block h-full rounded-3xl bg-white border-2 border-amber-100 shadow-md p-5 hover:border-amber-300 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className={`text-base font-bold px-3 py-1 rounded-full border ${
                      DOMAIN_STYLE[a.ability.domain]
                    }`}
                  >
                    {a.tag}
                  </span>
                  <span className="text-sm text-stone-400">
                    {a.page}・{PRIORITY_NOTE[a.priority]}
                  </span>
                </div>
                <h2 className="font-black text-amber-800 mb-1">{a.title}</h2>
                <p className="text-lg text-stone-600">{a.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
