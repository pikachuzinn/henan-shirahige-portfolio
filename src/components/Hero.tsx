import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-24">
      <p className="font-mono text-sm text-emerald-400">
        {"> disponível para novos projetos"}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="text-xl text-zinc-400 sm:text-2xl">{profile.role}</h2>
      <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="#projetos"
          className="rounded-full bg-zinc-50 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-300"
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/40"
        >
          Falar comigo
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/40"
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
}
