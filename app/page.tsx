import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-mc-bg-dark">
      {/* Hero Section - Matching Minecraft.net style */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-mc-bg-dark">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/1764731246532.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mc-bg-darker/80 via-mc-bg-dark/70 to-mc-bg-darker/80" />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] mb-8 minecraft-block-text">
            ARVR CLUB
          </h1>
          <div className="mb-12">
            <p className="text-lg md:text-xl minecraft-block-text-small block mb-1">
              REALITY CAN BE
            </p>
            <p className="text-lg md:text-xl minecraft-block-text-small block">
              WHATEVER WE WANT
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/explore" 
              className="minecraft-button minecraft-button-arrow"
            >
              EXPLORE
            </Link>
            <Link 
              href="/play" 
              className="minecraft-button minecraft-button-arrow"
            >
              PLAY
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Matching Minecraft.net game cards */}
      <section className="py-20 bg-mc-bg-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game Card 1 */}
            <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg"
                  alt="Minecraft Java & Bedrock"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-mc-text-white text-body">Minecraft</h3>
                <p className="text-sm text-mc-text-gray text-body mb-2">Sandbox Survival, Adventure</p>
                <p className="text-xs text-mc-text-dark text-body">Single-player + Multiplayer</p>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg"
                  alt="Minecraft Dungeons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-mc-text-white text-body">Minecraft Dungeons</h3>
                <p className="text-sm text-mc-text-gray text-body mb-2">Dungeon Crawl, Action RPG</p>
                <p className="text-xs text-mc-text-dark text-body">Single-player + Multiplayer</p>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg"
                  alt="Minecraft Legends"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-mc-text-white text-body">Minecraft Legends</h3>
                <p className="text-sm text-mc-text-gray text-body mb-2">Action RPG, Strategy</p>
                <p className="text-xs text-mc-text-dark text-body">Single-player + Multiplayer</p>
              </div>
            </div>

            {/* Game Card 4 */}
            <div className="bg-mc-bg-darker rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg"
                  alt="Minecraft Education"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-mc-text-white text-body">Minecraft Education</h3>
                <p className="text-sm text-mc-text-gray text-body mb-2">Education, Sandbox Survival, Adventure</p>
                <p className="text-xs text-mc-text-dark text-body">Single-player + Multiplayer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section with Next.js Image Optimization */}
      <section className="py-20 bg-mc-bg-darker">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-5xl mb-12 text-mc-text-white text-center minecraft-heading">
            LATEST NEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News Card 1 */}
            <div className="bg-mc-bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCM_VV_Homepage_220x97.jpg"
                  alt="Minecraft News"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-mc-text-gray text-body">Latest Updates</p>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-mc-bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Minecraft_Fall_Drop_Campaign_Key_Art_Homepage_Hero-A-Thumbnail-0_Image-ID_220x97_01.jpg"
                  alt="Minecraft News"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-mc-text-gray text-body">Community Highlights</p>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-mc-bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/SoulSteel_.NetHomepage_220x97.png"
                  alt="Minecraft News"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-mc-text-gray text-body">Featured Content</p>
              </div>
            </div>

            {/* News Card 4 */}
            <div className="bg-mc-bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCEDU_HourOfCode24_Instagram_1080x1080.png"
                  alt="Minecraft News"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-mc-text-gray text-body">Education Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mc-bg-darker text-mc-text-white py-12 text-center border-t border-mc-border-dark">
        <p className="text-body text-mc-text-gray mb-2">© 2024 Minecraft World - ARVR</p>
        <p className="text-sm text-mc-text-dark text-body">Built with Next.js </p>
      </footer>
    </main>
  );
}

