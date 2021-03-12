import { AppProps } from "next/app";
import { useEffect } from "react";
import "@styles/tailwind.css";

export default function JeylsoApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
    if (
      !sessionStorage.getItem("_swa") &&
      document.referrer.indexOf(location.protocol + "//" + location.host) !== 0
    ) {
      fetch(
        "https://counter.dev/track?" +
          new URLSearchParams({
            referrer: document.referrer,
            screen: screen.width + "x" + screen.height,
            user: "jeylso",
            utcoffset: "-5",
          })
      );
    }
    sessionStorage.setItem("_swa", "1");
  }, []);

  return <Component {...pageProps} />;
}
