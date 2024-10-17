"use client";
import { useState } from "react";
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const incrementLike = () => {
    setLikes(likes + 1);
  };
  return <button onClick={incrementLike}>likes {likes}</button>;
}
