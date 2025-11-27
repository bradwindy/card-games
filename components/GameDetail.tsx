import { CardGame } from '@/data/cardGames';

interface GameDetailProps {
  game: CardGame;
  onBack: () => void;
}

const complexityColors = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function GameDetail({ game, onBack }: GameDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Game Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {game.name}
          </h1>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${complexityColors[game.complexity]}`}>
            {game.complexity}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-medium">
              {game.minPlayers === game.maxPlayers
                ? `${game.minPlayers} Players`
                : `${game.minPlayers}-${game.maxPlayers} Players`}
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="font-medium">{game.deckType}</span>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-600">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Objective</h3>
          <p className="text-gray-700 dark:text-gray-300">{game.objective}</p>
        </div>
      </div>

      {/* Setup */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Setup</h2>
        </div>
        <ol className="space-y-3">
          {game.setup.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 dark:text-gray-300 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Gameplay */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Play</h2>
        </div>
        <ol className="space-y-3">
          {game.gameplay.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 dark:text-gray-300 pt-1 whitespace-pre-line">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Scoring */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Scoring</h2>
        </div>
        <ul className="space-y-2">
          {game.scoring.map((rule, index) => (
            <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
              <p className="whitespace-pre-line">{rule}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Winning Condition */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-lg">
            <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Winning</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-600">
          {game.winningCondition}
        </p>
      </div>

      {/* Variations */}
      {game.variations && game.variations.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Variations</h2>
          </div>
          <ul className="space-y-2">
            {game.variations.map((variation, index) => (
              <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                <p>{variation}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
