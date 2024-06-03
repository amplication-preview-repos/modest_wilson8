import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { RetweetUpdateManyWithoutUsersInput } from "./RetweetUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  retweets?: RetweetUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
