"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function colorsByPath(path) {
    if (path?.startsWith("/git")) return [214, 50]
    if (path?.startsWith("/NPM")) return [0, 59]
    if (path?.startsWith("/docker")) return [194, 90]
    if (path?.startsWith("/node.js")) return [139, 45]
    if (path?.startsWith("/mongoDB")) return [99, 47]
    if (path?.startsWith("/react")) return [189, 100]
    return [212, 100] //valeurs par défaut dans theme.config.tsx
}


export default function MyApp({ children }) {
    const pathname = usePathname()
    useEffect(() => {
        if (typeof document === 'undefined') return;
        const [dynHue, dynSat] = colorsByPath(pathname);
        document.documentElement.style.setProperty("--nextra-primary-hue", dynHue.toString());
        document.documentElement.style.setProperty("--nextra-primary-saturation", dynSat.toString());
    }, [pathname])
    return <>
        {children}
    </>
}