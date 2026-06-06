import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import AnimatedStat from './AnimatedStat';
import { profile } from '../data/profile';

const SummarySection = () => {
  return (
    <section
      id="summary"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32"
    >
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-14 sm:gap-20 md:gap-24 text-center">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
          >
            Summary
          </h2>
        </FadeIn>

        <AnimatedText
          text={profile.summary}
          className="font-medium leading-relaxed text-[#D7E2EA] max-w-3xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Animated statistics */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:grid-cols-4">
            {profile.stats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SummarySection;
