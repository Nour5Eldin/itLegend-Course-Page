import { preload } from "react-dom";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data";
import CourseDetailsPage from "@/features/CourseDetailsPage";

interface CourseDetailsRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CourseDetailsRouteProps): Promise<Metadata> {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | ITLegend",
      description: "The requested course could not be found.",
    };
  }

  const title = course.hero.title;
  const description = course.summary.description;
  const posterUrl = course.hero.posterUrl;

  return {
    title: `${title} | ITLegend`,
    description,
    openGraph: {
      title: `${title} | ITLegend`,
      description,
      images: posterUrl
        ? [{ url: posterUrl }]
        : [{ url: "https://itlegend.net/assets/images/og-img.png" }],
    },
  };
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