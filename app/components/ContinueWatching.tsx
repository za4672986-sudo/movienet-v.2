export default function ContinueWatching() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-6">
        Continue Watching
      </h2>

      <div className="rounded-xl bg-zinc-900 p-8">
        <div className="h-3 bg-zinc-700 rounded-full">
          <div className="w-2/3 h-full bg-red-600 rounded-full"></div>
        </div>

        <p className="mt-4 text-gray-300">
          Continue where you left off.
        </p>
      </div>
    </section>
  );
}
