import { ReactNode } from 'react';

export interface TypeWithChildren {
    children?: ReactNode | ReactNode[];
}

export interface StyleProps {
    style?: { [key: string]: string | number };
    className?: string;
}
