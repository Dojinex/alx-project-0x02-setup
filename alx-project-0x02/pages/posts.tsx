import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />

      <div className="p-10 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

        {posts.map((post, index) => (
          <PostCard
            key={index}
            userId={post.userId}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

// ✅ Fetch posts at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const posts: PostProps[] = data.slice(0, 10).map((post: any) => ({
      userId: post.userId,
      title: post.title,
      content: post.body,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);

    return {
      props: {
        posts: [],
      },
    };
  }
}


