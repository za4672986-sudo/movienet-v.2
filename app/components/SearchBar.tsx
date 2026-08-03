"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-xl relative">
      <Search
        className="absolute left-4 top-4 text-gray-400"
        size={20}
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Movies..."
        className="w-full rounded-xl bg-zinc-900 pl-12 pr-4 py-4 border border-zinc-700 outline-none focus:border-red-600"
      />
    </div>
  );
}
