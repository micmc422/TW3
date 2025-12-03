import { Cards } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { JSXElementConstructor, ReactElement } from "react";

interface PageMapItem {
    name: string;
    route?: string;
    title?: string;
    frontMatter?: {
        title?: string;
        icon?: ReactElement<unknown, string | JSXElementConstructor<any>>;
    };
    children?: PageMapItem[];
}

export default async function ListOfChild({ path }: { path?: string }) {
    const rawItems = await getPageMap(path);

    if (!Array.isArray(rawItems)) return null;

    const items = (rawItems as PageMapItem[])
        .filter((item) => {
            // Exclure les éléments sans route (ex: séparateurs) ou la racine
            if (!item.route || item.route === "/") return false;

            // Exclure les dossiers spécifiques (filtre existant)
            if (["ressources", "webpack"].includes(item.name)) return false;

            return true;
        })
        .map((item) => {
            // Résolution du titre : titre explicite > titre frontMatter > nom
            const title = item.title || item.frontMatter?.title || item.name;

            // Résolution de l'icône : frontMatter (fichier) ou index (dossier)
            let icon = item.frontMatter?.icon;
            if (!icon && item.children) {
                const indexPage = item.children.find((child) => child.name === "index");
                icon = indexPage?.frontMatter?.icon;
            }

            return {
                ...item,
                title,
                icon
            };
        })
        // Filtrer les éléments qui n'ont toujours pas de titre valide
        .filter((item) => !!item.title);

    return (
        <Cards>
            {items.map((item, i) => (
                <Cards.Card
                    key={item.route || i}
                    href={item.route!}
                    title={item.title!}
                    icon={item.icon ? <>{item.icon}</> : undefined}
                />
            ))}
        </Cards>
    );
}
