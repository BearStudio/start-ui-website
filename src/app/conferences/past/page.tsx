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
import Caroussel from '@/components/Caroussel';
const confList = [
  {
    city: 'Indy, Lyon, France 🇫🇷',
    title: 'Meetup LyonJS',
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
    folder: 'LyonJS',
    date: 'October 11, 2023',
    dateFormatISO: '2024-10-11',
    video: 'https://www.youtube.com/watch?v=kJAH7dtytxM',
    images: ['Lyon1.jpg', 'Lyon2.jpg', 'Lyon3.jpg'],
  },
  {
    city: 'BeCentral, Brussels, Belgium 🇧🇪',
    title: 'Meetup BeJs ',
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
    folder: 'BeJS',
    date: 'September 6, 2023',
    dateFormatISO: '2023-09-06',
    images: ['Brussels1.jpg', 'Brussels2.jpg', 'Brussels3.jpg'],
  },
  {
    city: 'Bordeaux, France 🇫🇷',
    title: 'Meetup BordeauxJS',
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
    folder: 'BordeauxJS',
    date: 'July 11, 2023',
    dateFormatISO: '2023-07-11',
    images: ['Bordeaux1.jpg'],
  },
  {
    city: 'Zenika, Nantes, France 🇫🇷',
    title: 'Meetup NantesJs',
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
    folder: 'NantesJS',
    date: 'Mars 16, 2023',
    dateFormatISO: '2023-03-16',
    images: ['Nantes1.jpg', 'Nantes2.jpg'],
  },
  {
    city: 'Kindarena, Rouen, France 🇫🇷',
    title: ' Meetup Codeurs en Seine',
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
    folder: 'CoudeurEnSeine',
    video: 'https://www.youtube.com/watch?v=5yk34hF40Ok',
    date: 'November 17, 2022',
    dateFormatISO: '2022-11-17',
    images: ['Coudeur1.jpg', 'Coudeur2.jpg', 'Coudeur3.jpg'],
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
              <Caroussel images={conf.images} folder={conf.folder} />
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
                  <LuYoutube /> Replay
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
