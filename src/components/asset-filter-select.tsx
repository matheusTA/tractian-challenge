import { CircleAlert, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useComapnySelectedStore } from "../store/company-selected";
import { useAssetFilterStore } from "../store/asset-filter";

export function AssetFilterSelect() {
  const {
    isEnergySensorSelected,
    isCriticalSelected,
    toggleIsEnergySensorSelected,
    toggleIsCriticalSelected,
  } = useAssetFilterStore();
  const { companySelected } = useComapnySelectedStore();

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <span className="font-semibold text-xl text-gray-950">
          Ativos /{" "}
          <span className="font-normal text-xl text-gray-600">
            {companySelected?.name}
          </span>
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          size="lg"
          variant={isEnergySensorSelected ? "selected" : "outline"}
          onClick={toggleIsEnergySensorSelected}
        >
          <Zap />
          Sensor de energia
        </Button>
        <Button
          size="lg"
          variant={isCriticalSelected ? "selected" : "outline"}
          onClick={toggleIsCriticalSelected}
        >
          <CircleAlert />
          Critico
        </Button>
      </div>
    </div>
  );
}
