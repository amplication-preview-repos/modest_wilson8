import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DataPointWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
