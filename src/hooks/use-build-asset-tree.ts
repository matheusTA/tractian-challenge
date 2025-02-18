import { useMemo } from "react";
import { useAssetQuery } from "./use-asset-query";
import { useLocationQuery } from "./use-location-query";
import { buildAssetTree } from "../utils/build-tree";

export const useBuildAssetsTree = () => {
  const {
    data: locations,
    isLoading: loadingLocations,
    error: errorLocations,
  } = useLocationQuery();
  const {
    data: assets,
    isLoading: loadingAssets,
    error: errorAssets,
  } = useAssetQuery();

  const isLoading = loadingLocations || loadingAssets;
  const error = errorLocations || errorAssets;

  const assetsTree = useMemo(() => {
    if (!locations || !assets) return [];

    return buildAssetTree(locations, assets);
  }, [locations, assets]);

  return { assetsTree, isLoading, error };
};
