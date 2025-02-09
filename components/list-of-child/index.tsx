import { Cards } from "nextra/components"
import { createIndexPage, getPageMap } from "nextra/page-map"
import { JSXElementConstructor, ReactElement } from "react";

interface Item {
    name?: string;
    title?: string;
    route?: string;
    frontMatter: {
        icon?: ReactElement<unknown, string | JSXElementConstructor<any>>;
    }
    children?: Item[]
}
export default async function ListOfChild({ path }: { path?: string }) {
    let items = (await (getPageMap(path))) as Item[]
    items = items.filter(({ route }) => route && route !== "/")
        .filter(({ title }) => title && title.length > 0)
        .filter(({ name }) => !["ressources", "webpack"]?.includes(name))
    console.log(items)

    return <Cards>
        {items?.map(({ title, route, frontMatter, children }, i) => {
            const icon = (children?.find(({ name }) => name === "index")?.frontMatter.icon)
            return <Cards.Card key={i} href={route} title={title} icon={<>{icon}</>} />
        })}
    </Cards>

}