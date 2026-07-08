import { BreadcrumbNav } from "@/components/course/BreadcrumbNav";
import { CommentsSection } from "@/components/course/comments/CommentsSection";
import { CourseMaterials } from "@/components/course/CourseMaterials";
import { CourseTopicsSidebar } from "@/components/course/courseTopic/CourseTopicsSidebar";
import { QuickActionsBar } from "@/components/course/QuickActionsBar";
import { VideoHero } from "@/components/course/VideoHero";
import { commentsData, courseMaterialsData, courseSidebarData, courseHeroData } from "@/data/course-mock";

export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc]">
      <div className="bg-[#f5f9fa]">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-2 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <BreadcrumbNav items={courseHeroData.breadcrumb} />
            <h1 className="text-2xl font-semibold text-foreground sm:text-4xl">
              {courseHeroData.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_360px] lg:gap-10 lg:items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <VideoHero videoUrl={courseHeroData.videoUrl} posterUrl={courseHeroData.posterUrl} />
            <QuickActionsBar />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <CourseMaterials materials={courseMaterialsData} />
          </div>
          <div id="curriculum-section" className="lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:sticky lg:top-8 lg:self-start">
            <CourseTopicsSidebar data={courseSidebarData} />
          </div>
          <div id="comments-section" className="lg:col-start-1 lg:row-start-3">
            <CommentsSection comments={commentsData} />
          </div>
        </div>
      </div>
    </main>
  );
}