import Header from "@/components/Header";
import { BOOK, EMAIL, LAB_MAPS, PHONE, PHONE_DISPLAY, PT_MAPS } from "@/lib/links";

const STACK = [
  { group: "Reset", items: [
    { name: "Infrared Sauna", img: "/assets/rehabpt/sauna/sauna.png", alt: "Infrared sauna cabin at RehabPT Recovery Lab", copy: "A quiet heat session you can pair with training or a long workday." },
    { name: "Cold Plunge", img: "/assets/rehabpt/cold-plunge/cold-plunge.png", alt: "Cold plunge tub at RehabPT Recovery Lab in Costa Mesa", copy: "Short, structured cold exposure in the Recovery Lab." },
  ]},
  { group: "Restore", items: [
    { name: "Normatec Compression", img: "/assets/rehabpt/compression/normatec.jpg", alt: "Normatec compression boots", copy: "Dynamic compression for legs after training or long standing days." },
    { name: "Red Light Therapy", img: "/assets/rehabpt/red-light/red-light.png", alt: "Red light therapy panel at RehabPT", copy: "A standalone session in the lab, booked on its own or stacked." },
  ]},
  { group: "Advanced", items: [
    { name: "Hyperbaric Oxygen Chamber", img: "/assets/rehabpt/hbot/hbot.png", alt: "Hyperbaric oxygen chamber at RehabPT Recovery Lab", copy: "Scheduled HBOT sessions inside the Costa Mesa Recovery Lab." },
    { name: "Shockwave Therapy", img: "/assets/rehabpt/shockwave/shockwave.png", alt: "Shockwave therapy device used at RehabPT", copy: "A targeted modality offered through RehabPT — book to confirm fit." },
  ]},
];

const AUDIENCE = ["Athletes", "Active adults", "Post-rehab clients", "Jiu-jitsu & combat sports", "People who want to move better"];

