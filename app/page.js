import Hero from "./components/home/Hero.js";
import Skills from "./components/home/Skills.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Skills />
    </main>
  )
}
