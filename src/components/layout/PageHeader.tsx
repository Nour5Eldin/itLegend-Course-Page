import { BreadcrumbNav } from "@/components/course/BreadcrumbNav";
import type { BreadcrumbItem } from "@/types/course";
import { Container } from "./Container";

export function PageHeader({
  breadcrumb,
  title,
}: {
  breadcrumb: BreadcrumbItem[];
  title: string;
}) {
  return (
    <div className="bg-[#f5f9fa]">
      <Container className="pt-8 pb-2">
        <div className="flex flex-col gap-8">
          <BreadcrumbNav items={breadcrumb} />
          <h1 className="text-2xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h1>
        </div>
      </Container>
    </div>
  );
}
