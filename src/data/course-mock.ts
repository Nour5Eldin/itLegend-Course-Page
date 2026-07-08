import { CourseMaterials, CourseModule, CourseSidebar, Comment, CoursePart, CourseHero, LeaderboardPopupData } from "@/types/course";
export const weekModulePeriod1: CourseModule = {
    id: "1",
    title: "Week 1-4",
    description: "Advanced story telling techniques for writers: Personas, Characters & Plots",
    topics: [
        {
            id: "1",
            title: "Introduction",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "2",
            title: "Course Overview",
            duration: "10 minutes",
            hasQuizzes: true,
            isLocked: true,
            questionCount: 0,
            isCompleted: false,
            details: {
                questionCount: 0,
                pdfUrl: "/pdf/NourEldinMahmoud_FrontEndCV.pdf",
            },
        },
        {
            id: "3",
            title: "Course Exercise / Reference Files",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "4",
            title: "Code Editor Installation (Optional if you have one)",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "5",
            title: "Embedding PHP in HTML",
            duration: "15 minutes",
            isLocked: true,
            isCompleted: false
        },


    ]
};

export const weekModulePeriod2: CourseModule = {
    id: "2",
    title: "Week 5-8",
    description: "Advanced story telling techniques for writers: Personas, Characters & Plots",
    topics: [
        {
            id: "6",
            title: "Defining Functions",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "7",
            title: "Function Parameters",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "8",
            title: "Return Values From\nFunctions",
            duration: "15 minutes",
            hasQuizzes: true,
            isLocked: true,
            questionCount: 2,
            isCompleted: false,
            badgesLayout: "column",
        },
        {
            id: "9",
            title: "Global Variable and Scope",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "10",
            title: "Newer Way of creating a Constant",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "11",
            title: "Constants",
            isLocked: true,
            isCompleted: false
        },

    ]
};
export const weekModulePeriod3: CourseModule = {
    id: "3",
    title: "Week 9-12",
    description: "Advanced story telling techniques for writers: Personas, Characters & Plots",
    topics: [
        {
            id: "6",
            title: "Defining Functions",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "7",
            title: "Function Parameters",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "8",
            title: "Return Values From\nFunctions",
            duration: "15 minutes",
            hasQuizzes: true,
            isLocked: true,
            questionCount: 2,
            isCompleted: false,
            badgesLayout: "column",
        },
        {
            id: "9",
            title: "Global Variable and Scope",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "10",
            title: "Newer Way of creating a Constant",
            isLocked: true,
            isCompleted: false
        },
        {
            id: "11",
            title: "Constants",
            isLocked: true,
            isCompleted: false
        },

    ]
};
const courseIntroductionPart: CoursePart = {
    id: "1",
    title: "Course Introduction",
    courseModule: [weekModulePeriod1]
};
const courseJavascriptBasicsPart: CoursePart = {
    id: "2",
    title: "JavaScript Language Basics",
    courseModule: [weekModulePeriod2]
};
const coursecomponentsDatabindingPart: CoursePart = {
    id: "3",
    title: "Components and DataBinding",
    courseModule: [weekModulePeriod3]
};
export const courseSidebarData: CourseSidebar = {
    id: "1",
    title: "Topics for This Course",
    progressBarString: "you",
    progressBarPercentage: 63,
    courseParts: [courseIntroductionPart, courseJavascriptBasicsPart, coursecomponentsDatabindingPart]
}

export const courseMaterialsData: CourseMaterials = {
    id: "1",
    duration: "3 weeks",
    lessonsCount: 8,
    enrolledStudentCount: 65,
    language: "English"
};

export const commentsData: Comment[] = [
    {
        id: "1",
        userId: "1",
        userName: "Student Name Goes Here",
        userAvatar: "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331899/charlie-green_zmue0y.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date("Oct 10, 2021")
    },
    {
        id: "2",
        userId: "2",
        userName: "Student Name Goes Here",
        userAvatar: "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331883/michael-dam_esmmfy.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date("Oct 15, 2021")
    },
    {
        id: "3",
        userId: "3",
        userName: "Student Name Goes Here",
        userAvatar: "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331885/albert-dera_f5lnnk.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date("Oct 19, 2021")
    }
];
export const courseHeroData: CourseHero = {
    id: "1",
    title: "Starting SEO as your Home",
    videoUrl: "https://res.cloudinary.com/dt5u0fgqz/video/upload/v1783409341/YTDown.com_YouTube_SEO-in-2025-How-I-d-Learn-it-if-I-Were-S_Media_s2h7X-c2jE_001_1080p_i2qtlh.mp4",
    posterUrl: "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783410371/_s2h7X-c2jE-HD_ts8r2u.jpg",
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Course Details", href: "/courses/seo" },
    ],
};
export const leaderboardData: LeaderboardPopupData = {
    courseName: "Course Name Shown Here",
    title: "Leaderboard",
    emoji: "\u{1F4AA}",
    message:
        "عظيم يا صديقي.. أداءك في الكورس ده أفضل من ٦٠% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا",
    entries: [],
    emptySlots: 6,
};