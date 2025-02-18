import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Header } from "../components/header";
import { AssetFilterSelect } from "../components/asset-filter-select";
import { GripVertical } from "lucide-react";

export function HomePage() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header />

      <div className="flex flex-1 flex-col p-4 pt-0 overflow-hidden">
        <AssetFilterSelect />

        <div className="flex flex-1 overflow-hidden">
          <PanelGroup direction="horizontal" className="">
            <Panel
              className="border border-zinc-100 rounded-sm"
              order={1}
              defaultSize={25}
              minSize={15}
            >
              <div>Assets list</div>
            </Panel>

            <PanelResizeHandle className="flex w-3 items-center justify-center">
              <GripVertical />
            </PanelResizeHandle>

            <Panel
              className="border border-zinc-100 rounded-sm"
              order={2}
              minSize={50}
            >
              <div className="">Asset details</div>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}
