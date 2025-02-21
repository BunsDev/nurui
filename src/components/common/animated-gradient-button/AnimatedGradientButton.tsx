import React from "react";
import { cn } from "@/utils/cn";

type GradientButtonProps = {
  className?: string;
  colorClass?: string;
  children?: React.ReactNode;
  borderGradient?: string;
};

const AnimatedGradientButton: React.FC<GradientButtonProps> = ({
  className = "",
  colorClass = "",
  children = "Gradient",
  borderGradient = "",
}) => {
  return (
    <button
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-[var(--background-color)]",
        className
      )}
    >
      <div
        className={cn(
          `absolute inset-0 block h-full w-full animate-gradient ${borderGradient} bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
          colorClass
        )}
      />
      {children}
    </button>
  );
};

export default AnimatedGradientButton;
