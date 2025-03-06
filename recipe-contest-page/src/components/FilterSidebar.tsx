import React from 'react';
import { X } from 'lucide-react';
import type { Filters, MealType, DishType } from '../types/recipe';

interface FilterSidebarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  clearFilters: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  clearFilters,
}) => {
  const toggleAttribute = (key: keyof typeof filters.attributes) => {
    setFilters({
      ...filters,
      attributes: {
        ...filters.attributes,
        [key]: !filters.attributes[key],
      },
    });
  };

  const toggleMealType = (type: MealType) => {
    const newMealTypes = new Set(filters.mealTypes);
    if (newMealTypes.has(type)) {
      newMealTypes.delete(type);
    } else {
      newMealTypes.add(type);
    }
    setFilters({ ...filters, mealTypes: newMealTypes });
  };

  const toggleDishType = (type: DishType) => {
    const newDishTypes = new Set(filters.dishTypes);
    if (newDishTypes.has(type)) {
      newDishTypes.delete(type);
    } else {
      newDishTypes.add(type);
    }
    setFilters({ ...filters, dishTypes: newDishTypes });
  };

  const mealTypes: MealType[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  const dishTypes: DishType[] = ['Curry', 'Pizza', 'Seafood', 'Soup', 'Mexican', 'Smoothie', 'Pasta'];

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Attributes</h3>
          <div className="space-y-2">
            {Object.entries(filters.attributes).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => toggleAttribute(key as keyof typeof filters.attributes)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">
                  {key.split(/(?=[A-Z])/).join(' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Meal Type</h3>
          <div className="space-y-2">
            {mealTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.mealTypes.has(type)}
                  onChange={() => toggleMealType(type)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Dish Type</h3>
          <div className="space-y-2">
            {dishTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.dishTypes.has(type)}
                  onChange={() => toggleDishType(type)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};