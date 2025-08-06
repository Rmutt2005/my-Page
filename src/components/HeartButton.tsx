import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ReactNode } from "react";

interface HeartButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

const HeartButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: HeartButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-8 py-4 text-lg font-medium rounded-full transition-all duration-300
        ${
          variant === "primary"
            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-cute hover:shadow-soft"
            : "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft hover:shadow-cute"
        }
        hover:scale-105 active:scale-95 group
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        <Heart
          className="w-5 h-5 group-hover:animate-heart-beat"
          fill="currentColor"
        />
        {children}
        <Heart
          className="w-5 h-5 group-hover:animate-heart-beat"
          fill="currentColor"
        />
      </span>

      {/* Sparkle effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-heart opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </Button>
  );
};

export default HeartButton;
