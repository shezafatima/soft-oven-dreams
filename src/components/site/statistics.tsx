import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Custom Cakes" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "", label: "Customer Rating", decimals: 1 },
];

function Counter({
  value,
  suffix,
  decimals = 0,
  run,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  run: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <span>
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className="grid gap-8 rounded-[2.5rem] border bg-card px-6 py-14 shadow-soft sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} run={inView} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
