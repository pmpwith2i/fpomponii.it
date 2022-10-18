import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps extends Record<string, any> {
    children?: ReactNode | ReactNode[] | undefined;
    className?: string;
}

export const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>((
  { className, children, ...props }: ContainerProps,
  ref,
) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
    <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
  </div>
));

export const InnerContainer = forwardRef<HTMLDivElement, Omit<ContainerProps, 'props'>>((
  { className, children, ...props }: Omit<ContainerProps, 'props'>,
  ref,
) => (
  <div
    ref={ref}
    className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
    {...props}
  >
    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
  </div>
));

export const Container = forwardRef<HTMLDivElement, ContainerProps>((
  { children, ...props }: ContainerProps,
  ref,
) => (
  <OuterContainer ref={ref} {...props}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
));
