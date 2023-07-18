import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

export type SectionProps = {
  logo: JSX.Element;
  imageSrc: string;
} & HTMLAttributes<HTMLElement>;

export const Section = ({
  logo,
  imageSrc,
  children,
  ...props
}: SectionProps) => {
  return (
    <article
      {...props}
      className={cn('flex w-full flex-col gap-3', props.className)}
    >
      <h2>
        {logo} <span className="sr-only">Start UI {props.id}</span>
      </h2>
      <div className="max-w-[1000px] overflow-hidden rounded-xl dark:bg-gray-900">
        <Image
          alt={`Start UI ${props.id}`}
          sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
          src={imageSrc}
          width="1000"
          height="500"
        />
      </div>
      <div className="prose prose-invert prose-p:my-3">{children}</div>
    </article>
  );
};
