import {
    javascriptArabicSummaryData,
    javascriptArabicHeroData,
    javascriptArabicMaterialsData,
    javascriptArabicSidebarData,
    javascriptArabicCommentsData,
    javascriptArabicLeaderboardData,
} from "@/data/courses/javascript-arabic";

import {
    typescriptSummaryData,
    typescriptHeroData,
    typescriptMaterialsData,
    typescriptSidebarData,
    typescriptCommentsData,
    typescriptLeaderboardData,
} from "@/data/courses/typescript";

import {
    reactArabicSummaryData,
    reactArabicHeroData,
    reactArabicMaterialsData,
    reactArabicSidebarData,
    reactArabicCommentsData,
    reactArabicLeaderboardData,
} from "@/data/courses/react-arabic";

import {
    pythonArabicSummaryData,
    pythonArabicHeroData,
    pythonArabicMaterialsData,
    pythonArabicSidebarData,
    pythonArabicCommentsData,
    pythonArabicLeaderboardData,
} from "@/data/courses/python-arabic";

import {
    golangSummaryData,
    golangHeroData,
    golangMaterialsData,
    golangSidebarData,
    golangCommentsData,
    golangLeaderboardData,
} from "@/data/courses/golang";

import {
    figmaUiDesignSummaryData,
    figmaUiDesignHeroData,
    figmaUiDesignMaterialsData,
    figmaUiDesignSidebarData,
    figmaUiDesignCommentsData,
    figmaUiDesignLeaderboardData,
} from "@/data/courses/figma-ui-design";

export const courses = {
    "javascript-arabic": {
        summary: javascriptArabicSummaryData,
        hero: javascriptArabicHeroData,
        materials: javascriptArabicMaterialsData,
        sidebar: javascriptArabicSidebarData,
        comments: javascriptArabicCommentsData,
        leaderboard: javascriptArabicLeaderboardData,
    },

    typescript: {
        summary: typescriptSummaryData,
        hero: typescriptHeroData,
        materials: typescriptMaterialsData,
        sidebar: typescriptSidebarData,
        comments: typescriptCommentsData,
        leaderboard: typescriptLeaderboardData,
    },

    "react-arabic": {
        summary: reactArabicSummaryData,
        hero: reactArabicHeroData,
        materials: reactArabicMaterialsData,
        sidebar: reactArabicSidebarData,
        comments: reactArabicCommentsData,
        leaderboard: reactArabicLeaderboardData,
    },

    "python-arabic": {
        summary: pythonArabicSummaryData,
        hero: pythonArabicHeroData,
        materials: pythonArabicMaterialsData,
        sidebar: pythonArabicSidebarData,
        comments: pythonArabicCommentsData,
        leaderboard: pythonArabicLeaderboardData,
    },

    golang: {
        summary: golangSummaryData,
        hero: golangHeroData,
        materials: golangMaterialsData,
        sidebar: golangSidebarData,
        comments: golangCommentsData,
        leaderboard: golangLeaderboardData,
    },

    "figma-ui-design": {
        summary: figmaUiDesignSummaryData,
        hero: figmaUiDesignHeroData,
        materials: figmaUiDesignMaterialsData,
        sidebar: figmaUiDesignSidebarData,
        comments: figmaUiDesignCommentsData,
        leaderboard: figmaUiDesignLeaderboardData,
    },

};

export type CourseData = (typeof courses)[keyof typeof courses];