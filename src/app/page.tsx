import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { MadeWithFlow } from "@/components/made-with-flow";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
      </main>
      <MadeWithFlow />
    </div>
  );
}
