import { JSX } from "react";
import { AssetTreeType } from "../types/asset-tree";
import locationIcon from "../../assets/location.png";
import assetIcon from "../../assets/asset.png";
import componentIcon from "../../assets/component.png";

export const assetTreeItemIcon: Record<AssetTreeType, JSX.Element> = {
  location: <img src={locationIcon} alt="location" className="size-5" />,
  asset: <img src={assetIcon} alt="asset" className="size-5" />,
  component: <img src={componentIcon} alt="component" className="size-5" />,
} as const;
