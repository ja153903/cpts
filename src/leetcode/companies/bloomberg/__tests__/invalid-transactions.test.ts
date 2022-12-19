import { invalidTransactions } from '../invalid-transactions';

describe('Invalid Transactions', () => {
  it.each([
    [
      ['alice,20,800,mtv', 'alice,50,100,beijing'],
      ['alice,20,800,mtv', 'alice,50,100,beijing'],
    ],
    [['alice,20,800,mtv', 'alice,50,1200,mtv'], ['alice,50,1200,mtv']],
    [['alice,20,800,mtv', 'bob,50,1200,mtv'], ['bob,50,1200,mtv']],
    [
      ['alice,20,800,mtv', 'alice,50,100,mtv', 'alice,51,100,frankfurt'],
      ['alice,20,800,mtv', 'alice,50,100,mtv', 'alice,51,100,frankfurt'],
    ],
    [
      ['alice,20,1220,mtv', 'alice,20,1220,mtv'],
      ['alice,20,1220,mtv', 'alice,20,1220,mtv'],
    ],
  ])('invalidTransactions', (transactions: string[], expected: string[]) => {
    expect(invalidTransactions(transactions).sort()).toEqual(expected.sort());
  });
});
