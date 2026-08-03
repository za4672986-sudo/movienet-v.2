import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section className="container">
        <h2 className="section-title">Trending Movies</h2>

        <div className="movie-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="movie-card">
              <div className="movie-poster"></div>

              <div className="movie-info">
                <h3>Movie Title</h3>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
