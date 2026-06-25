import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivity } from "../../lib/activities";
import ActivityRunner from "../../components/activities/ActivityRunner";

// 靜態匯出：預先產生每个活動頁
export function generateStaticParams() {
  return activities.map((a) => ({ id: a.id }));
}

const DOMAIN_STYLE: Record<string, string> = {
  CT: "bg-sky-100 text-sky-800 border-sky-200",
  認知: "bg-rose-100 text-rose-800 border-rose-200",
};

export default async function ActivityDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const a = getActivity(id);
  if (!a) notFound();

  return (
    <main className="min-h-screen p-5 sm:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <Link
            href="/activities"
            className="min-h-[48px] px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 text-lg flex items-center"
          >
            ← 活動列表
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`text-base font-bold px-3 py-1 rounded-full border ${
              DOMAIN_STYLE[a.ability.domain]
            }`}
          >
            {a.tag}
          </span>
        </div>
        <h1 className="font-black text-amber-900 mb-2">{a.title}</h1>
        <p className="text-2xl text-stone-700 mb-6">{a.subtitle}</p>

        <ActivityRunner meta={a} />
      </div>
    </main>
  );
}
