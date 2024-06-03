import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type DataPointCreateInput = {
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
