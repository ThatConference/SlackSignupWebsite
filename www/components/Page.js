import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SentryBoundry from '../components/SentryBoundry';
import GlobalStyle from '../styles/globalStyle';
import baseTheme from '../styles/baseTheme';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const StyledPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  background: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.fonts.dark};
`;

const CorePage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
  background-color: #ffffff;
`;

const InnerPage = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

class Page extends Component {
  render() {
    return (
      <SentryBoundry>
        <ThemeProvider theme={baseTheme}>
          <Fragment>
            <StyledPage>
              <GlobalStyle />
              <Meta />
              <CorePage>
                <Header />
                <InnerPage>{this.props.children}</InnerPage>
                <Footer modifiers="site" />
              </CorePage>
            </StyledPage>
          </Fragment>
        </ThemeProvider>
      </SentryBoundry>
    );
  }
}

export default Page;
