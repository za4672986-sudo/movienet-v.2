"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Watch Movies Anytime</h1>

        <p>
          Discover trending movies, TV shows, anime and trailers
          in one modern platform.
        </p>

        <button>
          <Play size={18} />
          Watch Now
        </button>
      </motion.div>
    </section>
  );
}
