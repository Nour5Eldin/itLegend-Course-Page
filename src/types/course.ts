export interface CourseSidebar {
    id: string;
    title: string;
    progressBarString: string;
    courseParts: CoursePart[];
}
export interface CoursePart {
    id: string;
    title: string;
    courseModule: CourseModule[];
}
export interface CourseModule {
    id: string;
    title: string;
    description: string;
    topics: CourseTopic[];
}
export interface CourseTopic {
    id: string;
    title: string;
    duration?: string;
    videoUrl: string;
    posterUrl: string;
    lesson?: {
        title: string;
        description: string;
    };
    hasQuizzes?: boolean;
    isLocked: boolean;
    questionCount?: number;
    isCompleted?: boolean;
    badgesLayout?: "row" | "column";
    details?: TopicDetails;
}
export interface TopicDetails {
    questionCount: number;
    pdfUrl?: string;
}

export interface CourseMaterials {
    id: string;
    duration: string;
    lessonsCount: number;
    enrolledStudentCount: number;
    language: string;
}

export interface Comment {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    content: string;
    createdAt: Date;
}
export interface BreadcrumbItem {
    label: string;
    href: string;
}

export interface CourseHero {
    id: string;
    title: string;
    videoUrl: string;
    posterUrl: string;
    breadcrumb: BreadcrumbItem[];
}
export interface LeaderboardEntry {
    id: number;
    name: string;
    score: number;
}

export interface LeaderboardPopupData {
    courseName: string;
    title: string;
    emoji: string;
    message: string;
    entries: LeaderboardEntry[];
    emptySlots: number;
}
export type CourseStatus = "not-started" | "in-progress" | "completed";

export interface CourseSummary {
    slug: string;
    title: string;
    instructor: string;
    description: string;
    thumbnailUrl: string;
    lessonsCount: number;
    progress: number;
    status: CourseStatus;
}