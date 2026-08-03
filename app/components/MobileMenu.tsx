"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed top-0 left-0 h-screen w-72 bg-black p-8 z-50">
          <a className="block py-4">Home</a>
          <a className="block py-4">Movies</a>
          <a className="block py-4">TV Shows</a>
          <a className="block py-4">Anime</a>
        </div>
      )}
    </>
  );
}
