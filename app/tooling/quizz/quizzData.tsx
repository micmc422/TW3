import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "Quizz Tooling en Développement Web",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur le tooling. À travers ces questions, vous allez évaluer votre compréhension des concepts fondamentaux liés au tooling.
        <br />
        Prenez quelques instants pour répondre aux questions et ainsi vérifier votre maîtrise des bases du tooling. Bonne chance !</>,
    questions: [
        // 🟢 Questions faciles (7 questions - 1/3)
        {
            question: "Qu'est-ce que le tooling en développement web ?",
            questionType: "text",
            answers: [
                "Un langage de programmation",
                "Un ensemble d'outils et d'utilitaires pour optimiser le développement web",
                "Une méthode de débogage avancée",
                "Un logiciel pour créer des sites web"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! Le tooling est un ensemble d'outils et d'utilitaires pour optimiser le développement.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Un ensemble d'outils et d'utilitaires pour optimiser le développement web'.",
            explanation: "Le tooling regroupe tous les outils (éditeurs, linters, bundlers, etc.) qui améliorent la productivité et la qualité du code.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quel est l'objectif principal du tooling ?",
            questionType: "text",
            answers: [
                "Ajouter des fonctionnalités complexes aux sites",
                "Améliorer les performances uniquement",
                "Optimiser le workflow et maintenir la qualité du code",
                "Apprendre de nouveaux langages"
            ],
            correctAnswer: [3],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Le tooling optimise le workflow tout en garantissant un code de qualité.",
            messageForIncorrectAnswer: "Incorrect. La réponse correcte est : 'Optimiser le workflow et maintenir la qualité du code'.",
            explanation: "Le tooling vise à automatiser les tâches répétitives, détecter les erreurs tôt et maintenir des standards de code cohérents.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quelle extension est utilisée pour formater automatiquement le code dans VSCode ?",
            questionType: "text",
            answers: [
                "ESLint",
                "Path Intellisense",
                "Prettier",
                "Git History"
            ],
            correctAnswer: [3],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! Prettier est une extension populaire pour formater automatiquement le code.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Prettier'.",
            explanation: "Prettier formate automatiquement le code selon des règles prédéfinies, assurant un style cohérent dans toute l'équipe.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "À quoi sert ESLint ?",
            questionType: "text",
            answers: [
                "Déboguer des applications Node.js",
                "Vérifier et appliquer des règles de style dans le code",
                "Gérer les icônes dans l'éditeur",
                "Surveiller la taille des dépendances"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! ESLint permet de vérifier et appliquer des règles de style.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Vérifier et appliquer des règles de style dans le code'.",
            explanation: "ESLint analyse le code JavaScript pour détecter les erreurs et les problèmes de style, et peut les corriger automatiquement.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet d'initialiser un projet Node.js ?",
            questionType: "text",
            answers: [
                "npm start",
                "node init",
                "npm init -y",
                "npm install"
            ],
            correctAnswer: [3],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Bien joué ! 'npm init -y' initialise un projet Node.js avec des valeurs par défaut.",
            messageForIncorrectAnswer: "Faux. La commande correcte est : 'npm init -y'.",
            explanation: "npm init -y crée un fichier package.json avec des valeurs par défaut, permettant de démarrer rapidement un projet.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Pourquoi utiliser des snippets dans un éditeur de code ?",
            questionType: "text",
            answers: [
                "Pour réduire le nombre de lignes de code",
                "Pour insérer rapidement des structures courantes de code",
                "Pour gérer les erreurs de syntaxe automatiquement",
                "Pour optimiser les performances des scripts"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! Les snippets permettent d'insérer rapidement des structures courantes.",
            messageForIncorrectAnswer: "Faux. Les snippets servent à insérer rapidement des structures courantes de code.",
            explanation: "Les snippets sont des templates réutilisables qui accélèrent l'écriture du code en fournissant des structures prédéfinies.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quelle est la fonction principale de Git ?",
            questionType: "text",
            answers: [
                "Formater automatiquement le code",
                "Gérer les versions et l'historique du code",
                "Optimiser les performances d'exécution",
                "Créer des interfaces graphiques"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Git permet de gérer les versions et l'historique du code.",
            messageForIncorrectAnswer: "Faux. La bonne réponse est : 'Gérer les versions et l'historique du code'.",
            explanation: "Git est un système de contrôle de version qui permet de suivre les modifications, collaborer et revenir à des versions antérieures du code.",
            point: 5,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (7 questions - 1/3)
        {
            question: "Quel outil permet d'analyser la taille des modules importés ?",
            questionType: "text",
            answers: [
                "SonarLint",
                "Import Cost",
                "Chrome DevTools",
                "Path Intellisense"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Import Cost analyse la taille des modules directement dans l'éditeur.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Import Cost'.",
            explanation: "Import Cost affiche la taille des imports dans VSCode, permettant d'identifier les dépendances lourdes qui impactent les performances.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Que fait l'extension Path Intellisense ?",
            questionType: "text",
            answers: [
                "Corrige automatiquement les erreurs de chemin",
                "Ajoute une autocomplétion pour les chemins de fichiers",
                "Affiche la taille des fichiers importés",
                "Met en évidence les dépendances inutilisées"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Bien joué ! Path Intellisense propose l'autocomplétion pour les chemins de fichiers.",
            messageForIncorrectAnswer: "Faux. Path Intellisense propose une autocomplétion pour les chemins de fichiers.",
            explanation: "Path Intellisense facilite l'import de fichiers en proposant l'autocomplétion des chemins relatifs et absolus.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle bibliothèque pourrait remplacer Moment.js pour réduire la taille des dépendances ?",
            questionType: "text",
            answers: [
                "Lodash",
                "Day.js",
                "Axios",
                "Chalk"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Day.js est une alternative plus légère à Moment.js.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Day.js'.",
            explanation: "Day.js offre une API similaire à Moment.js mais avec une taille beaucoup plus petite (~2KB vs ~67KB), optimisant le bundle final.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un bundler en développement web ?",
            questionType: "text",
            answers: [
                "Un outil pour créer des bases de données",
                "Un outil qui regroupe et optimise les fichiers pour la production",
                "Un framework front-end",
                "Un gestionnaire de packages"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! Un bundler regroupe et optimise les fichiers.",
            messageForIncorrectAnswer: "Incorrect. Un bundler compile et optimise les assets.",
            explanation: "Les bundlers (Webpack, Vite, Rollup) regroupent les modules JavaScript, optimisent les assets et préparent le code pour la production.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle est la différence entre un linter et un formatteur ?",
            questionType: "text",
            answers: [
                "Il n'y a pas de différence",
                "Le linter détecte les erreurs de code, le formatteur corrige le style",
                "Le linter formate le code, le formatteur détecte les erreurs",
                "Le linter est pour JavaScript, le formatteur pour CSS"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Le linter détecte les problèmes, le formatteur arrange le style.",
            messageForIncorrectAnswer: "Incorrect. Ils ont des rôles complémentaires.",
            explanation: "ESLint (linter) analyse le code pour détecter les erreurs et mauvaises pratiques. Prettier (formatteur) reformate le code selon des règles de style cohérentes.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Qu'est-ce que TypeScript apporte à JavaScript ?",
            questionType: "text",
            answers: [
                "Un typage statique et une meilleure détection d'erreurs",
                "Une exécution plus rapide",
                "Un support natif pour les navigateurs",
                "Une syntaxe simplifiée"
            ],
            correctAnswer: [1],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! TypeScript ajoute le typage statique à JavaScript.",
            messageForIncorrectAnswer: "Incorrect. TypeScript ajoute principalement du typage.",
            explanation: "TypeScript est un sur-ensemble de JavaScript qui ajoute un système de types optionnel, permettant de détecter les erreurs avant l'exécution.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Pourquoi utiliser un gestionnaire de versions comme nvm ou fnm ?",
            questionType: "text",
            answers: [
                "Pour gérer Git plus facilement",
                "Pour gérer plusieurs versions de Node.js sur une même machine",
                "Pour créer des environnements virtuels Python",
                "Pour versionner les packages NPM"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! Ces outils gèrent plusieurs versions de Node.js.",
            messageForIncorrectAnswer: "Incorrect. nvm/fnm sont pour Node.js.",
            explanation: "nvm (Node Version Manager) et fnm permettent d'installer et de basculer entre plusieurs versions de Node.js, utile quand on travaille sur plusieurs projets avec des exigences différentes.",
            point: 10,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (6 questions - 1/3)
        {
            question: "Qu'est-ce qu'un monorepo et pourquoi l'utiliser ?",
            questionType: "text",
            answers: [
                "Un dépôt Git avec une seule branche",
                "Un dépôt unique contenant plusieurs projets liés avec gestion partagée des dépendances",
                "Un outil de déploiement automatique",
                "Une base de données pour stocker le code"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Un monorepo centralise plusieurs projets.",
            messageForIncorrectAnswer: "Incorrect. Un monorepo est une approche organisationnelle.",
            explanation: "Un monorepo (utilisé avec des outils comme Turborepo, Nx, pnpm workspaces) permet de gérer plusieurs projets dans un seul dépôt, facilitant le partage de code et la gestion des dépendances.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quelle est la différence entre Webpack et Vite ?",
            questionType: "text",
            answers: [
                "Webpack est obsolète, Vite est moderne",
                "Vite utilise les ES modules natifs pour un dev server ultra-rapide, Webpack bundle tout",
                "Webpack est pour React, Vite pour Vue",
                "Il n'y a pas de différence significative"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Excellent ! Vous comprenez l'architecture des bundlers.",
            messageForIncorrectAnswer: "Pas tout à fait. L'approche diffère fondamentalement.",
            explanation: "Vite tire parti des ES modules natifs du navigateur en mode dev, ne bundlant que ce qui est nécessaire. Webpack bundle tout le code, ce qui peut être plus lent en développement mais offre plus de contrôle.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Qu'est-ce que le Tree Shaking ?",
            questionType: "text",
            answers: [
                "Une technique pour nettoyer le code Git",
                "L'élimination du code mort (non utilisé) lors du bundling",
                "Un algorithme de tri",
                "Une méthode de déploiement"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Bravo ! Le tree shaking optimise la taille du bundle.",
            messageForIncorrectAnswer: "Incorrect. C'est une technique d'optimisation.",
            explanation: "Le tree shaking analyse les imports/exports ES6 pour éliminer le code non utilisé du bundle final, réduisant significativement sa taille.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Pourquoi utiliser Husky dans un projet ?",
            questionType: "text",
            answers: [
                "Pour gérer les environnements de développement",
                "Pour exécuter des scripts automatiquement lors des commits Git (pre-commit hooks)",
                "Pour déboguer le code JavaScript",
                "Pour gérer les dépendances NPM"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Husky automatise les Git hooks.",
            messageForIncorrectAnswer: "Incorrect. Husky gère les Git hooks.",
            explanation: "Husky facilite l'utilisation des Git hooks pour automatiser des tâches (linting, tests, formatting) avant les commits, assurant la qualité du code versionné.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Qu'est-ce que l'analyse statique de code (Static Analysis) ?",
            questionType: "text",
            answers: [
                "L'exécution de tests unitaires",
                "L'analyse du code sans l'exécuter pour détecter bugs et vulnérabilités",
                "Le profilage des performances à l'exécution",
                "La compilation du code TypeScript"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Excellent ! Vous comprenez les outils de qualité.",
            messageForIncorrectAnswer: "Incorrect. L'analyse statique n'exécute pas le code.",
            explanation: "L'analyse statique (tools comme SonarQube, ESLint, TypeScript) examine le code source sans l'exécuter pour détecter les erreurs potentielles, les failles de sécurité et les mauvaises pratiques.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quelle est la différence entre CI (Continuous Integration) et CD (Continuous Deployment) ?",
            questionType: "text",
            answers: [
                "CI est pour les tests, CD pour le déploiement",
                "CI intègre automatiquement le code et le teste, CD déploie automatiquement en production",
                "CD est obsolète, on utilise seulement CI maintenant",
                "Il n'y a pas de différence"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Vous maîtrisez les concepts DevOps.",
            messageForIncorrectAnswer: "Incorrect. Ce sont deux pratiques complémentaires.",
            explanation: "CI (Continuous Integration) automatise l'intégration et les tests du code à chaque commit. CD (Continuous Deployment) va plus loin en déployant automatiquement les changements validés en production.",
            point: 15,
            difficulty: "expert"
        }
    ]
};
