import Hero from "@/components/main/hero";
import Project from "@/components/main/Project";
import Skils from "@/components/main/Skils";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <section id="about-me"> {/* اضافه کردن id */}
          <Hero />
        </section>
        <section id="skils"> {/* اضافه کردن id */}
          <Skils />
        </section>
        <section id="projects"> {/* اضافه کردن id */}
          <Project />
        </section>
      </div>
    </main>
  );
}
