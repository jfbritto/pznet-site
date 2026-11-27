/**
 * Decorative fibre strands with light pulses running along them. Pure SVG +
 * CSS (see .pznet-pulse in globals.css): no client JS, and the pulses are
 * hidden for users who prefer reduced motion.
 */

const strands = [
  "M-40 720 C 260 700, 420 520, 640 470 S 1040 300, 1260 120",
  "M-40 780 C 300 760, 480 600, 700 540 S 1060 380, 1260 230",
  "M-40 660 C 220 640, 380 460, 600 410 S 980 220, 1260 40",
  "M-40 840 C 340 820, 560 680, 760 620 S 1100 470, 1260 350",
  "M200 860 C 420 760, 600 700, 820 660 S 1120 560, 1260 520",
];

const pulses = [
  { d: strands[0], duration: "5.5s", delay: "0s" },
  { d: strands[1], duration: "7s", delay: "1.6s" },
  { d: strands[2], duration: "6.2s", delay: "3.1s" },
  { d: strands[3], duration: "8s", delay: "0.8s" },
  { d: strands[4], duration: "6.6s", delay: "2.4s" },
];

/** `id` must be unique per page: it names the pulse gradient. */
export function FiberLines({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0" />
          <stop offset="50%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      {strands.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="white"
          strokeOpacity="0.09"
          strokeWidth="1.5"
        />
      ))}
      {pulses.map((p) => (
        <path
          key={p.d}
          d={p.d}
          pathLength={1000}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="pznet-pulse"
          style={
            {
              "--pulse-duration": p.duration,
              "--pulse-delay": p.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
