import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "Quizz React (cours TW3)",
    quizSynopsis: <>Validez vos acquis sur React 18, les Hooks, la gestion d'état, le routage (React Router v6) et l'accessibilité.
        <br />Les questions sont alignées avec le contenu du module React et les APIs actuelles.</>,
    questions: [
        // 🟢 Questions faciles (7 questions - 1/3)
        {
            question: "Dans l'écosystème JavaScript, comment est principalement classé React ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Un framework full-stack", "Une bibliothèque UI déclarative", "Un serveur Node.js", "Un outil de test"],
            correctAnswer: [2],
            explanation: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur de manière déclarative, développée par Meta (Facebook).",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quel est le rôle principal du Virtual DOM dans React ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Générer des routes pour la navigation", "Minifier automatiquement le code", "Optimiser les mises à jour du DOM réel", "Gérer l'état global de l'application"],
            correctAnswer: [3],
            explanation: "Le Virtual DOM est une représentation en mémoire du DOM réel. React l'utilise pour calculer les changements minimaux nécessaires avant de mettre à jour le DOM réel, optimisant ainsi les performances.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Quelle fonctionnalité introduite dans React 16.8 permet aux composants fonctionnels d'avoir un état local ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Higher-Order Components (HOC)", "Les Hooks React", "Les Mixins", "Les Classes"],
            correctAnswer: [2],
            explanation: "Les Hooks, introduits dans React 16.8, permettent d'utiliser l'état et d'autres fonctionnalités React (comme les effets de bord) dans des composants fonctionnels, sans avoir besoin de classes.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Que retourne le Hook useState() lorsqu'on l'appelle ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Un tableau avec seulement la valeur actuelle", "Un tableau avec [valeur, setValeur]", "Un tableau avec seulement la fonction setter", "Un objet avec les propriétés value et setValue"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! useState retourne un tableau avec la valeur actuelle et la fonction pour la modifier.",
            messageForIncorrectAnswer: "Incorrect. Regardez bien ce que useState retourne.",
            helpMessages: {
                0: "💡 useState retourne DEUX éléments, pas seulement la valeur ! Il faut aussi la fonction pour modifier cette valeur. 📖 Voir le cours: /react/hooks",
                2: "💡 useState retourne aussi la VALEUR actuelle, pas seulement le setter ! Les deux sont nécessaires. 📖 Voir: https://react.dev/reference/react/useState",
                3: "💡 useState retourne un TABLEAU, pas un objet ! On utilise la déstructuration de tableau : const [valeur, setValeur] = useState(). 📖 Voir le cours: /react/hooks"
            },
            explanation: "useState retourne un tableau avec deux éléments : [0] la valeur actuelle de l'état et [1] une fonction pour la mettre à jour. On utilise la déstructuration : const [count, setCount] = useState(0);",
            point: 5,
            difficulty: "facile",
        },
        {
            question: "Quand s'exécute useEffect() par défaut, sans tableau de dépendances spécifié ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Une seule fois au montage", "Après chaque rendu du composant", "Jamais en mode production", "Uniquement lors d'événements utilisateur"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Sans tableau de dépendances, useEffect s'exécute après chaque rendu du composant.",
            messageForIncorrectAnswer: "Incorrect. Le comportement par défaut de useEffect dépend de la présence du tableau de dépendances.",
            helpMessages: {
                0: "💡 Pour s'exécuter une seule fois, il faut un tableau de dépendances VIDE : useEffect(() => {}, []). Sans tableau, il s'exécute à chaque rendu ! 📖 Voir le cours: /react/hooks",
                2: "💡 useEffect s'exécute bien en production ! Le comportement est le même en dev et prod (sauf StrictMode qui double les effets en dev). 📖 Voir: https://react.dev/reference/react/useEffect",
                3: "💡 useEffect ne réagit pas directement aux événements DOM ! Il s'exécute après le rendu. Pour les événements, utilisez onClick, onChange, etc. 📖 Voir le cours: /react/hooks"
            },
            explanation: "Sans tableau de dépendances, useEffect s'exécute après chaque rendu. Pour contrôler l'exécution : [] = une fois au montage, [dep1, dep2] = quand les dépendances changent.",
            point: 5,
            difficulty: "facile",
        },
        {
            question: "Selon les règles des Hooks React, où doit-on obligatoirement les appeler ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Dans des boucles for ou while", "À l'intérieur de conditions if/else", "Au niveau racine (top-level) du composant", "Dans n'importe quelle fonction JavaScript"],
            correctAnswer: [3],
            messageForCorrectAnswer: "Parfait ! Les Hooks doivent toujours être appelés au niveau racine, dans le même ordre à chaque rendu.",
            messageForIncorrectAnswer: "Incorrect. Il y a des règles strictes pour l'utilisation des Hooks.",
            helpMessages: {
                0: "💡 JAMAIS dans des boucles ! L'ordre des Hooks doit rester constant entre les rendus. Sinon React perd la trace de l'état. 📖 Voir le cours: /react/hooks",
                1: "💡 JAMAIS conditionnellement ! Si le if ne s'exécute pas, l'ordre des Hooks change et React mélange les états. 📖 Voir: https://react.dev/reference/rules/rules-of-hooks",
                3: "💡 Seulement dans les composants React et les Custom Hooks ! Pas dans les fonctions utilitaires normales. 📖 Voir le cours: /react/hooks"
            },
            explanation: "Les Hooks doivent être appelés au niveau racine du composant ou d'un custom Hook, jamais dans des conditions, boucles ou fonctions imbriquées. Cela garantit que l'ordre des Hooks reste cohérent entre les rendus.",
            point: 5,
            difficulty: "facile",
        },
        {
            question: "Dans React 18, de quel package faut-il importer la fonction createRoot() ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["react", "react-dom/client", "react-dom/server", "react-native"],
            correctAnswer: [2],
            explanation: "Dans React 18, createRoot est importé depuis 'react-dom/client' pour utiliser la nouvelle API de rendu concurrent. C'est un changement par rapport aux versions précédentes.",
            point: 5,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (7 questions - 1/3)
        {
            question: "À quoi sert le Hook useMemo() dans un composant React ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["À mémoïser des composants entiers", "À mémoïser des valeurs calculées coûteuses", "À créer un contexte React", "À gérer la navigation entre pages"],
            correctAnswer: [2],
            explanation: "useMemo permet de mémoiser le résultat d'un calcul coûteux et de ne le recalculer que si les dépendances changent, optimisant ainsi les performances en évitant des calculs inutiles.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel est le cas d'usage principal du Hook useCallback() ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Mémoïser une fonction pour éviter sa recréation", "Créer un reducer pour gérer l'état", "Lire les paramètres de l'URL", "Suspendre le rendu d'un composant"],
            correctAnswer: [1],
            explanation: "useCallback retourne une version mémoïsée d'une fonction callback. C'est utile pour éviter de recréer des fonctions à chaque rendu, notamment pour optimiser les composants enfants qui dépendent de cette fonction.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel Hook React permet de créer une référence vers un élément DOM ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useRef", "useId", "useReducer", "useTransition"],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! useRef permet de créer une référence mutable vers un élément DOM.",
            messageForIncorrectAnswer: "Incorrect. Un hook spécifique permet de référencer le DOM.",
            helpMessages: {
                1: "💡 useId génère un ID unique pour l'accessibilité, mais ne crée pas de référence DOM ! Pour accéder au DOM, utilisez useRef. 📖 Voir le cours: /react/hooks",
                2: "💡 useReducer gère l'état complexe, pas les références DOM ! Pour accéder à un élément DOM, utilisez useRef. 📖 Voir: https://react.dev/reference/react/useRef",
                3: "💡 useTransition marque des mises à jour comme non urgentes, ça n'a rien à voir avec le DOM ! Utilisez useRef pour référencer le DOM. 📖 Voir le cours: /react/hooks"
            },
            explanation: "useRef crée une référence mutable qui persiste entre les rendus. C'est le moyen standard pour accéder directement à un élément DOM dans React : const inputRef = useRef(null); <input ref={inputRef} />",
            point: 10,
            difficulty: "intermédiaire",
        },
        {
            question: "Quel est l'objectif principal du Hook useId() dans React 18 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Lire un paramètre d'URL dynamique", "Générer un ID HTML unique et stable pour l'accessibilité", "Créer des routes imbriquées", "Optimiser le chargement d'images"],
            correctAnswer: [2],
            explanation: "useId génère un identifiant unique qui reste stable entre le rendu serveur et client. C'est essentiel pour l'accessibilité (aria-labelledby, aria-describedby) et le SSR/hydratation.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Dans quels cas le Hook useReducer() est-il préférable à useState() ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Quand l'état est une simple valeur primitive", "Quand la logique de mise à jour de l'état est complexe avec plusieurs actions", "Quand on doit manipuler directement le DOM", "Quand on veut gérer la navigation entre pages"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! useReducer est idéal pour les logiques d'état complexes avec plusieurs types d'actions.",
            messageForIncorrectAnswer: "Incorrect. useReducer a un cas d'usage spécifique.",
            helpMessages: {
                0: "💡 Pour un état simple, useState suffit largement ! useReducer est utile quand il y a de nombreuses actions différentes qui modifient l'état de façons variées. 📖 Voir le cours: /react/hooks",
                2: "💡 Pour le DOM, utilisez useRef ! useReducer sert à gérer un état complexe avec plusieurs actions possibles (comme dans Redux). 📖 Voir: https://react.dev/reference/react/useReducer",
                3: "💡 Pour naviguer, utilisez React Router (useNavigate) ! useReducer sert à gérer un état local complexe avec un pattern reducer. 📖 Voir le cours: /react/hooks"
            },
            explanation: "useReducer est idéal quand la logique d'état est complexe avec plusieurs sous-valeurs, plusieurs types d'actions, ou quand le prochain état dépend du précédent de manière sophistiquée.",
            point: 10,
            difficulty: "intermédiaire",
        },
        {
            question: "Quel composant React permet d'afficher un fallback pendant le chargement lazy de composants ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["StrictMode", "Suspense", "Profiler", "Fragment"],
            correctAnswer: [2],
            explanation: "<Suspense> permet d'afficher un fallback (comme un spinner) pendant le chargement de composants lazy ou de données asynchrones. C'est essentiel pour le code-splitting et le rendu concurrent.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "À quoi servent startTransition() et useTransition() dans React 18 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["À créer des routes pour le routage", "À marquer certaines mises à jour de l'état comme non urgentes", "À valider des formulaires automatiquement", "À créer un contexte React"],
            correctAnswer: [2],
            explanation: "Ces APIs du mode concurrent permettent de marquer certaines mises à jour comme non urgentes (transitions). React peut alors interrompre ces mises à jour pour prioriser les interactions utilisateur plus importantes, améliorant la réactivité.",
            point: 10,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (7 questions - 1/3)
        {
            question: "Pour implémenter le routage dans une application React web, de quel package doit-on importer les composants ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["react-router-dom", "react-router", "next/router", "history"],
            correctAnswer: [1],
            explanation: "react-router-dom est le package pour les applications web React Router v6. Il inclut des composants spécifiques au DOM comme BrowserRouter, Link et Routes. 'react-router' contient uniquement le cœur partagé.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Dans React Router v6, quel composant remplace <Switch> pour déclarer un conteneur de routes ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["<Switch>", "<Routes>", "<RouteGroup>", "<RouterView>"],
            correctAnswer: [2],
            explanation: "React Router v6 utilise <Routes> qui remplace <Switch> de v5. <Routes> offre une API plus simple et de meilleures performances pour déclarer les routes de l'application.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Comment lire la valeur d'un paramètre dynamique \":id\" depuis l'URL dans React Router v6 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useLocation().id", "useSearchParams().get('id')", "useParams().id", "match.params.id"],
            correctAnswer: [3],
            explanation: "useParams() retourne un objet contenant les paramètres dynamiques de l'URL définis dans le path de la route (ex: /user/:id). Pour accéder à un param: const { id } = useParams();",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quelle fonction/Hook permet la navigation programmatique (impérative) dans React Router v6 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useHistory().push()", "useNavigate()", "history.push()", "Router.navigate()"],
            correctAnswer: [2],
            explanation: "React Router v6 utilise useNavigate() qui remplace useHistory() de v5. Utilisation: const navigate = useNavigate(); navigate('/path'); ou navigate(-1); pour revenir en arrière.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quel composant React Router v6 permet de rendre les routes enfants dans une hiérarchie de routes imbriquées ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["<Outlet />", "<Nested />", "<ChildRouter />", "<SubRoute />"],
            correctAnswer: [1],
            explanation: "<Outlet /> est un composant spécial qui sert de placeholder pour rendre la route enfant correspondante dans une hiérarchie de routes imbriquées (nested routes).",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quelle est la meilleure pratique d'accessibilité pour un bouton de navigation dans une application React ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Ajouter role='nav' sur le bouton", "Fournir un aria-label descriptif", "Utiliser tabindex=-1 pour le focus", "Ajouter un attribut title obligatoire"],
            correctAnswer: [2],
            explanation: "Un aria-label descriptif aide les lecteurs d'écran à comprendre la fonction du bouton. role='nav' s'applique aux conteneurs de navigation, pas aux boutons individuels. tabindex=-1 retire l'élément de l'ordre de tabulation.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Comment implémenter des formulaires contrôlés (controlled components) en React ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Utiliser onClick pour chaque changement", "Utiliser value (ou checked) avec onChange", "Manipuler innerHTML directement", "Utiliser l'attribut dataset"],
            correctAnswer: [2],
            explanation: "Les composants contrôlés utilisent value (ou checked pour checkbox/radio) combiné à onChange pour que React contrôle complètement l'état du formulaire, garantissant une source unique de vérité (single source of truth).",
            point: 15,
            difficulty: "expert"
        }
    ]
};
