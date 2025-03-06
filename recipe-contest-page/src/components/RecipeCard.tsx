import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, CheckCircle, Bookmark } from 'lucide-react';
import { format } from 'date-fns';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={recipe.imgUrl}
          alt={recipe.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {recipe.contestWinner && (
            <Award className="text-yellow-400 drop-shadow-lg" size={24} />
          )}
          {recipe.featured && (
            <Bookmark className="text-orange-500 drop-shadow-lg" size={24} />
          )}
          {recipe.testKitchenApproved && (
            <CheckCircle className="text-green-500 drop-shadow-lg" size={24} />
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400" size={20} fill="currentColor" />
            <span className="font-medium">{recipe.avgRating}</span>
            <span className="text-gray-500 text-sm">({recipe.totalRatings})</span>
          </div>
          <span className="text-gray-500 text-sm">
            {format(new Date(recipe.uploadedOn), 'MMM d, yyyy')}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">By {recipe.chef}</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
              {recipe.mealType}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {recipe.dishType}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};