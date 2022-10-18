import Link from 'next/link';

// eslint-disable-next-line no-unused-vars, no-undef
export const SocialLink = ({ icon: Icon, href }: { icon: (props:any) => JSX.Element; href: string }) => (
  <Link className="group -m-1 p-1" href={href}>
    <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
  </Link>
);
