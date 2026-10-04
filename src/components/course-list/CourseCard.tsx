import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { CourseSummary } from "@/types/course";
import { COURSE_STATUS_CONFIG } from "./course-status";
import { CourseCardProgress } from "./CourseCardProgress";
import { CourseStatusBadge } from "./CourseStatusBadge";

interface CourseCardProps {
  course: CourseSummary;
  preloadImage?: boolean;
}

export function CourseCard({ course, preloadImage = false }: CourseCardProps) {
  const {
    title,
    instructor,
    description,
    thumbnailUrl,
    lessonsCount,
    progress,
    status,
  } = course;
  const { actionLabel } = COURSE_STATUS_CONFIG[status];

  return (
    <Card className="relative w-full gap-0 rounded-none py-0 shadow-md transition-shadow duration-300 hover:shadow-xl has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={thumbnailUrl}
          alt={`Cover image for ${title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          preload={preloadImage}
          className="object-cover"
        />
        <div className="absolute top-3 left-3">
          <CourseStatusBadge status={status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h2 className="line-clamp-2 text-lg leading-snug font-semibold text-foreground">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">
            By {instructor} · {lessonsCount} lessons
          </p>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <CourseCardProgress value={progress} label={`${title} progress`} />
          <Link
            href={`/courses/${course.slug}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 w-full after:absolute after:inset-0",
            )}
          >
            <span lang="ar">{actionLabel}</span>
            <span className="sr-only">: {title}</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}
