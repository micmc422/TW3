import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "🟩 Quizz Node.js",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur Node.js, un environnement d'exécution JavaScript côté serveur. À travers ces questions, vous allez évaluer votre compréhension des bases de Node.js, de son installation, de ses modules, de la programmation asynchrone et de l'utilisation d'Express.js.
        <br />
        Prenez quelques instants pour répondre aux questions et ainsi vérifier votre maîtrise des bases de Node.js. Bonne chance !
    </>,
    questions: [
        // 🟢 Questions faciles (3 questions - 1/3)
        {
            question: "Qu'est-ce que Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un langage de programmation",
                "Un environnement d'exécution JavaScript côté serveur",
                "Un framework web",
                "Un compilateur"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! Node.js est bien un environnement d'exécution JavaScript côté serveur.",
            messageForIncorrectAnswer: "Ces options sont incorrectes. Node.js est un environnement d'exécution JavaScript spécifique.",
            helpMessages: {
                0: "💡 Node.js n'est pas un langage ! Il utilise JavaScript comme langage. C'est un runtime (environnement d'exécution). 📖 Voir le cours: /node.js/introduction",
                2: "💡 Node.js n'est pas un framework (comme Express) ! C'est la plateforme qui permet d'exécuter JavaScript côté serveur. 📖 Voir: https://nodejs.org/docs/latest/api/",
                3: "💡 Node.js n'est pas un compilateur ! Il utilise le moteur V8 de Chrome pour exécuter du JavaScript. 📖 Voir le cours: /node.js/introduction"
            },
            explanation: "Node.js est un environnement d'exécution JavaScript qui permet d'exécuter du code JavaScript de manière asynchrone et non bloquante sur le serveur.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Pourquoi utiliser Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Pour gérer efficacement les opérations d'entrée/sortie asynchrones et non bloquantes",
                "Parce que Node.js permet de créer des applications front-end interactives",
                "Pour son support natif des bases de données relationnelles comme MySQL",
                "Pour remplacer complètement les navigateurs web"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Vous avez raison ! Node.js excelle dans les opérations asynchrones.",
            messageForIncorrectAnswer: "Ces options ne sont pas toutes correctes. Node.js offre plusieurs avantages.",
            helpMessages: {
                1: "💡 Node.js est pour le back-end ! Le front-end reste dans le navigateur (React, Vue, etc.). 📖 Voir le cours: /node.js/avantages",
                2: "💡 Node.js peut se connecter aux bases de données, mais ce n'est pas un support 'natif'. Son avantage est l'I/O non bloquant. 📖 Voir: https://nodejs.org/docs/latest/api/",
                3: "💡 Node.js ne remplace pas les navigateurs ! Il exécute JavaScript côté serveur, les navigateurs côté client. 📖 Voir le cours: /node.js/introduction"
            },
            explanation: "Node.js offre plusieurs avantages : il est non bloquant grâce à son architecture événementielle, utilise le moteur V8 JavaScript, et est particulièrement adapté pour les applications I/O intensives comme les APIs et les services temps réel.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle est la syntaxe pour importer un module personnalisé dans Node.js (CommonJS) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "require('./nomDuFichier.js')",
                "include './nomDuFichier.js'",
                "use ./nomDuFichier.js",
                "import './nomDuFichier.js'"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La syntaxe correcte pour importer un module personnalisé est require().",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La syntaxe correcte est différente de celles-ci.",
            helpMessages: {
                1: "💡 'include' n'existe pas en JavaScript ! En CommonJS, utilisez require(). 📖 Voir le cours: /node.js/modules",
                2: "💡 'use' est une directive ('use strict'), pas une fonction d'import ! Utilisez require() en CommonJS. 📖 Voir: https://nodejs.org/docs/latest/api/modules.html",
                3: "💡 'import' est la syntaxe ES6 modules ! En CommonJS (Node.js classique), c'est require(). 📖 Voir le cours: /node.js/modules"
            },
            explanation: "Pour importer un module personnalisé dans Node.js avec CommonJS, vous devez utiliser la fonction require(). Par exemple : const myModule = require('./monMod.js'). Note: Node.js supporte aussi les modules ES6 avec import.",
            point: 10,
            difficulty: "facile",
        },

        // 🟡 Questions intermédiaires (3 questions - 1/3)
        {
            question: "Quels sont les modules intégrés de Node.js ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "http, fs, path",
                "module, buffer, crypto",
                "process, os, util",
                "express, mongoose, react"
            ],
            correctAnswer: [1, 2, 3],
            messageForCorrectAnswer: "Excellent ! Vous avez identifié tous les modules intégrés de Node.js.",
            messageForIncorrectAnswer: "Attention, certains modules listés ne sont pas intégrés à Node.js.",
            helpMessages: {
                3: "💡 Express, mongoose et react sont des packages NPM EXTERNES, pas des modules intégrés à Node.js ! 📖 Voir le cours: /node.js/modules-core"
            },
            explanation: "Node.js dispose de nombreux modules intégrés (core modules), dont http, fs, path, process, os, util, module, buffer, crypto, et bien d'autres. Express, mongoose et react sont des packages NPM externes, pas des modules intégrés.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle est la différence entre un callback et une Promise en Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un callback est asynchrone tandis qu'une Promise est synchrone",
                "Les callbacks peuvent créer du 'callback hell', les Promises offrent un meilleur chaînage",
                "Un callback peut être synchrone ou asynchrone tandis qu'une Promise gère uniquement l'asynchronisme",
                "Il n'y a aucune différence"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Bien joué ! Vous avez correctement identifié l'avantage principal des Promises.",
            messageForIncorrectAnswer: "Ces options ne sont pas toutes correctes.",
            helpMessages: {
                0: "💡 C'est l'inverse ! Les callbacks ET les Promises gèrent l'asynchrone. L'avantage des Promises est le chaînage (.then/.catch). 📖 Voir le cours: /node.js/async",
                2: "💡 Bien que techniquement vrai, l'avantage principal des Promises est d'éviter le callback hell via le chaînage. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises",
                3: "💡 Il y a une grande différence ! Les Promises permettent un code plus lisible et évitent le callback hell. 📖 Voir le cours: /node.js/async"
            },
            explanation: "Les Promises offrent une meilleure gestion du code asynchrone avec le chaînage (.then(), .catch()) et évitent le 'callback hell'. Elles représentent une valeur future qui peut être résolue ou rejetée.",
            point: 15,
            difficulty: "intermédiaire",
        },
        {
            question: "Quelle est la syntaxe pour utiliser async/await avec une Promise en Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "async function example() { const result = await promise; }",
                "async function example() { promise.then(); }",
                "function example() { await promise; }",
                "async example() { promise.catch(); }"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La syntaxe correcte pour utiliser async/await est await promise dans une fonction async.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La syntaxe correcte est différente de celles-ci.",
            helpMessages: {
                1: "💡 .then() est la syntaxe des Promises classiques ! async/await utilise le mot-clé 'await' directement. 📖 Voir le cours: /node.js/async-await",
                2: "💡 'await' ne peut être utilisé QUE dans une fonction 'async' ! Ajoutez 'async' devant function. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function",
                3: "💡 Syntaxe invalide ! Il faut 'async function example()' et utiliser 'await', pas .catch(). 📖 Voir le cours: /node.js/async-await"
            },
            explanation: "Pour utiliser async/await avec une Promise en Node.js, vous devez utiliser la syntaxe await promise dans une fonction déclarée avec async. Cela rend le code asynchrone plus lisible et similaire au code synchrone.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (3 questions - 1/3)
        {
            question: "Qu'est-ce que l'Event Loop dans Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Une boucle qui vérifie les erreurs dans le code",
                "Le mécanisme qui gère les opérations asynchrones et les callbacks",
                "Un module pour gérer les événements utilisateur",
                "Une fonction pour créer des boucles infinies"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous comprenez l'architecture de Node.js.",
            messageForIncorrectAnswer: "Pas tout à fait. L'Event Loop est au cœur de Node.js.",
            helpMessages: {
                0: "💡 L'Event Loop ne vérifie pas les erreurs ! C'est le mécanisme qui gère l'exécution asynchrone et non bloquante. 📖 Voir le cours: /node.js/event-loop",
                2: "💡 L'Event Loop ne gère pas les événements utilisateur UI ! Il gère les callbacks des opérations asynchrones (I/O, timers). 📖 Voir: https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",
                3: "💡 L'Event Loop n'est pas pour créer des boucles infinies ! C'est le cœur de l'architecture asynchrone de Node.js. 📖 Voir le cours: /node.js/event-loop"
            },
            explanation: "L'Event Loop est le mécanisme central de Node.js qui permet d'exécuter du code de manière non bloquante. Il surveille la Call Stack et la Callback Queue, exécutant les callbacks quand la Stack est vide. Cela permet à Node.js de gérer des milliers de connexions simultanées avec un seul thread.",
            point: 20,
            difficulty: "expert",
        },
        {
            question: "Quelle est la différence entre process.nextTick() et setImmediate() ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Aucune différence, ils font la même chose",
                "process.nextTick() s'exécute avant setImmediate() dans l'Event Loop",
                "setImmediate() s'exécute immédiatement, nextTick() attend le prochain tick",
                "nextTick() est obsolète, utilisez toujours setImmediate()"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Excellent ! Vous maîtrisez les subtilités de l'Event Loop.",
            messageForIncorrectAnswer: "Ce n'est pas exact. Il y a une différence importante.",
            helpMessages: {
                0: "💡 Il y a une différence clé ! nextTick() s'exécute AVANT setImmediate() dans la boucle d'événements. 📖 Voir le cours: /node.js/event-loop",
                2: "💡 C'est un peu l'inverse du nom ! nextTick() s'exécute EN PREMIER (avant I/O), setImmediate() après la phase I/O. 📖 Voir: https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",
                3: "💡 nextTick() n'est pas obsolète ! Mais son usage excessif peut bloquer l'Event Loop, donc à utiliser avec précaution. 📖 Voir le cours: /node.js/event-loop"
            },
            explanation: "process.nextTick() place le callback en tête de la queue de l'Event Loop, s'exécutant avant toute I/O. setImmediate() s'exécute dans la phase 'check' de l'Event Loop, après les I/O. En pratique, nextTick s'exécute en premier, mais son utilisation excessive peut bloquer l'Event Loop.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quel est le rôle du fichier package.json dans un projet Node.js ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Définir les métadonnées du projet (nom, version, auteur)",
                "Lister les dépendances et devDependencies",
                "Définir les scripts npm personnalisés",
                "Compiler le code JavaScript"
            ],
            correctAnswer: [1, 2, 3],
            messageForCorrectAnswer: "Parfait ! Vous connaissez tous les rôles de package.json.",
            messageForIncorrectAnswer: "Attention, package.json ne compile pas le code.",
            helpMessages: {
                3: "💡 package.json ne compile rien ! C'est un fichier de configuration JSON qui définit le projet et ses dépendances. 📖 Voir le cours: /NPM/package-json"
            },
            explanation: "Le fichier package.json est le manifeste du projet. Il contient les métadonnées (nom, version, description, auteur), les dépendances (dependencies et devDependencies), les scripts npm (start, test, build), et d'autres configurations. Il ne compile pas le code, c'est un fichier de configuration JSON.",
            point: 20,
            difficulty: "expert"
        }
    ]
};
