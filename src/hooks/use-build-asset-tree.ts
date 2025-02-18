import { useMemo } from "react";
import { useAssetQuery } from "./use-asset-query";
import { useLocationQuery } from "./use-location-query";
import { buildAssetTree, filterAssetTree } from "../utils/build-tree";
import { useAssetFilterStore } from "../store/asset-filter";

export const useBuildAssetsTree = () => {
  const { filterText, isEnergySensorSelected, isCriticalSelected } =
    useAssetFilterStore();
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

    return filterAssetTree(buildAssetTree(locations, assets), {
      filterText,
      isEnergySensorSelected,
      isCriticalSelected,
    });
  }, [
    locations,
    assets,
    filterText,
    isEnergySensorSelected,
    isCriticalSelected,
  ]);

  return { assetsTree, isLoading, error };
};
