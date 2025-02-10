import ListOfChild from '@/components/list-of-child'
import Plan from "@/components/plan"

export const metadata = {
    title: 'Introduction aux technologies du web',
    description: 'Dans le cadre de vos études à l’Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.',
}

export default async function HomePage() {
    return <section className='container min-w-0 break-words min-h-[calc(100vh-var(--nextra-navbar-height))] text-slate-700 dark:text-slate-200 pb-8 px-4 pt-4 md:px-12'>
        <h1 className='tracking-tight text-slate-900 dark:text-slate-100 font-bold mt-2 text-4xl'>Introduction aux technologies du web</h1>
        <p className='not-first:mt-6 leading-7'>Dans le cadre de vos études à l'Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.</p>
        <ListOfChild />
        <h2 className='tracking-tight text-slate-900 dark:text-slate-100 font-semibold target:animate-[fade-in_1.5s] mt-10 border-b pb-1 text-3xl nextra-border'>Objectifs pédagogiques</h2>
        <ul className='[:is(ol,ul)_&]:my-3 not-first:mt-6 list-disc ms-6'>
            <li className='my-2'>Maîtrise pratique et théorique des technologies actuelles du web.</li>
            <li className='my-2'>Capacité à créer et gérer des projets web complets, du serveur à l'interface utilisateur.</li>
        </ul>
        <h2 className='tracking-tight text-slate-900 dark:text-slate-100 font-semibold target:animate-[fade-in_1.5s] mt-10 border-b pb-1 text-3xl nextra-border'>Plan</h2>
        <Plan />

    </section>
}
