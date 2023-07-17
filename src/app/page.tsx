import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <FixedSidebar />
      <div className="relative flex-auto">
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={cn(
            'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto',

          )}
        >
          <h2 className="text-4xl font-bold">Hello</h2>
        </div>
      </div>
    </div>
        </main>
      </div>
    </>
  )
}


function FixedSidebar() {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0 ">

      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))] bg-gray-950">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <div className="relative">
            <>
      <div>
        <Link href="/">
          LOGO
        </Link>
      </div>
      <h1 className="mt-14 text-4xl/tight font-bold text-white">
       Start UI
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe nam distinctio tenetur ea enim quia eligendi non velit dolorem, tempore voluptatum, architecto unde animi aliquid provident dignissimos deserunt recusandae!
      </p>

    </>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
          <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <Link href="#">
        BearStudio
      </Link>
    </p>
          </div>
        </div>
      </div>
    </div>
  )
}