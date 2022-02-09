import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1> Spotify testing </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
