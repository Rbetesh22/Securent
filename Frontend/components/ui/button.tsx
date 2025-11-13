import React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
  className?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = "md", variant = "default", className, children, ...props },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }[size];

    const variantClasses =
      variant === "outline"
        ? "bg-transparent border border-current"
        : "bg-white text-blue-600";

    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-semibold transition-all",
          sizeClasses,
          variantClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
