'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Popular free Minecraft games - Based on CrazyGames collection
// Reference: https://www.crazygames.com/t/minecraft
const games = [
  {
    id: 'bloxd',
    name: 'Bloxd.io',
    description: '2D Minecraft-inspired multiplayer game with block building',
    gameUrl: 'https://www.crazygames.com/game/bloxd-io',
    embedUrl: 'https://www.crazygames.com/embed/bloxd-io',
    category: 'Adventure',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  },
  {
    id: 'miniblox',
    name: 'Miniblox',
    description: 'Online voxelated graphics with diverse minigames',
    gameUrl: 'https://www.crazygames.com/game/miniblox',
    embedUrl: 'https://www.crazygames.com/embed/miniblox',
    category: 'Adventure',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg'
  },
  {
    id: 'poxel',
    name: 'Poxel.io',
    description: 'Minecraft-style multiplayer survival game',
    gameUrl: 'https://www.crazygames.com/game/poxel-io',
    embedUrl: 'https://www.crazygames.com/embed/poxel-io',
    category: 'Action',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  },
  {
    id: 'pixel-warfare',
    name: 'Pixel Warfare',
    description: 'FPS game with Minecraft-style pixelated aesthetic',
    gameUrl: 'https://www.crazygames.com/game/pixel-warfare',
    embedUrl: 'https://www.crazygames.com/embed/pixel-warfare',
    category: 'Action',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg'
  },
  {
    id: 'mine-shooter',
    name: 'Mine Shooter 2: Noob vs Mobs',
    description: 'Fast-paced FPS in a Minecraft-like environment',
    gameUrl: 'https://www.crazygames.com/game/mine-shooter-2-noob-vs-mobs',
    embedUrl: 'https://www.crazygames.com/embed/mine-shooter-2-noob-vs-mobs',
    category: 'Action',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg'
  },
  {
    id: 'voxiom',
    name: 'Voxiom.io',
    description: 'Classic FPS with Minecraft-style blocks and building',
    gameUrl: 'https://www.crazygames.com/game/voxiom-io',
    embedUrl: 'https://www.crazygames.com/embed/voxiom-io',
    category: 'Action',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg'
  },
  {
    id: 'cube-realm',
    name: 'CubeRealm.io',
    description: 'Online block game inspired by Minecraft and Terraria',
    gameUrl: 'https://www.crazygames.com/game/cuberealm-io',
    embedUrl: 'https://www.crazygames.com/embed/cuberealm-io',
    category: 'Adventure',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  },
  {
    id: 'build-crush',
    name: 'Build and Crush',
    description: 'Multiplayer game where you build and crush structures',
    gameUrl: 'https://www.crazygames.com/game/build-and-crush',
    embedUrl: 'https://www.crazygames.com/embed/build-and-crush',
    category: 'Action',
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  },
  {
    id: 'paper-minecraft',
    name: 'Paper Minecraft',
    description: '2D version of the legendary Minecraft game',
    gameUrl: 'https://www.crazygames.com/game/paper-minecraft',
    embedUrl: 'https://www.crazygames.com/embed/paper-minecraft',
    category: 'Adventure',
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg'
  },
  {
    id: 'grindcraft',
    name: 'GrindCraft',
    description: 'Minecraft and clicker game elements combined',
    gameUrl: 'https://www.crazygames.com/game/grindcraft',
    embedUrl: 'https://www.crazygames.com/embed/grindcraft',
    category: 'Casual',
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  },
  {
    id: 'minecraft-td',
    name: 'Minecraft Tower Defense',
    description: 'Addictive tower defense with Minecraft mechanics',
    gameUrl: 'https://www.crazygames.com/game/minecraft-tower-defense',
    embedUrl: 'https://www.crazygames.com/embed/minecraft-tower-defense',
    category: 'Strategy',
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg'
  },
  {
    id: 'minecraft-classic',
    name: 'Minecraft Classic',
    description: 'The original browser-based alpha version from Mojang',
    gameUrl: 'https://classic.minecraft.net/',
    embedUrl: 'https://classic.minecraft.net/',
    category: 'Classic',
    popular: true,
    imageUrl: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg'
  }
];

