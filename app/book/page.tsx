import BookReader from "../components/BookReader";

// /book ── 從第 1 頁開始翻
export default function BookIndex() {
  return <BookReader initialPage={1} />;
}
