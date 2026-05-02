import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "no-slop.ai · own your output" },
      {
        name: "description",
        content:
          "Don't send AI-generated content you haven't read, edited, or understood. Own your output.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "no-slop.ai · own your output" },
      {
        property: "og:description",
        content:
          "Don't send AI-generated content you haven't read, edited, or understood. Own your output.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://no-slop.ai/" },
      { property: "og:image", content: "https://no-slop.ai/og-share.png" },
      { property: "og:image:alt", content: "Own Your Output. Don't Send Slop." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "no-slop.ai · own your output" },
      {
        name: "twitter:description",
        content:
          "Don't send AI-generated content you haven't read, edited, or understood. Own your output.",
      },
      { name: "twitter:image", content: "https://no-slop.ai/og-share.png" },
      { name: "twitter:image:alt", content: "Own Your Output. Don't Send Slop." },
    ],
    links: [{ rel: "canonical", href: "https://no-slop.ai/" }],
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
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_12rem] md:items-end lg:grid-cols-[minmax(0,1fr)_14rem]">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />A polite
              public service announcement
            </div>

            <h1 className="font-display text-4xl font-light tracking-tight sm:text-6xl md:text-8xl">
              <span>Own Your Output.</span>
              <br />
              <span className="italic text-accent">Don't Send Slop.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              If you wouldn't read it, don't expect me to. Generating text is cheap. Reading it is
              not. Own your output before you hit send.
            </p>
          </div>

          <img
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            className="h-28 w-28 justify-self-start md:h-48 md:w-48 md:justify-self-end lg:h-56 lg:w-56"
          />
        </div>
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
          <h2 className="font-display text-4xl font-light tracking-tight md:text-7xl">
            The manifesto
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.n}
              className="group bg-background p-8 transition-colors hover:bg-card md:p-12"
            >
              <div className="flex items-start">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl">
                {p.t}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSide({ tone, lines }: { tone: "dont" | "do"; lines: string[] }) {
  const isDont = tone === "dont";

  return (
    <div
      data-comparison-side={tone}
      className={[
        "p-6 md:p-8 lg:p-10",
        isDont
          ? "border-b border-border/70 bg-destructive/[0.08] md:border-b-0"
          : "bg-success/[0.08]",
      ].join(" ")}
    >
      <div
        className={[
          "mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]",
          isDont ? "text-destructive" : "text-success",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-1.5 w-1.5 rounded-full",
            isDont ? "bg-destructive" : "bg-success",
          ].join(" ")}
        />
        {isDont ? "Don't" : "Do"}
      </div>

      <div
        className={[
          "space-y-3 font-mono text-sm leading-relaxed",
          isDont ? "text-muted-foreground" : "",
        ].join(" ")}
      >
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export function BadVsGood() {
  const comparisonExamples: {
    id: string;
    label: string;
    dont: string[];
    do: string[];
  }[] = [
    {
      id: "pricing",
      label: "Research summary",
      dont: [
        "Here's the AI research brief on pricing expansion.",
        "[5 pages of market sizing, competitor tables, and SWOT analysis]",
      ],
      do: [
        "For the June launch, I wouldn't add more pricing tiers yet.",
        "The research points to confusion in the current plan, not demand for extra options, so I'd simplify the pricing page first.",
      ],
    },
    {
      id: "sql",
      label: "Debugging help",
      dont: [
        "AI wrote this SQL query. Why doesn't it work?",
        "[120 lines of schema, prompt, and generated query]",
      ],
      do: [
        "This SQL query duplicates rows after joining orders to line_items.",
        "I need one row per order with total quantity. What join or grouping am I missing?",
        "Relevant query attached.",
      ],
    },
    {
      id: "stakeholder",
      label: "Executive answer",
      dont: [
        "Hey! Great question. Let me unpack this comprehensively.",
        "[4 paragraphs of AI-generated text about stakeholder alignment, strategic synergies, cross-functional paradigms, and transformative outcomes]",
      ],
      do: [
        "Yes, but only if we lock the budget by Friday.",
        "Two risks I'd flag: vendor lock-in, and the migration window clashing with Q3 launch.",
        "I drafted with AI then cut it to this. Happy to expand.",
      ],
    },
  ];

  return (
    <section id="how" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="mb-4 font-display text-4xl font-light tracking-tight md:text-7xl">
          Don't do this.
          <br />
          <span className="italic text-accent">Do this instead.</span>
        </h2>
        <p className="mb-16 max-w-xl text-lg text-muted-foreground">
          Two messages. Same intent. One respects the reader.
        </p>

        <div className="border-y border-border/80 bg-background/50">
          {comparisonExamples.map((example, index) => (
            <article
              key={example.id}
              data-comparison-pair
              className="border-b border-border/80 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:px-8 lg:px-10">
                <span>{example.label}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:divide-x md:divide-border/70">
                <ComparisonSide tone="dont" lines={example.dont} />
                <ComparisonSide tone="do" lines={example.do} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-end">
        <div className="flex-1">
          <div className="font-display text-4xl font-light tracking-tight">
            no-slop<span className="text-accent">.ai</span>
          </div>
          Built for anyone tired of being asked to read someone else's unedited model output.
          <br />
          <p className="mt-2 text-sm text-muted-foreground">
            Inspired by{" "}
            <a
              href="https://nohello.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2 underline-offset-4 hover:text-foreground"
            >
              nohello.net
            </a>
            <br />
            Open-source on{" "}
            <a
              href="https://github.com/ontesseract/no-slop-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2 underline-offset-4 hover:text-foreground"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
