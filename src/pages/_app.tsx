import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Layout key={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
