"use client";

const tabs = [
  "Trending",
  "Movies",
  "TV Shows",
  "Anime",
  "Top Rated",
  "Upcoming",
];

export default function CategoryTabs() {
  return (
    <div className="flex gap-4 overflow-x-auto py-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-red-600 transition whitespace-nowrap"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
