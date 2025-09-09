

import React from "react";
import axios from "axios";

// --- YouTube API Service ---
const API_KEY = "AIzaSyAHzvmZY6oh1zudQiwySgz1RKOO7kM9psg";
const CHANNEL_ID = "UCc6V0gWWjfnN28lLiNYze2A";

export const fetchYouTubeVideos = async () => {
  const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      key: API_KEY,
      channelId: CHANNEL_ID,
      part: "snippet",
      order: "date",
      maxResults: 6,
    },
  });
  return response.data.items;
};

// --- YouTube Video Component ---
interface VideoProps {
  videoId: string;
  title: string;
}

export const YoutubeVideo: React.FC<VideoProps> = ({ videoId, title }) => (
  <div className="video-responsive mb-6">
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);





