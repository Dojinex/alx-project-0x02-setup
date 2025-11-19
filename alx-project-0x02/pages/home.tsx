import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>

        <Card title="Welcome" content="This is the home page content." />
      </div>
    </div>
  );
}

