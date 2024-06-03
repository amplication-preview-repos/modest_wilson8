import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetCreateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
