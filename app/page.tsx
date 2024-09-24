import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TransitionPage />
      <div className="flex flex-grow bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
