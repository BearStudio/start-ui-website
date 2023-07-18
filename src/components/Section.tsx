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
      <div className="mx-auto flex w-full flex-col gap-4 lg:max-w-3xl lg:flex-auto">
        <h2 className="w-52 rounded-lg">
          {logo} <span className="sr-only">Start UI {props.id}</span>
        </h2>
        <div className="group relative overflow-hidden rounded-xl dark:bg-gray-900">
          <div className="mx-auto">
            <Image
              alt=""
              sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
              src={imageSrc}
              width="1000"
              height="500"
            />
          </div>
        </div>
        <div className="prose prose-invert prose-p:my-3">{children}</div>
      </div>
    </article>
  );
};
