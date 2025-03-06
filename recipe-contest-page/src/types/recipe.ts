export type Recipe = {
  id: string;
  name: string;
  chef: string;
  totalRatings: number;
  avgRating: number;
  uploadedOn: string;
  mealType: MealType;
  dishType: DishType;
  testKitchenApproved: boolean;
  contestWinner: boolean;
  featured: boolean;
  description: string;
  imgUrl: string;
};

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert';
export type DishType = 'Curry' | 'Pizza' | 'Seafood' | 'Soup' | 'Mexican' | 'Smoothie' | 'Pasta';

export type SortOption = 'newest' | 'oldest' | 'highest-rated' | 'lowest-rated';

export type Filters = {
  attributes: {
    contestWinner: boolean;
    featured: boolean;
    testKitchenApproved: boolean;
  };
  mealTypes: Set<MealType>;
  dishTypes: Set<DishType>;
};