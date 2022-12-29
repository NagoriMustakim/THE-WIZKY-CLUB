import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import '../styles/faq.css'

function MyApp({Component, pageProps}) {
    useEffect(() => {
        require('bootstrap');
        import("bootstrap/dist/js/bootstrap");

    }, [])

    return <Component {...pageProps} />
}

export default MyApp
