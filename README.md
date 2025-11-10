# Lampros DAO Homepage

The official website for Lampros DAO, a decentralized autonomous organization focused on bridging mainstream adoption with blockchain technology.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.13.0
- **TypeScript**: 5.x
- **API Integration**: Notion API
- **Package Manager**: Yarn


## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (or npm/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lamprosdao-homepage
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.local` file (see `.env.example` for required variables):
```bash
cp .env.example .env.local
```

4. Fill in your environment variables:
- `NOTION_API_KEY`: Your Notion API key
- `NOTION_DATABASE_ID`: Your Notion database ID
- `NEXT_PUBLIC_BASE_URL`: Base URL for the application

5. Run the development server:
```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn type-check` - Run TypeScript type checking


### API Routes

- `/api/notion-proposals`: Fetches governance proposals from Notion
- `/api/arbitrum-new-topics`: Fetches new topics from Arbitrum forum
- `/api/fetch-forum-post`: Fetches forum post details
- `/api/mock-data`: Mock data endpoint for development


## 🎨 Design System

The project uses:
- **Custom Fonts**: CSBohemian, PPMori, Psygen (located in `src/app/fonts/`)
- **Tailwind CSS**: For utility-first styling
- **GSAP**: For animations and scroll triggers
- **Component-based Architecture**: Reusable UI components


## 🔗 Links

- [Lampros DAO Website](https://lamprosdao.com)
- [Notion Integration](https://www.notion.so)

Built with ❤️ by the Lampros DAO team
