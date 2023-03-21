import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps, router }: AppProps) {
  NProgress.configure({
    showSpinner: false,
  });
  useEffect(() => {
    const start = () => NProgress.start();
    const stop = () => NProgress.done();

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
