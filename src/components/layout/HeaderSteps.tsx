// components/HeaderSteps.tsx
import {
  CheckCircle,
  Calendar,
  CreditCard,
  MapPin,
  PackageOpen,
  PlayCircle,
} from "lucide-react";

const steps = [
  { label: "Postcode", icon: MapPin },
  { label: "Waste Type", icon: PackageOpen },
  { label: "Select Skip", icon: PlayCircle, active: true },
  { label: "Permit Check", icon: CheckCircle },
  { label: "Choose Date", icon: Calendar },
  { label: "Payment", icon: CreditCard },
];

export default function HeaderSteps() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-14 py-6 bg-white rounded-xl shadow-sm">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = step.active;

        return (
          <div
            key={index}
            className="flex items-center space-x-2 text-gray-600"
          >
            <Icon
              className={`w-7 h-7 ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
