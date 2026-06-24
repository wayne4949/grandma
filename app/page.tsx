import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <p className="text-xl text-amber-700 mb-3">銀髮族・認知能力 × 運算思維學習繪本</p>
        <h1 className="font-black text-amber-900 mb-2">《阿桃師的辦桌》</h1>
        <p className="text-2xl text-stone-700 mb-10">
          總鋪師桃姨的一工——一桌十道菜，是一世人的條理。
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <Link
            href="/book/1"
            className="group rounded-3xl bg-amber-500 text-white shadow-xl px-8 py-10 hover:bg-amber-600 transition-colors"
          >
            <span className="block text-6xl mb-4" aria-hidden="true">
              📖
            </span>
            <span className="block text-3xl font-black mb-2">看繪本</span>
            <span className="block text-lg opacity-90">32 頁・左右翻頁・跟桃姨辦一桌</span>
          </Link>

          <Link
            href="/activities"
            className="group rounded-3xl bg-emerald-500 text-white shadow-xl px-8 py-10 hover:bg-emerald-600 transition-colors"
          >
            <span className="block text-6xl mb-4" aria-hidden="true">
              🧩
            </span>
            <span className="block text-3xl font-black mb-2">玩活動</span>
            <span className="block text-lg opacity-90">動腦小遊戲・練運算思維與認知</span>
          </Link>
        </div>

        <p className="mt-10 text-base text-stone-500">
          建議用大字、坐予四正，慢慢來。每个活動攏會使重試。
        </p>
      </div>
    </main>
  );
}
