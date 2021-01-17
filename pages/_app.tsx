import "styles/fonts.scss";
import "styles/global.scss";
import { AppProps } from "next/app";
import { AppHeader } from "components/AppHeader";
import { AppBanner } from "components/AppBanner";

export default function MyApp({ Component, pageProps, router }: AppProps) {
    const isIndex = router.pathname === "/";
    return (
        <>
            {isIndex && <AppBanner />}
            <AppHeader />
            <Component {...pageProps} />
        </>
    );
}
