import { Logo } from '@/components/Logo';
import { LogoFigma } from '@/components/LogoFigma';
import { LogoNative } from '@/components/LogoNative';
import { LogoWeb } from '@/components/LogoWeb';
import {
  Section,
  SectionContent,
  SectionImage,
  SectionTitle,
} from '@/components/Section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  LuExternalLink,
  LuFigma,
  LuGithub,
  LuPlayCircle,
  LuMic2,
} from 'react-icons/lu';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        <Section id="web">
          <SectionTitle>
            <a href="http://web.start-ui.com/" target="_blank">
              <LogoWeb className="h-8" />
              <span className="sr-only">Start UI Web</span>
            </a>
          </SectionTitle>
          <SectionImage
            src="/web.jpg"
            alt="Start UI Web"
            href="http://web.start-ui.com/"
            className="shadow-web-500/30 group-hover:shadow-web-500/40"
          />
          <SectionContent>
            <p>
              Our free and open source UI web app starter offers a quick and
              easy way to bootstrap your next project. It includes best
              practices & production ready tools to help you get started right
              away, saving you time and effort in the initial setup phase.
            </p>
            <p>
              Comes with built-in features like 🔐 Authentication, 📱Responsive
              Layout, 🧑‍💻 User Management, 🇫🇷 Internationalization &
              Right-to-Left support, 🌚 Dark Mode, 🎛 Advanced components for
              easy development. You can try out the{' '}
              <a
                href="https://demo.start-ui.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                demo app
              </a>
              .
            </p>
            <p>
              Ready to use with{' '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
              ,{' '}
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              ,{' '}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextJS
              </a>
              ,{' '}
              <a
                href="https://chakra-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chakra UI
              </a>
              ,{' '}
              <a
                href="https://trpc.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tRPC
              </a>
              ,{' '}
              <a
                href="https://www.prisma.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
              ,{' '}
              <a
                href="https://tanstack.com/query/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                TanStack Query
              </a>
              ,{' '}
              <a
                href="https://storybook.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storybook
              </a>
              ,{' '}
              <a
                href="https://playwright.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Playwright
              </a>
              ,{' '}
              <a
                href="https://react-hook-form.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Hook Form
              </a>
              ,{' '}
              <a
                href="https://react.i18next.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React i18next
              </a>
              ,{' '}
              <a
                href="https://react.email/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Email
              </a>
              , and more.
            </p>
          </SectionContent>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="http://web.start-ui.com/"
              className="gradient-web inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
            >
              <LuGithub /> Get on GitHub
            </a>
            <a
              target="_blank"
              href="http://demo.start-ui.com/"
              className="inline-flex w-fit items-center gap-x-1.5 rounded-md bg-black px-2.5 py-1.5 font-medium text-white shadow-[0_0_60px] shadow-web-500/40 transition hover:shadow-web-500/60"
            >
              <LuPlayCircle /> Demo
            </a>
          </div>
        </Section>
        <Section id="native">
          <SectionTitle>
            <a target="_blank" href="http://native.start-ui.com/">
              <LogoNative className="h-8" />
              <span className="sr-only">Start UI Native</span>
            </a>
          </SectionTitle>
          <SectionImage
            src="/native.jpg"
            alt="Start UI Web"
            href="http://web.start-ui.com/"
            className="shadow-native-500/30 group-hover:shadow-native-500/40"
          />
          <SectionContent>
            <p>
              Our free and open source UI native app starter offers a quick and
              easy way to bootstrap your next mobile application. It includes
              best practices & production ready tools to help you get started
              right away, saving you time and effort in the initial setup phase.
            </p>
            <p>
              Comes with built-in features like 🔐 Authentication, 🌚 Dark Mode,
              🛠️ Tooling to easily deploy to application stores.
            </p>
            <p>
              Ready to use with{' '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
              ,{' '}
              <a
                href="https://expo.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo
              </a>
              ,{' '}
              <a
                href="https://ficus-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ficus UI
              </a>
              ,{' '}
              <a
                target="_blank"
                href="https://www.zodios.org/"
                rel="noopener noreferrer"
              >
                Zodios
              </a>
              ,{' '}
              <a
                target="_blank"
                href="https://formiz-react.com/"
                rel="noopener noreferrer"
              >
                Formiz
              </a>{' '}
              and more.
            </p>
          </SectionContent>
          <a
            target="_blank"
            href="http://native.start-ui.com/"
            className="gradient-native inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
          >
            <LuGithub /> Get on GitHub
          </a>
        </Section>
        <Section id="figma">
          <SectionTitle>
            <a target="_blank" href="http://figma.start-ui.com/">
              <LogoFigma className="h-8" />
              <span className="sr-only">Start UI Web</span>
            </a>
          </SectionTitle>
          <SectionImage
            src="/figma.jpg"
            alt="Start UI Figma"
            href="http://figma.start-ui.com/"
            className="shadow-figma-500/30 group-hover:shadow-figma-500/40"
          />
          <SectionContent>
            <p>
              Quick start designing your app in Figma with already designed &
              developed components from Start UI [web] & [native].
            </p>
            <p>
              Auto-layout, Components, Variants, Color Styles, Text, Styles,
              Prototypes and more.
            </p>
          </SectionContent>
          <a
            target="_blank"
            href="http://figma.start-ui.com/"
            className="gradient-figma inline-flex w-fit items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-medium text-black shadow-sm"
          >
            <LuFigma /> Get on Figma
          </a>
        </Section>
        <Section>
          <SectionTitle>
            <a className="text-3xl font-medium" href="/talks/past">
              Talks
            </a>
          </SectionTitle>
          <div
            className={cn(
              'relative z-10 block h-auto max-w-[1000px] rounded-xl shadow-[0_0_300px] shadow-talk-500/30 group-hover:shadow-talk-500/40   dark:bg-gray-900'
            )}
          >
            <Image
              className="rounded-xl"
              alt=""
              sizes="95vw, (min-width: 640px) 32rem, (min-width: 1024px) 45vw, (min-width: 1280px) 1000px"
              src="/talk.jpg"
              width="1000"
              height="500"
            />
          </div>
          <SectionContent>
            <p>
              <span className="font-bold">Choose your own adventure</span> is
              the name of our Start UI 🚀 presentation, where we discuss the ins
              and outs . We share our technical choices and the best practices
              we&apos;ve implemented in our web application starter, which has
              accumulated over 1200 stars. Our journey is the result of years of
              experimentation across different projects, during which we&apos;ve
              cherry-picked the most effective strategies.
            </p>
            <p>
              Follow us on social media to stay updated about our upcoming
              meetups: <br />
              <a
                href="https://twitter.com/_BearStudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/company/bearstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              ,{' '}
              <a
                href="https://www.instagram.com/_bearstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              ,{' '}
              <a
                href="https://www.facebook.com/allyouneedisbear"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{' '}
              .
            </p>
          </SectionContent>
          <div className="flex flex-col space-y-4  md:flex-row md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <a
              href="/talks/past"
              className="inline-flex w-fit  items-center gap-x-1.5 rounded-md  bg-gradient-to-r from-purple-400 to-purple-500 px-2.5 py-1.5 font-medium text-black shadow-sm md:w-fit lg:w-fit"
            >
              <LuMic2 />
              Check past talks
            </a>
          </div>
        </Section>
        <Testimonials />
      </PageContainer>
    </div>
  );
}

