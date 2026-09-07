import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="relative w-screen h-screen min-h-screen overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Floating Header / Navbar */}
      <Navbar />

      {/* Fullscreen Edge-to-Edge Hero Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/HeroDesktopvod.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}
