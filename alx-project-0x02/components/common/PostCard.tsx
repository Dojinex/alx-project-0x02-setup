import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
