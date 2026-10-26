import type { Metadata } from "next";
import { EMAIL, PHONE, PHONE_DISPLAY } from "@/lib/links";

const demoUrl = "https://rehabpt-recovery-lab.vercel.app";
const originalSite = "https://www.rehabpt.com/";

export const metadata: Metadata = {
  title: "Outreach brief | RehabPT Recovery Lab",
  description: "Internal Novenworks outreach brief.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const observations = [
  "The official homepage (rehabpt.com, checked 2026-10-25) lists eight services as one run of equal blocks: Physical Therapy, Hyperbaric Oxygen Chamber, Shockwave Therapy, Infrared Sauna, Cold Plunge, Normatec Compression, Red Light Therapy and Sports Training. Each block carries the same \"Book Session\" button.",
  "The physical therapy practice (1810 Newport Blvd, inside OC Performance Center) and the Recovery Lab (419 E 17th St #101, next to Art of Jiu Jitsu) are two separate Costa Mesa locations. On the official homepage the two addresses appear in the contact section further down the page, not alongside the services.",
  "The official site publishes a first-recovery-service offer (20% off, code FIRST20) in a banner. The demo repeats it, so recheck it before any live use.",
  "The demo splits Physical Therapy from the Recovery Lab on the first screen, groups the lab services as Reset, Restore and Advanced, shows both addresses with directions, and sends booking to their existing Vagaro page. Call, text and email paths are on the page.",
  "The official site names a clinician in client testimonials only. No owner or contact name is published, so do not greet by name.",
];

const talkingPoints = [
  "Lead with the split: a new visitor has to work out which of eight services belongs to the PT practice, which to the Recovery Lab, and where each one is.",
  "The demo keeps what already works: the Vagaro booking link, the FIRST20 offer, the phone, the email and both addresses. Nothing operational changes.",
  "Group the lab services by how people use them (Reset, Restore, Advanced) instead of eight identical blocks.",
  "The demo makes no medical outcome or treatment-benefit claims. Keep it that way on the call.",
  "Offer a short call. Quote no price or timeline until they ask for the breakdown.",
];

const email = `Subject: A clearer split between Physical Therapy and the Recovery Lab at RehabPT

Hi RehabPT team,

I looked at rehabpt.com and noticed the physical therapy practice and the Recovery Lab services sit together as one run of equal blocks with the same booking button, and the two Costa Mesa locations only show up further down the page. A new visitor has to work out where to go for what.

I put together a homepage concept that separates Physical Therapy from the Recovery Lab, groups the lab services by how people use them, shows both addresses, and sends booking to your existing Vagaro page: ${demoUrl}

I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent
Novenworks`;

const followUp = `Subject: Re: A clearer split between Physical Therapy and the Recovery Lab at RehabPT

Hi RehabPT team,

Following up on my note. The homepage concept is here if you want a quick look: ${demoUrl}

If it is useful, I can send the breakdown or set up a 15 minute call. If not, no problem at all.

Vincent
Novenworks`;

const doNotSay = [
  "Do not make or repeat any medical outcome, treatment-benefit or safety claim about any service.",
  "Do not quote a price, timeline, ranking, review count or rating. The official site's \"Best\" headline is their claim, not ours.",
  "Do not name an owner. None is published; the email goes to the general inbox.",
  "Do not claim the photos are ours. They are hotlinked from the business's own site CDN.",
  "Do not mention AI, automation tooling or internal pipeline details.",
  "Do not send the /outreach link. Prospects receive the root URL only.",
  "Do not imply Novenworks was hired or is affiliated. The demo footer says it is a speculative concept.",
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink/15 py-10">
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="max-w-3xl list-disc space-y-3 break-words pl-5 leading-relaxed text-ink/85">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Draft({ text }: { text: string }) {
  return (
    <pre className="max-w-3xl whitespace-pre-wrap break-words border border-ink/15 bg-sand p-5 font-[family-name:var(--font-body)] text-[0.98rem] leading-relaxed text-ink">
      {text}
    </pre>
  );
}

export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.25em] text-teal-deep">
        Internal Novenworks brief
      </p>
      <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase leading-none md:text-6xl">
        RehabPT Recovery Lab outreach
      </h1>
      <p className="mt-5 max-w-2xl break-words text-lg leading-relaxed text-ink/80">
        Internal Novenworks brief &mdash; RehabPT Recovery Lab outreach. For Vincent and Henry
        only. Not linked from the site. Send prospects the homepage, not this page:{" "}
        <a className="underline underline-offset-4" href={demoUrl}>
          {demoUrl}
        </a>
      </p>

      <Block title="Contact">
        <dl className="grid max-w-3xl gap-4 break-words sm:grid-cols-[9rem_1fr]">
          <dt className="font-semibold">Business</dt>
          <dd>
            RehabPT. Physical Therapy: 1810 Newport Blvd, Costa Mesa, CA 92627. Recovery Lab: 419
            E 17th St #101, Costa Mesa, CA 92627.
          </dd>
          <dt className="font-semibold">Contact name</dt>
          <dd>None published. Address the message to the RehabPT team.</dd>
          <dt className="font-semibold">Email</dt>
          <dd>
            <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </dd>
          <dt className="font-semibold">Phone</dt>
          <dd>
            <a className="underline underline-offset-4" href={`tel:${PHONE}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            (call or text)
          </dd>
          <dt className="font-semibold">Source</dt>
          <dd>
            first-party (published on the official site),{" "}
            <a className="underline underline-offset-4" href={originalSite}>
              rehabpt.com
            </a>
            . Email and phone are listed on the official contact page (checked 2026-10-25).
          </dd>
          <dt className="font-semibold">Best first touch</dt>
          <dd>
            Email to the published general inbox, then a call or text to the same business line.
            Hours: Mon to Thu 7 AM to 6 PM, Fri 7 AM to 2 PM, Sat 7 AM to 12 PM, Sun closed.
          </dd>
        </dl>
      </Block>

      <Block title="Observations">
        <List items={observations} />
      </Block>
      <Block title="Talking points">
        <List items={talkingPoints} />
      </Block>
      <Block title="Cold email">
        <Draft text={email} />
      </Block>
      <Block title="Follow-up">
        <Draft text={followUp} />
      </Block>
      <Block title="What not to say">
        <List items={doNotSay} />
      </Block>
      <p className="border-t border-ink/15 pt-6 text-sm text-ink/70">
        Vincent Tam &middot; Novenworks &middot; hello@novenworks.com
      </p>
    </main>
  );
}
