import type { Dialogue } from "../lib/story";

const SPEAKER_STYLE: Record<string, string> = {
  桃姨: "bg-rose-100 text-rose-900 border-rose-200",
  阿明: "bg-sky-100 text-sky-900 border-sky-200",
  肉販: "bg-lime-100 text-lime-900 border-lime-200",
};

export default function Narration({
  narration,
  dialogue,
}: {
  narration: string;
  dialogue: Dialogue[];
}) {
  return (
    <div className="space-y-5">
      <p className="text-2xl leading-relaxed text-amber-950 bg-amber-50 border-l-8 border-amber-300 rounded-r-xl px-5 py-4">
        {narration}
      </p>

      <ul className="space-y-3">
        {dialogue.map((line, i) => {
          if (line.speaker === null) {
            return (
              <li
                key={i}
                className="text-xl text-stone-500 italic text-center px-4"
              >
                {line.text}
              </li>
            );
          }
          const tone =
            SPEAKER_STYLE[line.speaker] ??
            "bg-stone-100 text-stone-800 border-stone-200";
          return (
            <li key={i} className="flex flex-col gap-1">
              <span className="text-lg font-bold text-stone-600">
                {line.speaker}
              </span>
              <span
                className={`text-2xl leading-relaxed border rounded-2xl px-5 py-3 ${tone}`}
              >
                {line.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
