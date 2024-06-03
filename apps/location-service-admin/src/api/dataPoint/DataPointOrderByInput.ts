import { SortOrder } from "../../util/SortOrder";

export type DataPointOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
