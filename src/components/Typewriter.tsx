import { useEffect, useState } from "react";

/** Terminal-style typing loop over a list of phrases. */
export function Typewriter({ phrases, className }: { phrases: string[]; className?: string }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = phrases[index % phrases.length]!;
    let delay = 55;
    if (phase === "pausing") delay = 1600;
    if (phase === "deleting") delay = 25;

    const t = setTimeout(() => {
      if (phase === "typing") {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setPhase("pausing");
      } else if (phase === "pausing") {
        setPhase("deleting");
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setPhase("typing");
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, phase, index, phrases]);

  return (
    <span className={className}>
      <span className="text-accent">&gt;_</span> {text}
      <span className="animate-pulse text-accent">▊</span>
    </span>
  );
}
