import { FixedSidebar, PageContainer } from '@/app/page';
import Link from 'next/link';
import React from 'react';
import { LuArrowLeft } from 'react-icons/lu';

const FutureConferences = () => {
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
      </PageContainer>
    </div>
  );
};

export default FutureConferences;
