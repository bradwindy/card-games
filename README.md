# 🃏 Card Game Rules PWA

A Progressive Web App for learning classic card game rules. Filter games by number of players and complexity, and access all rules offline on your phone!

## Features

- ✅ **16 Classic Card Games** with detailed, verified rules
- 🔍 **Smart Filtering** by number of players and complexity level
- 📱 **Mobile-First Design** optimized for phones and tablets
- 🌐 **Works Offline** as a Progressive Web App (PWA)
- 🎨 **Beautiful UI** with dark mode support
- ⚡ **Fast & Responsive** built with Next.js 16 and Tailwind CSS

## Card Games Included

- Go Fish
- Crazy Eights
- Hearts
- Poker (Texas Hold'em)
- Rummy
- Blackjack
- War
- Spades
- Solitaire (Klondike)
- Old Maid
- Euchre
- UNO
- Bridge (Contract Bridge)
- Snap
- Cribbage

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **PWA:** @ducanh2912/next-pwa
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bradwindy/card-games.git
   cd card-games
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

This app is optimized for deployment on Vercel:

1. Push your code to GitHub

2. Import the project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. Deploy!
   - Vercel will automatically build and deploy your app
   - Every push to main will trigger a new deployment

### Deploy with One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bradwindy/card-games)

## PWA Features

The app includes:

- **Offline Support:** All game rules are available offline after first visit
- **Install Prompt:** Users can install the app on their home screen
- **Fast Loading:** Service worker caches assets for instant loading
- **Mobile Optimized:** Responsive design works on all screen sizes

### Installing the PWA on Your Phone

**iOS (Safari):**
1. Open the site in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

**Android (Chrome):**
1. Open the site in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home Screen"
4. Tap "Add"

Or look for the install banner at the bottom of the screen!

## Project Structure

```
card-games/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page with filtering
│   ├── layout.tsx         # Root layout with metadata
│   ├── icon.tsx           # PWA icon generator
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── GameCard.tsx       # Game preview card
│   ├── GameDetail.tsx     # Detailed game rules
│   └── Filters.tsx        # Filter controls
├── data/                  # Game data
│   └── cardGames.ts       # Card game rules database
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   └── icon.svg           # App icon
└── next.config.ts         # Next.js configuration
```

## Rule Verification

All card game rules have been verified against authoritative sources including:
- Bicycle Cards official rules
- Pagat.com
- PokerNews
- BoardGameGeek

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Credits

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

Card game rules compiled from official sources and verified for accuracy.
