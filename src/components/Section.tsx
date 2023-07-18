import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

export type SectionProps = {
  logo: JSX.Element;
  link: string;
  imageSrc: string;
} & HTMLAttributes<HTMLElement>;

export const Section = ({
  logo,
  imageSrc,
  children,
  link,
  className,
  ...props
}: SectionProps) => {
  const shadowColor = (() => {
    switch (props.id) {
      case 'web':
        return 'shadow-web-500/30 group-hover:shadow-web-500/40';
      case 'native':
        return 'shadow-native-500/40 group-hover:shadow-native-500/50';
      case 'figma':
        return 'shadow-figma-500/40 group-hover:shadow-figma-500/50';
      default:
        return '';
    }
  })();

  return (
    <article
      {...props}
      className={cn('group flex w-full flex-col gap-3', className)}
    >
      <h2 className="relative z-20">
        <a href={link}>
          {logo} <span className="sr-only">Start UI {props.id}</span>
        </a>
      </h2>
      <a
        href={link}
        className={cn(
          'relative z-10 block max-w-[1000px] rounded-xl shadow-[0_0_300px] shadow-white/90 transition group-hover:shadow-[0_0_300px_20px] dark:bg-gray-900',
          shadowColor
        )}
      >
        <Image
          className="rounded-xl shadow-2xl shadow-black/50"
          alt={`Start UI ${props.id}`}
          sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
          src={imageSrc}
          width="1000"
          height="500"
        />
      </a>
      <div className="prose prose-invert relative z-20 prose-p:my-3">
        {children}
      </div>
    </article>
  );
};
