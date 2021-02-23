import { ReactNode } from "react";

export type LinesLayouts = {
    children: ReactNode;
};

export type LinkSocials = {
    social: string;
}

export type Layouts = {
    children: ReactNode;
    pageTitle?: string;
    pageDescription?: string;
    contentClass?: string | null;
}