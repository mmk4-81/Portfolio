import Hero from "@/components/main/hero";
import Project from "@/components/main/Project";
import Skils from "@/components/main/Skils";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skils />
        <Project />
      </div>
    </main>
  );
}
