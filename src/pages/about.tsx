/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image';
import Link from 'next/link';
import clsx from 'clsx';

import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import portraitImage from '@/images/portrait.jpg';
import { Container } from '@/components/container/Container';
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/icons/SocialIcons';
import { LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKEDIN } from '@/utils/consants/social';

const SocialLink = ({
  className, href, children, icon: Icon,
}: {
    className?: string;
    href: string;
    children: ReactNode;
    // eslint-disable-next-line no-undef, no-unused-vars
    icon: (props: any) => JSX.Element;
}) => (
  <li className={clsx(className, 'flex')}>
    <Link
      href={href}
      className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
      <span className="ml-4">{children}</span>
    </Link>
  </li>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
    />
  </svg>
);

export default () => (
  <>
    <NextSeo
      title="Federico Pomponii - About"
      description="I'm a Frontend engineer, web developer, and designer. I'm currently working @ Confidence Systems as a Frontend engineer."
    />

    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Federico Pomponii. Sotware Engineer, in love with Frontend and design.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              In my whole life I've always been passionate about technology and design.
              Since the first years of my childhood I've been playing with computers.
              I remember that when I was 11 -
              maybe 12 - I started to build themes for website and forums.
              It was not a common hobby for a child of that age, but that very ugly mix of HTML and CSS made me happy.
            </p>
            <p>
              For some years before starting high school I learned how to use Photoshop and I'd fun with a scripting language: AutoIt (I remember only the name about this, was a loooong time ago:)).
              Then my love for technology grew up with a course I followed while I was in high school. I started to build web app in Rails and then when I was 17 I finally started to use React and Angular.
              During the summer before I turned 18 I decided to move to Milan and to work for Conio, one of the best startup in the world of Bitcoin.
            </p>
            <p>
              Then I decided to stop working and to start my university career. I started to study Computer Science at the University of Bologna. After two years I decided to go back to work while studying,
              it was very hard to share my time between code and university... but was the best choice of my life.
              While I'm writing this -after some years of work-  I'm almost at the end of my university career (now I'm studying for a Master Degree in Computer Science), I'm very happy about all the choices I did in the past few years.
              I've the opportunity to work with amazing people and to learn new things every day.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            <SocialLink href={LINK_INSTAGRAM} icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href={LINK_GITHUB} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href={LINK_LINKEDIN} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:federico.pomponii@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              federico.pomponii@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  </>
);
