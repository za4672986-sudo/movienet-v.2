import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SectionTitle from "@/components/SectionTitle";
import MovieSlider from "@/components/MovieSlider";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <Hero />

      <section className="container py-10">
        <SearchBar />
      </section>

      <section className="container py-10">
        <SectionTitle title="🔥 Trending Movies" />
        <MovieSlider />
      </section>

      <section className="container py-10">
        <SectionTitle title="⭐ Top Rated" />
        <MovieSlider />
      </section>

      <section className="container py-10">
        <SectionTitle title="🎬 Popular Movies" />
        <MovieSlider />
      </section>
    </main>
  );
}
