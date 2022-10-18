import { useEffect, useRef } from 'react';

import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';

import '@/styles/tailwind.css';
import 'focus-visible';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default ({ Component, pageProps, router }) => {
  const previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};
