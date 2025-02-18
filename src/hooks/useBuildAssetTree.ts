import { useMemo } from "react";
import { useAsset } from "./useAsset";
import { useLocation } from "./useLocation";
import { buildAssetTree } from "../utils/build-tree";

export const useBuildAssetsTree = () => {
  const {
    data: locations,
    isLoading: loadingLocations,
    error: errorLocations,
  } = useLocation();
  const {
    data: assets,
    isLoading: loadingAssets,
    error: errorAssets,
  } = useAsset();

  const isLoading = loadingLocations || loadingAssets;
  const error = errorLocations || errorAssets;

  const assetsTree = useMemo(() => {
    if (!locations || !assets) return [];

    return buildAssetTree(locations, assets);
  }, [locations, assets]);

  return { assetsTree, isLoading, error };
};
