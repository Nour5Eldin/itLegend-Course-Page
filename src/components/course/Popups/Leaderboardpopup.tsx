"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { LeaderboardPopupData } from "@/types/course";

interface LeaderboardPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: LeaderboardPopupData;
}

export function LeaderboardPopup({
  open,
  onOpenChange,
  data,
}: LeaderboardPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-102.5 overflow-hidden rounded-3xl p-0">
        {open && <LeaderboardPopupContent data={data} />}
      </DialogContent>
    </Dialog>
  );
}

interface LeaderboardPopupContentProps {
  data: LeaderboardPopupData;
}

function LeaderboardPopupContent({ data }: LeaderboardPopupContentProps) {
  const [emojiStage, setEmojiStage] = useState<"hidden" | "big" | "normal">(
    "hidden",
  );

  const [typedMessage, setTypedMessage] = useState("");

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timersRef.current.push(
      setTimeout(() => {
        setEmojiStage("big");
      }, 1000),
    );

    timersRef.current.push(
      setTimeout(() => {
        setEmojiStage("normal");

        const message = data.message;
        let i = 0;

        const interval = setInterval(() => {
          i += 1;

          setTypedMessage(message.slice(0, i));

          if (i >= message.length) {
            clearInterval(interval);
          }
        }, 35);

        timersRef.current.push(
          interval as unknown as ReturnType<typeof setTimeout>,
        );
      }, 2000),
    );

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [data.message]);

  return (
    <div className="max-h-[90vh] overflow-y-auto px-4 pb-6 pt-5">
      <div className="text-center">
        <h2 className="text-lg font-medium text-[#080264]">
          {data.courseName}
        </h2>

        <p className="mt-1 text-base font-bold text-[#080264]">{data.title}</p>
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
                }}
              >
                {data.emoji}
              </span>
            </div>
          )}

          <div className="flex-1">
            <p className="min-h-21 text-right leading-8 text-[#080264]">
              {typedMessage}

              {typedMessage.length > 0 &&
                typedMessage.length < data.message.length && (
                  <span className="animate-pulse">|</span>
                )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[#f5f9fa] p-4">
        <div className="flex flex-col gap-4">
          {Array.from({ length: data.emptySlots }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-lg border border-border bg-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
