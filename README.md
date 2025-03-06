Frontend Developer Task – Recipe Contest Page
Objective
Your task is to develop the Recipes Page for an online recipe contest application. The goal is to replicate
the given UI design and make it fully responsive while implementing key functionalities like search, sorting, and filtering. Requirements
1. UI Development:
 The page should match the provided UI design as closely as possible.  Create a responsive layout that adapts to different screen sizes (i.e. Laptop, Tab and Mobile). Tablet
and Mobile screen design is not provided implement it based on your understanding of UI. 2. Functionalities to Implement:
 Search Recipes based on - Recipe Name, Chef Name and Description.  Sorting Options:  Upload Date - Newest & Oldest  Average Rating: Highest & Lowest
 Filtering based on:  Attributes : Contest Winner, Featured, Test Kitchen-Approved
 Meal Type: Dinner, Lunch, Dessert, Breakfast  Dish Type: Curry, Pizza, Seafood, Soup, Mexican, Smoothie
 Users should be able to:  Clear all filters at once
 Remove individual filters separately
Data
Use hardcoded data to display the recipes. Below is an example recipe object:
{
name: "Spaghetti Carbonara", chef: "Chef Mario", totalRatings: 500, avgRating: 4.8, uploadedOn: "2024-01-15", mealType: "Dinner", dishType: "Pasta", testKitchenApproved: true, contestWinner: false, featured: false, description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
}
You will need to create at least 15–20 sample recipes for testing purposes. Technical Expectations
 React.js should be used for the implementation.  Folder Structure and Component-based architecture (e.g., Recipe Card, Filter Sidebar, Search Bar).  State management (React’s useState/useEffect is sufficient; Redux is not required).  CSS Framework: You can use Tailwind CSS or standard CSS modules.  Sorting & Filtering should be handled efficiently using JavaScript.
Evaluation Criteria
 UI Accuracy – How closely the UI matches the provided design.  Responsiveness – How well the layout adapts to different screen sizes.  Code Structure – Clean, modular, and reusable components.  Functionality – Proper implementation of search, sorting, and filtering.  User Experience – Intuitive interactions and smooth filtering. Submission
 GitHub Repository with your project code.  Include a README.md with setup instructions.  Host the project on Vercel or Netlify (optional but recommended). Bonus
 Add Lazy Loading for images.  Add smooth animations using CSS animations for filtering, sorting, and search interactions.  Animate the recipe cards when they appear on the screen (e.g., fade-in or slide-up effect).
