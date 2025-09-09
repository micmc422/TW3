# Copilot Instructions for TW3 Codebase

## Architecture & Structure
- **Monorepo pédagogique** : Chaque dossier dans `app/` correspond à un module de cours (ex : `docker/`, `node.js/`, `git/`, `NPM/`, etc.), chacun avec ses propres sous-sections et fichiers `.mdx`.
- **Composants réutilisables** : Les composants React personnalisés sont dans `components/` (ex : quiz, UI, icônes). Utilisez-les pour enrichir les contenus MDX.
- **Librairie utilitaire** : Fonctions utilitaires et hooks dans `lib/`.
- **Configuration Next.js** : Fichiers racine `next.config.mjs`, `tsconfig.json`, `package.json`.

## Conventions & Patterns
- **MDX enrichi** :
  - Titres, listes et concepts doivent être enrichis d’emojis pour la pédagogie.
  - Tous les blocs de code doivent avoir l’option `copy` (ex : ```bash copy).
  - Structurez les contenus pour la clarté et la progression pédagogique.
- **Organisation des modules** :
  - Chaque module suit une structure similaire : introduction, plan, fondamentaux, exercices, quizz, ressources, TLDR.
  - Les sous-dossiers thématiques sont encouragés pour la granularité.
- **Composants React** :
  - Préférez l’import de composants depuis `components/` pour les quiz, infobox, etc.
  - Les styles sont dans `components/styles.module.scss`.

## Workflows & Développement
- **Installation** :
  - Utilisez `pnpm i` pour installer les dépendances.
- **Développement local** :
  - Lancez le serveur avec `pnpm run dev`.
- **Build** :
  - Utilisez `pnpm run build` pour la production.
- **Ajout de contenu** :
  - Ajoutez de nouveaux modules dans `app/` en respectant la structure existante.
  - Pour de nouveaux composants, placez-les dans `components/` et documentez leur usage.

## Intégrations & Dépendances
- **Next.js** : Framework principal pour le rendu et le routage.
- **MDX** : Pour la documentation interactive et les contenus pédagogiques.
- **React** : Pour les composants dynamiques (quiz, UI, etc.).
- **PostCSS, SCSS** : Pour la gestion des styles.
- **Autres outils** : ESLint, Prettier, Docker (pour certains modules), MongoDB, GraphQL, etc.

## Exemples de patterns spécifiques
- Pour un quiz interactif, utilisez le composant `components/quiz/`.
- Pour une infobox ou une alerte, préférez un composant dédié plutôt qu’un simple bloc Markdown.
- Pour les ressources, centralisez les liens dans le sous-dossier `ressources/` de chaque module.

## Références clés
- Voir `README.md` pour la vision pédagogique globale et la liste des modules.
- Consultez les fichiers d’exemple dans chaque module pour les conventions d’écriture.

---

Merci de respecter ces conventions pour garantir la cohérence et la qualité pédagogique du codebase.
