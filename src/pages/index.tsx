import { Container } from '@/components/container/Container';
import Link from 'next/link';
import {
  TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon,
} from '@/components/icons/SocialIcons';
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars, no-undef
const SocialLink = ({ icon: Icon, href }: { icon: (props:any) => JSX.Element; href: string }) => (
  <Link className="group -m-1 p-1" href={href}>
    <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
  </Link>
);

export default () => (
  <div>
    <Head>
      <title>
        Federico Pomponii - Software Engineer, Web Developer, and Designer
      </title>
    </Head>
    <Container className="mt-9">

      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Frontend Engineer @ Confidence Systems - Palo Alto, CA
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Federico Pomponii, a software engineer and web designer based in Italy.

          I’m currently working at Confidence Systems, a Palo Alto-based startup that is building a
          new kind of insurance company. I’m working on the frontend of the company’s web app,
          which is built with React and TypeScript.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href="https://twitter.com"
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />
          <SocialLink
            href="https://instagram.com"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="https://github.com"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://linkedin.com"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
    {/* <Photos /> */}
    <Container />
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        {/* <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <Newsletter />
          <Resume />
        </div> */}
      </div>
    </Container>
  </div>
);
