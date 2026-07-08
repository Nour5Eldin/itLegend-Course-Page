import { CommentsList } from "./CommentsList";
import { CommentForm } from "./CommentForm";
import { Comment } from "@/types/course";

 
export function CommentsSection({ comments }: { comments: Comment[] }) {
    return (
        <div className="flex flex-col gap-8">
            <CommentsList comments={comments} />
            <CommentForm />
        </div>
    );
}