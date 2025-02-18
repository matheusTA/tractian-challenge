import { Search } from "lucide-react";
import { useAssetFilterStore } from "../store/asset-filter";

export function AssetFilterText() {
  const { filterText, setFilterText } = useAssetFilterStore();

  return (
    <div className="flex items-center w-full border-b border-zinc-100 pr-2">
      <input
        className="w-full p-2 focus:outline-none"
        placeholder="Buscar Ativo ou Local"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <Search className="text-zinc-300" />
    </div>
  );
}
