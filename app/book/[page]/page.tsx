import BookReader from "../../components/BookReader";
import { pages } from "../../lib/story";

// 靜態匯出：預先產生 /book/1 … /book/32
export function generateStaticParams() {
  return pages.map((_, i) => ({ page: String(i + 1) }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = Number(page);
  const initial = Number.isFinite(n) ? n : 1;
  return <BookReader initialPage={initial} />;
}
