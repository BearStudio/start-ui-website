'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <>
      <main className="grid h-screen place-items-center bg-gray-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-gray-200">404</p>
          <h1 className="gradient-text-rgb mt-4 bg-clip-text py-2 text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-200">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="text-sm font-semibold text-white hover:text-white/80"
            >
              Go back home
            </Link>
            <a
              href="https://www.bearstudio.fr/en/contact"
              className="text-sm font-semibold text-white hover:text-white/80"
            >
              Contact us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
