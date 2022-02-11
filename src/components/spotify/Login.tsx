import { signIn } from 'next-auth/react';
import React from 'react';

import Button from '@/components/buttons/Button';

const Login = () => {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1> Spotify testing </h1>
          Not Signed in
          <Button variant='primary' onClick={() => signIn('spotify')}>
            Sign in
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Login;
