import Head from "next/head";
import { Layouts } from "@types";

const data = {
  title: "José Luis Silva 🔥 Development lover ❤",
  desciption:
    "I am a front-end and back-end software developer, fond of javascript, python, go and rust",
  url: "https://jeylso.dev",
};

export default function Layout({ children, className }: Layouts) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{data.title}</title>
        <link rel="canonical" href={`${data.url}/`} />
        <meta name="robots" content="index, nofollow" />
        <meta name="description" content={data.desciption} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeylso" />
        <meta name="twitter:creator" content="@jeylso" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.title} />
        <meta property="og:url" content={`${data.url}/`} />
        <meta property="og:description" content={data.desciption} />
        <meta property="og:image" content={`${data.url}/portada.jpg`} />
      </Head>
      <section className={className}>{children}</section>
    </>
  );
}
