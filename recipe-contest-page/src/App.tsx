import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './components/SearchBar';
import { SortDropdown } from './components/SortDropdown';
import { FilterSidebar } from './components/FilterSidebar';
import { RecipeCard } from './components/RecipeCard';
import { recipes } from './data/recipes';
import type { Recipe, SortOption, Filters } from './types/recipe';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [filters, setFilters] = useState<Filters>({
    attributes: {
      contestWinner: false,
      featured: false,
      testKitchenApproved: false,
    },
    mealTypes: new Set(),
    dishTypes: new Set(),
  });

  const clearFilters = () => {
    setFilters({
      attributes: {
        contestWinner: false,
        featured: false,
        testKitchenApproved: false,
      },
      mealTypes: new Set(),
      dishTypes: new Set(),
    });
  };

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((recipe) => {
        // Search filter
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch =
          !searchQuery ||
          recipe.name.toLowerCase().includes(searchLower) ||
          recipe.chef.toLowerCase().includes(searchLower) ||
          recipe.description.toLowerCase().includes(searchLower);

        // Attribute filters
        const matchesAttributes =
          (!filters.attributes.contestWinner || recipe.contestWinner) &&
          (!filters.attributes.featured || recipe.featured) &&
          (!filters.attributes.testKitchenApproved || recipe.testKitchenApproved);

        // Meal type filter
        const matchesMealType =
          filters.mealTypes.size === 0 || filters.mealTypes.has(recipe.mealType);

        // Dish type filter
        const matchesDishType =
          filters.dishTypes.size === 0 || filters.dishTypes.has(recipe.dishType);

        return matchesSearch && matchesAttributes && matchesMealType && matchesDishType;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case 'newest':
            return new Date(b.uploadedOn).getTime() - new Date(a.uploadedOn).getTime();
          case 'oldest':
            return new Date(a.uploadedOn).getTime() - new Date(b.uploadedOn).getTime();
          case 'highest-rated':
            return b.avgRating - a.avgRating;
          case 'lowest-rated':
            return a.avgRating - b.avgRating;
          default:
            return 0;
        }
      });
  }, [recipes, searchQuery, sortOption, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Recipe Contest</h1>
        
        <div className="flex justify-between items-center mb-8">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
          />

          <div className="flex-1">
            <AnimatePresence>
              {filteredRecipes.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">
                    No recipes found matching your criteria.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;