"use client";

import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🎬 MovieNet
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">Anime</a>
      </nav>

      <div className="nav-right">
        <Search size={20} />
        <User size={20} />
      </div>
    </header>
  );
}
