import { CourseList } from "@/components/course-list/CourseList";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getCourseSummaries } from "@/data/index";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
];

export default function CoursesPageView() {
  return (
    <main className="min-h-screen bg-[#fafbfc]">
      <PageHeader breadcrumb={breadcrumb} title="Courses" />
      <Container className="py-8">
        <CourseList courses={getCourseSummaries()} />
      </Container>
    </main>
  );
}
