import React, { FC } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import "@/styles/_reset.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Football Fans</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?&family=Rubik:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:ital,wght@0,400;0,500;0,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
