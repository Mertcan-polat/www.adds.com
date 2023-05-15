import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import ReactModal from "react-modal";
import { appWithTranslation } from "next-i18next";

ReactModal.setAppElement("#__next");

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
