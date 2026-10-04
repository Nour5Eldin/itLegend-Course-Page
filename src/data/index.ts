import { courses } from "@/data/course-data";
import { getCourseStatus } from "@/lib/course";
import type { CourseSummary } from "@/types/course";

export { courses };

export function getCourseSummaries(): CourseSummary[] {
    return Object.values(courses).map((course) => ({
        slug: course.summary.slug,
        title: course.hero.title,
        instructor: course.summary.instructor,
        description: course.summary.description,
        thumbnailUrl: course.hero.posterUrl,
        lessonsCount: course.materials.lessonsCount,
        progress: course.summary.progress,
        status: getCourseStatus(course.summary.progress),
    }));
}

export function getCourseBySlug(slug: string) {
    return courses[slug as keyof typeof courses];
}