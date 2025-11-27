import { CardGame } from '@/data/cardGames';

interface GameCardProps {
  game: CardGame;
  onClick: () => void;
}

const complexityColors = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function GameCard({ game, onClick }: GameCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {game.name}
        </h3>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${complexityColors[game.complexity]}`}>
          {game.complexity}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>
            {game.minPlayers === game.maxPlayers
              ? `${game.minPlayers} players`
              : `${game.minPlayers}-${game.maxPlayers} players`}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>{game.deckType}</span>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-4">
        {game.objective}
      </p>

      <div className="flex items-center justify-between text-sm text-blue-600 dark:text-blue-400 font-medium">
        <span>View Rules</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
