export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
          Normal Engineering
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Reclaim your screen time.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Free. Open source. Privacy-focused. Forever.
        </p>
        <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Coming Soon
        </p>
      </main>
    </div>
  );
}
