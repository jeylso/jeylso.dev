import { AppProps } from "next/app";
import "@styles/tailwind.css";

export default function JeylsoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
