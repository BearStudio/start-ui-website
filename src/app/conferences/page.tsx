import React from 'react';
import { FixedSidebar, PageContainer } from '../page';
import {
  Section,
  SectionContent,
  SectionImage,
  SectionTitle,
} from '@/components/Section';
import { LuGithub, LuPlayCircle, LuMapPin, LuYoutube } from 'react-icons/lu';
import Image from 'next/image';
const confList = [
  {
    title: 'Rouen,France',
    description:
      '  Our free and open source UI web app starter offers a quick and easy way to bootstrap your next project. It includes best practices & production ready tools to help you get started right away, saving you time and effort in the initial setup phase.',
    animepar: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
      },
      {
        name: 'Quentin',
        picture: 'https://avatars.githubusercontent.com/u/27200095?v=4',
        role: 'Full Stack Developer',
      },
    ],
    image: '/rouen.jpg',
    video: 'https://www.youtube.com/watch?v=5yk34hF40Ok',
    date: '17 November 2022',
  },

  {
    title: 'Nantes,France',
    description:
      '  Our free and open source UI web app starter offers a quick and easy way to bootstrap your next project. It includes best practices & production ready tools to help you get started right away, saving you time and effort in the initial setup phase.',

    animepar: [
      {
        name: 'Hugo Pérard',
        picture: 'https://avatars.githubusercontent.com/u/48803115?v=4',
        role: 'Front developer',
      },
      {
        name: 'Yoann Fleury',
        picture: 'https://avatars.githubusercontent.com/u/3920615?v=4',
        role: 'Lead Front End, Streamer, Marketing, SST, Suppléant CSE',
      },
    ],
    image: '/Nantes.jpg',
    date: '16 Mars 2023',
  },
  {
    title: 'Lyon,France',
    description:
      '  Our free and open source UI web app starter offers a quick and easy way to bootstrap your next project. It includes best practices & production ready tools to help you get started right away, saving you time and effort in the initial setup phase.',

    animepar: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
      },
      {
        name: 'Yoann Fleury',
        picture: 'https://avatars.githubusercontent.com/u/3920615?v=4',
        role: 'Lead Front End, Streamer, Marketing, SST, Suppléant CSE',
      },
      {
        name: 'Quentin',
        picture: 'https://avatars.githubusercontent.com/u/27200095?v=4',
        role: 'Full Stack Developer',
      },
    ],
    image: '/Lyon.jpg',
    date: '11 October 2023',
  },

  {
    title: 'Bordeaux,France',
    description:
      '  Our free and open source UI web app starter offers a quick and easy way to bootstrap your next project. It includes best practices & production ready tools to help you get started right away, saving you time and effort in the initial setup phase.',

    /*  animepar: 'Ivan Quentin Yoann', */
    animepar: [
      {
        name: 'Ivan Dalmet',
        picture: 'https://avatars.githubusercontent.com/u/9749061?v=4',
        role: 'Co-founder - Lead Designer',
      },
      {
        name: 'Yoann Fleury',
        picture: 'https://avatars.githubusercontent.com/u/3920615?v=4',
        role: 'Lead Front End, Streamer, Marketing, SST, Suppléant CSE',
      },
      {
        name: 'Quentin',
        picture: 'https://avatars.githubusercontent.com/u/27200095?v=4',
        role: 'Full Stack Developer',
      },
    ],
    image: '/Nantes.jpg',
  },
];
const Coneferences = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        {confList.map((conf) => (
          <Section id="web" key={conf.title}>
            <SectionTitle>
              <a className="flex items-start gap-1 text-3xl">
                {conf.title}
                <LuMapPin size={30} />

                <span className="sr-only">le starter dont je suis le héro</span>
              </a>
              <p>{conf.date}</p>
            </SectionTitle>
            <SectionImage
              src={conf.image}
              alt="Start UI Web"
              href="http://web.start-ui.com/"
              className="h-auto shadow-web-500/30 group-hover:shadow-web-500/40"
            />
            <SectionContent>
              <p>
                Our free and open source UI web app starter offers a quick and
                easy way to bootstrap your next project. It includes best
                practices & production ready tools to help you get started right
                away, saving you time and effort in the initial setup phase.
              </p>
              Animé par :
              <div className="grid grid-cols-2 ">
                {conf.animepar.map((person) => (
                  <div
                    className="flex w-full items-center space-x-5 "
                    key={conf.title}
                  >
                    <Image
                      height={500}
                      width={500}
                      className="inline-block h-12 w-12 rounded-full"
                      src={person.picture}
                      alt=""
                    />
                    <div className="items-center leading-none">
                      <p>{person.name}</p>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionContent>
            {conf.video && (
              <div className="flex space-x-4">
                <a
                  target="_blank"
                  href={conf.video}
                  className="gradient-youtube inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-white shadow-sm"
                >
                  <LuYoutube /> Watch
                </a>
              </div>
            )}
          </Section>
        ))}
      </PageContainer>
    </div>
  );
};

export default Coneferences;
