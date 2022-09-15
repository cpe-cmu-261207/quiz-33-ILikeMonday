import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div>
        <PostOwner />
      </div>

      {/* Comment Example */}
      <div>
        <Comment />
      </div>

      {/* Reply Example */}
    </div>
  );
}
