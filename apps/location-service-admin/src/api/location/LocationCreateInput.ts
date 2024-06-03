import { DataPointCreateNestedManyWithoutLocationsInput } from "./DataPointCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  dataPoints?: DataPointCreateNestedManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
