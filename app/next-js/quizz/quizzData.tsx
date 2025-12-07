import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "Quizz Next.js",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur Next.js, un framework React permettant de créer des applications web performantes et optimisées.
        <br />
        À travers ces questions, vous allez explorer les concepts clés de Next.js, y compris le rendu, le routage, les API Routes et l'optimisation des performances. Bonne chance !
    </>,
    questions: [
        // 🟢 Questions faciles (7 questions - 1/3)
        {
            question: "Quel est l'avantage principal de Next.js par rapport à React seul ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Une meilleure gestion des états globaux",
                "Le rendu côté serveur (SSR) et le pré-rendu des pages",
                "L'obligation d'utiliser Redux",
                "Un support natif pour TypeScript uniquement"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Next.js permet un rendu côté serveur (SSR) et un pré-rendu des pages pour de meilleures performances.",
            messageForIncorrectAnswer: "Incorrect. Next.js apporte des fonctionnalités avancées comme le SSR et le SSG.",
            explanation: "Next.js offre le rendu côté serveur (SSR) et le Static Site Generation (SSG), améliorant ainsi les performances et le SEO.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quel dossier contient le système de routage par défaut en Next.js 13+ ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "components/",
                "pages/",
                "app/",
                "routes/"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! Le dossier `app/` introduit dans Next.js 13+ remplace `pages/` pour le nouveau système de routing.",
            messageForIncorrectAnswer: "Incorrect. En Next.js 13+, le dossier `app/` est utilisé pour le routing.",
            explanation: "Avec Next.js 13+, le routage est basé sur le dossier `app/`, qui utilise le système de fichiers pour définir les routes.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle directive permet de définir un Client Component en Next.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                `"use client";`,
                `"client-component";`,
                `"client";`,
                `"next/client";`
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! Next.js utilise la directive `'use client';` pour définir un Client Component.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est `'use client';`.",
            explanation: "En Next.js, `'use client';` doit être placé au début d'un fichier pour indiquer que c'est un Client Component.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle méthode est utilisée pour définir des métadonnées dynamiques dans une page Next.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "generateSEO",
                "useMetadata",
                "getMetadata",
                "generateMetadata"
            ],
            correctAnswer: [4],
            messageForCorrectAnswer: "Correct ! `generateMetadata` est utilisé pour définir des métadonnées dynamiques en Next.js.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est `generateMetadata`.",
            explanation: "Next.js permet de définir des métadonnées dynamiques pour chaque page via `generateMetadata`.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quel composant Next.js est utilisé pour optimiser les images ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "<Image />",
                "<OptimizedImage />",
                "<NextImg />",
                "<img />"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! Next.js utilise `<Image />` pour optimiser les images.",
            messageForIncorrectAnswer: "Incorrect. Next.js fournit `<Image />` pour gérer automatiquement l'optimisation des images.",
            explanation: "Le composant `<Image />` de Next.js optimise automatiquement le chargement et la mise en cache des images.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Comment définir un layout global en Next.js 13+ ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Créer `_layout.tsx`",
                "Créer `layout.tsx` dans `app/`",
                "Définir un `<Layout>` dans `_app.tsx`",
                "Utiliser `globalLayout.tsx`"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Next.js utilise `layout.tsx` dans `app/` pour définir un layout global.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est `layout.tsx` dans `app/`.",
            explanation: "Dans Next.js 13+, `layout.tsx` définit la structure globale des pages en utilisant le système `app/`.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle plateforme est recommandée pour déployer une application Next.js avec une intégration native ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "AWS Lambda",
                "Vercel",
                "OVH",
                "Netlify"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Vercel est la plateforme officielle pour déployer des applications Next.js.",
            messageForIncorrectAnswer: "Incorrect. La plateforme recommandée est Vercel.",
            explanation: "Vercel est la plateforme officielle de Next.js, offrant des optimisations natives pour ce framework.",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (7 questions - 1/3)
        {
            question: "Comment Next.js gère-t-il le rendu des pages pour améliorer les performances ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Rendu statique (SSG)",
                "Rendu côté serveur (SSR)",
                "Rendu client uniquement",
                "Streaming de composants"
            ],
            correctAnswer: [1, 2, 4],
            messageForCorrectAnswer: "Correct ! Next.js supporte SSG, SSR et le streaming de composants.",
            messageForIncorrectAnswer: "Incorrect. Next.js ne se limite pas au rendu client uniquement.",
            explanation: "Next.js offre plusieurs modes de rendu : SSG, SSR et le streaming pour optimiser le chargement des pages.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel hook React est souvent utilisé avec les Server Actions pour gérer les mises à jour optimistes ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "useState",
                "useEffect",
                "useOptimistic",
                "useMutation"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! `useOptimistic` permet de gérer les mises à jour optimistes avec les Server Actions.",
            messageForIncorrectAnswer: "Incorrect. Le bon hook est `useOptimistic`.",
            explanation: "Next.js propose `useOptimistic` pour améliorer l'expérience utilisateur en appliquant immédiatement les mises à jour attendues.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel fichier permet de générer automatiquement un `robots.txt` et un `sitemap.xml` dans Next.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "robots.ts et sitemap.ts",
                "metadata.ts",
                "server-config.ts",
                "seo.tsx"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! `robots.ts` et `sitemap.ts` permettent de générer ces fichiers dynamiquement.",
            messageForIncorrectAnswer: "Incorrect. Les fichiers `robots.ts` et `sitemap.ts` sont utilisés en Next.js pour la gestion SEO.",
            explanation: "Next.js permet de créer dynamiquement `robots.txt` et `sitemap.xml` avec `robots.ts` et `sitemap.ts`.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle est la caractéristique unique des Server Actions dans Next.js 14+ ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Elles permettent de récupérer des données en client-side uniquement",
                "Elles sont exécutées côté serveur sans exposer un point d'API",
                "Elles nécessitent un appel explicite via `fetch()`",
                "Elles sont limitées aux bases de données Prisma uniquement"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! Les Server Actions s'exécutent côté serveur sans exposer de route API publique.",
            messageForIncorrectAnswer: "Incorrect. Les Server Actions ne nécessitent pas d'API publique.",
            explanation: "Les Server Actions permettent d'exécuter des fonctions côté serveur directement depuis un Client Component, sans passer par une API Route.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Comment sécuriser une Server Action en Next.js ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Utiliser des middlewares côté client",
                "Valider et assainir les données d'entrée",
                "Restreindre l'accès en fonction de la session utilisateur",
                "Désactiver `use server` pour les composants clients"
            ],
            correctAnswer: [2, 3],
            messageForCorrectAnswer: "Exact ! La validation des entrées et la restriction d'accès sont essentielles pour la sécurité.",
            messageForIncorrectAnswer: "Incorrect. Les bonnes pratiques incluent la validation et la gestion des permissions.",
            explanation: "Pour sécuriser une Server Action, il est essentiel de valider les entrées et d'ajouter une vérification des permissions (ex. session utilisateur).",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Dans quel cas faut-il préférer une API Route plutôt qu'une Server Action ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Lorsqu'on a besoin d'un cache long terme pour les réponses",
                "Lorsqu'on veut interagir avec une base de données",
                "Si on veut envoyer des requêtes depuis un client externe (ex: mobile, autre backend)",
                "Si l'on veut optimiser les performances du rendu côté client"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! Une API Route est nécessaire pour les requêtes venant d'un client externe.",
            messageForIncorrectAnswer: "Incorrect. Les API Routes sont utilisées lorsqu'un client externe doit appeler votre backend.",
            explanation: "Les Server Actions sont idéales pour la communication interne en Next.js, mais les API Routes restent nécessaires pour les requêtes depuis des clients externes.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle approche permet d'optimiser l'utilisation des Server Actions dans un Client Component ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Utiliser `useOptimistic` pour une mise à jour instantanée",
                "Utiliser `useServerAction` pour une exécution synchrone",
                "Utiliser `startTransition` pour éviter un re-render bloquant",
                "Privilégier un `fetch()` direct plutôt qu'une Server Action"
            ],
            correctAnswer: [1, 3],
            messageForCorrectAnswer: "Correct ! `useOptimistic` et `startTransition` sont essentiels pour de meilleures performances.",
            messageForIncorrectAnswer: "Incorrect. L'optimisation passe par `useOptimistic` et `startTransition`.",
            explanation: "`useOptimistic` permet d'afficher une mise à jour instantanée, tandis que `startTransition` empêche le blocage du rendu lors de l'exécution de la Server Action.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (6 questions - 1/3)
        {
            question: "Quel est un avantage clé du streaming dans Next.js 14+ ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Il permet de rendre immédiatement les parties statiques d'une page tout en chargeant dynamiquement le reste",
                "Il charge toutes les ressources avant d'afficher quoi que ce soit",
                "Il élimine complètement le besoin de Server Components",
                "Il est activé par défaut sur toutes les pages Next.js"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! Le streaming permet d'afficher les parties statiques immédiatement.",
            messageForIncorrectAnswer: "Incorrect. Le streaming sert à charger progressivement les contenus dynamiques.",
            explanation: "Le streaming améliore les performances en affichant immédiatement le contenu statique, tout en chargeant progressivement les données dynamiques au fur et à mesure.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Comment Next.js gère-t-il le caching des Server Actions pour optimiser les performances ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "En utilisant automatiquement `fetch()` avec un cache sur le serveur",
                "En combinant `revalidatePath()` et `revalidateTag()` pour invalider le cache",
                "En forçant l'exécution de l'action côté client pour éviter le cache",
                "En ajoutant `{ cache: 'no-store' }` à l'appel de la Server Action"
            ],
            correctAnswer: [1, 2, 4],
            messageForCorrectAnswer: "Exact ! Next.js utilise un cache par défaut, mais peut être invalidé via `revalidatePath()`, `revalidateTag()` ou `cache: 'no-store'`.",
            messageForIncorrectAnswer: "Incorrect. Next.js met en cache les Server Actions sauf si elles sont configurées avec `cache: 'no-store'` ou invalidées explicitement.",
            explanation: "Next.js met en cache les réponses par défaut, sauf indication contraire (`cache: 'no-store'`). Il permet aussi d'invalider sélectivement le cache via `revalidatePath()` et `revalidateTag()`.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est une différence clé entre une Server Action et une API Route en Next.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Les Server Actions sont appelées uniquement via `fetch()`",
                "Les API Routes s'exécutent côté client uniquement",
                "Les Server Actions ne nécessitent pas d'endpoint dédié",
                "Les API Routes permettent le rendu côté serveur (SSR), contrairement aux Server Actions"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! Les Server Actions ne nécessitent pas d'endpoint spécifique, elles sont intégrées directement dans les composants.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est que les Server Actions n'ont pas besoin d'un endpoint spécifique.",
            explanation: "Contrairement aux API Routes, les Server Actions sont directement appelables depuis un composant React et ne nécessitent pas de requête HTTP explicite.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quel est un cas d'usage optimal pour une Edge Function dans Next.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Servir des images statiques optimisées",
                "Gérer l'authentification et la personnalisation des réponses en fonction de la localisation",
                "Exécuter des opérations lourdes en base de données",
                "Créer une API REST avec une latence minimale"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! Les Edge Functions sont optimales pour des opérations légères comme l'authentification ou la personnalisation du contenu en fonction de l'utilisateur.",
            messageForIncorrectAnswer: "Incorrect. Les Edge Functions sont idéales pour les tâches légères comme la personnalisation des réponses.",
            explanation: "Les Edge Functions sont exécutées au plus proche des utilisateurs et sont parfaites pour des tâches comme la personnalisation des requêtes ou l'authentification.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Dans un projet Next.js utilisant les React Server Components (RSC), quel impact a l'utilisation de `'use client'` dans un fichier ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Le fichier et tous ses enfants deviennent des Client Components",
                "Il permet d'utiliser `useState()`, `useEffect()` et d'autres hooks React",
                "Le composant peut appeler des Server Actions directement sans `fetch()`",
                "Le fichier est exécuté côté serveur et peut être streamé au client"
            ],
            correctAnswer: [1, 2],
            messageForCorrectAnswer: "Exact ! Ajouter `'use client'` transforme le composant en Client Component et active les hooks React.",
            messageForIncorrectAnswer: "Incorrect. Un composant client ne peut pas appeler directement une Server Action sans une interaction utilisateur.",
            explanation: "Un Client Component peut utiliser les hooks React et le state, mais ne peut pas exécuter du code serveur de manière transparente comme un Server Component.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est la meilleure manière de rendre une page nécessitant des données asynchrones en Next.js tout en optimisant le Time to First Byte (TTFB) ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Utiliser `fetch()` dans un Server Component avec `cache: 'force-cache'`",
                "Utiliser `suspense` et `loading.tsx` pour afficher un état de chargement",
                "Déplacer la logique de chargement dans un Client Component avec `useEffect()`",
                "Utiliser le streaming (`<Suspense>`) pour rendre le contenu progressivement"
            ],
            correctAnswer: [1, 2, 4],
            messageForCorrectAnswer: "Exact ! Un bon TTFB est obtenu en chargeant les données côté serveur et en utilisant le streaming ou un loading state pour l'expérience utilisateur.",
            messageForIncorrectAnswer: "Incorrect. Il faut privilégier le chargement côté serveur et le streaming pour un bon TTFB.",
            explanation: "Utiliser `fetch()` côté serveur optimise les performances. `Suspense` et le streaming permettent d'améliorer l'expérience utilisateur en rendant le contenu progressivement.",
            point: 20,
            difficulty: "expert"
        }
    ]
};
