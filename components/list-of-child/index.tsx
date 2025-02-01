import { PageMapItem } from "nextra";
import { Cards } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { JSXElementConstructor, ReactElement } from "react";

interface Item {
    name?: string;
    title?: string;
    route?: string;
    icon?: ReactElement<unknown, string | JSXElementConstructor<any>>;
}
export default async function ListOfChild({ path }: { path?: string }) {
    let items = (await (getPageMap(path))) as Item[]
    items = items.filter(({ name, route, title }) => route && route !== "/").filter(({ name, route, title }) => title && title.length > 0).filter(({ name, route, title }) => name !== "ressources")

    return <Cards>
        {items?.map(({ title, route, icon }, i) => <Cards.Card key={i} href={route} title={title} icon={icon} />)}
    </Cards>

}