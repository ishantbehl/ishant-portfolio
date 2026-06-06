import type { ReactNode } from 'react';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** When set, the anchor downloads the target with the given filename. */
  download?: string;
  target?: string;
  /** Optional leading icon (e.g. a Lucide icon element). */
  icon?: ReactNode;
}

const ContactButton = ({
  label = 'Contact Me',
  href = '#contact',
  onClick,
  className = '',
  download,
  target,
  icon,
}: ContactButtonProps) => {
  const isExternal = target === '_blank';

  return (
    <a
      href={href}
      onClick={onClick}
      download={download}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {icon}
      {label}
    </a>
  );
};

export default ContactButton;
