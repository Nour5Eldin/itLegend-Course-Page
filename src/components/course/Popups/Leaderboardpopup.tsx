"use client";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { leaderboardData } from "@/data/course-mock";

interface LeaderboardPopupProps {
  open: boolean;
  onClose: () => void;
}

export function LeaderboardPopup({ open, onClose }: LeaderboardPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-102.5 rounded-3xl p-0 overflow-hidden">
        {open && <LeaderboardPopupContent />}
      </DialogContent>
    </Dialog>
  );
}

function LeaderboardPopupContent() {
  const [emojiStage, setEmojiStage] = useState<"hidden" | "big" | "normal">("hidden");
  const [typedMessage, setTypedMessage] = useState("");
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timersRef.current.push(
      setTimeout(() => setEmojiStage("big"), 1000),
    );
    timersRef.current.push(
      setTimeout(() => {
        setEmojiStage("normal");
        const message = leaderboardData.message;
        let i = 0;
        const interval = setInterval(() => {
          i += 1;
          setTypedMessage(message.slice(0, i));
          if (i >= message.length) clearInterval(interval);
        }, 35);
        timersRef.current.push(interval as unknown as ReturnType<typeof setTimeout>);
      }, 2000),
    );
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return (
    <div className="overflow-y-auto px-4 pb-6 pt-5 max-h-[90vh]">
      <div className="text-center">
        <h2 className="text-lg font-medium text-[#080264]">{leaderboardData.courseName}</h2>
        <p className="mt-1 text-base font-bold text-[#080264]">{leaderboardData.title}</p>
      </div>
      <div className="mt-4 rounded-xl bg-[#f5f9fa] px-5 py-4" dir="rtl">
        <div className="flex items-start gap-3">
          {emojiStage !== "hidden" && (
            <div className="shrink-0 pt-0.5">
              <span
                className="inline-block text-7xl transition-transform duration-500 ease-out"
                style={{
                  transform: emojiStage === "big" ? "scale(1.4)" : "scale(1)",
                  transformOrigin: "center",
                }}>
                {leaderboardData.emoji}
              </span>
            </div>
          )}
          <div className="flex-1">
            <p className="min-h-21 text-right leading-8 text-[#080264]">
              {typedMessage}
              {typedMessage.length > 0 &&
                typedMessage.length < leaderboardData.message.length && (
                  <span className="animate-pulse">|</span>
                )}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-[#f5f9fa] p-4">
        <div className="flex flex-col gap-4">
          {Array.from({ length: leaderboardData.emptySlots }).map((_, i) => (
            <div key={i} className="h-16 rounded-lg border border-border bg-card" />
          ))}
        </div>
      </div>
    </div>
  );
}