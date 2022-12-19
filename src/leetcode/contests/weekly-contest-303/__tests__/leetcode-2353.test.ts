import { FoodRatings } from '../leetcode-2353';

describe('2353. Food Ratings', () => {
  it('test flow 1', () => {
    const foods = ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'];
    const cuisines = [
      'korean',
      'japanese',
      'japanese',
      'greek',
      'japanese',
      'korean',
    ];
    const ratings = [9, 12, 8, 15, 14, 7];

    const fr = new FoodRatings(foods, cuisines, ratings);

    expect(fr.highestRated('korean')).toBe('kimchi');
    expect(fr.highestRated('japanese')).toBe('ramen');

    fr.changeRating('sushi', 16);

    expect(fr.highestRated('japanese')).toBe('sushi');

    fr.changeRating('ramen', 16);

    expect(fr.highestRated('japanese')).toBe('ramen');
  });
});
