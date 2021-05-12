import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <title>Marcelo Michels</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
