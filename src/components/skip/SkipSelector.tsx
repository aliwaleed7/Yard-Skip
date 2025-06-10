// src/components/skip/SkipSelector.tsx
import { useState } from "react";
import SkipCard from "./SkipCard";
import BottomBar from "../layout/BottomBar"; // Import the bar

const skips = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20 },
  { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305, vat: 20 },
  { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 375, vat: 20 },
  { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 400, vat: 20 },
  { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 439, vat: 20 },
  { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470, vat: 20 },
  { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496, vat: 20 },
  { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20 },
  { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 992, vat: 20 },
];

export default function SkipSelector() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedSkip = skips.find((s) => s.id === selectedId);
  const totalPrice = selectedSkip
    ? Number(
        (selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(
          2
        )
      )
    : null;

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Choose Your Skip Size
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Select the skip size that best suits your needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedId === skip.id}
            onSelect={() =>
              setSelectedId((currentId) =>
                currentId === skip.id ? null : skip.id
              )
            }
          />
        ))}
      </div>

      {selectedSkip && totalPrice && (
        <BottomBar size={selectedSkip.size} price={totalPrice} />
      )}
    </section>
  );
}
