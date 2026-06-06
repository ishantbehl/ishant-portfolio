import type { ReactNode } from 'react';

interface OutlineButtonProps {
  label: string;
  href?: string;
  className?: string;
  download?: string;
  target?: string;
  onClick?: () => void;
  /** Optional leading icon (e.g. a Lucide icon element). */
  icon?: ReactNode;
}

const OutlineButton = ({
  label,
  href = '#',
  className = '',
  download,
  target,
  onClick,
  icon,
}: OutlineButtonProps) => {
  const isExternal = target === '_blank';

  return (
    <a
      href={href}
      onClick={onClick}
      download={download}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#D7E2EA] whitespace-nowrap transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {icon}
      {label}
    </a>
  );
};

export default OutlineButton;
