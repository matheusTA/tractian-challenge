import { AssetSensorType, AssetStatus } from "../schemas/asset";

export type AssetTreeType = "location" | "asset" | "component";

export interface AssetTree {
  assetTreeType: AssetTreeType;
  id: string;
  name: string;
  parentId: string | null;
  locationId?: string | null;
  status?: AssetStatus | null;
  sensorType?: AssetSensorType | null;
  sensorId?: string;
  gatewayId?: string;
  children: AssetTree[];
}
