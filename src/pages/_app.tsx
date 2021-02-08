import { AppProps } from "next/app";
import "@styles/tailwind.css";

export default function Jeylso({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
