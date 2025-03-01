import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { store } from '../src/redux/store';
import Head from 'next/head';
import '../src/styles/_reset.scss';
import '../src/styles/fonts.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Football Fans</title>
        <link rel="shortcut icon" href="/svg/x_logo.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
