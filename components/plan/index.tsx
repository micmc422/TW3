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
        <Steps className='[&:not(:first-child)]:_mt-3 [&:first-child]:_text-2xl'>
            {menu?.map((item, i) => (i !== 0 && <MenuItem key={i} {...item} isRoot />))}
        </Steps>
    );
}
function MenuItem({ title, route, children, isRoot }: { title: string, route: string, children?: Item[], isRoot?: boolean }) {
    const Tag = isRoot ? 'h3' : 'span';
    if (children?.length > 0) {
        return <>
            <Tag><Link href={route || "#"} className={['_flex _items-center '].join(' ')}><strong>{title}</strong></Link></Tag>
            <ol className='[&:not(:first-child)]:_mt-1 [&:first-child]:_text-2xl '>
                {children.map((item, i) => (i !== 0 && <MenuItem key={i} {...item} />))}
            </ol>
        </>

    }
    if (!title) return
    return <Tag><Link href={route || "#"} className={['_flex _items-center _gap-1', "_transition-colors _text-gray-500 hover:_text-gray-900 dark:_text-neutral-400 dark:hover:_text-gray-50 contrast-more:_text-gray-900 contrast-more:dark:_text-gray-50"].join(' ')}>{title}</Link></Tag>
}