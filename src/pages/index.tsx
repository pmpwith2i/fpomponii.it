import { Container } from '@/components/container/Container';
import {
  InstagramIcon, GitHubIcon, LinkedInIcon,
} from '@/components/icons/SocialIcons';
import { Skills } from '@/components/skills/Skills';
import { Resume } from '@/components/resume/Resume';
import { Education } from '@/components/formation/Formation';
import { SocialLink } from '@/components/icons/SocialLink';
import { LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKEDIN } from '@/utils/consants/social';
import { NextSeo } from 'next-seo';
import clsx from 'clsx';
import { TEXT_PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '@/utils/consants/typo';

export default (): any => (
  <div>
    <NextSeo
      title="Federico Pomponii - Frontend Engineer, Web Developer, and Designer"
      description="I'm a Frontend Engineer, web developer, and designer. I'm currently working @ Confidence Systems as a Frontend engineer."
    />

    <Container className="mt-9">

      <div className="max-w-2xl">
        <h2 className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:underline">
          <a href="mailto:federico.pomponii@gmail.com ">federico.pomponii@gmail.com (Mail Me!)</a>
        </h2>
        <h1 className={clsx('text-4xl font-bold tracking-tight sm:text-5xl', TEXT_PRIMARY_COLOR)}>
          Frontend Engineer @ Confidence Systems - Palo Alto, CA
        </h1>
        <p className={clsx('mt-6 text-base text-zinc-600 dark:text-zinc-400', TEXT_SECONDARY_COLOR)}>
          I’m Lorenzo von matterhorn, a Frontend engineer and web designer based in Italy.

          I’m currently working at Confidence Systems, a Palo Alto-based startup that is building an innovative system for allowing customers to organise flows and datas.
          I’m working on the frontend of the company’s web app,
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
        <div className="flex flex-col gap-16">

          {/* {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))} */}
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24" />
      </div>
    </Container>
  </div>
);
