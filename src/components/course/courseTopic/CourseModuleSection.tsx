import type { CourseModule } from "@/types/course";
import { TopicItem } from "./TopicItem";

export function CourseModuleSection({ module }: { module: CourseModule }) {
  return (
    <div className="rounded-none border-border bg-card py-2">
      <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {module.description}
      </p>
      <div className="mt-6">
        {module.topics.map((topic) => (
          <TopicItem key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
