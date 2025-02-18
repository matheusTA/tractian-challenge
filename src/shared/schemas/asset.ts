export type AssetStatus = "operating" | "alert";

export type AssetSensorType = "vibration" | "energy";

export interface Asset {
  id: string;
  name: string;
  locationId: string | null;
  parentId: string | null;
  status: AssetStatus | null;
  sensorType: AssetSensorType | null;
  sensorId?: string;
  gatewayId?: string;
}
