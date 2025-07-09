import { Heart } from "lucide-react";

interface ReasonCardProps {
  emoji: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const ReasonCard = ({ emoji, title, description, isActive, onClick }: ReasonCardProps) => {
  return (
    <div 
      className={`
        relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 
        ${isActive 
          ? 'border-primary bg-white shadow-cute scale-105' 
          : 'border-primary/30 bg-white/80 hover:border-primary/60 hover:shadow-soft'
        }
      `}
      onClick={onClick}
    >
      {/* Heart decoration */}
      <div className="absolute -top-2 -right-2">
        <Heart className={`w-6 h-6 ${isActive ? 'text-primary animate-heart-beat' : 'text-primary/40'}`} fill="currentColor" />
      </div>
      
      {/* Content */}
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-heart opacity-5 pointer-events-none"></div>
      )}
    </div>
  );
};

export default ReasonCard;