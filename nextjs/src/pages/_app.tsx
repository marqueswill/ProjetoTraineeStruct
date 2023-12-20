import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import type { AppProps } from "next/app";
import Providers from "@/components/Providers";
import { useRouter } from "next/router";
import NavbarRestaurant from "@/components/NavbarRestaurant";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Providers>
        {String(router.pathname) !== "/restaurant/menu/[id]" && <Navbar />}
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}
