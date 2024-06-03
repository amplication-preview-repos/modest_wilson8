import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
  timestamp?: Date | null;
};
