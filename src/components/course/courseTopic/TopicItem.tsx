"use client";
import { useState } from "react";
import type { CourseTopic } from "@/types/course";
import { FileText, LockKeyhole } from "lucide-react";
import { PdfPopup } from "../Popups/PdfPopup";

export function TopicItem({ topic }: { topic: CourseTopic }) {
  const showBadges = topic.hasQuizzes;
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const canOpenPdf = Boolean(topic.details?.pdfUrl);
  const isColumnLayout = topic.badgesLayout === "column";
  const handleClick = () => {
    if (canOpenPdf) {
      setIsPdfOpen(true);
    }
  }
  return (
    <>
      <div onClick={handleClick} className={`flex items-center justify-between gap-3 border-b border-gray-200 py-3.5 last:border-b-0 ${canOpenPdf ? "cursor-pointer hover:bg-gray-50" : ""}`}>
        <div className="flex min-w-0 items-start gap-2.5">
          <FileText color="#181818" className="h-4 w-4 shrink-0 text-gray-700" />
          <span className="text-sm text-gray-700 whitespace-pre-line">{topic.title}</span>
        </div>
        <div className={`flex shrink-0 items-end gap-2.5 mt-0.5 ${
            isColumnLayout ? "flex-col" : "flex-row items-start"
          }`}>
          {showBadges && typeof topic.questionCount === "number" && (
            <span className="rounded bg-[#f2faf8] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#41b6a3]">
              {topic.questionCount} Question
            </span>
          )}
          {showBadges && topic.duration && (
            <span className="rounded bg-[#fdf2f4] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#e7477d]">
              {topic.duration}
            </span>
          )}
          {topic.isLocked && !showBadges && (
            <LockKeyhole color="#181818" className="h-3 w-3 text-gray-400" />
          )}
        </div>
      </div>
      {canOpenPdf && (<PdfPopup isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} pdfUrl={topic.details!.pdfUrl!} title={topic.title} />)}
    </>
  );
}
