import App, { Container } from 'next/app';
import React from 'react';
import * as Sentry from '@sentry/browser';

import Page from '../components/Page';

Sentry.init({
  dsn: process.env.sentryDsn
});

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
