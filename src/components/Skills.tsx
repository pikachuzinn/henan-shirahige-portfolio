import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-zinc-500">
        02. Skills
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-white/10 p-5"
          >
            <h3 className="mb-3 text-sm font-medium text-zinc-100">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
