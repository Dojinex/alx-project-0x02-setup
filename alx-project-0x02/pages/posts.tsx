import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>Here is where your posts will appear.</p>
      </div>
    </div>
  );
}
