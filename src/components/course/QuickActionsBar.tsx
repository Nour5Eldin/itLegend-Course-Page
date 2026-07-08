"use client";
import { BookOpen, HelpCircle, Trophy, MessageCircleMore } from "lucide-react";
import { LeaderboardPopup } from "./Popups/Leaderboardpopup";
import { useState } from "react";

export function QuickActionsBar() {
    const [leaderboardOpen, setLeaderboardOpen] = useState(false);
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
        <div className="flex items-center gap-3 mt-4">
            <button
                onClick={() => scrollToSection("curriculum-section")}
                className="bg-white/50 border border-gray-300 rounded-full p-3 hover:scale-110 transition-transform">
                <BookOpen  size={18} color="#181818" />
            </button>
            <button
                onClick={() => scrollToSection("comments-section")}
                className="bg-white/50 border border-gray-300 rounded-full p-3 hover:scale-110 transition-transform">
                <MessageCircleMore  size={18} color="#181818" />
            </button>
            <button
                onClick={() => { }}
                className="bg-white/50 border border-gray-300 rounded-full p-3 hover:scale-110 transition-transform">
                <HelpCircle size={18} color="#181818" />
            </button>
            <button
                onClick={() => {  setLeaderboardOpen(true)}}
                className="bg-white/50 border border-gray-300 rounded-full p-3 hover:scale-110 transition-transform">
                <Trophy size={18} color="#181818" />
            </button>
        </div>
        <LeaderboardPopup open={leaderboardOpen} onClose={() => setLeaderboardOpen(false)} />
        </>
    );
}