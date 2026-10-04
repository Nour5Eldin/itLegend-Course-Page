"use client";
import { useRef, useState } from "react";
import type { CourseSidebar } from "@/types/course";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CourseProgressBar } from "./CourseProgressBar";
import { CourseModuleSection } from "./CourseModuleSection";

interface CourseTopicsSidebarProps {
  data: CourseSidebar;
  selectedTopicId: string;
  completedTopicIds: string[];
  progressPercentage: number;
  onSelectTopic: (topicId: string) => void;
}

export function CourseTopicsSidebar({
  data,
  selectedTopicId,
  completedTopicIds,
  progressPercentage,
  onSelectTopic,
}: CourseTopicsSidebarProps) {
  const firstPartId = data.courseParts[0]?.id ?? "";

  const [activePartId, setActivePartId] = useState(firstPartId);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleAccordionChange = (value: string[]) => {
    const requestedPartId = value[0];

    /*
     * If Base UI reports an empty value, it means
     * the currently opened part was clicked again.
     *
     * We don't allow all parts to be closed.
     * Instead, move to the next part in order.
     */
    if (!requestedPartId) {
      const currentIndex = data.courseParts.findIndex(
        (part) => part.id === activePartId,
      );

      const nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % data.courseParts.length;

      const nextPart = data.courseParts[nextIndex];

      if (!nextPart) {
        return;
      }

      setActivePartId(nextPart.id);

      scrollToPart(nextPart.id);

      return;
    }

    setActivePartId(requestedPartId);

    scrollToPart(requestedPartId);
  };

  const scrollToPart = (partId: string) => {
    setTimeout(() => {
      const container = scrollContainerRef.current;
      const item = itemRefs.current[partId];

      if (!container || !item) {
        return;
      }

      const containerRect = container.getBoundingClientRect();

      const itemRect = item.getBoundingClientRect();

      const itemTop = itemRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: Math.max(0, itemTop),
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <aside className="lg:sticky lg:top-8">
      <div className="flex h-[calc(100vh-4rem)] min-h-0 flex-col">
        <div className="shrink-0 space-y-8 pb-6">
          <h2 className="text-2xl font-semibold text-foreground">
            {data.title}
          </h2>

          <CourseProgressBar
            percentage={progressPercentage}
            label={data.progressBarString}
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="min-h-0 flex-1 overflow-y-auto pr-2"
        >
          <Accordion
            value={[activePartId]}
            onValueChange={handleAccordionChange}
            className="space-y-6 pb-6"
          >
            {data.courseParts.map((part) => (
              <AccordionItem
                key={part.id}
                value={part.id}
                ref={(element) => {
                  itemRefs.current[part.id] = element;
                }}
                className="rounded-none border border-border bg-card px-3 py-4"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {part.title}
                </AccordionTrigger>

                <AccordionContent>
                  {part.courseModule.map((module) => (
                    <CourseModuleSection
                      key={module.id}
                      module={module}
                      selectedTopicId={selectedTopicId}
                      completedTopicIds={completedTopicIds}
                      onSelectTopic={onSelectTopic}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </aside>
  );
}