import type { CourseSidebar } from "@/types/course";
import {
  Accordion, AccordionContent, AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { CourseProgressBar } from "./CourseProgressBar";
import { CourseModuleSection } from "./CourseModuleSection";

export function CourseTopicsSidebar({ data }: { data: CourseSidebar }) {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold text-foreground">{data.title}</h2>
      <CourseProgressBar
        percentage={data.progressBarPercentage}
        label={data.progressBarString} />
      <Accordion
        defaultValue={data.courseParts[0] ? [data.courseParts[0].id] : []}
        className="space-y-10">
        {data.courseParts.map((part) => (
          <AccordionItem
            key={part.id}
            value={part.id}
            className="border border-border bg-card rounded-none px-3 py-4">
            <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
              {part.title}
            </AccordionTrigger>
            <AccordionContent>
              {part.courseModule.map((module) => (
                <CourseModuleSection key={module.id} module={module} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
