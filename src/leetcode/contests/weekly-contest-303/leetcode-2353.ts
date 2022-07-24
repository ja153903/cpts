import { PriorityQueue } from '../../data-structures/priority-queue';

class Food {
  food: string;
  rating: number;

  constructor(food: string, rating: number) {
    this.food = food;
    this.rating = rating;
  }
}

function foodComparator(a: Food, b: Food) {
  if (a.rating === b.rating) {
    return a.food.localeCompare(b.food) < 0;
  }

  return a.rating > b.rating;
}

class FoodRatings {
  // cuisine -> PriorityQueue<Food>
  // food -> Food
  // if we change the rating, we'll want to heapify the prioirity queue.
  private foodMap: Map<string, Food>;
  private cuisineToFood: Map<string, PriorityQueue<Food>>;
  private foodToCuisine: Map<string, string>;

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foodMap = new Map();
    this.cuisineToFood = new Map();
    this.foodToCuisine = new Map();

    for (let i = 0; i < foods.length; i++) {
      const food = new Food(foods[i], ratings[i]);
      this.foodMap.set(foods[i], food);
      this.foodToCuisine.set(foods[i], cuisines[i]);

      if (!this.cuisineToFood.has(cuisines[i])) {
        this.cuisineToFood.set(cuisines[i], new PriorityQueue(foodComparator));
      }

      this.cuisineToFood.get(cuisines[i])?.insert(food);
    }
  }

  changeRating(food: string, newRating: number): void {
    if (this.foodMap.has(food)) {
      const foodObj = this.foodMap.get(food);
      const cuisine = this.foodToCuisine.get(food)!;
      if (!foodObj) {
        return;
      }

      foodObj.rating = newRating;
      const originalPq = this.cuisineToFood.get(cuisine)!;
      const pq = PriorityQueue.heapify<Food>(originalPq.items, foodComparator);
      this.cuisineToFood.set(cuisine, pq);
    }
  }

  highestRated(cuisine: string): string {
    return this.cuisineToFood.get(cuisine)?.peek()?.food ?? '';
  }
}

export { FoodRatings };
