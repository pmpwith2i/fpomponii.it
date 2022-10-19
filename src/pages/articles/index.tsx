import { Container } from '@/components/container/Container';
import { formatDate } from '@/lib/formatDate';
import { getAllArticles } from '@/lib/getAllArticles';
import { TEXT_PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '@/utils/consants/typo';
import { Article } from '@/utils/types/article';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}

export default ({ articles }: {articles: Article[]}) => (
  <Container>
    <NextSeo
      title="Articles - Federico Pomponii"
      description="A collection of articles I've written about software engineering, web development, and design."
    />
    <div className="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg lg:max-w-7xl">
        <div>
          <h2 className={clsx('text-4xl font-bold tracking-tight sm:text-4xl', TEXT_PRIMARY_COLOR)}>Press</h2>
          <div className={clsx('mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5', TEXT_SECONDARY_COLOR)}>
            <p className="text-xl text-gray-500">I've always been afraid about writing something, now I started, hope you'll enjoy!</p>
          </div>
        </div>
        <div className="mt-6 pt-12 space-y-20 lg:w-8/12">
          {articles.map((article) => (
            <div key={article.title} className="border-l rounded-sm dark:border-zinc-700 border-zinc-300 ">
              <div className="rounded p-4 hover:bg-zinc-50 hover:dark:bg-zinc-800">

                <time
                  dateTime={article.date}
                  className={clsx('whitespace-nowrap', TEXT_SECONDARY_COLOR)}
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="">{formatDate(article.date)}</span>
                </time>
                <a href={`/articles/${article.slug}`} className="mt-2 block">
                  <p className={clsx('text-xl font-semibold', TEXT_PRIMARY_COLOR)}>{article.title}</p>
                  <p className={clsx('mt-3 text-base', TEXT_SECONDARY_COLOR)}>{article.description}</p>
                </a>
                <div className="mt-3">
                  <a href={`/articles/${article.slug}`} className="text-base font-semibold hover:underline text-blue-500 hover:dark:text-blue-400 hover:text-blue-700">
                    Read this article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>

);
