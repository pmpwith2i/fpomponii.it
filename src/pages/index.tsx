import { Container } from '@/components/container/Container';
import {
  InstagramIcon, GitHubIcon, LinkedInIcon,
} from '@/components/icons/SocialIcons';
import Head from 'next/head';
import { Skills } from '@/components/skills/Skills';
import { Resume } from '@/components/resume/Resume';
import { Education } from '@/components/formation/Formation';
import { SocialLink } from '@/components/icons/SocialLink';
import { LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKEDIN } from '@/utils/consants/social';

export default () => (
  <div>
    <Head>
      <title>
        Federico Pomponii - Software Engineer, Web Developer, and Designer
      </title>
    </Head>
    <Container className="mt-9">

      <div className="max-w-2xl">
        <h2 className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:underline">
          <a href="mailto:federico.pomponii@gmail.com ">federico.pomponii@gmail.com (Mail Me!)</a>
        </h2>
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
            href={LINK_INSTAGRAM}
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href={LINK_GITHUB}
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href={LINK_LINKEDIN}
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
    {/* <Photos /> */}
    <Container />
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto  grid-rows-1 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-3">
        <div className="col-span-2">

          <Skills />
        </div>
        <div>
          <Resume />
          <div className="mt-8">
            <Education />
          </div>
        </div>
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
