import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type DataPointUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
