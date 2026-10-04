import { clients } from "../data/clients";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Brands() {
  return (
    <section className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Brands" />
        <Reveal>
          <p className="text-2xl font-medium leading-snug tracking-tight text-white/85 sm:text-4xl sm:leading-snug">
            {clients
              .filter((client) => !client.placeholder)
              .map((client, i, list) => (
                <span key={client.name}>
                  {/* Name + its trailing slash never split; lines break only between brands. */}
                  <span className="whitespace-nowrap">
                    {client.name}
                    {i < list.length - 1 && (
                      <span className="ml-2 mr-1 text-white/20 sm:ml-4 sm:mr-2">/</span>
                    )}
                  </span>{" "}
                </span>
              ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
