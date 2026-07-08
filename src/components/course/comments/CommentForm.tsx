"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function CommentForm() {
    const [commentText, setCommentText] = useState("");
    return (
        <div className="flex flex-col gap-4">
            <Textarea
                className="w-full min-h-35 bg-white border border-gray-300 rounded-none resize-none shadow-md hover:shadow-xl transition-shadow"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
            />
            <Button className="bg-[#41b69d] hover:bg-teal-600 max-w-fit rounded-none p-5">
                Submit Review <ArrowRight size={18} />
            </Button>
        </div>

    )
}