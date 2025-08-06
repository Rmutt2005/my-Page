import { useState } from "react";
import CuteCat from "@/components/CuteCat";
import ReasonCard from "@/components/ReasonCard";
import HeartButton from "@/components/HeartButton";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

const reasons = [
  {
    emoji: "🍟",
    title: "เค้าพาเธอหาของกินเก่งมาก!",
    description: "ที่ไหนมีของอย่อย เค้าจาพาเธอไปทุกที่เยยจู้!",
  },
  {
    emoji: "📅",
    title: "เค้าจะไม่ผิดนัดกับเธอ",
    description: "นัดไปเดท กินข้าว ดูหนัง ที่ไหนก็ตาม เค้าจะไปตรงเวลาเสมอ!",
  },
  {
    emoji: "🎮",
    title: "เค้าไม่เล่นเกมจนลืมเธอ",
    description:
      "(เว้นแต่เธออยากเล่นด้วยกันนะ!) และถึงเล่นก็จะแชร์หน้าจอให้ดู หรือสอนเล่นด้วยยย",
  },
  {
    emoji: "🛠️",
    title: "เราซ่อมของให้เธอได้!!",
    description:
      "หลอดไฟเสีย ก๊อกน้ำหยด คอมพัง เค้าจัดการได้หมด! (ยกเว้นหัวใจที่แตกเพราะเค้าไม่อยากทำให้เธอเสียใจ)",
  },
  {
    emoji: "☕",
    title: "เค้าทำกับข้าวให้เธอได้!!",
    description:
      "เค้าสามารถทำทุกอย่างที่เธอต้องการได้ แต่จะอร่อยมั้ยเค้าไม่รู้ว!",
  },
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState<
    "question" | "reasons" | "final"
  >("question");
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [catMessage, setCatMessage] = useState<string>("");

  const handleStartReasons = (eager: boolean) => {
    setCurrentStep("reasons");
    setCatMessage(
      eager ? "เย้! เตรียมตัวฟังให้ดีนะ!" : "เอาละ... เรามาเริ่มกันเถอะ"
    );
    setTimeout(() => setCatMessage(""), 2000);
  };

  const nextReason = () => {
    if (currentReasonIndex < reasons.length - 1) {
      setCurrentReasonIndex(currentReasonIndex + 1);
    } else {
      setCurrentStep("final");
      setCatMessage("เป็นไงบ้าง? มีสักข้อที่โดนใจมั้ย? 😊");
    }
  };

  const prevReason = () => {
    if (currentReasonIndex > 0) {
      setCurrentReasonIndex(currentReasonIndex - 1);
    }
  };

  const resetToStart = () => {
    setCurrentStep("question");
    setCurrentReasonIndex(0);
    setCatMessage("ลองจิ้มที่รูปดูสิ!!!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Cute Cat */}
        <div className="mb-8">
          <CuteCat isWaving={currentStep === "question"} message={catMessage} />
        </div>

        {/* Question Step */}
        {currentStep === "question" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                เธอเคยสงสัยไหม
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8">
                ว่าทำไมเธอควรเป็นแฟนกับเค้า?
              </h2>
            </div>

            <div className="space-y-4">
              <HeartButton
                onClick={() => handleStartReasons(true)}
                variant="primary"
              >
                เล่าให้ฟังหน่อยสิ
              </HeartButton>

              <HeartButton
                onClick={() => handleStartReasons(false)}
                variant="secondary"
              >
                ไม่สนอะ แต่ลองฟังก็ได้
              </HeartButton>
            </div>
          </div>
        )}

        {/* Reasons Step */}
        {currentStep === "reasons" && (
          <div className="space-y-8 animate-fade-in items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                เหตุผลที่ {currentReasonIndex + 1} จาก {reasons.length}
              </h2>
              <div className="w-full bg-secondary/30 rounded-full h-2 mb-6">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      ((currentReasonIndex + 1) / reasons.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <ReasonCard
              {...reasons[currentReasonIndex]}
              isActive={true}
              onClick={() => {}}
            />

            <div className="flex justify-center items-center ">
              <button
                onClick={prevReason}
                disabled={currentReasonIndex === 0}
                className="flex items-center gap-2 px-4 py-2 text-primary disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                ก่อนหน้า
              </button>

              <HeartButton
                onClick={() => {
                  nextReason();
                }}
              >
                {currentReasonIndex === reasons.length - 1
                  ? "ฟังครบแล้ว!"
                  : "เหตุผลต่อไป!"}
              </HeartButton>

              <button
                onClick={resetToStart}
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                เริ่มใหม่
              </button>
            </div>
          </div>
        )}

        {/* Final Step */}
        {currentStep === "final" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                เป็นไงบ้าง?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                มีสักข้อที่โดนใจมั้ย? 🥺
              </p>
            </div>

            <div className="space-y-4">
              <HeartButton
                onClick={() => setCatMessage("เย้ๆๆ! กดใจหัวใจมาจิ อิอิ 📱")}
                variant="primary"
              >
                เออ จริงนะ ลองคุยกันดูมั้ยจู้?
              </HeartButton>

              <HeartButton
                onClick={() => {
                  setCurrentStep("reasons");
                  setCurrentReasonIndex(0);
                  setCatMessage("ไม่เป็นไร เดี๋ยวฟังอีกรอบนะ!");
                }}
                variant="secondary"
              >
                ยังไม่ชัวร์ ขอดูอีกรอบ!
              </HeartButton>
            </div>

            <button
              onClick={resetToStart}
              className="flex items-center gap-2 mx-auto px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              กลับไปเริ่มต้น
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
