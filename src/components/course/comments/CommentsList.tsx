import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Comment } from "@/types/course";

export function CommentsList({ comments }: { comments: Comment[] }) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-foreground">Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                    <Avatar className="size-14">
                        {comment.userAvatar ? (
                            <AvatarImage src={comment.userAvatar} alt={comment.userName} />
                        ) : (
                            <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                        )}
                    </Avatar>
                    <div>
                        <p className="font-semibold">{comment.userName}</p>
                        <p className="text-sm text-gray-400">
                            {comment.createdAt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                        </p>
                        <p className="text-gray-600 mt-2">{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}