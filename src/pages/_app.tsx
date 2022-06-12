import "../styles/globals.scss";
import "../styles/localnav.scss";
import "../styles/globalnav.scss";
import "../styles/globalfooter.scss";
import "react-slideshow-image/dist/styles.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
