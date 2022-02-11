import { DefaultSession } from 'next-auth';
/** Example on how to extend the built-in session types */
declare module 'next-auth' {
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    user: {
      email: string;
    } & DefaultSession['user'];
  }
}
