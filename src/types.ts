import { ReactNode } from "react";

export type LinesContainers= {
    children: ReactNode;
    email: string;
};

export type LinkSocials = {
    social: string;
}

export type Layouts = {
    children: ReactNode;
    className?: string | null;
}

export type Buttons = {
    name: 'social' | 'email';
    email?: string;
}

export type LineLayout = {
    align: 'top' | 'bottom';
    height?: string;
}