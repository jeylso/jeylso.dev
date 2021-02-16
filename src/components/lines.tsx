import Link from "next/link";
import { Fragment, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LinesLayout({ children }: Props) {
  return (
    <Fragment>
      {/* lines top */}
      <div className="col-start-1 row-start-1 relative w-30 md:w-40 text-center">
        <Link href="/about">
          <a className="text-3xl font-light tracking-wider">me</a>
        </Link>
        <div className="vl"></div>
        <div className="lines-top"></div>
      </div>
      <div className="col-start-2 row-start-1 relative w-full text-center">
        <Link href="/website" as="/" shallow={true}>
          <a className="text-3xl font-light tracking-wider">website</a>
        </Link>
        <div className="vl"></div>
        <div className="lines-top"></div>
      </div>
      {/* email */}
      {children}
      {/* lines bottom */}
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 relative w-full mt-4 text-center -top-1 md:top-0">
        <div className="lines-bottom h-20"></div>
        <div className="vl"></div>
        <Link href="/email" as="/" shallow={true}>
          <a className="text-3xl font-light tracking-wider">email</a>
        </Link>
      </div>
      <div className="col-start-2 row-start-3 relative w-32 md:w-42 -left-8.1 md:-left-11 mt-3 z-10 text-center md:top-1">
        <div className="lines-bottom h-5"></div>
        <div className="vl"></div>
        <Link href="/social">
          <a className="text-xl md:text-2xl font-light tracking-wider">
            social media
          </a>
        </Link>
      </div>
    </Fragment>
  );
}
