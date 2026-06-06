import { useEffect, useRef, useState } from 'react';
import { Mail, Download, Volume2, VolumeX } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import OutlineButton from './OutlineButton';
import { profile } from '../data/profile';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);

  // Auto-hide "Tap for sound" hint after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowSoundHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Auto-mute video when scrolling past hero
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const video = videoRef.current;
          if (video && !video.muted) {
            video.muted = true;
            setMuted(true);
          }
        }
      },
      { threshold: 0, rootMargin: '-50% 0px 0px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    setShowSoundHint(false);
  };

  // Snap-scroll: one wheel tick / keypress while at the top jumps to Summary.
  useEffect(() => {
    let fired = false;

    const goToSummary = () => {
      if (fired) return;
      fired = true;
      const summary = document.getElementById('summary');
      if (summary) summary.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const onWheel = (e: WheelEvent) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 50) return;
      e.preventDefault();
      goToSummary();
    };

    const onKey = (e: KeyboardEvent) => {
      if (fired) return;
      if (window.scrollY > 50) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToSummary();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Main intro video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/45 to-black/55" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-transparent to-black/80" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top bar */}
        <FadeIn delay={0} y={-20} className="relative">
          <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
            <ul className="flex items-center gap-5 sm:gap-8 md:gap-12">
              {profile.nav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]"
            >
              Résumé
            </a>
          </div>
        </FadeIn>

        {/* Middle-left: label + name + title + headline + CTAs */}
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-5xl px-6 md:px-10">
            <FadeIn delay={0.3} y={20}>
              <p className="mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-white/60">
                {profile.location} · Consulting & Research
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40}>
              <h1
                className="font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontSize: 'clamp(2.75rem, 11vw, 9.5rem)' }}
              >
                {profile.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>
            </FadeIn>

            <FadeIn delay={0.8} y={20}>
              <p className="mt-5 md:mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/75">
                {profile.titleParts.map((part, i) => (
                  <span key={part} className="flex items-center gap-3">
                    {i > 0 && <span className="text-white/35">/</span>}
                    {part}
                  </span>
                ))}
              </p>
            </FadeIn>

            <FadeIn delay={1} y={20}>
              <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/80">
                {profile.headline}
              </p>
            </FadeIn>

            <FadeIn delay={1.15} y={20}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <ContactButton
                  label="Get in Touch"
                  href="#contact"
                  icon={<Mail size={16} strokeWidth={2} />}
                />
                <OutlineButton
                  label="Download Résumé"
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  className="!text-white !border-white/70 hover:!bg-white/10"
                  icon={<Download size={16} strokeWidth={2} />}
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom bar: scroll indicator + mute toggle */}
        <div className="flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-10 md:pb-12">
          <FadeIn delay={1.3} y={20}>
            <a href="#summary" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white">
                Scroll
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-white"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={1.3} y={20}>
            <div className="flex items-center gap-3">
              {showSoundHint && (
                <span
                  className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.25em] text-white/80"
                  style={{ animation: 'pulseFade 2s ease-in-out infinite' }}
                >
                  Tap for sound
                </span>
              )}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? 'Unmute intro video' : 'Mute intro video'}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-110"
              >
                {muted ? <VolumeX size={18} strokeWidth={2} /> : <Volume2 size={18} strokeWidth={2} />}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes pulseFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
