import { Logo } from '@/components/Logo';
import { LogoFigma } from '@/components/LogoFigma';
import { LogoNative } from '@/components/LogoNative';
import { LogoWeb } from '@/components/LogoWeb';
import { Section } from '@/components/Section';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { LuFigma, LuGithub } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Start UI',
  description: 'Opinionated UI starters from the Bear Studio team',
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        <Section
          id="web"
          link="http://web.start-ui.com/"
          logo={<LogoWeb className="h-8" />}
          imageSrc="/web.jpg"
        >
          <p>
            Our free and open source UI web app starter offers a quick and easy
            way to bootstrap your next project. It includes best practices &
            production ready tools to help you get started right away, saving
            you time and effort in the initial setup phase.
          </p>
          <p>
            Comes with built-in features like 🔐 Authentication, 📱Responsive
            Layout, 🧑‍💻 User Management, 🇫🇷 Internationalization & Right-to-Left
            support, 🌚 Dark Mode, 🎛 Advanced components for easy development.
            You can try out the{' '}
            <a
              href="https://demo.start-ui.com"
              target="_blank"
              rel="noreferrer noopener"
              className="underline"
            >
              example app
            </a>
            .
          </p>
          <p>
            Ready to use with TypeScript, NextJS, Chakra UI, TanStack Query,
            Storybook and more.
          </p>
          <div className="not-prose">
            <a
              href="http://web.start-ui.com/"
              className="gradient-web inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
            >
              <LuGithub /> Get on GitHub
            </a>
          </div>
        </Section>
        <Section
          id="native"
          link="http://native.start-ui.com/"
          logo={<LogoNative className="h-8" />}
          imageSrc="/native.jpg"
        >
          <p>
            Our free and open source UI native app starter offers a quick and
            easy way to bootstrap your next mobile application. It includes best
            practices & production ready tools to help you get started right
            away, saving you time and effort in the initial setup phase.
          </p>
          <p>
            Comes with built-in features like 🔐 Authentication, 🧑‍💻 User
            Management, 🇫🇷 Internationalization & Right-to-Left support, 🌚 Dark
            Mode, 🎛 Advanced components for easy development and 🛠️ Tools to
            easily deploy to application stores.
          </p>
          <p>
            Ready to use with TypeScript, Expo, Magnus UI, TanStack Query,
            Formiz and more.
          </p>
          <div className="not-prose">
            <a
              href="http://native.start-ui.com/"
              className="gradient-native inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
            >
              <LuGithub /> Get on GitHub
            </a>
          </div>
        </Section>
        <Section
          id="figma"
          link="http://figma.start-ui.com/"
          logo={<LogoFigma className="h-8" />}
          imageSrc="/figma.jpg"
        >
          <p>
            Quick start designing your app in Figma with already designed &
            developed components from Start UI [web] & [native].
          </p>
          <p>
            Auto-layout, Components, Variants, Color Styles, Text, Styles,
            Prototypes and more.
          </p>
          <div className="not-prose">
            <a
              href="http://figma.start-ui.com/"
              className="gradient-figma inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
            >
              <LuFigma /> Get on Figma
            </a>
          </div>
        </Section>
      </PageContainer>
    </div>
  );
}

function FixedSidebar() {
  return (
    <div className="relative z-20 flex min-h-[90vh] flex-1 flex-col overflow-hidden bg-gray-950 lg:fixed lg:bottom-0 lg:left-0 lg:top-0 lg:w-[36rem]">
      {/* GRADIENT */}
      <div className="gradient-text-rgb absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-2/3 opacity-60 blur-[80px] lg:left-auto lg:right-0 lg:h-[500px] lg:w-[500px] lg:translate-x-1/2 lg:blur-[100px]" />
      <div className="gradient-text-rgb absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 translate-y-2/3 opacity-40 blur-[80px] lg:left-auto lg:right-0 lg:h-[500px] lg:w-[500px] lg:translate-x-1/2 lg:blur-[100px]" />

      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
        <div className="relative mx-auto flex max-w-md flex-1 flex-col px-8">
          <div className="relative flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center [text-wrap:balance]">
            <Link href="/">
              <Logo className="h-12" />
            </Link>
            <div className="flex flex-col gap-2">
              <h1 className="gradient-text-rgb bg-clip-text text-3xl font-bold leading-tight text-transparent">
                Opinionated UI starters
              </h1>
              <p className="text-lg text-white/80">
                For web, mobile and design, which lets you easily bootstrap new
                app UI projects
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="#web">
                <LogoWeb className="w-52" />
              </a>
              <a href="#native">
                <LogoNative className="w-52" />
              </a>
              <a href="#figma">
                <LogoFigma className="w-52" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center pb-4 lg:pb-6">
            <p className="flex items-baseline gap-x-1 text-white/50">
              From the{' '}
              <a href="https://bearstudio.fr" className="text-white/80">
                BearStudio Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex flex-1 flex-col lg:pl-[36rem]">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <Image
          src="/sticker.png"
          alt="In Open Source We Trust"
          width={200}
          height={200}
          sizes="200px"
          className="absolute -bottom-8 -left-8 z-20 w-[200px] rotate-12 transition-transform hover:-translate-y-4 hover:translate-x-4 sm:max-w-[36vh]"
        />
        <div className="mx-auto flex max-w-3xl flex-1 flex-col gap-16 px-8 pb-[200px] pt-12 lg:pt-20">
          {children}
        </div>
      </div>
    </div>
  );
}
