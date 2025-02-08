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
    return (
        <Steps className='[&:not(:first-child)]:mt-3 [&:first-child]:text-2xl'>
            {menu?.map((item, i) => (i !== 0 && <MenuItem key={i} {...item} isRoot />))}
        </Steps>
    );
}
function MenuItem({ title, route, children, isRoot }: { title: string, route: string, children?: Item[], isRoot?: boolean }) {
    const Tag = isRoot ? 'h3' : 'li';
    if(title.toLowerCase() ==="ressources") return
    if (children?.length > 0) {
        return <>
            <Tag><Link href={route || "#"} className={['flex items-center '].join(' ')}><strong>{title}</strong></Link></Tag>
            <ol className='[&:not(:first-child)]:mt-1 [&:first-child]:text-2xl ml-1'>
                {children.map((item, i) => (i !== 0 && <MenuItem key={i} {...item} />))}
            </ol>
        </>

    }
    if (!title) return
    return <Tag><Link href={route || "#"} className={['flex items-center gap-1', "transition-colors text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50"].join(' ')}>{title}</Link></Tag>
}