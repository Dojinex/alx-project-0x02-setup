import React from "react";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <Card title="First Card" content="This is the first card content." />
      <Card title="Second Card" content="This is the second card content." />
    </div>
  );
}


