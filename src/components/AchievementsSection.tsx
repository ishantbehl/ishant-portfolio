import { Trophy } from 'lucide-react';
import FadeIn from './FadeIn';
import { profile } from '../data/profile';

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Key Achievements
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/55 mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)' }}
        >
          Measurable impact across consulting, research, and client success
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {profile.achievements.map((achievement, i) => (
          <FadeIn key={achievement} delay={i * 0.06} y={30}>
            <div className="group flex h-full items-start gap-4 rounded-[24px] border border-[#D7E2EA]/15 bg-[#141418] p-5 sm:p-6 transition-all duration-300 hover:border-[#D7E2EA]/40 hover:-translate-y-1">
              <div className="shrink-0 rounded-full border border-[#D7E2EA]/20 p-2.5 transition-colors duration-300 group-hover:border-[#B600A8]/60">
                <Trophy className="text-[#E879D8]" size={20} strokeWidth={1.5} />
              </div>
              <p
                className="font-light leading-relaxed text-[#D7E2EA]/85"
                style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1.1rem)' }}
              >
                {achievement}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
