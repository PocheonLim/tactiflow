export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Project initialized
        </p>
        <h1 className="text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Tactiflow
        </h1>
        <p className="text-base leading-7 text-zinc-600 sm:text-lg">
          Clean Next.js starter setup is ready.
        </p>
      </div>
    </main>
  );
}
