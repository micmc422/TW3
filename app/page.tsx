import ListOfChild from '@/components/list-of-child'
import Plan from "@/components/plan"
import Intro from "./intro.mdx"
import Objectifs from "./objectifs.mdx"

export const metadata = {
    title: 'Introduction aux technologies du web',
    description: 'Dans le cadre de vos études à l’Université Champollion à Albi, ce programme de cours vous permettra de maîtriser les technologies essentielles au développement web moderne.',
}

export default async function HomePage() {
    return <section className='container min-w-0 break-words min-h-[calc(100vh-var(--nextra-navbar-height))] text-slate-700 dark:text-slate-200 pb-8 px-4 pt-4 md:px-12'>
        <Intro />
        <ListOfChild />
        <Objectifs />
        <Plan />
    </section>
}
