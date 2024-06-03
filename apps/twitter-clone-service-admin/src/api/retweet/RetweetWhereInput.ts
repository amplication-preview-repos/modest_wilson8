import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
