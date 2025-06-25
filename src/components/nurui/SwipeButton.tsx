"use client";
import React from "react";

import { cn } from "@/utils/cn";

interface SwipeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstText?: string;
  secondText?: string;
  className?: string;
  firstClass?: string;
  secondClass?: string;
}

export default function SwipeButton({
  className = "",
  firstClass = "bg-orange-500 text-white",
  firstText = "Get access",
  secondClass = "bg-red-500 text-white",
  secondText = "Get access",
  ...props
}: SwipeButtonProps) {
  const common =
    "block px-4 py-2   text-2xl font-bold duration-300 ease-in-out";
  return (
    <button
      {...props}
      className={cn(
        "group relative min-w-fit overflow-hidden rounded-md",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0 translate-y-full group-hover:translate-y-0",
          common,
          secondClass,
        )}
      >
        {secondText}
      </span>
      <span className={cn("group-hover:-translate-y-full", common, firstClass)}>
        {firstText}
      </span>
    </button>
  );
}
