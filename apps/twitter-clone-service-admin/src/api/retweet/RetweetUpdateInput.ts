import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetUpdateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
