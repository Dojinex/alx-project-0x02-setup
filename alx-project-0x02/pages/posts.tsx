import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        // Map API response to PostProps
        const formattedPosts = data.slice(0, 10).map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <div className="p-10 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))
        )}
      </div>
    </div>
  );
}

