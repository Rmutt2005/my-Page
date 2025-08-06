import { useState, useEffect } from "react";
import cuteCatImage from "@/assets/cute-cat.jpg";

// Cat images array - using placeholder images from your knowledge base
const catImages = [
  cuteCatImage,
  "https://i.chzbgr.com/full/10401721344/hA03E86F7/my-love-lofiofera",
  "https://stickerly.pstatic.net/sticker_pack/GKxNn91GyJYvRhMszE6eOQ/FDXTPM/37/-976607614.png",
  "https://i.pinimg.com/564x/85/bd/06/85bd06c324ea37c5eadec42c5927c154.jpg",
  "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/33104/1705824152_Florkinlovememe.png&width=800&height=800&quality=90&format=auto&fit=pad",
  "https://ih1.redbubble.net/image.488796000.1183/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
];

interface CuteCatProps {
  isWaving?: boolean;
  message?: string;
  className?: string;
}

const CuteCat = ({
  isWaving = false,
  message = "ลองจิ้มที่รูปดูสิ",
  className = "",
}: CuteCatProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setShowMessage(true), 500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className={`relative ${
          isWaving ? "animate-bounce-cute" : "animate-float"
        }`}
      >
        <img
          src={catImages[currentImageIndex]}
          alt="Cute Cat"
          className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleImageClick}
        />
        {/* Speech bubble */}
        {message && showMessage && (
          <div className="absolute -top-16 -left-4 md:-left-8 bg-white rounded-2xl p-3 shadow-soft border-2 border-primary/20 max-w-48 animate-fade-in">
            <p className="text-sm font-medium text-foreground text-center">
              {message}
            </p>
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuteCat;
