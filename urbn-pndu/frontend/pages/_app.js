import nProgress from "nprogress";
import Page from "../components/Page";
import Router from "next/router";

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

// TODO: Swap with my own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

export default function MyApp({ Component, pageProps }) {
    return <Page>
        <Component {...pageProps} />
    </Page>
}