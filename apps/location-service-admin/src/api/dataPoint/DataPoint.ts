import { Location } from "../location/Location";

export type DataPoint = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
