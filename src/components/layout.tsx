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
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#333" />
        {/* Favicons */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/16x16.png"
        />
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
