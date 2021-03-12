import Link from "next/link";
import { LinesContainers } from "@types";
import Button from "@components/button";
import LinesLayout from "@components/lines-layout";

export default function LinesContainer({ children, email }: LinesContainers) {
  return (
    <>
      {/* lines top */}
      <div className="col-start-1 row-start-1 relative w-30 md:w-40 text-center">
        <Link href="/about">
          <a className="text-3xl font-light tracking-wider" accessKey="a">
            me
          </a>
        </Link>
        <LinesLayout align="top" />
      </div>
      <div className="col-start-2 row-start-1 relative w-full text-center">
        <Link href="/">
          <a className="text-3xl font-light tracking-wider" accessKey="w">
            website
          </a>
        </Link>
        <LinesLayout align="top" />
      </div>
      {/* email */}
      {children}
      {/* lines bottom */}
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 relative w-full mt-4 text-center -top-1 md:top-0">
        <LinesLayout align="bottom" height="h-20" />
        <Button name="email" email={email} />
      </div>
      <div className="col-start-2 row-start-3 relative w-32 md:w-42 -left-8.1 md:-left-11 mt-3 z-10 text-center md:top-1">
        <LinesLayout align="bottom" height="h-5" />
        <Button name="social" />
      </div>
    </>
  );
}
