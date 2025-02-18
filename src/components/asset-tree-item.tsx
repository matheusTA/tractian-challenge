import { JSX, useState } from "react";
import { AssetTree, AssetTreeType } from "../shared/types/asset-tree";
import { ChevronDown, ChevronUp, Zap } from "lucide-react";
import locationIcon from "../assets/location.png";
import assetIcon from "../assets/asset.png";
import componentIcon from "../assets/component.png";
import { useAssetTreeSelectedStore } from "../store/asset-tree-selected";
import { AssetStatus } from "../shared/schemas/asset";

interface AssetTreeItemProps {
  assetTree: AssetTree;
}

const assetTreeItemIcon: Record<AssetTreeType, JSX.Element> = {
  location: <img src={locationIcon} alt="location" className="size-5" />,
  asset: <img src={assetIcon} alt="asset" className="size-5" />,
  component: <img src={componentIcon} alt="component" className="size-5" />,
};

const assetTreeStatusIcon: Record<AssetStatus, JSX.Element> = {
  operating: <div className="min-w-2 h-2 bg-green-500 rounded-full" />,
  alert: <div className="min-w-2 h-2 bg-red-500 rounded-full" />,
};

export function AssetTreeItem({ assetTree }: AssetTreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { assetTreeSelected, setAssetTreeSelected } =
    useAssetTreeSelectedStore();

  const isAssetTreeSensorTypeEnergy = assetTree.sensorType === "energy";
  const isAssetTreeSelected = assetTreeSelected?.id === assetTree.id;

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

    setIsOpen((prev) => !prev);
  }

  return (
    <div
      data-is-component-select={isAssetTreeSelected}
      className="flex flex-col gap-1 px-1 data-[is-component-select=true]:bg-zinc-100"
    >
      <div
        className="flex items-center gap-1 hover:cursor-pointer"
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
