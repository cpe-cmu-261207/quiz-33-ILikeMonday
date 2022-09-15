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
        <PostOwner
          name={"Sirawich Pintana 640612099"}
          text={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          likes={"56 คน"}
          pic={
            "https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/269642629_1729300650606871_7579167713292384481_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHhmY5LFqgaZNB678vBwCXu5ak1pBgZQHflqTWkGBlAd7TMF-DB73EHMoyxBCRCXQO5kLYVQc0PAtzwvqAO9swk&_nc_ohc=eUwhlcPNHPIAX-Tvmi_&tn=NYpYAvcW9sxu1p45&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT8Osq7zXleLQIkrH_axWzR6dBRTEjKRMfaSLbqy7wQ1-w&oe=63285A2F"
          }
        />
      </div>

      {/* Comment Example */}
      <div>
        <Comment />
      </div>

      {/* Reply Example */}
    </div>
  );
}
