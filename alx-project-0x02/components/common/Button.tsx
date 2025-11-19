import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-6 py-3 text-lg";

  const shapeClasses = shape;

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses} ${shapeClasses}`}
    >
      {title}
    </button>
  );
};

export default Button;

