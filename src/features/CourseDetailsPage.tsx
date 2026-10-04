"use client";

import { Suspense, useMemo, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CourseData } from "@/data/course-data";
import { useCourseProgress } from "@/lib/useCourseProgress";
import { BreadcrumbNav } from "@/components/course/BreadcrumbNav";
import { CommentsSection } from "@/components/course/comments/CommentsSection";
import { CourseMaterials } from "@/components/course/CourseMaterials";
import { CourseTopicsSidebar } from "@/components/course/courseTopic/CourseTopicsSidebar";
import { QuickActionsBar } from "@/components/course/QuickActionsBar";
import { VideoHero } from "@/components/course/VideoHero";

const LESSON_PARAM = "lesson";

interface CourseDetailsPageProps {
  course: CourseData;
}

export default function CourseDetailsPage(props: CourseDetailsPageProps) {
  return (
    <Suspense fallback={null}>
      <CourseDetailsContent {...props} />
    </Suspense>
  );
}

function CourseDetailsContent({ course }: CourseDetailsPageProps) {
  const searchParams = useSearchParams();

  const allTopics = useMemo(() => {
    return course.sidebar.courseParts.flatMap((part) =>
      part.courseModule.flatMap((module) => module.topics),
    );
  }, [course]);

  const firstTopic = allTopics[0];
  const [selectedTopicId, setSelectedTopicId] = useState(() => {
    const fromUrl = allTopics.find(
      (topic) => topic.id === searchParams.get(LESSON_PARAM),
    );

    return fromUrl && !fromUrl.isLocked ? fromUrl.id : (firstTopic?.id ?? "");
  });
  useEffect(() => {
    const lessonFromUrl = searchParams.get(LESSON_PARAM);

    if (lessonFromUrl) {
      return;
    }

    if (!firstTopic || firstTopic.isLocked) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    params.set(LESSON_PARAM, firstTopic.id);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  }, [searchParams, firstTopic]);
  const { completedTopicIds, markCompleted } = useCourseProgress(
    course.summary.slug,
  );

  const videoRef = useRef<HTMLDivElement>(null);

  const selectedTopic =
    allTopics.find((topic) => topic.id === selectedTopicId) ?? firstTopic;

  const progressPercentage =
    allTopics.length === 0
      ? 0
      : Math.round((completedTopicIds.length / allTopics.length) * 100);

  const selectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    const params = new URLSearchParams(window.location.search);
    params.set(LESSON_PARAM, topicId);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };
  const scrollToVideo = () => {
    const target = videoRef.current;

    if (!target) return;

    const { top, bottom } = target.getBoundingClientRect();

    if (top < 0 || bottom > window.innerHeight) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };
  const handleSelectTopic = (topicId: string) => {
    selectTopic(topicId);
    scrollToVideo();
  };

  const handleVideoEnded = () => {
    if (!selectedTopic) {
      return;
    }

    markCompleted(selectedTopic.id, allTopics.length);
    const currentIndex = allTopics.findIndex(
      (topic) => topic.id === selectedTopic.id,
    );

    const nextTopic = allTopics
      .slice(currentIndex + 1)
      .find((topic) => !topic.isLocked);

    if (nextTopic) {
      selectTopic(nextTopic.id);
    }
  };

  if (!selectedTopic) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#fafbfc]">
      <div className="bg-[#f5f9fa]">
        <div className="mx-auto max-w-7xl px-4 pb-2 pt-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <BreadcrumbNav items={course.hero.breadcrumb} />
            <h1 className="text-2xl font-semibold text-foreground sm:text-4xl">
              {course.hero.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-10">
          <div
            ref={videoRef}
            className="min-w-0 scroll-mt-4 lg:col-start-1 lg:row-start-1"
          >
            <VideoHero
              videoUrl={selectedTopic.videoUrl}
              posterUrl={selectedTopic.posterUrl}
              onEnded={handleVideoEnded}
              autoPlay
            />
            <QuickActionsBar leaderboard={course.leaderboard} />
          </div>
          <div className="min-w-0 lg:col-start-1 lg:row-start-2">
            <CourseMaterials materials={course.materials} />
          </div>
          <aside
            id="curriculum-section"
            className="min-w-0 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:sticky lg:top-8 lg:self-start"
          >
            <CourseTopicsSidebar
              data={course.sidebar}
              selectedTopicId={selectedTopicId}
              completedTopicIds={completedTopicIds}
              progressPercentage={progressPercentage}
              onSelectTopic={handleSelectTopic}
            />
          </aside>
          <div
            id="comments-section"
            className="min-w-0 lg:col-start-1 lg:row-start-3"
          >
            <CommentsSection comments={course.comments} />
          </div>
        </div>
      </div>
    </main>
  );
}