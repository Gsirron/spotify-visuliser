import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,streaming,user-library-read,user-library-modify,user-read-playback-state,user-modify-playback-state',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // token.accessToken = account.access_token;
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session(session, token, user) {
      session.user = user;
      // session.accessToken = token.accessToken;
      return session;
    },
  },
});
