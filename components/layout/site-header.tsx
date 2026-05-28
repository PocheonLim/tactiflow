import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Structure" },
  { href: "/", label: "Roadmap" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:h-16 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-950"
        >
          Tactiflow
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-600">
            {navItems.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  className="rounded-md py-1 transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
