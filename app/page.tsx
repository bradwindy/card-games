'use client';

import { useState, useMemo } from 'react';
import { cardGames, type CardGame, type Complexity } from '@/data/cardGames';
import GameCard from '@/components/GameCard';
import GameDetail from '@/components/GameDetail';
import Filters from '@/components/Filters';

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<CardGame | null>(null);
  const [playerFilter, setPlayerFilter] = useState<number | null>(null);
  const [complexityFilter, setComplexityFilter] = useState<Complexity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return cardGames.filter((game) => {
      const matchesPlayers =
        playerFilter === null ||
        (game.minPlayers <= playerFilter && game.maxPlayers >= playerFilter);

      const matchesComplexity =
        complexityFilter === null ||
        game.complexity === complexityFilter;

      const matchesSearch =
        searchQuery === '' ||
        game.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesPlayers && matchesComplexity && matchesSearch;
    });
  }, [playerFilter, complexityFilter, searchQuery]);

  const resetFilters = () => {
    setPlayerFilter(null);
    setComplexityFilter(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🃏</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Card Game Rules
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn to play {cardGames.length} classic card games
                </p>
              </div>
            </div>
            {selectedGame && (
              <button
                onClick={() => setSelectedGame(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                ← Back to All Games
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedGame ? (
          <GameDetail game={selectedGame} onBack={() => setSelectedGame(null)} />
        ) : (
          <>
            <Filters
              playerFilter={playerFilter}
              complexityFilter={complexityFilter}
              searchQuery={searchQuery}
              onPlayerFilterChange={setPlayerFilter}
              onComplexityFilterChange={setComplexityFilter}
              onSearchQueryChange={setSearchQuery}
              onReset={resetFilters}
            />

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {filteredGames.length} {filteredGames.length === 1 ? 'Game' : 'Games'} Found
              </h2>
            </div>

            {filteredGames.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No games found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your filters
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onClick={() => setSelectedGame(game)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Install PWA hint for mobile */}
      <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-80 bg-blue-600 text-white rounded-lg shadow-lg p-4 text-sm hidden" id="install-prompt">
        <p className="font-semibold mb-1">Install this app</p>
        <p className="text-blue-100 text-xs mb-3">
          Access card game rules offline anytime!
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-white text-blue-600 rounded px-3 py-1.5 font-medium text-xs">
            Install
          </button>
          <button className="flex-1 bg-blue-700 rounded px-3 py-1.5 font-medium text-xs">
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
