import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes, ReactNode } from 'react';

export type SectionProps = HTMLAttributes<HTMLElement>;

export const Section = (props: SectionProps) => {
  return (
    <article
      {...props}
      className={cn('group flex w-full flex-col gap-3', props.className)}
    />
  );
};

export type SectionTitleProps = {
  className?: string;
  children?: ReactNode;
};

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h2 className={cn('relative z-20', props.className)}>{props.children}</h2>
  );
};

export type SectionImageProps = {
  href: string;
  alt: string;
  src: string;
  className?: string;
};

export const SectionImage = (props: SectionImageProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className={cn(
        'relative z-10 block max-w-[1000px] rounded-xl shadow-[0_0_300px] shadow-white/90 transition group-hover:shadow-[0_0_300px_20px] dark:bg-gray-900',
        props.className
      )}
    >
      <Image
        className="rounded-xl shadow-2xl shadow-black/50"
        alt={props.alt}
        sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
        src={props.src}
        width="1000"
        height="500"
      />
    </a>
  );
};

export type SectionContentProps = {
  className?: string;
  children?: ReactNode;
};

export const SectionContent = (props: SectionContentProps) => {
  return (
    <div
      className={cn(
        'prose prose-invert relative z-20 prose-p:my-3',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
