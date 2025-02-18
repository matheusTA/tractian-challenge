import { Asset } from "../shared/schemas/asset";
import { Location } from "../shared/schemas/location";
import { AssetTree } from "../shared/types/asset-tree";
import { AssetFilterState } from "../store/asset-filter";

export function buildAssetTree(
  locations: Location[],
  assets: Asset[]
): AssetTree[] {
  const locationMap = new Map<string, AssetTree>();
  const assetMap = new Map<string, AssetTree>();
  const assetTree: AssetTree[] = [];

  locations.forEach((location) => {
    locationMap.set(location.id, {
      assetTreeType: "location",
      id: location.id,
      name: location.name,
      parentId: location.parentId,
      children: [],
    });
  });

  assets.forEach((asset) => {
    const assetTreeNode: AssetTree = {
      assetTreeType: asset.sensorType ? "component" : "asset",
      id: asset.id,
      name: asset.name,
      parentId: asset.parentId,
      locationId: asset.locationId,
      status: asset.status,
      sensorType: asset.sensorType,
      sensorId: asset.sensorId,
      gatewayId: asset.gatewayId,
      children: [],
    };
    assetMap.set(asset.id, assetTreeNode);
  });

  locationMap.forEach((locationNode) => {
    if (locationNode.parentId) {
      locationMap.get(locationNode.parentId)?.children.push(locationNode);
    } else {
      assetTree.push(locationNode);
    }
  });

  assetMap.forEach((assetNode) => {
    if (assetNode.parentId) {
      assetMap.get(assetNode.parentId)?.children.push(assetNode);
    } else if (assetNode.locationId) {
      locationMap.get(assetNode.locationId)?.children.push(assetNode);
    } else {
      assetTree.push(assetNode);
    }
  });

  return assetTree;
}

export function filterAssetTree(
  assetsTree: AssetTree[],
  { filterText, isCriticalSelected, isEnergySensorSelected }: AssetFilterState
): AssetTree[] {
  if (!filterText && !isCriticalSelected && !isEnergySensorSelected) {
    return assetsTree;
  }

  function applyFilters(node: AssetTree): AssetTree | null {
    const matchesFilterText = filterText
      ? node.name.toLowerCase().includes(filterText.toLowerCase())
      : true;

    const matchesCritical = isCriticalSelected ? node.status === "alert" : true;

    const matchesEnergySensor = isEnergySensorSelected
      ? node.sensorType === "energy"
      : true;

    const matches = matchesFilterText && matchesCritical && matchesEnergySensor;

    const filteredChildren = node.children
      .map(applyFilters)
      .filter((child): child is AssetTree => child !== null);

    if (matches || filteredChildren.length > 0) {
      return { ...node, children: filteredChildren };
    }

    return null;
  }

  return assetsTree
    .map(applyFilters)
    .filter((node): node is AssetTree => node !== null);
}
