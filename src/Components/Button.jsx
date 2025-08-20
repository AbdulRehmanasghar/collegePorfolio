import React from 'react';

const Button = ({
  children,
  variant = "primary",
  size = "default",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass =
    "font-medium transition-all duration-300 focus:outline-none inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-[#f97316]",
    secondary: "bg-[#fff4e5] text-accent hover:bg-[#f97316]",
    outline: "border border-accent text-accent",
    ghost: "text-accent",
  };

  const disabledVariants = {
    primary: "bg-[#ffddb4] text-[#fff7eb]",
    secondary: "bg-[#fff7eb] text-[#ffddb4]",
    outline: "border border-[#ffddb4] text-[#ffddb4]",
    ghost: "text-[#ffddb4]",
  };

  const sizes = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3 rounded-full",
    sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-full",
    lg: "h-12 px-6 has-[>svg]:px-4 rounded-full",
    icon: "size-9 rounded-full",
    "scroll-up": "p-3 !rounded-xl",
  };

  return (
    <button
      className={`${baseClass} ${
        disabled ? disabledVariants[variant] : variants[variant]
      } ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;