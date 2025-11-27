'use client';

import { Complexity } from '@/data/cardGames';

interface FiltersProps {
  playerFilter: number | null;
  complexityFilter: Complexity | null;
  searchQuery: string;
  onPlayerFilterChange: (players: number | null) => void;
  onComplexityFilterChange: (complexity: Complexity | null) => void;
  onSearchQueryChange: (query: string) => void;
  onReset: () => void;
}

const playerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const complexityOptions: Complexity[] = ['Easy', 'Medium', 'Hard'];

export default function Filters({
  playerFilter,
  complexityFilter,
  searchQuery,
  onPlayerFilterChange,
  onComplexityFilterChange,
  onSearchQueryChange,
  onReset,
}: FiltersProps) {
  const hasActiveFilters = playerFilter !== null || complexityFilter !== null || searchQuery !== '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter Games
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search card games..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Number of Players */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Number of Players
          </label>
          <div className="grid grid-cols-5 gap-2">
            {playerOptions.map((num) => (
              <button
                key={num}
                onClick={() => onPlayerFilterChange(playerFilter === num ? null : num)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  playerFilter === num
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Complexity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Complexity
          </label>
          <div className="grid grid-cols-3 gap-2">
            {complexityOptions.map((level) => (
              <button
                key={level}
                onClick={() => onComplexityFilterChange(complexityFilter === level ? null : level)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  complexityFilter === level
                    ? level === 'Easy'
                      ? 'bg-green-600 text-white shadow-md scale-105'
                      : level === 'Medium'
                      ? 'bg-yellow-600 text-white shadow-md scale-105'
                      : 'bg-red-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
