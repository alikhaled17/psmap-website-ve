import { StyledTheme } from "@/app/core/theme/StyledTheme";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { LanguageProvider } from "@/app/core/LanguageProvider";
import "../app/globals.scss";
import NavigationBar from "@/app/components/shared/NavigationBar/NavigationBar.component";
import Footer from "@/app/components/shared/Footer/Footer.component";
import { Provider } from "react-redux";
import { store } from "@/app/store/reducers/store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={StyledTheme}>
          <LanguageProvider>
            <NavigationBar />
            <Component {...pageProps} key={router.route} />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
