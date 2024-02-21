'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type CarousselProps = {
  images: Array<string>;
  folder: string;
};
const Caroussel = (props: CarousselProps) => {
  const [emblaRef] = useEmblaCarousel();
  useEmblaCarousel.globalOptions = { loop: true };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {props.images.map((image, idx) => (
          <Image
            key={idx}
            className={cn('embla__slide rounded-xl')}
            // alt={conf.description}
            sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
            src={`/${props.folder}/${image}`}
            width="1000"
            height="500"
            loading="eager"
            alt="event"
          ></Image>
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
