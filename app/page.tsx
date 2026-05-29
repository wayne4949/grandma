"use client";

import { useEffect } from "react";
import { pages, type ActivityKind } from "./lib/story";
import { useProgress, setProgress } from "./lib/progress";
import PageShell from "./components/PageShell";
import IngredientReveal from "./components/activities/IngredientReveal";
import StepSort from "./components/activities/StepSort";
import PatternSpot from "./components/activities/PatternSpot";
import ConditionChoice from "./components/activities/ConditionChoice";
import MemoryRecall from "./components/activities/MemoryRecall";
import TaskDecompose from "./components/activities/TaskDecompose";
import MarketPick from "./components/activities/MarketPick";
import FridgeSearch from "./components/activities/FridgeSearch";
import HeatControl from "./components/activities/HeatControl";

export default function Home() {
  const progress = useProgress();
  const currentPage = Math.min(Math.max(0, progress.page), pages.length - 1);
  const completed = progress.completed;

  // 換頁時捲回頂端(不含 setState,符合 effect 規範)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const goTo = (target: number) => {
    const clamped = Math.min(Math.max(0, target), pages.length - 1);
    setProgress((prev) => ({ ...prev, page: clamped }));
  };

  const markComplete = (kind: ActivityKind) => {
    setProgress((prev) =>
      prev.completed.includes(kind)
        ? prev
        : { ...prev, completed: [...prev.completed, kind] },
    );
  };

  const page = pages[currentPage];
  const isLast = currentPage === pages.length - 1;
  const activityCleared = !page.activity || completed.includes(page.activity);
  const canGoNext = !isLast && activityCleared;
  const canGoPrev = currentPage > 0;

  const renderActivity = () => {
    if (!page.activity) return null;
    const activity = page.activity;
    const props = {
      completed: completed.includes(activity),
      onComplete: () => markComplete(activity),
    };
    switch (activity) {
      case "ingredient":
        return <IngredientReveal {...props} />;
      case "stepSort":
        return <StepSort {...props} />;
      case "pattern":
        return <PatternSpot {...props} />;
      case "condition":
        return <ConditionChoice {...props} />;
      case "memory":
        return <MemoryRecall {...props} />;
      case "decompose":
        return <TaskDecompose {...props} />;
      case "marketPick":
        return <MarketPick {...props} />;
      case "fridgeSearch":
        return <FridgeSearch {...props} />;
      case "heatControl":
        return <HeatControl {...props} />;
    }
  };

  return (
    <PageShell
      page={page}
      pageIndex={currentPage}
      total={pages.length}
      canGoPrev={canGoPrev}
      canGoNext={canGoNext}
      onPrev={() => goTo(currentPage - 1)}
      onNext={() => goTo(currentPage + 1)}
    >
      {renderActivity()}
    </PageShell>
  );
}
