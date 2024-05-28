import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENTSECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENTSECRET
      }),
      GitlabProvider({
        clientId: process.env.NEXT_PUBLIC_GITLAB_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GITLAB_CLIENT_SECRET
        }) 
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};
export default NextAuth(authOptions);
