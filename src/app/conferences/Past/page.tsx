import React from 'react';
import { FixedSidebar, PageContainer } from '../../page';
import { Section, SectionTitle } from '@/components/Section';
import { LuArrowLeft, LuYoutube } from 'react-icons/lu';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
const confList = [
  {
    city: 'Lyon, France',
    description: 'Meetup LyonJS',
    animatedby: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
        profile: 'https://www.bearstudio.fr/team/ivan-dalmet',
      },
      {
        name: 'Yoann Fleury',
        picture: 'https://avatars.githubusercontent.com/u/3920615?v=4',
        role: 'Lead Front End, Streamer, Marketing',
        profile: 'https://www.bearstudio.fr/team/yoann-fleury',
      },
    ],
    image: '/Lyon.jpg',
    date: 'October 11, 2023',
    video: 'https://www.youtube.com/watch?v=kJAH7dtytxM',
  },
  {
    city: 'Brussels, Belgium',
    description: 'Meetup BeJs ',
    animatedby: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
        profile: 'https://www.bearstudio.fr/team/ivan-dalmet',
      },
      {
        name: 'Fabien Essid',
        picture: 'https://avatars.githubusercontent.com/u/50022361?v=4',
        role: 'Front-End Developer',
        profile: 'https://www.bearstudio.fr/team/fabien-essid',
      },
    ],
    image: '/Bruxelles.jpg',
    date: 'September 6, 2023',
  },
  {
    city: 'Bordeaux, France',
    description: 'Meetup BordeauxJS',
    animatedby: [
      {
        name: 'Hugo Pérard',
        picture: 'https://avatars.githubusercontent.com/u/48803115?v=4',
        role: 'Front Developer',
        profile: 'https://www.bearstudio.fr/team/hugo-perard',
      },
      {
        name: 'Quentin Lerebours',
        picture: 'https://avatars.githubusercontent.com/u/27200095?v=4',
        role: 'Full Stack Developer',
        profile: 'https://www.bearstudio.fr/team/quentin-lerebours',
      },
    ],
    image: '/Bordeaux.jpeg',
    date: 'July 11, 2023',
  },
  {
    city: 'Nantes, France',
    description: 'Meetup NantesJs',
    animatedby: [
      {
        name: 'Hugo Pérard',
        picture: 'https://avatars.githubusercontent.com/u/48803115?v=4',
        role: 'Front Developer',
        profile: 'https://www.bearstudio.fr/team/hugo-perard',
      },
      {
        name: 'Yoann Fleury',
        picture: 'https://avatars.githubusercontent.com/u/3920615?v=4',
        role: 'Lead Front End, Streamer, Marketing',
        profile: 'https://www.bearstudio.fr/team/yoann-fleury',
      },
    ],
    image: '/Nantes.jpg',
    date: 'Mars 16, 2023',
  },
  {
    city: 'Rouen, France',
    description: 'Codeurs en Seine',
    animatedby: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
        profile: 'https://www.bearstudio.fr/team/ivan-dalmet',
      },
      {
        name: 'Quentin Lerebours',
        picture: 'https://avatars.githubusercontent.com/u/27200095?v=4',
        role: 'Full Stack Developer',
        profile: 'https://www.bearstudio.fr/team/quentin-lerebours',
      },
    ],
    image: '/rouen.jpg',
    video: 'https://www.youtube.com/watch?v=5yk34hF40Ok',
    date: 'November 17, 2022',
  },
];
const PastConeferences = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-x-1.5 rounded-md bg-gray-200 px-2.5 py-1.5 font-medium text-black shadow-sm "
        >
          <LuArrowLeft className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Go back
        </Link>

        <Section className="gap-24" id="conferences">
          {confList.map((conf) => (
            <Section id="web" key={conf.date}>
              <SectionTitle>
                <a className="flex items-start gap-1 text-2xl">
                  {conf.description}
                  <span className="sr-only">
                    le starter dont je suis le héro
                  </span>
                </a>
              </SectionTitle>
              <div
                className={cn(
                  'relative z-10 block h-auto max-w-[1000px] rounded-xl shadow-[0_0_300px] shadow-web-500/30    dark:bg-gray-900'
                )}
              >
                <Image
                  className="rounded-xl shadow-2xl shadow-black/50"
                  alt="Event Image"
                  sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
                  src={conf.image}
                  width="1000"
                  height="500"
                />
              </div>
              <div className="prose-invert relative  prose-p:my-1">
                <p>
                  <span>City :</span> {conf.city}
                </p>
                <p>Date : {conf.date} </p>
                Presented by :
                <div className=" mt-5 grid grid-cols-1 gap-8  lg:grid-cols-2">
                  {conf.animatedby.map((person) => (
                    <div
                      className="flex w-full items-center space-x-5 "
                      key={conf.date}
                    >
                      <a
                        href={person.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          height={500}
                          width={500}
                          className="inline-block h-12 w-12 rounded-full"
                          src={person.picture}
                          alt=""
                        />
                      </a>
                      <div className="items-center  leading-none">
                        <p>{person.name}</p>
                        <p className=" text-sm text-gray-500">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {conf.video && (
                <div className="mt-5 flex space-x-4">
                  <a
                    target="_blank"
                    href={conf.video}
                    className="gradient-youtube inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-white shadow-sm"
                  >
                    <LuYoutube /> Replay
                  </a>
                </div>
              )}
            </Section>
          ))}
        </Section>
      </PageContainer>
    </div>
  );
};

export default PastConeferences;
