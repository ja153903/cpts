import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

interface Tweet {
   userId: number;
   tweetId: number;
   timestamp: number;
}

class Twitter {
   // We will use maps to simulate tables
   private followsByUser: Map<number, Set<number>>;
   private tweetsByUser: Map<number, Array<Tweet>>;
   private timestamp: number;

   constructor() {
      this.followsByUser = new Map();
      this.tweetsByUser = new Map();
      this.timestamp = 0;
   }

   postTweet(userId: number, tweetId: number): void {
      const tweet: Tweet = {
         userId,
         tweetId,
         timestamp: this.timestamp,
      };

      this.timestamp++;

      if (!this.tweetsByUser.has(userId)) {
         this.tweetsByUser.set(userId, []);
      }

      this.tweetsByUser.get(userId)?.push(tweet);
   }

   getNewsFeed(userId: number): number[] {
      const priorityQueue = new PriorityQueue<Tweet>((a, b) => {
         return a.timestamp < b.timestamp;
      });

      const follows = this.followsByUser.get(userId) ?? [];

      for (const uid of [userId, ...follows]) {
         const tweets = this.tweetsByUser.get(uid) ?? [];

         for (const tweet of tweets) {
            priorityQueue.insert(tweet);
            if (priorityQueue.size > 10) {
               priorityQueue.remove();
            }
         }
      }

      return priorityQueue.items
         .sort((a, b) => b.timestamp - a.timestamp)
         .map(({ tweetId }) => tweetId);
   }

   follow(followerId: number, followeeId: number): void {
      if (!this.followsByUser.has(followerId)) {
         this.followsByUser.set(followerId, new Set());
      }

      this.followsByUser.get(followerId)?.add(followeeId);
   }

   unfollow(followerId: number, followeeId: number): void {
      this.followsByUser.get(followerId)?.delete(followeeId);
   }
}

export { Twitter };
