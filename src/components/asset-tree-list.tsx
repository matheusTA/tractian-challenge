import { useBuildAssetsTree } from "../hooks/use-build-asset-tree";
import { AssetTreeItem } from "./asset-tree-item";

export function AssetTreeList() {
  const { assetsTree, isLoading, error } = useBuildAssetsTree();

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-1 py-2">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="h-6 w-full animate-pulse rounded-sm bg-zinc-200"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="text-xl font-semibold text-zinc-500 text-center">
          Algo deu errado. Tente novamente.
        </span>
      </div>
    );
  }

  if (assetsTree.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="text-xl font-semibold text-zinc-500 text-center">
          Nenhum Ativo encontrado.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-1 py-2">
      {assetsTree.map((assetTree) => (
        <AssetTreeItem key={assetTree.id} assetTree={assetTree} />
      ))}
    </div>
  );
}
