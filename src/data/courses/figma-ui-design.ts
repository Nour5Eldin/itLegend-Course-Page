import type {
    Comment,
    CourseHero,
    CourseMaterials,
    CourseSidebar,
    LeaderboardPopupData,
} from "@/types/course";

export const figmaUiDesignSummaryData = {
    slug: "figma-ui-design",
    instructor: "Ehab Fayez",
    description:
        "Learn UI design principles and Figma from scratch in Arabic: colors, typography, spacing, layout, wireframes and Auto Layout.",
    progress: 0,
};

export const figmaUiDesignHeroData: CourseHero = {
    id: "figma-ui-design",
    title: "Figma and UI Design Course: From Beginner to Pro",
    videoUrl: "https://www.youtube.com/watch?v=XD_IEIbbF4Q",
    posterUrl: "https://img.youtube.com/vi/XD_IEIbbF4Q/maxresdefault.jpg",
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/" },
        { label: "Course Details", href: "/courses/figma-ui-design" },
    ],
};

export const figmaUiDesignMaterialsData: CourseMaterials = {
    id: "figma-ui-design",
    duration: "3 weeks",
    lessonsCount: 21,
    enrolledStudentCount: 130,
    language: "Arabic",
};

export const figmaUiDesignSidebarData: CourseSidebar = {
    id: "figma-ui-design",
    title: "Topics for This Course",
    progressBarString: "you",
    courseParts: [
        {
            id: "figma-ui-design-part-1",
            title: "Fundamentals",
            courseModule: [
                {
                    id: "figma-ui-design-module-1",
                    title: "Lessons 01–11",
                    description:
                        "UI design theory: colors, typography, spacing, layout and wireframes.",
                    topics: [
                        {
                            id: "figma-ui-design-topic-1",
                            title: "01. مقدمة كورس تعلم Figma من الصفر للاحتراف 2026",
                            videoUrl: "https://www.youtube.com/watch?v=XD_IEIbbF4Q",
                            posterUrl: "https://img.youtube.com/vi/XD_IEIbbF4Q/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: true,
                        },
                        {
                            id: "figma-ui-design-topic-2",
                            title: "02. المقدمة",
                            videoUrl: "https://www.youtube.com/watch?v=MJDPFYe_0g0",
                            posterUrl: "https://img.youtube.com/vi/MJDPFYe_0g0/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: true,
                        },
                        {
                            id: "figma-ui-design-topic-3",
                            title: "03. هل المجال مهم وليه مستقبل؟",
                            videoUrl: "https://www.youtube.com/watch?v=qSOAlU6112o",
                            posterUrl: "https://img.youtube.com/vi/qSOAlU6112o/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-4",
                            title: "04. ايه الجهاز الي محتاجه؟",
                            videoUrl: "https://www.youtube.com/watch?v=YQ8kgnIVLMw",
                            posterUrl: "https://img.youtube.com/vi/YQ8kgnIVLMw/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-5",
                            title: "05. كل حاجه محتاج تعرفها عن الالوان Color",
                            videoUrl: "https://www.youtube.com/watch?v=1SfKlnZxdNw",
                            posterUrl: "https://img.youtube.com/vi/1SfKlnZxdNw/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-6",
                            title: "06. كل حاجه محتاج تعرفها عن النصوص Typography",
                            videoUrl: "https://www.youtube.com/watch?v=IgcyqReaUb8",
                            posterUrl: "https://img.youtube.com/vi/IgcyqReaUb8/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-7",
                            title: "07. كل حاجه  عن المسافات UI Spacing",
                            videoUrl: "https://www.youtube.com/watch?v=kr7ExgMWmAY",
                            posterUrl: "https://img.youtube.com/vi/kr7ExgMWmAY/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-8",
                            title: "08. كل حاجه عن الـ UI Layout الجزء الاول",
                            videoUrl: "https://www.youtube.com/watch?v=gJ5SHjWMTyE",
                            posterUrl: "https://img.youtube.com/vi/gJ5SHjWMTyE/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-9",
                            title: "09. كل حاجه عن الـ UI Layout الجزء الثاني",
                            videoUrl: "https://www.youtube.com/watch?v=nHRcr2NivzU",
                            posterUrl: "https://img.youtube.com/vi/nHRcr2NivzU/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-10",
                            title: "10. كل حاجه عن الـ UI Layout الجزء الثالث",
                            videoUrl: "https://www.youtube.com/watch?v=rxOvJsjuGIA",
                            posterUrl: "https://img.youtube.com/vi/rxOvJsjuGIA/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-11",
                            title: "11. كل حاجه عن الـ Wireframes وامتي تستخدمه!",
                            videoUrl: "https://www.youtube.com/watch?v=4eh8iMcjgXs",
                            posterUrl: "https://img.youtube.com/vi/4eh8iMcjgXs/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
        {
            id: "figma-ui-design-part-2",
            title: "Intermediate",
            courseModule: [
                {
                    id: "figma-ui-design-module-2",
                    title: "Lessons 12–17",
                    description:
                        "Getting started with Figma: interface, typography, colors and effects.",
                    topics: [
                        {
                            id: "figma-ui-design-topic-12",
                            title: "12. الحلقة الأولى من كورس تعلم Figma",
                            videoUrl: "https://www.youtube.com/watch?v=vpCqCd0n9kc",
                            posterUrl: "https://img.youtube.com/vi/vpCqCd0n9kc/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-13",
                            title: "13. تعلم واجهة فيجما الجزء الاول",
                            videoUrl: "https://www.youtube.com/watch?v=i8mBt_883y8",
                            posterUrl: "https://img.youtube.com/vi/i8mBt_883y8/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-14",
                            title: "14. تعلم واجهة فيجما الجزء الثاني",
                            videoUrl: "https://www.youtube.com/watch?v=JOUcTCl4Ad4",
                            posterUrl: "https://img.youtube.com/vi/JOUcTCl4Ad4/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-15",
                            title: "15. استخدام النصوص Typography باحترافيه",
                            videoUrl: "https://www.youtube.com/watch?v=p_i-mUsb8nk",
                            posterUrl: "https://img.youtube.com/vi/p_i-mUsb8nk/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-16",
                            title: "16. استخدام الالوان Colors باحترافيه",
                            videoUrl: "https://www.youtube.com/watch?v=XCiFT9gEmoo",
                            posterUrl: "https://img.youtube.com/vi/XCiFT9gEmoo/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-17",
                            title: "17. استخدام التآثيرات Effects  باحترافيه",
                            videoUrl: "https://www.youtube.com/watch?v=swo9bRDPLb8",
                            posterUrl: "https://img.youtube.com/vi/swo9bRDPLb8/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
        {
            id: "figma-ui-design-part-3",
            title: "Advanced",
            courseModule: [
                {
                    id: "figma-ui-design-module-3",
                    title: "Lessons 18–21",
                    description:
                        "Sections, groups and Auto Layout.",
                    topics: [
                        {
                            id: "figma-ui-design-topic-18",
                            title: "18. استخدام Sections لتسليم المبرمج الشغل",
                            videoUrl: "https://www.youtube.com/watch?v=qkgI9XtfSdU",
                            posterUrl: "https://img.youtube.com/vi/qkgI9XtfSdU/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-19",
                            title: "19. استخدام Groups وايه مميزاته",
                            videoUrl: "https://www.youtube.com/watch?v=aQtJAtNy1DU",
                            posterUrl: "https://img.youtube.com/vi/aQtJAtNy1DU/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-20",
                            title: "20. بدايه استخدام ال Auto Layout",
                            videoUrl: "https://www.youtube.com/watch?v=Tcm9-lPP8Fo",
                            posterUrl: "https://img.youtube.com/vi/Tcm9-lPP8Fo/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "figma-ui-design-topic-21",
                            title: "21. استخدام ال Auto Layout الجزء الثاني",
                            videoUrl: "https://www.youtube.com/watch?v=Y9rgIyJlBDc",
                            posterUrl: "https://img.youtube.com/vi/Y9rgIyJlBDc/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
    ],
};

export const figmaUiDesignCommentsData: Comment[] = [
    {
        id: "figma-ui-design-comment-1",
        userId: "1",
        userName: "Ahmed Mostafa",
        userAvatar:
            "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331899/charlie-green_zmue0y.jpg",
        content:
            "The colors and typography lessons improved my designs a lot.",
        createdAt: new Date("2026-09-08"),
    },
    {
        id: "figma-ui-design-comment-2",
        userId: "2",
        userName: "Lina Mohamed",
        userAvatar:
            "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331883/michael-dam_esmmfy.jpg",
        content:
            "The Auto Layout lessons were exactly what I needed.",
        createdAt: new Date("2026-09-14"),
    },
];

export const figmaUiDesignLeaderboardData: LeaderboardPopupData = {
    courseName: "كورس تعلم Figma و UI Design",
    title: "Leaderboard",
    emoji: "🎨",
    message:
        "بداية حلوة! كمّل الدروس وخلّي اسمك في الـLeaderboard.",
    entries: [],
    emptySlots: 6,
};