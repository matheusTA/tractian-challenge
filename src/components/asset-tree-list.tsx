import { useBuildAssetsTree } from "../hooks/useBuildAssetTree";
import { AssetTreeItem } from "./asset-tree-item";

export function AssetTreeList() {
  const { assetsTree, isLoading, error } = useBuildAssetsTree();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-1 py-2">
      {assetsTree.map((assetTree) => (
        <AssetTreeItem key={assetTree.id} assetTree={assetTree} />
      ))}
    </div>
  );
}
