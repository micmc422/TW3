import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "Quizz React (cours TW3)",
    quizSynopsis: <>Validez vos acquis sur React 18, les Hooks, la gestion d'état, le routage (React Router v6) et l'accessibilité.
        <br />Les questions sont alignées avec le contenu du module React et les APIs actuelles.</>,
    questions: [
        // 🟢 Questions faciles (7 questions - 1/3)
        {
            question: "React est principalement…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Un framework full-stack", "Une bibliothèque UI déclarative", "Un serveur Node.js", "Un outil de test"],
            correctAnswer: [2],
            explanation: "React est une bibliothèque pour construire des UI (déclarative).",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Le Virtual DOM sert principalement à…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Générer des routes", "Minifier le code", "Optimiser les mises à jour du DOM réel", "Gérer l'état global"],
            correctAnswer: [3],
            explanation: "Le Virtual DOM permet à React de calculer les changements minimaux nécessaires avant de mettre à jour le DOM réel, optimisant ainsi les performances.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "Depuis React 16.8, quelle fonctionnalité permet aux fonctions d'avoir un état ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["HOC", "Hooks", "Mixins", "Classes"],
            correctAnswer: [2],
            explanation: "Les Hooks, introduits dans React 16.8, permettent d'utiliser l'état et d'autres fonctionnalités React dans des composants fonctionnels.",
            point: 5,
            difficulty: "facile"
        },
        {
            question: "useState retourne…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["[valeur]", "[valeur, setValeur]", "[setValeur]", "un objet"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! useState retourne un tableau avec la valeur et le setter.",
            messageForIncorrectAnswer: "Incorrect. Regardez bien ce que useState retourne.",
            helpMessages: {
                0: "💡 useState retourne DEUX éléments, pas seulement la valeur ! Il faut aussi la fonction pour modifier cette valeur. 📖 Voir le cours: /react/hooks",
                2: "💡 useState retourne aussi la VALEUR actuelle, pas seulement le setter ! Les deux sont nécessaires. 📖 Voir: https://react.dev/reference/react/useState",
                3: "💡 useState retourne un TABLEAU, pas un objet ! On utilise la déstructuration de tableau : const [valeur, setValeur] = useState(). 📖 Voir le cours: /react/hooks"
            },
            explanation: "useState retourne un tableau avec deux éléments : la valeur actuelle de l'état et une fonction pour la mettre à jour.",
            point: 5,
            difficulty: "facile",
            codeSnippet: {
                code: `import { useState } from 'react';

function Counter() {
  // useState retourne [valeur, setter]
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur : {count}
    </button>
  );
}`,
                language: "tsx",
                title: "Utilisation de useState"
            }
        },
        {
            question: "useEffect s'exécute par défaut…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Une seule fois", "À chaque rendu", "Jamais en production", "Uniquement sur événement"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Sans tableau de dépendances, useEffect s'exécute après chaque rendu.",
            messageForIncorrectAnswer: "Incorrect. Le comportement par défaut de useEffect dépend du tableau de dépendances.",
            helpMessages: {
                0: "💡 Une seule fois nécessite un tableau de dépendances VIDE : useEffect(() => {}, []). Sans tableau, il s'exécute à chaque rendu ! 📖 Voir le cours: /react/hooks",
                2: "💡 useEffect s'exécute bien en production ! Le comportement est le même en dev et prod (sauf StrictMode qui double les effets en dev). 📖 Voir: https://react.dev/reference/react/useEffect",
                3: "💡 useEffect ne réagit pas aux événements DOM ! Il s'exécute après le rendu. Pour les événements, utilisez onClick, onChange, etc. 📖 Voir le cours: /react/hooks"
            },
            explanation: "À chaque commit, sauf si dépendances fournies. Sans tableau de dépendances, useEffect s'exécute après chaque rendu.",
            point: 5,
            difficulty: "facile",
            codeSnippet: {
                code: `import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  // ❌ S'exécute après CHAQUE rendu (pas de tableau de dép.)
  useEffect(() => {
    console.log('Rendu !');
  });
  
  // ✅ S'exécute UNE SEULE FOIS au montage ([] vide)
  useEffect(() => {
    console.log('Monté !');
  }, []);
  
  // ✅ S'exécute quand 'count' change
  useEffect(() => {
    console.log('Count changé:', count);
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
                language: "tsx",
                title: "Tableau de dépendances dans useEffect"
            }
        },
        {
            question: "Quelle règle de Hooks est correcte ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Appeler des Hooks dans des boucles", "Appeler des Hooks conditionnellement", "Appeler des Hooks au top-level", "Appeler des Hooks dans n'importe quelle fonction"],
            correctAnswer: [3],
            messageForCorrectAnswer: "Parfait ! Les Hooks doivent toujours être appelés au niveau racine.",
            messageForIncorrectAnswer: "Incorrect. Il y a des règles strictes pour l'utilisation des Hooks.",
            helpMessages: {
                0: "💡 JAMAIS dans des boucles ! L'ordre des Hooks doit rester constant entre les rendus. Sinon React perd la trace de l'état. 📖 Voir le cours: /react/hooks",
                1: "💡 JAMAIS conditionnellement ! Si le if ne s'exécute pas, l'ordre des Hooks change et React mélange les états. 📖 Voir: https://react.dev/reference/rules/rules-of-hooks",
                3: "💡 Seulement dans les composants React et les Custom Hooks ! Pas dans les fonctions utilitaires normales. 📖 Voir le cours: /react/hooks"
            },
            explanation: "Les Hooks doivent être appelés au niveau racine du composant, jamais dans des conditions, boucles ou fonctions imbriquées. Cela garantit que l'ordre des Hooks reste cohérent entre les rendus.",
            point: 5,
            difficulty: "facile",
            codeSnippet: {
                code: `import { useState } from 'react';

function BadExample() {
  // ❌ MAUVAIS : Hook dans une condition
  if (someCondition) {
    const [state, setState] = useState(0); // Erreur !
  }
  
  // ❌ MAUVAIS : Hook dans une boucle
  for (let i = 0; i < 3; i++) {
    const [state, setState] = useState(i); // Erreur !
  }
}

function GoodExample() {
  // ✅ BON : Hooks au top-level
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // La condition est APRÈS le Hook
  if (count > 10) {
    // Logique conditionnelle ici
  }
  
  return <div>{count}</div>;
}`,
                language: "tsx",
                title: "Règles des Hooks"
            }
        },
        {
            question: "React 18: createRoot est exposé par…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["react", "react-dom/client", "react-dom/server", "react-native"],
            correctAnswer: [2],
            explanation: "Dans React 18, createRoot est importé depuis 'react-dom/client' pour utiliser la nouvelle API de rendu concurrent.",
            point: 5,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (7 questions - 1/3)
        {
            question: "useMemo est utile pour…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Mémoïser des composants", "Mémoïser des valeurs calculées coûteuses", "Créer un contexte", "Gérer la navigation"],
            correctAnswer: [2],
            explanation: "useMemo mémorise le résultat d'un calcul coûteux et le recalcule uniquement si les dépendances changent, optimisant ainsi les performances.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "useCallback est utile pour…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Mémoïser une fonction", "Créer un reducer", "Lire des params d'URL", "Suspension du rendu"],
            correctAnswer: [1],
            explanation: "useCallback retourne une version mémoïsée d'une fonction, utile pour éviter de recréer des fonctions à chaque rendu et optimiser les composants enfants.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel hook pour référencer un élément DOM ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useRef", "useId", "useReducer", "useTransition"],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! useRef permet de créer une référence vers un élément DOM.",
            messageForIncorrectAnswer: "Incorrect. Un hook spécifique permet de référencer le DOM.",
            helpMessages: {
                1: "💡 useId génère un ID unique pour l'accessibilité, mais ne crée pas de référence DOM ! Pour accéder au DOM, utilisez useRef. 📖 Voir le cours: /react/hooks",
                2: "💡 useReducer gère l'état complexe, pas les références DOM ! Pour accéder à un élément DOM, utilisez useRef. 📖 Voir: https://react.dev/reference/react/useRef",
                3: "💡 useTransition marque des mises à jour comme non urgentes, ça n'a rien à voir avec le DOM ! Utilisez useRef pour référencer le DOM. 📖 Voir le cours: /react/hooks"
            },
            explanation: "useRef permet de créer une référence mutable qui persiste entre les rendus, idéal pour accéder directement à un élément DOM.",
            point: 10,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Accès direct au DOM via .current
    inputRef.current?.focus();
  }, []);
  
  const handleClick = () => {
    // Lire la valeur sans déclencher un rendu
    console.log(inputRef.current?.value);
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log valeur</button>
    </>
  );
}`,
                language: "tsx",
                title: "Utilisation de useRef pour accéder au DOM"
            }
        },
        {
            question: "useId sert à…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Lire un paramètre d'URL", "Générer un ID stable pour l'accessibilité", "Créer des routes imbriquées", "Optimiser les images"],
            correctAnswer: [2],
            explanation: "useId génère un identifiant unique stable côté serveur et client, crucial pour l'accessibilité (aria-labelledby, aria-describedby) et le rendu hybride.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "useReducer est préférable à useState lorsque…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["L'état est simple", "La logique de mise à jour est complexe", "On gère le DOM", "On veut naviguer"],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! useReducer est idéal pour les logiques d'état complexes.",
            messageForIncorrectAnswer: "Incorrect. useReducer a un cas d'usage spécifique.",
            helpMessages: {
                0: "💡 Pour un état simple, useState suffit ! useReducer est utile quand il y a de nombreuses actions différentes qui modifient l'état de façons variées. 📖 Voir le cours: /react/hooks",
                2: "💡 Pour le DOM, utilisez useRef ! useReducer sert à gérer un état complexe avec plusieurs actions possibles. 📖 Voir: https://react.dev/reference/react/useReducer",
                3: "💡 Pour naviguer, utilisez React Router (useNavigate) ! useReducer sert à gérer un état local complexe. 📖 Voir le cours: /react/hooks"
            },
            explanation: "useReducer est idéal quand la logique d'état est complexe avec plusieurs sous-valeurs ou quand le prochain état dépend du précédent de manière sophistiquée.",
            point: 10,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `import { useReducer } from 'react';

type State = { count: number; step: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; step: number }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.step };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  
  return (
    <div>
      <p>Compteur: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+{state.step}</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-{state.step}</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`,
                language: "tsx",
                title: "useReducer pour logique d'état complexe"
            }
        },
        {
            question: "Quel composant active le mode concurrent et le fallback lors du lazy ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["StrictMode", "Suspense", "Profiler", "Fragment"],
            correctAnswer: [2],
            explanation: "Suspense permet d'afficher un fallback pendant le chargement de composants lazy ou de données asynchrones, et est essentiel pour le rendu concurrent.",
            point: 10,
            difficulty: "intermédiaire"
        },
        {
            question: "startTransition / useTransition servent à…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Créer des routes", "Marquer des mises à jour comme non urgentes", "Valider des formulaires", "Créer un contexte"],
            correctAnswer: [2],
            explanation: "Ces APIs permettent de marquer certaines mises à jour comme non urgentes, laissant React prioriser les mises à jour plus importantes pour une meilleure expérience utilisateur.",
            point: 10,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (7 questions - 1/3)
        {
            question: "Pour le routage dans ce cours, on importe depuis…",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["react-router-dom", "react-router", "next/router", "history"],
            correctAnswer: [1],
            explanation: "react-router-dom est le package pour les applications web React Router v6, incluant des composants comme BrowserRouter, Link et Routes.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quel composant déclare un conteneur de routes (v6) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Switch", "Routes", "RouteGroup", "RouterView"],
            correctAnswer: [2],
            explanation: "React Router v6 utilise <Routes> (remplaçant <Switch> de v5) comme conteneur pour définir les routes de l'application.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Comment lire \":id\" depuis l'URL (v6) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useLocation", "useSearchParams", "useParams", "match.params"],
            correctAnswer: [3],
            explanation: "useParams() retourne un objet contenant les paramètres dynamiques de l'URL définis dans le path de la route.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Navigation impérative en v6 :",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["useHistory()", "useNavigate()", "history.push()", "Router.navigate()"],
            correctAnswer: [2],
            explanation: "React Router v6 utilise useNavigate() qui remplace useHistory() de v5 pour la navigation programmatique.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quel composant rend les sous-routes imbriquées ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["Outlet", "Nested", "ChildRouter", "SubRoute"],
            correctAnswer: [1],
            explanation: "<Outlet /> est un composant spécial qui rend la route enfant correspondante dans une hiérarchie de routes imbriquées.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Bonne pratique d'accessibilité pour un bouton de navigation ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["role='nav'", "aria-label descriptif", "tabindex=-1", "title obligatoire"],
            correctAnswer: [2],
            explanation: "Un aria-label descriptif aide les lecteurs d'écran à comprendre la fonction du bouton. role='nav' s'applique aux conteneurs, pas aux boutons.",
            point: 15,
            difficulty: "expert"
        },
        {
            question: "Quelle API pour formulaires contrôlés ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: ["onClick", "value + onChange", "innerHTML", "dataset"],
            correctAnswer: [2],
            explanation: "Les composants contrôlés utilisent value (ou checked) et onChange pour que React contrôle l'état du formulaire, assurant une source unique de vérité.",
            point: 15,
            difficulty: "expert"
        }
    ]
};
