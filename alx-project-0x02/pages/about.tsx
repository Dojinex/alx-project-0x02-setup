import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="flex gap-4">
          <Button title="Small" size="small" shape="rounded-sm" />
          <Button title="Medium" size="medium" shape="rounded-md" />
          <Button title="Large" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
}

