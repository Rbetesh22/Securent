import React from "react";
import clsx from "clsx";

export type BadgeProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline";
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = "default",
}) => {
  const base = "inline-flex items-center px-2 py-0.5 rounded-full text-sm";
  const variantClass =
    variant === "outline" ? "bg-transparent border" : "bg-white/10";
  return (
    <span className={clsx(base, variantClass, className)}>{children}</span>
  );
};
