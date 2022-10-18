const skills = [
  {
    section: 'Frontend',
    skills: [
      'React, Redux, Remix, Angular, Storybook',
      'WebPack, ESBuild, Next.JS',
      'TypeScript, JavaScript',
      'HTML, CSS, Sass, Tailwind, Material UI',
      'Photoshop, Figma',
      'GraphQL, Apollo',
    ],
  },
  {
    section: 'Backend',
    skills: [
      'Node.JS, Fastify, Express, Nest.JS',
      'Mocha, Jest',
      'MongoDB, MySQL, PostgreSQL, Redis',
      'Docker, AWS',
    ],
  },
  {
    section: 'Workflow',
    skills: [
      'Git, GitHub, GitLab, BitBucket',
      'Jira, Confluence, Trello',
      'Agile, Scrum, Kanban',
      'CI/CD, Jenkins, CircleCI',
    ],
  },
];

export const Skills = () => (
  <div>
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      My Skills and tools
    </h1>
    <h4 className="text-xs text-zinc-600 dark:text-zinc-300">
      My skills and what I do.
    </h4>

    {skills.map((item) => (
      <div>

        <h3 className="text-xl font-bold mt-8 text-zing-600 dark:text-zinc-300">
          {item.section}
        </h3>

        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          {item.skills.map((skill) => (
            <span>
              {skill}
              <br />
            </span>
          ))}
        </div>
      </div>
    ))}

  </div>
);
