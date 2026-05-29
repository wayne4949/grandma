// 進度持久化:用 useSyncExternalStore 讀寫 localStorage。
// 這樣可避免「在 effect 內 setState」(react-hooks/set-state-in-effect),
// 並讓靜態匯出的 prerender 用 server snapshot(預設值),hydration 後再切換到存檔。

import { useSyncExternalStore } from "react";
import type { ActivityKind } from "./story";

const KEY = "grandma-storybook:v1";
const EVENT = "grandma-progress-change";

export interface Progress {
  page: number;
  completed: ActivityKind[];
}

const DEFAULT: Progress = { page: 0, completed: [] };

let cache: Progress = DEFAULT;
let loaded = false;

function load(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      page: typeof parsed.page === "number" ? parsed.page : 0,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
    };
  } catch {
    return DEFAULT;
  }
}

function getSnapshot(): Progress {
  if (!loaded) {
    cache = load();
    loaded = true;
  }
  return cache;
}

function getServerSnapshot(): Progress {
  return DEFAULT;
}

function subscribe(callback: () => void): () => void {
  const onCustom = () => callback();
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      loaded = false; // 跨分頁更新:下次 getSnapshot 重新載入
      callback();
    }
  };
  window.addEventListener(EVENT, onCustom);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, onCustom);
    window.removeEventListener("storage", onStorage);
  };
}

export function setProgress(updater: (prev: Progress) => Progress): void {
  const next = updater(getSnapshot());
  cache = next;
  loaded = true;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // 忽略寫入失敗(例如隱私模式)
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
