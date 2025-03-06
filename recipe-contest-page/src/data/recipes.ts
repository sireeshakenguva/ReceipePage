import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: "Spaghetti Carbonara",
    chef: "Chef Mario",
    totalRatings: 500,
    avgRating: 4.8,
    uploadedOn: "2024-01-15",
    mealType: "Dinner",
    dishType: "Pasta",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
    imgUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    name: "Thai Green Curry",
    chef: "Chef Sarah Chen",
    totalRatings: 350,
    avgRating: 4.6,
    uploadedOn: "2024-02-01",
    mealType: "Dinner",
    dishType: "Curry",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description: "Aromatic Thai curry with coconut milk, fresh vegetables, and tender chicken.",
    imgUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    name: "Berry Breakfast Smoothie",
    chef: "Chef Emma Wilson",
    totalRatings: 280,
    avgRating: 4.5,
    uploadedOn: "2024-02-10",
    mealType: "Breakfast",
    dishType: "Smoothie",
    testKitchenApproved: true,
    contestWinner: false,
    featured: true,
    description: "Energizing smoothie packed with mixed berries, banana, and Greek yogurt.",
    imgUrl: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '4',
    name: "Margherita Pizza",
    chef: "Chef Antonio",
    totalRatings: 420,
    avgRating: 4.9,
    uploadedOn: "2024-01-20",
    mealType: "Lunch",
    dishType: "Pizza",
    testKitchenApproved: true,
    contestWinner: true,
    featured: true,
    description: "Traditional Neapolitan pizza with fresh mozzarella, tomatoes, and basil.",
    imgUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '5',
    name: "Seafood Paella",
    chef: "Chef Miguel",
    totalRatings: 300,
    avgRating: 4.7,
    uploadedOn: "2024-02-05",
    mealType: "Dinner",
    dishType: "Seafood",
    testKitchenApproved: false,
    contestWinner: false,
    featured: true,
    description: "Spanish rice dish loaded with shrimp, mussels, and aromatic saffron.",
    imgUrl: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800"
  }
  // More recipes would be added here...
];