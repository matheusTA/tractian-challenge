import { JSX, useState } from "react";
import { AssetTree, AssetTreeType } from "../shared/types/asset-tree";
import { ChevronDown, ChevronUp } from "lucide-react";
import locationIcon from "../assets/location.png";
import assetIcon from "../assets/asset.png";
import componentIcon from "../assets/component.png";

interface AssetTreeItemProps {
  assetTree: AssetTree;
}

const assetTreeItemIcon: Record<AssetTreeType, JSX.Element> = {
  location: <img src={locationIcon} alt="location" className="size-5" />,
  asset: <img src={assetIcon} alt="asset" className="size-5" />,
  component: <img src={componentIcon} alt="component" className="size-5" />,
};

export function AssetTreeItem({ assetTree }: AssetTreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const expandedIcon = isOpen ? (
    <ChevronDown className="size-4" />
  ) : (
    <ChevronUp className="size-4" />
  );

  function hasChildren(assetTree: AssetTree): boolean {
    return assetTree.children.length > 0;
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex  items-center gap-1 hover:cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {hasChildren(assetTree) && <div>{expandedIcon}</div>}

        <div>{assetTreeItemIcon[assetTree.assetTreeType]}</div>

        <p className="line-clamp-1">{assetTree.name}</p>
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
