// src/components/skip/SkipCard.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SkipCardProps {
  skip: any;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <Card
      onClick={onSelect}
      className={`rounded-2xl shadow-sm border transition-shadow duration-200 cursor-pointer ${
        isSelected ? "ring-2 ring-blue-600 shadow-xl" : "hover:shadow-xl"
      }`}
    >
      <CardContent className="p-6 flex flex-col items-center gap-4">
        {/* Skip Image */}
        <div className="relative w-80 h-48 bg-gray-100 rounded-xl overflow-hidden select-none">
          <img
            src="/YardSkip.png"
            alt={`${skip.size} Yard Skip`}
            className="h-full w-full object-contain pointer-events-none"
          />

          {/* Top-right: Size */}
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md select-none">
            {skip.size} Yards
          </div>

          {/* Bottom-center: Not Allowed On The Road (if size > 10) */}
          {skip.size > 10 && (
            <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-lg bg-black px-3 py-1 text-sm font-semibold text-yellow-400 shadow-md select-none">
              Not Allowed On The Road
            </div>
          )}
        </div>

        {/* Skip Info */}
        <div className="text-lg font-semibold text-center">
          {skip.size} Yard Skip
        </div>
        <div className="text-sm text-gray-500 text-center">
          {skip.hire_period_days} day hire period
        </div>
        <div className="text-xl font-bold text-blue-600">£{totalPrice}</div>

        {/* Action */}
        <Button variant="default" className="w-full rounded-md">
          {isSelected ? "Selected" : "Select"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
