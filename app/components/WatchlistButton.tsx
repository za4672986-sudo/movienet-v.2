"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function WatchlistButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved(!saved)}
      className={`p-3 rounded-full transition ${
        saved ? "bg-red-600" : "bg-zinc-800"
      }`}
    >
      <Heart fill={saved ? "white" : "none"} />
    </button>
  );
}
