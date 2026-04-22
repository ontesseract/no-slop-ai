import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "no-slop.ai · don't send what you didn't read" },
      {
        name: "description",
        content:
          "A polite request: please don't send AI-generated content you haven't read, edited, or understood. Own your output.",
      },
      { property: "og:title", content: "no-slop.ai" },
      {
        property: "og:description",
        content:
          "Please don't send AI-generated content you haven't read, edited, or understood. Own your output.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Hero />
      <BadVsGood />
      <Manifesto />
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
          A polite public service announcement
        </div>

        <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] font-light leading-[0.88] tracking-tight">
          please don't
          <br />
          <span className="italic">send</span> me{" "}
          <span className="underline-wavy text-accent">slop</span>.
        </h1>

        <p className="mt-12 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          If you wouldn't read it, don't expect me to. Generating text is cheap.
          <span className="text-foreground"> Reading it is not.</span> Own your
          output before you hit send.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#how"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-accent"
          >
            See an example
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-wider transition-all hover:border-foreground hover:bg-foreground/5"
          >
            Read the manifesto
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-32 top-20 hidden font-display text-[20rem] font-light leading-none text-accent/8 md:block">
        ✺
      </div>
    </section>
  );
}

function Manifesto() {
  const points = [
    {
      n: "01",
      t: "Effort is the message.",
      d: "When you forward something you haven't read, you're telling me my time is worth less than yours.",
    },
    {
      n: "02",
      t: "Volume isn't value.",
      d: "A six-paragraph response to a yes/no question isn't thoroughness. It's noise.",
    },
    {
      n: "03",
      t: "Your name, your words.",
      d: "Whatever tool you used to generate it, once it leaves your fingers, it's from you.",
    },
    {
      n: "04",
      t: "Read it. Trim it. Own it.",
      d: "If you can't summarize it in your own words, you're not ready to send it.",
    },
  ];

  return (
    <section id="manifesto" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-5xl font-light tracking-tight md:text-7xl">
            The manifesto
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            §01 · §04
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.n}
              className="group bg-background p-8 transition-colors hover:bg-card md:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {p.n}
                </span>
                <span className="font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl">
                {p.t}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadVsGood() {
  return (
    <section id="how" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="mb-4 font-display text-5xl font-light tracking-tight md:text-7xl">
          Don't do this.
          <br />
          <span className="italic text-accent">Do this instead.</span>
        </h2>
        <p className="mb-16 max-w-xl text-lg text-muted-foreground">
          Two messages. Same intent. One respects the reader.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bad */}
          <div className="rounded-lg border-2 border-destructive/50 bg-destructive/15 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-destructive">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-destructive" />
              Don't
            </div>
            <div className="space-y-3 font-mono text-sm leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                "Hey! Great question. Let me unpack this comprehensively.
              </p>
              <p>
                There are several multifaceted considerations to take into
                account when approaching this challenge. First and foremost,
                it's important to recognize that...
              </p>
              <p>
                ▸ Stakeholder alignment
                <br />
                ▸ Strategic synergies
                <br />
                ▸ Cross-functional paradigms
              </p>
              <p>
                In conclusion, by leveraging best practices we can unlock
                transformative outcomes. Let me know if you'd like me to dive
                deeper into any of these areas! 🚀"
              </p>
            </div>
          </div>

          {/* Good */}
          <div className="rounded-lg border-2 border-accent bg-background p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Do
            </div>
            <div className="space-y-3 font-mono text-sm leading-relaxed">
              <p>
                "Yes, but only if we lock the budget by Friday.
              </p>
              <p>
                Two risks I'd flag: vendor lock-in, and the migration window
                clashing with Q3 launch.
              </p>
              <p>I drafted with AI then cut it to this. Happy to expand."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Checklist() {
  const items = [
    "Did you read every line you're about to send?",
    "Could you say it in half the words?",
    "Did you remove the em-dashes, the rocket emojis, the ‘delve’s?",
    "If asked, can you defend any sentence in it?",
    "Would you be embarrassed if it leaked with your name on it?",
  ];

  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const all = checked.every(Boolean);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Pre-send checklist
          </span>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
            Before you press send.
          </h2>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i}>
              <button
                onClick={() =>
                  setChecked((c) => c.map((v, j) => (j === i ? !v : v)))
                }
                className="group flex w-full items-start gap-5 rounded-lg border border-border bg-card p-5 text-left transition-all hover:border-foreground/40 hover:bg-background"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${
                    checked[i]
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-foreground/30 bg-transparent"
                  }`}
                >
                  {checked[i] && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                      />
                    </svg>
                  )}
                </span>
                <span
                  className={`text-lg leading-relaxed transition-colors md:text-xl ${
                    checked[i] ? "text-muted-foreground line-through" : ""
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div
          className={`mt-8 rounded-lg border-2 p-6 text-center font-mono text-sm uppercase tracking-wider transition-all ${
            all
              ? "border-accent bg-accent text-accent-foreground"
              : "border-dashed border-border text-muted-foreground"
          }`}
        >
          {all ? "✓ You're cleared to send." : "Not yet. Keep going."}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "own your output",
    "read before you send",
    "no slop",
    "less, but better",
    "your name, your words",
    "trim it",
  ];
  const line = words.join("  ✺  ");
  return (
    <section
      aria-hidden
      className="overflow-hidden border-b border-border bg-accent py-6 text-accent-foreground"
    >
      <div className="flex whitespace-nowrap marquee">
        <span className="font-display text-5xl font-light italic md:text-7xl">
          {line}&nbsp;&nbsp;✺&nbsp;&nbsp;
        </span>
        <span className="font-display text-5xl font-light italic md:text-7xl">
          {line}&nbsp;&nbsp;✺&nbsp;&nbsp;
        </span>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-end">
        <div>
          <div className="font-display text-4xl font-light tracking-tight">
            no-slop<span className="text-accent">.ai</span>
          </div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Inspired by{" "}
            <a
              href="https://nohello.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2 underline-offset-4 hover:text-foreground"
            >
              nohello.net
            </a>
            . Built for anyone tired of being the editor of someone else's
            unedited prompts.
          </p>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} · made with care, not tokens
        </div>
      </div>
    </footer>
  );
}
