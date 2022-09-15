import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/269642629_1729300650606871_7579167713292384481_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHhmY5LFqgaZNB678vBwCXu5ak1pBgZQHflqTWkGBlAd7TMF-DB73EHMoyxBCRCXQO5kLYVQc0PAtzwvqAO9swk&_nc_ohc=eUwhlcPNHPIAX-Tvmi_&tn=NYpYAvcW9sxu1p45&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT8Osq7zXleLQIkrH_axWzR6dBRTEjKRMfaSLbqy7wQ1-w&oe=63285A2F"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          Sirawich Pintana 640612099
        </span>
      </div>
      <span className="text-white">
        Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
      </span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>100 คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
}
