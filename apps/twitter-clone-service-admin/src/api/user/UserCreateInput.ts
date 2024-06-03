import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { RetweetCreateNestedManyWithoutUsersInput } from "./RetweetCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  retweets?: RetweetCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
