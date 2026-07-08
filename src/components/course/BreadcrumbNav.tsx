import { ChevronRight } from "lucide-react";

export function BreadcrumbNav({ items }: { items: { label: string; href: string }[] }) {
    return (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <span key={index} className="inline-flex items-center gap-2">
                        {isLast ? (
                            <span className="font-medium text-foreground">{item.label}</span>
                        ) : (
                            <a href={item.href} className="hover:underline">
                                {item.label}
                            </a>
                        )}
                        {!isLast && <span className="text-muted-foreground"><ChevronRight size={18} color="#181818" /></span>}
                    </span>
                );
            })}
        </nav>
    );
}