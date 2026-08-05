import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-zinc-500">
        01. Sobre
      </h2>
      <div className="flex flex-col gap-4 text-lg leading-relaxed text-zinc-300 sm:max-w-3xl">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
