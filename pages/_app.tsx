import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { AppType } from 'next/dist/next-server/lib/utils';
import store from '@redux/store';

const BP: AppType = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default BP;