export default function PlayPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(games.map(game => game.category)))];
  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const currentGame = games.find(game => game.id === selectedGame);

  return (
    <main className="min-h-screen bg-mc-bg-dark">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link 
          href="/" 
          className="minecraft-button inline-block mb-8"
        >
          ← BACK
        </Link>
        
        <h1 className="text-5xl md:text-6xl text-center mb-4 text-mc-text-white minecraft-heading">
          PLAY MINECRAFT GAMES
        </h1>
        <p className="text-center text-mc-text-gray text-body mb-8 max-w-2xl mx-auto">
          Play free Minecraft-inspired games directly in your browser. No downloads required!
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-mc-green text-mc-text-white'
                  : 'bg-mc-bg-darker text-mc-text-gray hover:bg-mc-border-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {!selectedGame ? (
          <>
            {/* Game Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-mc-border-dark hover:border-mc-green relative"
                >
                  {game.popular && (
                    <div className="absolute top-2 left-2 bg-mc-green px-2 py-1 rounded text-xs text-mc-text-white font-semibold z-10">
                      POPULAR
                    </div>
                  )}
                  <div className="relative w-full h-48 bg-mc-bg-dark overflow-hidden">
                    <Image
                      src={game.imageUrl}
                      alt={game.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mc-bg-darker via-transparent to-transparent" />
                    <div className="absolute bottom-2 right-2 bg-mc-bg-darker px-2 py-1 rounded text-xs text-mc-text-white font-semibold border border-mc-border-dark backdrop-blur-sm bg-opacity-80">
                      {game.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-mc-text-white text-body">
                      {game.name}
                    </h3>
                    <p className="text-sm text-mc-text-gray text-body mb-4">
                      {game.description}
                    </p>
                    <button className="minecraft-button w-full text-sm">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="bg-mc-bg-darker rounded-lg p-8 text-center">
              <h2 className="text-3xl font-semibold mb-4 text-mc-text-white text-body">
                Free Minecraft Games
              </h2>
              <p className="text-mc-text-gray text-body max-w-3xl mx-auto mb-6">
                Step into worlds of procedurally generated pixelated fun! There's no shortage of games 
                inspired by the great Minecraft. Play them all for free with no downloads necessary.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-mc-bg-dark rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-mc-text-white text-body">Adventure Games</h3>
                  <p className="text-sm text-mc-text-gray text-body">
                    Explore 2D and 3D worlds inspired by Minecraft
                  </p>
                </div>
                <div className="bg-mc-bg-dark rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-mc-text-white text-body">Action Games</h3>
                  <p className="text-sm text-mc-text-gray text-body">
                    Fast-paced FPS and multiplayer action
                  </p>
                </div>
                <div className="bg-mc-bg-dark rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-mc-text-white text-body">Classic Minecraft</h3>
                  <p className="text-sm text-mc-text-gray text-body">
                    Play the original browser-based version
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Game Player */
          <div className="max-w-7xl mx-auto">
            <div className="bg-mc-bg-darker rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-semibold text-mc-text-white text-body mb-2">
                    {currentGame?.name}
                  </h2>
                  <p className="text-mc-text-gray text-body">{currentGame?.description}</p>
                </div>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="minecraft-button"
                >
                  ← BACK TO GAMES
                </button>
              </div>
            </div>

            <div className="bg-mc-bg-darker rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ minHeight: '600px', height: '80vh' }}>
                {currentGame?.id === 'minecraft-classic' ? (
                  <iframe
                    src="https://classic.minecraft.net/"
                    className="w-full h-full border-0 rounded-lg"
                    allow="fullscreen; autoplay; encrypted-media"
                    allowFullScreen
                    title={currentGame?.name}
                  />
                ) : (
                  <iframe
                    src={currentGame?.embedUrl || ''}
                    className="w-full h-full border-0 rounded-lg"
                    allow="fullscreen; autoplay; encrypted-media; payment; camera; microphone"
                    allowFullScreen
                    title={currentGame?.name}
                  />
                )}
              </div>
            </div>

            <div className="mt-6 text-center bg-mc-bg-darker rounded-lg p-6">
              <p className="text-mc-text-gray text-body text-sm mb-4">
                Having trouble loading the game? Try{' '}
                <a 
                  href={currentGame?.gameUrl || currentGame?.embedUrl || 'https://classic.minecraft.net/'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-mc-green hover:underline font-semibold"
                >
                  opening it in a new tab
                </a>
              </p>
              <p className="text-mc-text-dark text-body text-xs">
                Games are provided by third-party sources. All games are free to play in your browser.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
