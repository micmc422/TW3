"use client"

import Link from 'next/link';
import { useConfig } from 'nextra-theme-docs'
import { Steps } from 'nextra/components'

type Item = {
    title: string;
    route: string;
    children?: Item[];
};


export default function Plan({ rootFolder }: { rootFolder?: string }) {
    const { normalizePagesResult, ...rest } = useConfig();
    // console.log(normalizePagesResult)
    const menu = normalizePagesResult.activePath[0].children || normalizePagesResult.directories

    const mapItem = (item: any): Item | null => {
        // Ignorer les séparateurs
        if (item.type === 'separator') return null;

        // Ignorer les ressources
        if (item.route.includes("ressources")) return null;
        if (!item.route) return null;

        // Résolution du titre : title > frontMatter.title > name
        const title = item.title || item.frontMatter?.title || item.name;

        // Si pas de titre ou titre "undefined" (string), on ignore
        if (!title || title === 'undefined') return null;

        // Traitement récursif des enfants
        const children = item.children
            ? item.children.map(mapItem).filter((child: any) => child !== null)
            : undefined;

        return {
            title: String(title),
            route: item.route,
            children: children as Item[]
        };
    };

    return (
        <Steps className='not-first:mt-3 first:text-2xl'>
            {menu?.map((item, i) => {
                if (i === 0) return null;

                const filtered = mapItem(item);
                if (!filtered) return null;

                return (
                    <MenuItem
                        key={i}
                        title={filtered.title}
                        route={filtered.route}
                        children={filtered.children}
                        isRoot
                    />
                );
            })}
        </Steps>
    );
}
function MenuItem({ title, route, children, isRoot }: { title: string, route: string, children?: Item[], isRoot?: boolean }) {
    const Tag = isRoot ? 'h3' : 'li';
    
    if (!title || title === "undefined") return null;
    if (title?.toLowerCase() === "ressources") return null;
    
    if (children && children.length > 0) {
        return <>
            <Tag><Link href={route || "#"} className={['flex items-center '].join(' ')}><strong>{title}</strong></Link></Tag>
            <ol className='not-first:mt-1 first:text-2xl ml-1'>
                {children.map((item, i) => (i !== 0 && <MenuItem key={i} {...item} />))}
            </ol>
        </>

    }
    return <Tag><Link href={route || "#"} className={['flex items-center gap-1', "transition-colors text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50"].join(' ')}>{title}</Link></Tag>
}