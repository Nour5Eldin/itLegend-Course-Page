import { preload } from "react-dom";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data";
import CourseDetailsPage from "@/features/CourseDetailsPage";

interface CourseDetailsRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetailsRoute({
  params,
}: CourseDetailsRouteProps) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const firstTopic =
    course.sidebar.courseParts[0]?.courseModule[0]?.topics[0];

  if (firstTopic?.posterUrl) {
    preload(firstTopic.posterUrl, {
      as: "image",
      fetchPriority: "high",
    });
  }

  return <CourseDetailsPage course={course} />;
}