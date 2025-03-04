import Hero from "@/components/main/hero";
import Skils from "@/components/main/Skils";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skils />
      </div>
    </main>
  );
}