export function FixedSidebar() {
  return (
    <div className="relative z-20 flex min-h-[90vh] flex-1 flex-col overflow-hidden bg-gray-950 lg:fixed lg:bottom-0 lg:left-0 lg:top-0 lg:w-[36rem]">
      {/* GRADIENT */}
      <div className="gradient-text-rgb absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-2/3 opacity-60 blur-[80px] lg:left-auto lg:right-0 lg:h-[500px] lg:w-[500px] lg:translate-x-1/2 lg:blur-[100px]" />
      <div className="gradient-text-rgb absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 translate-y-2/3 opacity-40 blur-[80px] lg:left-auto lg:right-0 lg:h-[500px] lg:w-[500px] lg:translate-x-1/2 lg:blur-[100px]" />

      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <div className="relative mx-auto flex max-w-md flex-1 flex-col px-8">
          <div className="relative flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center [text-wrap:balance]">
            <Link href="/" aria-label="Go to the website root">
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
              <a href="#web" aria-label="Go to the Start UI [web] section">
                <LogoWeb className="w-52" />
              </a>
              <a
                href="#native"
                aria-label="Go to the Start UI [native] section"
              >
                <LogoNative className="w-52" />
              </a>
              <a href="#figma" aria-label="Go to the Start UI [figma] section">
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

export function PageContainer({ children }: { children: ReactNode }) {
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
        <div className="mx-auto flex max-w-3xl flex-1 flex-col gap-16 px-8 pb-[200px] pt-12 lg:pt-20 xl:gap-24">
          {children}
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <div className="group relative space-y-6">
      <h2 className="text-lg md:text-2xl">
        Improving developers and designers experiences worldwide:
      </h2>
      <div className="relative z-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-700 px-8 py-8 shadow-2xl sm:px-20 sm:py-16 lg:px-12 xl:px-20">
        <div className="absolute -inset-1 bg-gray-700/90 mix-blend-multiply" />
        <div
          className="absolute -left-80 -top-56 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1097/845] w-[68.5625rem] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          >
            <div
              className="animate-slow-rotation gradient-text-rgb absolute inset-0 aspect-[1097/845] w-[68.5625rem] transition motion-reduce:animate-none"
              style={{ transitionTimingFunction: 'ease-in-out' }}
            />
          </div>
        </div>
        <div className="relative">
          <figure className="flex flex-col space-y-4">
            <blockquote className="text-base italic text-white">
              <p>
                When we started{' '}
                <a
                  href="https://openares.net/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-bold hover:underline"
                >
                  Ares project
                </a>{' '}
                one of our main issue was to build appealing UI for our end
                users on web and Android Platforms. With Start UI figma file we
                have been able to quickly prototype our Idea, get beta testers
                feedbacks and even deploy a live version within days instead of
                weeks. I definetely believe Start UI is a game changer if you
                want to ship your software quickly with a modern UI from one of
                the best designers teams in the World.
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3 text-white">
              <a
                href="https://github.com/Billyroot"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className="inline-block h-12 w-12 rounded-full border border-gray-900"
                  width={200}
                  height={200}
                  src="https://avatars.githubusercontent.com/u/11244750?v=4"
                  alt=""
                />
              </a>
              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/Billyroot"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-base font-semibold"
                >
                  William Elong
                </a>
                <a
                  href="https://faradaylab.fr/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs"
                >
                  Faraday
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="relative z-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-700 px-8 py-8 shadow-2xl sm:px-20 sm:py-16 lg:px-12 xl:px-20">
        <div className="absolute -inset-1 bg-gray-700/90 mix-blend-multiply" />
        <div
          className="absolute -left-10 -top-56 rotate-180 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1097/845] w-[68.5625rem] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          >
            <div
              className="animate-slower-rotation gradient-text-rgb absolute inset-0 aspect-[1097/845] w-[68.5625rem] transition motion-reduce:animate-none"
              style={{ transitionTimingFunction: 'ease-in-out' }}
            />
          </div>
        </div>
        <div className="relative">
          <figure className="flex flex-col space-y-4">
            <blockquote className="text-base italic text-white">
              <p>
                We used &quot;Start UI&quot; to bootstrap a React project
                quickly rather than going through the process of setting up the
                frontend stack (UI, API client, Tests, Design system, and so
                on). It is a good boilerplate for fast setup. It is opinionated
                but knowing that the people in charge of this project do a great
                job at testing/validating libraries, we were really confident.
                Another important thing about &quot;Start UI&quot; is that it
                doesn&apos;t lock you up as you can remove everything you
                don&apos;t need and change which library you want for another. I
                will use it again for future projects for sure.
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3 text-white">
              <a
                href="https://github.com/cdue"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className="inline-block h-12 w-12 rounded-full border border-gray-900"
                  width={200}
                  height={200}
                  src="https://avatars.githubusercontent.com/u/7940852?s=64&v=4"
                  alt=""
                />
              </a>
              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/cdue"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-base font-semibold"
                >
                  Cédric Dué
                </a>
                <a
                  className="text-xs"
                  href="https://www.ysely.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Ysely
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <a
          href="https://github.com/BearStudio/start-ui-web/discussions/399"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center p-2 text-sm opacity-60 transition hover:opacity-100"
        >
          <span>Share your testimonial on GitHub</span>
          <LuExternalLink className="ml-1" />
        </a>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-50">
        <div
          className="animate-slow-rotation gradient-text-rgb aspect-[1097/845] w-[68.5625rem] origin-center rounded-full opacity-30 blur-[200px] transition group-hover:opacity-50 lg:scale-[0.5]"
          style={{
            transitionTimingFunction: 'ease-in-out',
          }}
        />
      </div>
    </div>
  );
};
