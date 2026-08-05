import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-zinc-500">
        04. Contato
      </h2>
      <div className="flex flex-col gap-6 sm:max-w-2xl">
        <p className="text-lg leading-relaxed text-zinc-300">
          Tem um projeto ou vaga em mente? Me chama — respondo rápido.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-zinc-50 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-300"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/40"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/40"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
