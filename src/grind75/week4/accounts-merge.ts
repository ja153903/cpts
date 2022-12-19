// This problem is a UnionFind problem
// because of how we're trying to connect each email to its
import { UnionFind } from '~/utility/graphs';

// corresponding account
function accountsMerge(accounts: string[][]): string[][] {
   const uf = new UnionFind(accounts.length);

   const ownership = new Map<string, number>();

   for (let i = 0; i < accounts.length; i++) {
      const [_, ...emails] = accounts[i];
      for (const email of emails) {
         if (ownership.has(email)) {
            uf.union(i, ownership.get(email)!);
         }

         ownership.set(email, i);
      }
   }

   const result = new Map<number, Array<string>>();
   for (const [email, owner] of ownership.entries()) {
      const parent = uf.find(owner);

      if (!result.has(parent)) {
         result.set(parent, []);
      }

      result.get(parent)?.push(email);
   }

   return [...result.entries()].map(([owner, emails]) => [
      accounts[owner][0],
      ...emails.sort(),
   ]);
}

export { accountsMerge };
