import React, { useEffect } from 'react';
import { FixedSidebar, PageContainer } from '../../page';
import { Section, SectionContent, SectionTitle } from '@/components/Section';
import {
  LuArrowLeft,
  LuCalendarDays,
  LuMapPin,
  LuYoutube,
} from 'react-icons/lu';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
const confList = [
  {
    city: 'Indy, Lyon, France 🇫🇷',
    title: 'Meetup LyonJS',
    image: '/lyon.jpg',
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
    date: 'October 11, 2023',
    dateFormatISO: '2024-10-11',
    video: 'https://www.youtube.com/watch?v=kJAH7dtytxM',
  },
  {
    city: 'BeCentral, Brussels, Belgium 🇧🇪',
    title: 'Meetup BeJs ',
    image: '/brussels.jpg',
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
    date: 'September 6, 2023',
    dateFormatISO: '2023-09-06',
  },
  {
    city: 'Bordeaux, France 🇫🇷',
    title: 'Meetup BordeauxJS',
    image: '/bordeaux.jpg',
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
    date: 'July 11, 2023',
    dateFormatISO: '2023-07-11',
  },
  {
    city: 'Zenika, Nantes, France 🇫🇷',
    title: 'Meetup NantesJs',
    image: '/nantes.jpg',
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
    date: 'Mars 16, 2023',
    dateFormatISO: '2023-03-16',
  },
  {
    city: 'Kindarena, Rouen, France 🇫🇷',
    title: ' Meetup Codeurs en Seine',
    image: '/coudeur.jpg',
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
    video: 'https://www.youtube.com/watch?v=5yk34hF40Ok',
    date: 'November 17, 2022',
    dateFormatISO: '2022-11-17',
  },
];
const PastConeferences = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        <Link
          href="/"
          className=" -mb-10 inline-flex w-fit items-center gap-x-1.5 rounded-md bg-gray-200 px-2.5 py-1.5 font-medium text-black shadow-sm  "
        >
          <LuArrowLeft className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Back
        </Link>

        <h2 className="-mb-8 text-3xl font-semibold xl:-mb-16">
          Choose your own adventure
        </h2>
        {confList.map((conf) => (
          <Section key={conf.date}>
            <SectionTitle className="flex items-start gap-1 text-xl">
              {conf.title}
            </SectionTitle>
            <div
              className={cn(
                'relative z-10 max-w-[1000px] rounded-xl shadow-[0_0_100px] shadow-talk-500/30 dark:bg-gray-900'
              )}
            >
              <Image
                className="rounded-xl"
                alt={conf.title}
                sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
                src={conf.image}
                width="1000"
                height="500"
                priority
              />
            </div>
            <div className="text-[#D1D5DB] prose-p:my-3">
              <div className="my-3 flex items-center gap-4 pl-2 font-thin">
                <LuCalendarDays size={25} />
                <time dateTime={conf.dateFormatISO}>{conf.date} </time>
              </div>
              <p className="flex items-center gap-4 pl-2 font-thin">
                <LuMapPin size={25} />
                {conf.city}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {conf.animatedby.map((person) => (
                  <div
                    className="flex w-full items-center space-x-5"
                    key={person.name}
                  >
                    <Link
                      href={person.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={person.name}
                    >
                      <Image
                        height={500}
                        width={500}
                        className="inline-block h-12 w-12 rounded-full"
                        src={person.picture}
                        alt={person.name}
                        priority
                      />
                    </Link>
                    <div className="items-center leading-none">
                      <p>{person.name}</p>
                      <p className=" text-sm text-gray-400">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {conf.video && (
                <Link
                  target="_blank"
                  href={conf.video}
                  className="gradient-youtube mt-5 inline-flex w-fit items-center gap-x-1.5 space-x-4 rounded-md px-2.5 py-1.5 font-medium text-white shadow-sm"
                >
                  <LuYoutube /> Watch the replay
                </Link>
              )}
            </div>
          </Section>
        ))}
      </PageContainer>
    </div>
  );
};

export default PastConeferences;
