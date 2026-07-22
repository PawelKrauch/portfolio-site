import { clients } from "../data/clients";
import Reveal from "./Reveal";

export default function Brands() {
  return (
    <section className="border-t border-border px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">02</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Brands
          </h2>
        </div>
        <Reveal>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span
                key={client.name}
                className={`text-xl sm:text-2xl ${
                  client.placeholder ? "text-white/25" : "text-white/80"
                }`}
              >
                {client.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
