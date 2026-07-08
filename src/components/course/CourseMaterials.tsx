import { CourseMaterials as CourseMaterialsType } from "@/types/course";
import { Clock3, Globe, LibraryBig, User } from "lucide-react";
import { Card } from "../ui/card";

function MaterialRow({ icon, label, value, showBorder = true }: { icon: React.ReactNode; label: string; value: string | number; showBorder?: boolean }) {
    return (
        <div className={`inline-flex items-center justify-between pb-2 w-full ${showBorder ? "border-b border-gray-200" : ""}`}>
            <span className="inline-flex items-center gap-2">
                {icon}
                {label}
            </span>
            <span className="font-medium">{value}</span>
        </div>
    );
}

function MaterialsColumn({ materials, className = "" }: { materials: CourseMaterialsType , className?: string }) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <MaterialRow icon={<Clock3 size={18} color="#181818" />} label="Duration:" value={materials.duration} />
            <MaterialRow icon={<LibraryBig size={18} color="#181818" />} label="Lessons:" value={materials.lessonsCount} />
            <MaterialRow icon={<User size={18} color="#181818" />} label="Enrolled:" value={`${materials.enrolledStudentCount} Students`} />
            <MaterialRow icon={<Globe size={18} color="#181818" />} label="Language:" value={materials.language} showBorder={false} />
        </div>
    );
}

export function CourseMaterials({ materials }: { materials: CourseMaterialsType }) {
    return (
        <div className="course-materials">
            <h2 className="text-2xl font-semibold text-foreground">Course Materials</h2>
            <Card className="p-6 mt-6 rounded-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <MaterialsColumn materials={materials} />
                    <MaterialsColumn materials={materials}
                        className="hidden lg:flex" />
                </div>
            </Card>
        </div>
    );
}