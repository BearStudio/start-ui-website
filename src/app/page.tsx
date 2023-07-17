import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <>
      <FixedSidebar />
      <PageContainer>
        <h2 className="text-2xl font-bold">Content</h2>
      </PageContainer>
    </>
  );
}

function FixedSidebar() {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0 ">
      <div className="relative flex w-full bg-gray-950 lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className=" flex flex-col items-center gap-2 pb-16 pt-20 text-center [text-wrap:balance] sm:pb-20 sm:pt-32 lg:py-20">
            <Link href="/">
              <Logo className="w-52" />
            </Link>
            <div className="flex flex-col">
              <h1 className="gradient-text-rgb mt-4 bg-clip-text text-3xl/none font-bold text-transparent">
                Opinionated UI starters
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                For web, mobile and design, which lets you easily bootstrap new
                app UI projects
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-center pb-4 lg:pb-6">
            <p className="flex items-baseline gap-x-1 text-gray-500">
              From the{' '}
              <Link href="#" className="text-gray-300">
                BearStudio Team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex-auto">
      <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div
              className={cn(
                'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto'
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
