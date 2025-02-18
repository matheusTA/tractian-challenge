import { assetTreeStatusIcon } from "../shared/constants/asset-tree-status-icon";
import { useAssetTreeSelectedStore } from "../store/asset-tree-selected";

export function AssetTreeItemDeteils() {
  const { assetTreeSelected } = useAssetTreeSelectedStore();

  if (!assetTreeSelected) {
    return (
      <div className="flex flex-1 items-center justify-center p-2">
        <span className="text-2xl font-semibold text-zinc-500 text-center">
          Selecione um componente para visualizar os detalhes
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-2 p-2">
      <div className="flex items-center gap-2 border-b border-zinc-100 pb-2">
        <h2 className="text-xl font-semibold text-zinc-500">
          {assetTreeSelected.name}{" "}
        </h2>
        {assetTreeSelected?.status &&
          assetTreeStatusIcon[assetTreeSelected.status]}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-zinc-500">Sensor</span>
          <span className="text-sm text-zinc-500">
            {assetTreeSelected?.gatewayId || "N/A"}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-zinc-500">Tipo</span>
          <span className="text-sm text-zinc-500">
            {assetTreeSelected?.sensorType || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
