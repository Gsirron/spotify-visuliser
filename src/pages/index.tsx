import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />
        <main>
          <section className='bg-white'>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <h1> Spotify testing </h1>
              singed in as {session?.token?.email} <br />
              <Button variant='primary' onClick={() => signOut()}>
                Sign out
              </Button>
            </div>
          </section>
        </main>
      </div>
    );
  }
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1> Spotify testing </h1>
            Not Signed in
            <Button variant='primary' onClick={() => signIn()}>
              Sign in
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
