import FadeIn from './FadeIn';
import { skillGroups } from '../data/skills';

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-white px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-24 leading-none"
          style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08} y={30}>
            <div
              className="flex flex-col gap-6 py-9 sm:py-11 md:py-12 lg:flex-row lg:gap-14"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === skillGroups.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div className="flex shrink-0 items-start gap-4 sm:gap-6 lg:w-[38%]">
                <span
                  className="font-black leading-none text-[#0C0C0C]/15"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
                  >
                    {group.category}
                  </h3>
                  <p
                    className="mt-2 font-light leading-relaxed text-[#0C0C0C]/55"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
                  >
                    {group.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-wrap content-start gap-2.5 sm:gap-3 lg:pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#0C0C0C]/15 bg-[#0C0C0C]/[0.02] px-4 py-2 text-sm text-[#0C0C0C]/80 transition-colors hover:border-[#0C0C0C]/40 hover:text-[#0C0C0C]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
