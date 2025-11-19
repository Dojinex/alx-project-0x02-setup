import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>

      <div className="flex space-x-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
