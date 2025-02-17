export interface Asset {
  id: string;
  name: string;
  status: string | null;
  locationId: string | null;
  parentId: string | null;
  sensorType: string | null;
  sensorId?: string;
}
