import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import ReactModal from "react-modal";
import { appWithTranslation } from "next-i18next";
import Layout from "./component/layout";

ReactModal.setAppElement("#__next");

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
};

export default appWithTranslation(App);
