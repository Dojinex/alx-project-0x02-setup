import { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { CardProps } from "../interfaces";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Welcome to ALX", content: "This project teaches Next.js basics." },
    { title: "Reusable Components", content: "Card components accept props." },
  ]);

  const addPost = (post: CardProps) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />

      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add New Post
        </button>

        {/* List of posts */}
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </div>
  );
}


