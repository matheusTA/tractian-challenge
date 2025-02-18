import { useEffect, useState } from "react";
import { AssetTree } from "../shared/types/asset-tree";
import { ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useAssetTreeSelectedStore } from "../store/asset-tree-selected";
import { assetTreeStatusIcon } from "../shared/constants/asset-tree-status-icon";
import { assetTreeItemIcon } from "../shared/constants/asset-tree-item-icon";
import { useAssetFilterStore } from "../store/asset-filter";

interface AssetTreeItemProps {
  assetTree: AssetTree;
}

export function AssetTreeItem({ assetTree }: AssetTreeItemProps) {
  const { filterText, isEnergySensorSelected, isCriticalSelected } =
    useAssetFilterStore();
  const [isOpen, setIsOpen] = useState(false);
  const { assetTreeSelected, setAssetTreeSelected } =
    useAssetTreeSelectedStore();

  const isAssetTreeSensorTypeEnergy = assetTree.sensorType === "energy";
  const isAssetTreeSelected = assetTreeSelected?.id === assetTree.id;
  const hasAnyFilter =
    filterText || isEnergySensorSelected || isCriticalSelected;

  const expandedIcon = isOpen ? (
    <ChevronDown className="size-4" />
  ) : (
    <ChevronUp className="size-4" />
  );

  function hasChildren(assetTree: AssetTree): boolean {
    return assetTree.children.length > 0;
  }

  function handleSelectAssetTree() {
    if (!hasChildren(assetTree) && assetTree.assetTreeType === "component") {
      setAssetTreeSelected(assetTree);
    }

    if (!hasAnyFilter) {
      setIsOpen((prev) => !prev);
    }
  }

  useEffect(() => {
    if (hasAnyFilter) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [hasAnyFilter]);

  return (
    <div
      data-is-component-select={isAssetTreeSelected}
      className="flex flex-col gap-1 px-1 rounded-sm data-[is-component-select=true]:bg-zinc-100"
    >
      <div
        data-is-disabled={hasChildren(assetTree) && hasAnyFilter}
        className="flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-100 data-[is-disabled=true]:hover:cursor-not-allowed"
        onClick={handleSelectAssetTree}
      >
        {hasChildren(assetTree) && <div>{expandedIcon}</div>}

        <div className="min-w-5">
          {assetTreeItemIcon[assetTree.assetTreeType]}
        </div>

        <p className="line-clamp-1">{assetTree.name}</p>

        {assetTree?.status && assetTreeStatusIcon[assetTree.status]}

        {isAssetTreeSensorTypeEnergy && (
          <Zap className="text-green-500 size-4" />
        )}
      </div>

      {isOpen &&
        assetTree.children.map((child) => (
          <div
            key={child.id}
            data-has-children={hasChildren(child)}
            className="pl-4 data-[has-children=false]:pl-8"
          >
            <AssetTreeItem key={child.id} assetTree={child} />
          </div>
        ))}
    </div>
  );
}
