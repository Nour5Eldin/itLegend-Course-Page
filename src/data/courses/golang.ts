import type {
    Comment,
    CourseHero,
    CourseMaterials,
    CourseSidebar,
    LeaderboardPopupData,
} from "@/types/course";

export const golangSummaryData = {
    slug: "golang",
    instructor: "Tech With Tim",
    description:
        "Learn the Go programming language step by step: variables, control flow, collections, functions, pointers, structs and interfaces.",
    progress: 0,
};

export const golangHeroData: CourseHero = {
    id: "golang",
    title: "Golang Tutorial",
    videoUrl: "https://www.youtube.com/watch?v=75lJDVT1h0s",
    posterUrl: "https://img.youtube.com/vi/75lJDVT1h0s/maxresdefault.jpg",
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/" },
        { label: "Course Details", href: "/courses/golang" },
    ],
};

export const golangMaterialsData: CourseMaterials = {
    id: "golang",
    duration: "3 weeks",
    lessonsCount: 22,
    enrolledStudentCount: 90,
    language: "English",
};

export const golangSidebarData: CourseSidebar = {
    id: "golang",
    title: "Topics for This Course",
    progressBarString: "you",
    courseParts: [
        {
            id: "golang-part-1",
            title: "Fundamentals",
            courseModule: [
                {
                    id: "golang-module-1",
                    title: "Lessons 01–11",
                    description:
                        "Variables, input and output, operators, conditions, loops and switch.",
                    topics: [
                        {
                            id: "golang-topic-1",
                            title: "01. An Introduction to Go Programming",
                            videoUrl: "https://www.youtube.com/watch?v=75lJDVT1h0s",
                            posterUrl: "https://img.youtube.com/vi/75lJDVT1h0s/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-2",
                            title: "02. Variables & Data Types",
                            videoUrl: "https://www.youtube.com/watch?v=pM0-CMysa_M",
                            posterUrl: "https://img.youtube.com/vi/pM0-CMysa_M/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-3",
                            title: "03. Assignment Expression & Implicit vs Explicit",
                            videoUrl: "https://www.youtube.com/watch?v=UVp7Cz1NMwA",
                            posterUrl: "https://img.youtube.com/vi/UVp7Cz1NMwA/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-4",
                            title: "04. Printing to Console & fmt",
                            videoUrl: "https://www.youtube.com/watch?v=GQ880MlHBBE",
                            posterUrl: "https://img.youtube.com/vi/GQ880MlHBBE/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-5",
                            title: "05. Console Input (Bufio Scanner) & Type Conversion",
                            videoUrl: "https://www.youtube.com/watch?v=1-bM3lSBDaA",
                            posterUrl: "https://img.youtube.com/vi/1-bM3lSBDaA/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-6",
                            title: "06. Arithmetic Operators & Math",
                            videoUrl: "https://www.youtube.com/watch?v=qCtgLbFWPI4",
                            posterUrl: "https://img.youtube.com/vi/qCtgLbFWPI4/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-7",
                            title: "07. Conditions & Boolean Expressions",
                            videoUrl: "https://www.youtube.com/watch?v=63au_xLLp0A",
                            posterUrl: "https://img.youtube.com/vi/63au_xLLp0A/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-8",
                            title: "08. Chained Conditionals (AND, OR, NOT)",
                            videoUrl: "https://www.youtube.com/watch?v=QvPa8C0y9yc",
                            posterUrl: "https://img.youtube.com/vi/QvPa8C0y9yc/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-9",
                            title: "09. If, Else If, Else",
                            videoUrl: "https://www.youtube.com/watch?v=QgBYnz6I7p4",
                            posterUrl: "https://img.youtube.com/vi/QgBYnz6I7p4/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-10",
                            title: "10. For Loops & While Loops",
                            videoUrl: "https://www.youtube.com/watch?v=jZ-llP_yKNo",
                            posterUrl: "https://img.youtube.com/vi/jZ-llP_yKNo/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-11",
                            title: "11. Switch Statement",
                            videoUrl: "https://www.youtube.com/watch?v=siOPdXdQImg",
                            posterUrl: "https://img.youtube.com/vi/siOPdXdQImg/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
        {
            id: "golang-part-2",
            title: "Intermediate",
            courseModule: [
                {
                    id: "golang-module-2",
                    title: "Lessons 12–17",
                    description:
                        "Arrays, slices, maps and functions.",
                    topics: [
                        {
                            id: "golang-topic-12",
                            title: "12. Arrays",
                            videoUrl: "https://www.youtube.com/watch?v=e-oBn806Pzc",
                            posterUrl: "https://img.youtube.com/vi/e-oBn806Pzc/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-13",
                            title: "13. Slices",
                            videoUrl: "https://www.youtube.com/watch?v=KzKNGGoaT5U",
                            posterUrl: "https://img.youtube.com/vi/KzKNGGoaT5U/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-14",
                            title: "14. Range & Slice/Array Examples",
                            videoUrl: "https://www.youtube.com/watch?v=DYqpu3jF2_4",
                            posterUrl: "https://img.youtube.com/vi/DYqpu3jF2_4/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-15",
                            title: "15. Maps",
                            videoUrl: "https://www.youtube.com/watch?v=yJE2RC37BF4",
                            posterUrl: "https://img.youtube.com/vi/yJE2RC37BF4/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-16",
                            title: "16. Functions",
                            videoUrl: "https://www.youtube.com/watch?v=CrgD_otSzDI",
                            posterUrl: "https://img.youtube.com/vi/CrgD_otSzDI/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-17",
                            title: "17. Advanced Function Concepts & Function Closures",
                            videoUrl: "https://www.youtube.com/watch?v=vdm04bVzkLg",
                            posterUrl: "https://img.youtube.com/vi/vdm04bVzkLg/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
        {
            id: "golang-part-3",
            title: "Advanced",
            courseModule: [
                {
                    id: "golang-module-3",
                    title: "Lessons 18–22",
                    description:
                        "Mutability, pointers, structs, methods and interfaces.",
                    topics: [
                        {
                            id: "golang-topic-18",
                            title: "18. Mutable & Immutable Data Types",
                            videoUrl: "https://www.youtube.com/watch?v=vtYTl4pNDSI",
                            posterUrl: "https://img.youtube.com/vi/vtYTl4pNDSI/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-19",
                            title: "19. Pointers & Derefrence Operator (& and *)",
                            videoUrl: "https://www.youtube.com/watch?v=a4HcEsJ1hIE",
                            posterUrl: "https://img.youtube.com/vi/a4HcEsJ1hIE/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-20",
                            title: "20. Structs and Custom Types",
                            videoUrl: "https://www.youtube.com/watch?v=dm9oXt6_YNA",
                            posterUrl: "https://img.youtube.com/vi/dm9oXt6_YNA/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-21",
                            title: "21. Struct Methods",
                            videoUrl: "https://www.youtube.com/watch?v=5b8MMXgBnp0",
                            posterUrl: "https://img.youtube.com/vi/5b8MMXgBnp0/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                        {
                            id: "golang-topic-22",
                            title: "22. Interfaces",
                            videoUrl: "https://www.youtube.com/watch?v=lh_Uv2imp14",
                            posterUrl: "https://img.youtube.com/vi/lh_Uv2imp14/maxresdefault.jpg",
                            isLocked: false,
                            isCompleted: false,
                        },
                    ],
                },
            ],
        },
    ],
};

export const golangCommentsData: Comment[] = [
    {
        id: "golang-comment-1",
        userId: "1",
        userName: "Omar Hassan",
        userAvatar:
            "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331899/charlie-green_zmue0y.jpg",
        content:
            "A very clear introduction to pointers and structs.",
        createdAt: new Date("2026-09-12"),
    },
    {
        id: "golang-comment-2",
        userId: "2",
        userName: "Mariam Ali",
        userAvatar:
            "https://res.cloudinary.com/dt5u0fgqz/image/upload/v1783331883/michael-dam_esmmfy.jpg",
        content:
            "Beginner-friendly pace, perfect for getting started with Go.",
        createdAt: new Date("2026-09-16"),
    },
];

export const golangLeaderboardData: LeaderboardPopupData = {
    courseName: "Golang Tutorial",
    title: "Leaderboard",
    emoji: "🐹",
    message:
        "ابدأ مع Go وكمّل الدروس عشان اسمك يظهر في الـLeaderboard.",
    entries: [],
    emptySlots: 6,
};