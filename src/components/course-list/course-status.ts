import type { CourseStatus } from "@/types/course";

export const COURSE_STATUS_CONFIG: Record<
    CourseStatus,
    { label: string; actionLabel: string; badgeClassName: string }
> = {
    "not-started": { label: "لم يبدأ", actionLabel: "ابدأ", badgeClassName: "bg-[#f1f3f5] text-[#495057]" },
    "in-progress": { label: "قيد التقدم", actionLabel: "استكمل", badgeClassName: "bg-[#fdecf2] text-[#a8204f]" },
    completed: { label: "مكتمل", actionLabel: "مراجعة", badgeClassName: "bg-[#e6f4ec] text-[#1f6b43]" },
};
