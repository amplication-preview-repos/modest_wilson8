import { DataPoint } from "../dataPoint/DataPoint";

export type Location = {
  createdAt: Date;
  dataPoints?: Array<DataPoint>;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
};
