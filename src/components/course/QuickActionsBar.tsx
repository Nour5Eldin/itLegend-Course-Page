"use client";

import {
    BookOpen,
    HelpCircle,
    Trophy,
    MessageCircleMore,
} from "lucide-react";
import { useState } from "react";

import { LeaderboardPopup } from "./Popups/Leaderboardpopup";
import type { LeaderboardPopupData } from "@/types/course";

interface QuickActionsBarProps {
    leaderboard: LeaderboardPopupData;
}

export function QuickActionsBar({
    leaderboard,
}: QuickActionsBarProps) {
    const [leaderboardOpen, setLeaderboardOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="mt-4 flex items-center gap-3">
                <button
                    onClick={() => scrollToSection("curriculum-section")}
                    className="rounded-full border border-gray-300 bg-white/50 p-3 transition-transform hover:scale-110"
                >
                    <BookOpen size={18} color="#181818" />
                </button>

                <button
                    onClick={() => scrollToSection("comments-section")}
                    className="rounded-full border border-gray-300 bg-white/50 p-3 transition-transform hover:scale-110"
                >
                    <MessageCircleMore size={18} color="#181818" />
                </button>

                <button
                    onClick={() => {}}
                    className="rounded-full border border-gray-300 bg-white/50 p-3 transition-transform hover:scale-110"
                >
                    <HelpCircle size={18} color="#181818" />
                </button>

                <button
                    onClick={() => setLeaderboardOpen(true)}
                    className="rounded-full border border-gray-300 bg-white/50 p-3 transition-transform hover:scale-110"
                >
                    <Trophy size={18} color="#181818" />
                </button>
            </div>

            <LeaderboardPopup
                open={leaderboardOpen}
                onOpenChange={setLeaderboardOpen}
                data={leaderboard}
            />
        </>
    );
}