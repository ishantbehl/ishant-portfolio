import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import type { Stat } from '../data/profile';

interface AnimatedStatProps {
  stat: Stat;
  /** Duration of the count-up animation in milliseconds. */
  duration?: number;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedStat = ({ stat, duration = 1600 }: AnimatedStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOut(progress) * stat.value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="hero-heading font-black leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </span>
      <span
        className="mt-3 font-light uppercase tracking-[0.2em] text-[#D7E2EA]/55"
        style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}
      >
        {stat.label}
      </span>
    </div>
  );
};

export default AnimatedStat;
