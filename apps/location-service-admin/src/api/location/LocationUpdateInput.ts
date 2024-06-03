import { DataPointUpdateManyWithoutLocationsInput } from "./DataPointUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  dataPoints?: DataPointUpdateManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
