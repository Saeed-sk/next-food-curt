import '@/styles/globals.css';
import '@/styles/globals.scss';

import {ProductContextProvider} from "@/store/prodctStore";
import {AuthContextProvider} from "@/store/authStore";

export default function App({Component, pageProps}) {
    return (
        <>
            <AuthContextProvider>
                <ProductContextProvider>
                    <Component {...pageProps} />
                </ProductContextProvider>
            </AuthContextProvider>
        </>
    )
}
