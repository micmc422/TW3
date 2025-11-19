# Copilot Instructions

## 🎯 Objectif
Ces instructions définissent les conventions de rédaction pédagogique et d’implémentation (`MDX` + composants React) pour garantir une expérience homogène, accessible et engageante dans tout le parcours.

## 🧩 Conventions & Patterns
### ✨ MDX enrichi
- Toujours enrichir titres, listes principales et concepts avec des emojis cohérents (voir palette plus bas).
- Utiliser des sous-titres hiérarchiques progressifs : `#`, `##`, `###` pour segmenter l’apprentissage (une idée par section).
- Tous les blocs de code doivent avoir l’option `copy` et un langage explicite :
  ```bash copy title="Installation Docker"
  docker --version
  ```
- Préférer des phrases courtes, actives, et un ton pédagogique direct.
- Éviter les paragraphes > 6 lignes : scinder avec listes, infobox ou quiz intermédiaire.

### 🏗️ Structure standard des modules
Ordre recommandé des sections dans chaque `page.mdx` de module principal :
1. 📘 Introduction
2. 🧭 Plan (vision structurée du module)
3. 🧠 Fondamentaux (concepts de base)
4. 🛠️ Exercices (pratique guidée) / ou `exercices/` dédié
5. 🧪 Quizz (validation immédiate)
6. 📚 Ressources (liens externes fiables)
7. ⚡ TLDR (synthèse actionnable)

Sous-dossiers thématiques : granularité fine (ex : `installation/`, `optimisations/`, `securisation/`). Utiliser `kebab-case` pour les dossiers.

### 🗂️ Nommage & Fichiers
- Fichiers de page : `page.mdx` dans un dossier de module racine.
- Plan détaillé séparé : `plan.mdx` si la structure est complexe.
- Métadonnées : `_meta.ts` ou `_meta.js` pour navigation/ordre (tenir cohérent entre modules).
- Éviter les espaces, accents et majuscules dans les chemins (compatibilité CI/CD & import).

### ⚛️ Composants React pédagogiques
- Importer exclusivement depuis `components/` pour uniformiser style et maintenance.
- Quiz : utiliser le composant standard (`Quizz-champollion.tsx`) ou ceux dans `components/quiz/`.
- Infobox / alertes : créer/consommer un composant `<Infobox type="info" />` (à étendre si besoin : `info`, `warn`, `tip`, `danger`).
- Styles globaux pédagogiques centralisés : `components/styles.module.scss`. Ne pas dupliquer des SCSS locaux pour un usage générique.
- Accessibilité :
  - Fournir `aria-label` sur boutons interactifs de quiz.
  - Donner des `alt` descriptifs sur toutes les images dans `public/images`.
  - Ne pas véhiculer l’information uniquement par la couleur.

### 🧪 Blocs de code
- Format : ```lang copy [title="Titre court"]
- Regrouper seulement ce qui est exécutable ensemble (pas de mélange de commandes hétérogènes).
- Ajouter commentaire bref si comportement non trivial.
- Préférer variables explicites (`PORT=3000`) plutôt que placeholders vagues.
- Pour les extraits longs (> 40 lignes) : envisager découpage ou fichier dédié + lien.

### 🔗 Liens internes & Cross-module
- Toujours relier les modules entre eux quand un concept est approfondi ailleurs (`Voir aussi : /docker/introduction`).
- Utiliser des chemins absolus Next.js (`/docker/...`) pour éviter les erreurs de refactor.

### 🧬 Cohérence terminologique
- Utiliser les mêmes termes entre modules : « conteneur », « dépendances », « authentification », « schéma », « requête ».
- Ajouter glossaire dans modules complexes si nouveaux acronymes (ex : JWT, CRUD, ODM).

### ♿ Accessibilité rédactionnelle
- Éviter jargon non expliqué à la première occurrence.
- Fournir version textuelle pour toute image ou diagramme critique.
- Éviter emoji seul pour transmettre une information essentielle (toujours accompagné de texte).

### 🛡️ Qualité & Validation
- Vérifier les commandes avant publication (pas de flags obsolètes).
- Préférer exemples reproductibles (éviter : « sur certains systèmes » sans préciser conditions).
- Ajouter mini quiz (1–3 Q) après un bloc concept clé pour favoriser la rétention.

### 🧪 Palette d’emojis standard
- 📘 Intro | 🧭 Plan | 🧠 Fondamentaux | 🛠️ Exercices | 🧪 Quizz | 📚 Ressources | ⚡ TLDR | 🧱 Architecture | 🔐 Sécurité | 🚀 Performance | 🕸️ Réseau | 🗄️ Données | 🔧 Outils

### 🛠️ Tooling & lint (optionnel à étendre)
- Uniformiser formatage : Prettier + ESLint (si déjà présents dans le repo) – appliquer avant commit.
- Éviter l’ajout de dépendances pédagogiques non utilisées dans le code exécuté.

### ✅ Checklist auteur avant PR
- Sections présentes selon structure ?
- Emojis conformes à la palette ?
- Blocs de code avec `copy` + langage ?
- Liens internes testés ?
- Accessibilité (alt, aria) respectée ?
- Quiz ou exercice ajouté pour au moins 1 concept clé ?

## 📎 Références clés
- Voir `README.md` pour la vision pédagogique globale et la liste des modules.
- Explorer les exemples existants dans chaque module pour caler ton style.
- Réutiliser composants plutôt que réécrire (favorise maintenabilité & cohérence visuelle).

---

Merci de respecter ces conventions pour garantir la cohérence, l’accessibilité et l’efficacité pédagogique du codebase.
