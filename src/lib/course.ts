import type { CourseStatus } from "@/types/course";

export function getCourseDetailsPath(slug: string): string {
    return `/courses/${slug}`;
}

export function getCourseBreadcrumb(slug: string, title: string) {
    return [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: title, href: `/courses/${slug}` },
    ];
}

export function getCourseStatus(progress: number): CourseStatus {
    if (progress >= 100) return "completed";
    if (progress > 0) return "in-progress";
    return "not-started";
}