"use client";

import { useMemo } from "react";

import { useAllCourseProgress } from "@/lib/useCourseProgress";
import { getCourseStatus } from "@/lib/course";
import type { CourseSummary } from "@/types/course";
import { CourseCard } from "./CourseCard";

const PRELOADED_CARDS = 1;

export function CourseList({ courses }: { courses: CourseSummary[] }) {
  const savedProgress = useAllCourseProgress();
  const coursesWithProgress = useMemo(
    () =>
      courses.map((course) => {
        const saved = savedProgress[course.slug];

        if (!saved || saved.totalTopics === 0) return course;

        const progress = Math.min(
          100,
          Math.round(
            (saved.completedTopicIds.length / saved.totalTopics) * 100,
          ),
        );

        return { ...course, progress, status: getCourseStatus(progress) };
      }),
    [courses, savedProgress],
  );

  if (coursesWithProgress.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No courses available yet.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {coursesWithProgress.map((course, index) => (
        <li key={course.slug} className="flex">
          <CourseCard course={course} preloadImage={index < PRELOADED_CARDS} />
        </li>
      ))}
    </ul>
  );
}
