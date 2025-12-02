import Image from "next/image";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-mc-bg-dark">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link 
          href="/" 
          className="minecraft-button inline-block mb-8"
        >
          ← BACK
        </Link>
        
        <h1 className="text-5xl md:text-6xl text-center mb-12 text-mc-text-white minecraft-heading">
          EXPLORE WORLDS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg"
                alt="Forest biome"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-mc-text-white text-body">Forest Biome</h2>
              <p className="text-mc-text-gray text-body">
                Explore lush forests filled with trees, animals, and hidden treasures.
              </p>
            </div>
          </div>

          <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg"
                alt="Desert biome"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-mc-text-white text-body">Desert Biome</h2>
              <p className="text-mc-text-gray text-body">
                Traverse vast deserts and discover ancient temples and oases.
              </p>
            </div>
          </div>

          <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg"
                alt="Ocean biome"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-mc-text-white text-body">Ocean Biome</h2>
              <p className="text-mc-text-gray text-body">
                Dive into deep oceans and explore underwater ruins and shipwrecks.
              </p>
            </div>
          </div>

          <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg"
                alt="Mountain biome"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-mc-text-white text-body">Mountain Biome</h2>
              <p className="text-mc-text-gray text-body">
                Climb towering peaks and mine for rare ores in mountain ranges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

