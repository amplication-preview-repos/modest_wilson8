import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type Tweet = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  timestamp: Date | null;
  updatedAt: Date;
};
