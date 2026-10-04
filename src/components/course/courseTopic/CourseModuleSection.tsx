import type { CourseModule } from "@/types/course";
import { TopicItem } from "./TopicItem";

interface CourseModuleSectionProps {
  module: CourseModule;
  selectedTopicId: string;
  completedTopicIds: string[];
  onSelectTopic: (topicId: string) => void;
}

export function CourseModuleSection({
  module,
  selectedTopicId,
  completedTopicIds,
  onSelectTopic,
}: CourseModuleSectionProps) {
  return (
    <div className="rounded-none border-border bg-card py-2">
      <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {module.description}
      </p>

      <div className="mt-6">
        {module.topics.map((topic) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            isSelected={selectedTopicId === topic.id}
            isCompleted={completedTopicIds.includes(topic.id)}
            onSelect={onSelectTopic}
          />
        ))}
      </div>
    </div>
  );
}