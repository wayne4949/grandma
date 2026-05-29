// 共用回饋:答錯用阿嬤口氣引導(不責備),完成用溫暖肯定。

export function GuideMessage({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="status"
      className="mt-5 text-xl text-amber-900 bg-amber-100 border border-amber-300 rounded-2xl px-5 py-4"
    >
      <span className="mr-2" aria-hidden="true">
        👵
      </span>
      {children}
    </p>
  );
}

export function DoneBanner({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="status"
      className="mt-5 text-xl font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 rounded-2xl px-5 py-4"
    >
      <span className="mr-2" aria-hidden="true">
        ✓
      </span>
      {children}
    </p>
  );
}

export function ActivityCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-orange-50 border-2 border-amber-200 rounded-3xl p-5 sm:p-6">
      {children}
    </section>
  );
}

export function ActivityHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold text-amber-800 mb-4">{children}</h2>;
}
