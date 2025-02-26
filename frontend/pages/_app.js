import App from "next/app";
import Head from "next/head";
import "../assets/css/style.scss";
import React, { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GTM from "../components/gtm"



// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <GTM/>
      <Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWR4KXG2"height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon)}
          type="image/png"
        />
        <link
          rel="icon"
          type="image/png"
          href={getStrapiMedia(global.favicon)}
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href={getStrapiMedia(global.favicon)} />
        <script src="https://player.vimeo.com/api/player.js"></script>
        {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />*/}
        {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />*/}
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
      <ToastContainer />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So projects, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI(`/global`);
  //`/global?_locale=${ctx.router.locale}`
  // Pass the data to our page via props

  return { ...appProps, pageProps: { global } };
};

export default MyApp;
