import { GraduationCap, BadgeCheck, Globe } from 'lucide-react';
import FadeIn from './FadeIn';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { profile } from '../data/profile';

const CredentialsSection = () => {
  return (
    <section
      id="credentials"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-8 pb-16 sm:pb-20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3">
        {/* Education */}
        <FadeIn y={30}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#E879D8]" size={24} strokeWidth={1.5} />
              <h3 className="font-medium uppercase tracking-[0.18em] text-[#D7E2EA] text-sm sm:text-base">
                Education
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-[20px] border border-[#D7E2EA]/12 bg-[#141418] p-5"
                >
                  <p className="font-medium text-[#D7E2EA] leading-snug">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm text-[#D7E2EA]/60">{edu.field}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/40">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-[#E879D8]" size={24} strokeWidth={1.5} />
              <h3 className="font-medium uppercase tracking-[0.18em] text-[#D7E2EA] text-sm sm:text-base">
                Certifications
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rounded-[16px] border border-[#D7E2EA]/12 bg-[#141418] px-4 py-3"
                >
                  <p className="text-sm font-light leading-snug text-[#D7E2EA]/90">
                    {cert.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/40">
                    {cert.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Languages */}
        <FadeIn delay={0.2} y={30}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Globe className="text-[#E879D8]" size={24} strokeWidth={1.5} />
              <h3 className="font-medium uppercase tracking-[0.18em] text-[#D7E2EA] text-sm sm:text-base">
                Languages
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-[16px] border border-[#D7E2EA]/12 bg-[#141418] px-4 py-3"
                >
                  <span className="font-medium text-[#D7E2EA]">{lang.name}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/50">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CredentialsSection;
