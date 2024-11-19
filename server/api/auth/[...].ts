import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';

const config = useRuntimeConfig();
// console.log('Runtime config:', config);

export default NuxtAuthHandler({
  secret: config.authSecret,
  providers: [
    GithubProvider.default({
      clientId: config.githubClientId,
      clientSecret: config.githubClientSecret,
    }),
  ],
});
