import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-zinc-500">
        03. Projetos
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col gap-4 rounded-lg border border-white/10 p-6 transition-colors hover:border-white/25"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-medium text-zinc-100">
                {project.title}
              </h3>
              {project.status === "em-desenvolvimento" && (
                <span className="shrink-0 rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-400">
                  Em desenvolvimento
                </span>
              )}
            </div>
            <p className="flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-2 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Ver demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:underline"
                >
                  Código
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
