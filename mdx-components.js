import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { GlossaryTerm } from './components/GlossaryTerm'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
    return {
        ...docsComponents,
        ...components,
        Term: GlossaryTerm
    }
}