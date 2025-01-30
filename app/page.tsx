import { PageMapItem } from 'nextra'
import { Cards } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
    title: 'Introduction aux technologies du web',
    description: 'Dans le cadre de vos études à l’Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.',
}

export default async function HomePage() {
    const pages: PageMapItem[] = await getPageMap()
    return <section className='container x:min-w-0 x:break-words x:min-h-[calc(100vh-var(--nextra-navbar-height))] x:text-slate-700 x:dark:text-slate-200 x:pb-8 x:px-4 x:pt-4 x:md:px-12'>
        <h1 className='x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl'>Introduction aux technologies du web</h1>
        <p className='x:not-first:mt-6 x:leading-7'>Dans le cadre de vos études à l'Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.</p>
        <Cards>
            {pages.map(({ name, route }: { name: string, route: string }, i) => route && route !== "/" && <Cards.Card key={i} href={route} title={name} />)}
        </Cards>
        <h2 className='x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border'>Objectifs pédagogiques</h2>
        <ul className='x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc x:ms-6'>
            <li className='x:my-2'>Maîtrise pratique et théorique des technologies actuelles du web.</li>
            <li className='x:my-2'>Capacité à créer et gérer des projets web complets, du serveur à l'interface utilisateur.</li>
        </ul>
    </section>
}
