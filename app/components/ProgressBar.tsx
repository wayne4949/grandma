export default function ProgressBar({
  current,
  total,
}: {
  current: number; // 0-based
  total: number;
}) {
  const pageNo = current + 1;
  const pct = Math.round((pageNo / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-lg font-bold text-amber-800">
          第 {pageNo} / {total} 頁
        </span>
      </div>
      <div
        className="h-4 w-full bg-amber-100 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={pageNo}
        aria-label={`閱讀進度:第 ${pageNo} 頁,共 ${total} 頁`}
      >
        <div
          className="h-full bg-amber-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
