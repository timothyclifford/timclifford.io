import { ReactElement } from "react";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
