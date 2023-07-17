import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FixedSidebar />
      <PageContainer>
        <h2 className="text-2xl font-bold" style={{ height: 4000 }}>
          Content
        </h2>
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
          <div className="relative flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center [text-wrap:balance]">
            <Link href="/">
              <Logo className="w-52" />
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
          </div>

          <div className="flex items-center justify-center pb-4 lg:pb-6">
            <p className="flex items-baseline gap-x-1 text-white/50">
              From the{' '}
              <Link href="#" className="text-white/80">
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
    <div className="relative z-10 flex flex-1 flex-col lg:pl-[36rem]">
      <div className="relative overflow-hidden">
        <Image
          src="/sticker.png"
          alt="In Open Source We Trust"
          width={200}
          height={200}
          sizes="200px"
          className="absolute -bottom-8 -left-8 z-20 w-[200px] rotate-12 transition-transform hover:-translate-y-4 hover:translate-x-4 sm:max-w-[36vh]"
        />
        {children}
      </div>
    </div>
  );
}
