# Dog Viewer

A React app to browse random dog images, view them in detail, and save your favorites.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

## Installation

1. Clone or download the repository:

```bash
git clone <repository-url>
cd dog-viewer
```

2. Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The app will open at [http://localhost:5173](http://localhost:5173)

## Features

- **Random Dog Display**: Shows a featured random dog image with its breed
- **Thumbnail Gallery**: Displays 10 random dog thumbnails in a responsive grid
- **Click to View**: Click any thumbnail to see it as the main image
- **Hover Effects**: Thumbnails smoothly scale up on hover
- **Favorites Panel**: Save your favorite dogs to a sidebar list
- **Remove Favorites**: Easily remove dogs from your favorites

## Project Structure

```
src/
├── App.tsx                 # Main component with all state logic
├── main.tsx                # Entry point
├── components/
│   ├── MainDog.tsx         # Featured dog display
│   ├── DogThumbnail.tsx    # Thumbnail card component
│   └── FavoritesPanel.tsx  # Favorites sidebar
├── services/
│   └── dogsApi.ts          # API calls to dog.ceo
├── types/
│   └── dog.ts              # TypeScript types
└── styles/
    └── globals.css         # All styling
```

## API

This app uses the free [Dog CEO API](https://dog.ceo/dog-api/):

- `GET /api/breeds/image/random` - Get a random dog image
- `GET /api/breeds/image/random/{count}` - Get multiple random dog images

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 (Grid, Flexbox, Transitions)
