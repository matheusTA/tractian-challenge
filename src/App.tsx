import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { AssetFilterSelect } from "./components/asset-filter-select";
import { Header } from "./components/header";
import { GripVertical } from "lucide-react";
import { AssetFilterText } from "./components/asset-filter-text";
import { AssetTreeList } from "./components/asset-tree-list";
import { AssetTreeItemDeteils } from "./components/asset-tree-item-details";

function App() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header />

      <div className="flex flex-1 flex-col p-4 pt-0 overflow-hidden">
        <AssetFilterSelect />

        <div className="flex flex-1 overflow-hidden">
          <PanelGroup direction="horizontal" className="">
            <Panel
              className="flex flex-1 flex-col border border-zinc-100 rounded-sm overflow-hidden"
              order={1}
              minSize={15}
              defaultSize={30}
            >
              <AssetFilterText />
              <AssetTreeList />
            </Panel>

            <PanelResizeHandle className="flex w-3 items-center justify-center">
              <GripVertical />
            </PanelResizeHandle>

            <Panel
              className="flex flex-1 border border-zinc-100 rounded-sm overflow-hidden"
              order={2}
              minSize={50}
            >
              <AssetTreeItemDeteils />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
