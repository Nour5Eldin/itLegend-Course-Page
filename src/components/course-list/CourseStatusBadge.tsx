import { cn } from "@/lib/utils";
import type { CourseStatus } from "@/types/course";
import { COURSE_STATUS_CONFIG } from "./course-status";

export function CourseStatusBadge({ status }: { status: CourseStatus }) {
  const { label, badgeClassName } = COURSE_STATUS_CONFIG[status];
  return (
    <span
      lang="ar"
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium shadow-sm",
        badgeClassName,
      )}
    >
      {label}
    </span>
  );
}
