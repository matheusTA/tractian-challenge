import { JSX } from "react";
import { AssetStatus } from "../schemas/asset";

export const assetTreeStatusIcon: Record<AssetStatus, JSX.Element> = {
  operating: <div className="min-w-2 h-2 bg-green-500 rounded-full" />,
  alert: <div className="min-w-2 h-2 bg-red-500 rounded-full" />,
} as const;
