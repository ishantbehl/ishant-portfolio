import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import OutlineButton from './OutlineButton';
import { profile } from '../data/profile';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
        >
          Get in Touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mx-auto max-w-2xl text-center font-light text-[#D7E2EA]/60 mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
        >
          Open to consulting partnerships, research collaborations, and
          leadership conversations. Reach out through whichever channel suits you.
        </p>
      </FadeIn>

      {/* Contact cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {profile.contact.map((method, i) => {
          const Icon = method.icon;
          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group relative flex h-full flex-col justify-between gap-8 sm:gap-10 rounded-[28px] sm:rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-[#D7E2EA]/60 hover:bg-[#1a1a20] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#D7E2EA]/20 p-3 sm:p-3.5 transition-colors duration-300 group-hover:border-[#D7E2EA]/50">
                    <Icon className="text-[#D7E2EA]" size={22} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#D7E2EA] group-hover:rotate-12"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <span
                    className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
                  >
                    {method.label}
                  </span>
                  <span
                    className="font-medium text-[#D7E2EA] break-all"
                    style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.3rem)' }}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      {/* CTA row */}
      <FadeIn delay={0.3} y={20}>
        <div className="mx-auto mt-12 sm:mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          <ContactButton
            label="Email Me"
            href={profile.contact[0].href}
          />
          <OutlineButton
            label="Download Résumé"
            href={profile.resumeUrl}
            download={profile.resumeFileName}
          />
        </div>
      </FadeIn>

      {/* Footer line */}
      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:flex-row sm:justify-between">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            {profile.location}
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
