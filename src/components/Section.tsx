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
    <article {...props}>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 lg:max-w-3xl lg:flex-auto">
        <div className="group relative mt-8 overflow-hidden rounded-xl dark:bg-gray-900 [&+*]:mt-8">
          <div className="mx-auto w-fit blur-[2px] transition duration-300 ease-linear hover:blur-none">
            <Image
              alt=""
              sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
              src={imageSrc}
              width="1000"
              height="1000"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 rounded-lg bg-black/60 p-2 transition duration-300 ease-linear group-hover:opacity-0">
            {logo}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"></div>
        </div>
        {children}
      </div>
    </article>
  );
};
