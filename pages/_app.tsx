import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export function colorsByPath(path) {
    if (path?.startsWith("/git")) return [214, 50]
    if (path?.startsWith("/NPM")) return [0, 59]
    if (path?.startsWith("/docker")) return [194, 90]
    if (path?.startsWith("/node.js")) return [139, 45]
    if (path?.startsWith("/mongoDB")) return [99, 47]
    if (path?.startsWith("/react")) return [189, 100]
    return [212, 100] //valeurs par défaut dans theme.config.tsx
}

export default function MyApp({ Component,pageProps }) {
    const { asPath } = useRouter()
    const [hue, setHue] = useState(212);
    const [saturation, setSaturation] = useState(100);
    useEffect(() => {
        const [dynHue, dynSat] = colorsByPath(asPath);
        setHue(dynHue);
        setSaturation(dynSat)
    }, [asPath])
    return <>
        <Head>
            <style>
                {`
        :root {
        --nextra-primary-hue: ${hue}deg!important;
        --nextra-primary-saturation: ${saturation}%!important;
        --nextra-bg-color: rgba(243,244,246,var(--tw-text-opacity));
        }

        .dark {
        --nextra-primary-hue: ${hue}deg!important;
        --nextra-primary-saturation: ${saturation}%!important;
        --nextra-bg-color: rgba(17,17,17,var(--tw-text-opacity));
        }
    `}
            </style>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
}