'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<'vision' | 'mission' | 'values'>('mission');
  return (
    <main className="min-h-screen bg-mc-bg-dark m-0 p-0" style={{ margin: 0, padding: 0 }}>
      {/* Hero Section - Matching Minecraft.net style */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-mc-bg-dark" style={{ margin: 0, padding: 0, marginTop: 0, height: '100vh' }}>
        {/* Video Background */}
        <video
          src="/1764731246532.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ border: 'none', pointerEvents: 'none', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mc-bg-darker/80 via-mc-bg-dark/70 to-mc-bg-darker/80" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />

        {/* Logo in top left corner */}
        <div className="absolute top-1 left-1 md:top-2 md:left-2 z-20">
          <Image
            src="https://res.cloudinary.com/doqemxyul/image/upload/v1764830587/Group_1000012422_vxpwwx.png"
            alt="Logo"
            width={60}
            height={30}
            className="h-auto pixelated"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20 -mt-40">
          <div className="flex flex-col items-center gap-0">
            <Image
              src="https://res.cloudinary.com/doqemxyul/image/upload/v1764830588/ChatGPT_Image_Dec_3_2025_10_25_20_PM_ckbsbm.png"
              alt="ARVR CLUB"
              width={600}
              height={150}
              className="w-full max-w-3xl h-auto pixelated block m-0 p-0"
              style={{ marginBottom: 0 }}
              priority
            />
            <Image
              src="https://res.cloudinary.com/doqemxyul/image/upload/v1764830587/bc88c4e1-0799-4ed6-acd9-46adc26b998b_1_layerstyle_cdutgj.png"
              alt="REALITY CAN BE WHATEVER WE WANT"
              width={700}
              height={150}
              className="w-full max-w-2xl h-auto pixelated block m-0 p-0"
              style={{ marginTop: '-190px' }}
              priority
            />
          </div>
          <div className="mb-12"></div>
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

      {/* About Us Section - Window Style UI */}
      <section className="relative w-full min-h-screen" style={{ margin: 0, padding: 0, marginTop: 0, display: 'block' }}>
        {/* Background Image - Full Coverage */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/8d169005389a6a17d38e8e059f24644c 1@2x.png"
            alt="About section background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 py-20 min-h-screen flex items-center">
          <div className="minecraft-window w-full">
            {/* Window Title Bar */}
            <div className="window-title-bar">
              <div className="window-title-left">
                <div className="window-icon">
                  <Image
                    src="/Group 1000012422 2.png"
                    alt="About Us icon"
                    width={48}
                    height={48}
                    className="pixelated"
                  />
                </div>
              </div>
              <div className="window-title-center">
                <h2 className="window-title-text">ABOUT US</h2>
              </div>
              <div className="window-title-right">
                <div className="window-icon window-control">
                  <Image
                    src="/1737d5e028e7ecb7605da2756202440f 1.png"
                    alt="Minimize"
                    width={40}
                    height={40}
                    className="pixelated"
                  />
                </div>
                <div className="window-icon window-control">
                  <Image
                    src="/843b6b77f46c1c3a69091d13fa9593d7 1.png"
                    alt="Close"
                    width={40}
                    height={40}
                    className="pixelated"
                  />
                </div>
              </div>
            </div>

            {/* Window Content */}
            <div className="window-content">
              {/* Left Panel - Vision, Mission, Values */}
              <div className="window-left-panel">
                <button 
                  className={`window-menu-item ${activeSection === 'vision' ? 'active' : ''}`}
                  onClick={() => setActiveSection('vision')}
                >
                  <div className="menu-item-icon">
                    <Image
                      src="/b4a667e209bce74395c7aecef032e075 1.png"
                      alt="Vision logo"
                      width={64}
                      height={64}
                      className="pixelated"
                    />
                  </div>
                  <span className="menu-item-text">Vision</span>
                </button>
                <button 
                  className={`window-menu-item ${activeSection === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveSection('mission')}
                >
                  <div className="menu-item-icon mission-logo-container">
                    <Image
                      src="/e4b7a42853ca0dff791824b373f89d11 1.png"
                      alt="Mission logo"
                      width={96}
                      height={96}
                      className="pixelated"
                    />
                  </div>
                  <span className="menu-item-text">Mission</span>
                </button>
                <button 
                  className={`window-menu-item ${activeSection === 'values' ? 'active' : ''}`}
                  onClick={() => setActiveSection('values')}
                >
                  <div className="menu-item-icon">
                    <Image
                      src="/316e600903a67eb9d0ffcf602ddb25b6 1.png"
                      alt="Values logo"
                      width={64}
                      height={64}
                      className="pixelated"
                    />
                  </div>
                  <span className="menu-item-text">Values</span>
                </button>
              </div>

              {/* Right Panel - Dynamic Content */}
              <div className="window-right-panel">
                <div className="mission-text-box">
                  <p className="mission-text">
                    {activeSection === 'vision' && (
                      <>To build a community where XR and Game Developers grow together through collaboration and shared learning.</>
                    )}
                    {activeSection === 'mission' && (
                      <>
                        Create an environment where a positive and supportive culture is nurtured, helping members accelerate their personal and professional growth.
                        <br /><br />
                        Assist members in developing projects that contribute to the club's reputation and standing.
                        <br /><br />
                        Facilitate interactions with similar communities from other colleges to share knowledge and collaborate.
                      </>
                    )}
                    {activeSection === 'values' && (
                      <>Our values are rooted in collaboration, innovation, and continuous learning. We foster a supportive, respectful culture where every member is encouraged to grow. We are committed to creating high-quality projects, sharing knowledge with the community, and building meaningful connections. Guided by integrity and curiosity, we push creative boundaries in XR and Game Development together.</>
                    )}
                  </p>
                </div>
              </div>
            </div>
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

