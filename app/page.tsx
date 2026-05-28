import { MainLayout } from "@/components/layout/main-layout";
import { PageShell } from "@/components/layout/page-shell";

export default function Home() {
  return (
    <MainLayout>
      <PageShell className="gap-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <section className="flex max-w-3xl flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Project foundation
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Tactiflow
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                A calm, reusable app structure is ready for the next product
                workflows.
              </p>
            </div>
          </section>

          <aside className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-zinc-950">Next focus</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
              <li>Expand route structure</li>
              <li>Refine shared UI patterns</li>
              <li>Define core workflows</li>
            </ul>
          </aside>
        </div>
      </PageShell>
    </MainLayout>
  );
}
