import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { experience } from '../data/experience';
import type { Experience, Role } from '../data/experience';

const RoleBlock = ({ role, showTitle }: { role: Role; showTitle: boolean }) => (
  <div className="relative">
    {showTitle && (
      <h4
        className="font-medium uppercase tracking-tight text-[#D7E2EA]"
        style={{ fontSize: 'clamp(1.05rem, 2vw, 1.6rem)' }}
      >
        {role.title}
      </h4>
    )}
    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[#D7E2EA]/55">
      <span className="text-xs sm:text-sm font-light uppercase tracking-[0.18em]">
        {role.period}
      </span>
      <span className="h-1 w-1 rounded-full bg-[#D7E2EA]/30" />
      <span className="text-xs sm:text-sm font-light">{role.duration}</span>
      <span className="h-1 w-1 rounded-full bg-[#D7E2EA]/30" />
      <span className="text-xs sm:text-sm font-light">{role.location}</span>
    </div>
    <ul className="mt-4 flex flex-col gap-2.5">
      {role.highlights.map((point, i) => (
        <li
          key={i}
          className="flex gap-3 text-[#D7E2EA]/75 leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TimelineEntry = ({ item, index }: { item: Experience; index: number }) => {
  const multiRole = item.roles.length > 1;

  return (
    <FadeIn delay={index * 0.05} y={30} className="relative pl-16 sm:pl-24">
      {/* Marker */}
      <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#D7E2EA]/25 bg-[#141418] text-sm sm:text-base font-medium tracking-wider text-[#D7E2EA]"
        >
          {item.monogram}
        </motion.div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 pt-1.5 sm:pt-2.5">
        <h3
          className="font-medium uppercase tracking-tight text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
        >
          {item.company}
        </h3>
        {item.current && (
          <span className="rounded-full border border-[#B600A8]/50 bg-[#B600A8]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#E879D8]">
            Current
          </span>
        )}
      </div>
      {!multiRole && (
        <p
          className="mt-1 font-light uppercase tracking-[0.18em] text-[#D7E2EA]/50"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)' }}
        >
          {item.headlineRole}
        </p>
      )}

      {/* Roles */}
      <div className="mt-6 flex flex-col gap-8 pb-14 sm:pb-16">
        {item.roles.map((role) => (
          <RoleBlock key={role.title} role={role} showTitle={multiRole} />
        ))}
      </div>
    </FadeIn>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-12"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical rail */}
        <span className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-[#D7E2EA]/30 via-[#D7E2EA]/15 to-transparent" />
        {experience.map((item, i) => (
          <TimelineEntry key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
