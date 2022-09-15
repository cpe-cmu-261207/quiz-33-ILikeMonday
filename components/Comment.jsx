import { useRouter } from "next/router";
import { comments } from "../libs/comments";
import { useState } from "react";
import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const [filterText, setFilterText] = useState("");
  const filtered = comments.filter((x) =>
    x.username.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      {/* Entire Comment div */}
      {filtered.map((x) => (
        <div className="d-flex gap-2 my-2" key={x.userImagePath}>
          <img
            src={x.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {x.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{x.commentText}</span>
            {x.likeNum > 0 ? (
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span style={{ color: "#B0B3B8" }}>{x.likeNum}</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <Reply reply={x.replies} />
        </div>
      ))}

      {/*render Reply here... */}
    </div>
  );
}
