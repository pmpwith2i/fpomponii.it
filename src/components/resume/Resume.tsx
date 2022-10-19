import logoEmiliaRomagna from '@/images/logos/emilia_romagna.svg';
import logoSky from '@/images/logos/sky.png';
import logoConio from '@/images/logos/conio.webp';
import logoConfidence from '@/images/logos/confidence.png';
import logoCogita from '@/images/logos/cogita.svg';

import Image from 'next/image';

interface Experience {
    company: string;
    title: string;
    // eslint-disable-next-line no-undef
    logo: string;
    start: string;
    end: string;
    where: string;
}
export const Resume = () => {
  const resume: Experience[] = [
    {
      company: './Cogita',
      where: 'Italy',
      title: 'Co-Founder',
      logo: logoCogita,
      start: '2022',
      end: 'Present',
    },
    {
      company: 'Confidence Systems',
      where: 'Palo Alto, CA',
      title: 'Front End Engineer',
      logo: logoConfidence,
      start: '2022',
      end: 'Present',
    },
    {
      company: 'Sky Italia',
      title: 'Full Stack Developer',
      where: 'Milan, Italy',
      logo: logoSky,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Emilia-Romagna Region (Public Administration)',
      title: 'Frontend Developer',
      where: 'Bologna, Italy',
      logo: logoEmiliaRomagna,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Conio',
      title: 'Frontend Developer',
      where: 'Milan, Italy',
      logo: logoConio,
      start: '2017',
      end: '2018',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {/* <BriefcaseIcon className="h-6 w-6 flex-none" /> */}
        <span className="ml-3 border-b border-zinc-900 dark:border-zinc-100">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <li key={`${role.title}_${role.company}`} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md bg-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt={role.title} className="h-7 w-7 rounded-full p-2" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs w-full text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs mr-auto text-zinc-500 dark:text-zinc-400">
                {role.where }
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${
                  role.end
                }`}
              >
                <time dateTime={role.start}>
                  {role.start}
                </time>
                {' '}
                <span aria-hidden="true">—</span>
                {' '}
                <time dateTime={role.end}>
                  {role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition grou
        p-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-ac
        tive:stroke-zinc-50" />
      </Button> */}
    </div>
  );
};