export default function HomePage() {
  return (
    <div id="top">
      <a href={BOOK} className="block bg-teal py-2 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
        20% off your first recovery service — code FIRST20
      </a>
      <Header />
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-paper">
        <img src="/assets/rehabpt/sauna/sauna.png" alt="Infrared sauna at RehabPT Recovery Lab, Costa Mesa" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6">
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.28em] text-teal">Physical therapy + recovery · Costa Mesa</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-6xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-8xl">Get back.<br />Then keep going.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand">Physical therapy and advanced recovery services built for people who want to move better, recover well and stay in the game.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BOOK} className="bg-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-ink">Book a recovery service</a>
            <a href="#clinical" className="border border-sand/40 px-5 py-3 text-sm font-bold uppercase tracking-wide">Explore physical therapy</a>
          </div>
          <p className="mt-6 text-sm text-sand/80">20% off your first recovery service · code <span className="font-semibold text-white">FIRST20</span></p>
        </div>
      </section>
      <section id="two-sides" className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] text-teal-deep">Two sides of RehabPT</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none md:text-6xl">From rehab to recovery, without changing teams.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden bg-ink text-paper">
              <img src="/assets/rehabpt/pt/physical-therapy.jpg" alt="Physical therapy treatment table at RehabPT" className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">Physical Therapy</h3>
                <p className="mt-3 text-sand">Personalized rehab and movement work at 1810 Newport Blvd, inside OC Performance Center.</p>
                <a href="#clinical" className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-teal">About the PT practice</a>
              </div>
            </article>
            <article className="overflow-hidden bg-ink text-paper">
              <img src="/assets/rehabpt/cold-plunge/cold-plunge.png" alt="Recovery Lab cold plunge" className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">Recovery Lab</h3>
                <p className="mt-3 text-sand">Sauna, cold plunge, HBOT, compression, red light and more at 419 E 17th St #101 — next to Art of Jiu Jitsu.</p>
                <a href={BOOK} className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-teal">Book the lab</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="stack" className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase md:text-5xl">Recovery Lab stack</h2>
          <p className="mt-3 max-w-2xl text-ink/80">Organized by how people actually use the room — not by marketing claims.</p>
          <div className="mt-12 space-y-12">
            {STACK.map((group) => (
              <div key={group.group}>
                <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.28em] text-teal-deep">{group.group}</p>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  {group.items.map((item) => (
                    <article key={item.name} className="grid overflow-hidden bg-paper md:grid-cols-[220px_1fr]">
                      <img src={item.img} alt={item.alt} className="h-48 w-full object-cover md:h-full" />
                      <div className="p-5">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">{item.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.copy}</p>
                        <a href={BOOK} className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-teal-deep">Book session</a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contrast" className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] bg-heat">
          <img src="/assets/rehabpt/sauna/sauna.png" alt="Infrared sauna interior" className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-heat/40" />
        </div>
        <div className="relative min-h-[420px] bg-cold">
          <img src="/assets/rehabpt/cold-plunge/cold-plunge.png" alt="Cold plunge" className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-cold/40" />
        </div>
        <div className="bg-ink px-6 py-14 text-paper md:col-span-2">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase md:text-7xl">Heat. Cold. Repeat.</h2>
            <p className="mt-4 max-w-2xl text-sand">Build a simple post-training or recovery routine around infrared sauna and cold plunge at the Costa Mesa Recovery Lab.</p>
            <a href={BOOK} className="mt-7 inline-block bg-paper px-5 py-3 text-sm font-bold uppercase tracking-wide text-ink">Book contrast services</a>
          </div>
        </div>
      </section>
      <section id="clinical" className="bg-paper py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <img src="/assets/rehabpt/shockwave/shockwave.png" alt="Clinical treatment tools at RehabPT" className="h-[420px] w-full object-cover" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] text-teal-deep">Clinical credibility</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none md:text-5xl">Recovery backed by people who understand rehab.</h2>
            <p className="mt-5 leading-relaxed text-ink/80">RehabPT is a physical therapy practice first. The Recovery Lab sits next to Art of Jiu Jitsu so training, rehab, and recovery can live in the same orbit — without treating every modality as medical care.</p>
            <p className="mt-4 leading-relaxed text-ink/80">Come in for movement work at OC Performance Center, or book a standalone recovery session on 17th Street.</p>
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Who it's for</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {AUDIENCE.map((item) => (
              <li key={item} className="border border-white/15 px-4 py-5 text-sm font-semibold uppercase tracking-wide">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-teal py-16 text-ink">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="font-[family-name:var(--font-display)] text-7xl font-extrabold leading-none md:text-9xl">20% OFF</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">First recovery service</p>
          <p className="mt-3 text-lg">Code <strong>FIRST20</strong> at booking.</p>
          <a href={BOOK} className="mt-8 inline-block bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper">Book your first service</a>
        </div>
      </section>
      <section id="locations" className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase md:text-6xl">Train well.<br />Recover fully.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border border-ink/10 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-deep">Recovery Lab</p>
              <p className="mt-3 text-xl font-semibold">419 E 17th St #101<br />Costa Mesa, CA 92627</p>
              <p className="mt-2 text-sm text-ink/70">Next to Art of Jiu Jitsu</p>
              <a href={LAB_MAPS} className="mt-4 inline-block text-sm font-semibold uppercase">Directions</a>
            </article>
            <article className="border border-ink/10 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-deep">Physical Therapy</p>
              <p className="mt-3 text-xl font-semibold">1810 Newport Blvd<br />Costa Mesa, CA 92627</p>
              <p className="mt-2 text-sm text-ink/70">Inside OC Performance Center</p>
              <a href={PT_MAPS} className="mt-4 inline-block text-sm font-semibold uppercase">Directions</a>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`sms:${PHONE}`} className="bg-ink px-5 py-3 text-sm font-bold uppercase text-paper">Call / text {PHONE_DISPLAY}</a>
            <a href={BOOK} className="bg-teal px-5 py-3 text-sm font-bold uppercase text-ink">Book services</a>
            <a href={`mailto:${EMAIL}`} className="border border-ink px-5 py-3 text-sm font-bold uppercase">{EMAIL}</a>
          </div>
          <p className="mt-8 text-sm text-ink/70">Hours: Mon–Thu 7 AM–6 PM · Fri 7 AM–2 PM · Sat 7 AM–12 PM · Sun closed</p>
        </div>
      </section>
      <footer className="bg-ink py-10 text-sand">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm md:flex-row md:items-center md:justify-between md:px-6">
          <p>RehabPT Recovery Lab · Costa Mesa</p>
          <p>Speculative redesign by Novenworks</p>
        </div>
      </footer>
    </div>
  );
}
