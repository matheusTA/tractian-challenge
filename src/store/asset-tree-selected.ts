import { create } from "zustand";
import { AssetTree } from "../shared/types/asset-tree";

interface AssetTreeSeletedState {
  assetTreeSelected: AssetTree | null;
  setAssetTreeSelected: (assetTree: AssetTree) => void;
  resetAssetTreeSelected: () => void;
}

export const useAssetTreeSelectedStore = create<AssetTreeSeletedState>()(
  (set) => ({
    assetTreeSelected: null,
    setAssetTreeSelected: (assetTree) => set({ assetTreeSelected: assetTree }),
    resetAssetTreeSelected: () => set({ assetTreeSelected: null }),
  })
);
