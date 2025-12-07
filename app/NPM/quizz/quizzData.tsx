import { ReactNode } from "react";

export type QuestionDifficulty = "facile" | "intermédiaire" | "expert";

export interface QuizQuestion {
    question: string;
    questionType: "text" | "photo";
    answerSelectionType: "single" | "multiple";
    answers: string[];
    correctAnswer: number[];
    messageForCorrectAnswer?: string;
    messageForIncorrectAnswer?: string;
    explanation: string;
    point: number;
    difficulty: QuestionDifficulty;
}

export interface QuizData {
    quizTitle: string;
    quizSynopsis: ReactNode;
    questions: QuizQuestion[];
}

export const quiz: QuizData = {
    quizTitle: "📦 Quizz NPM",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur NPM (Node Package Manager), un outil essentiel dans l'écosystème Node.js. À travers ces questions, vous allez évaluer votre compréhension des concepts fondamentaux liés à NPM, notamment son rôle, les commandes essentielles, la gestion des dépendances et l'utilisation des fichiers de configuration.
        <br />
        Prenez quelques instants pour répondre aux questions et ainsi vérifier votre maîtrise des bases de NPM. Bonne chance !</>,
    questions: [
        // 🟢 Questions faciles (3 questions - 1/3)
        {
            question: "Qu'est-ce que NPM et quel est son rôle principal ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un éditeur de texte pour JavaScript",
                "Un environnement de développement",
                "Un gestionnaire de paquets pour Node.js",
                "Un serveur web"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! NPM est le gestionnaire de paquets pour Node.js.",
            messageForIncorrectAnswer: "Incorrect. NPM a un rôle bien spécifique dans l'écosystème Node.js.",
            explanation: "NPM (Node Package Manager) est le gestionnaire de paquets officiel de Node.js. Il permet d'installer, partager et gérer les dépendances JavaScript.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet d'initialiser un nouveau projet Node.js et de créer un fichier package.json ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "npm start",
                "npm install",
                "npm init",
                "npm run"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! npm init crée un nouveau projet avec package.json.",
            messageForIncorrectAnswer: "Incorrect. Il existe une commande spécifique pour initialiser un projet.",
            explanation: "La commande npm init lance un assistant interactif pour créer un fichier package.json. Utilisez npm init -y pour accepter toutes les valeurs par défaut.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quel fichier contient la liste des dépendances nécessaires à un projet Node.js ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "package.json",
                "index.js",
                "README.md",
                "package-lock.json"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! package.json est le manifeste du projet.",
            messageForIncorrectAnswer: "Incorrect. Ce n'est pas le bon fichier.",
            explanation: "Le fichier package.json contient les métadonnées du projet, les dépendances, les scripts et la configuration NPM.",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (3 questions - 1/3)
        {
            question: "Comment installer un paquet en tant que dépendance de développement uniquement ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "npm install <package>",
                "npm install --save",
                "npm install --save-dev",
                "npm install --global"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! --save-dev installe en devDependencies.",
            messageForIncorrectAnswer: "Incorrect. Il faut utiliser un flag spécifique.",
            explanation: "npm install --save-dev (ou -D) installe le paquet dans devDependencies. Ces dépendances ne sont utilisées qu'en développement (tests, build, etc.) et ne sont pas incluses en production.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle commande permet de désinstaller un paquet ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "npm remove <package>",
                "npm uninstall <package>",
                "npm delete <package>",
                "npm rm <package>"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! npm uninstall supprime un paquet.",
            messageForIncorrectAnswer: "Incorrect, mais certaines variantes existent.",
            explanation: "npm uninstall <package> supprime le paquet. Les alias npm remove et npm rm fonctionnent aussi, mais uninstall est la commande officielle.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle est la différence entre package.json et package-lock.json ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "package-lock.json est optionnel, package.json est requis",
                "package.json définit les plages de versions, package-lock.json fixe les versions exactes",
                "package.json est pour npm, package-lock.json pour yarn",
                "Il n'y a pas de différence significative"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous comprenez la gestion des versions.",
            messageForIncorrectAnswer: "Ce n'est pas tout à fait exact.",
            explanation: "package.json définit les dépendances avec des plages de versions (^, ~). package-lock.json enregistre les versions exactes installées et l'arbre de dépendances complet pour garantir des installations reproductibles.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (3 questions - 1/3)
        {
            question: "Que signifie le symbole ^ (caret) devant une version dans package.json (ex: ^1.2.3) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Accepte uniquement la version exacte 1.2.3",
                "Accepte les versions >= 1.2.3 et < 2.0.0 (semver compatible)",
                "Accepte toutes les versions >= 1.2.3",
                "Accepte uniquement les patchs: 1.2.x"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Excellent ! Vous maîtrisez le versioning sémantique.",
            messageForIncorrectAnswer: "Pas tout à fait. Le caret a une signification précise.",
            explanation: "Le ^ (caret) accepte les changements qui ne modifient pas le premier chiffre non nul. Pour ^1.2.3, cela permet 1.2.3 à 1.x.x (< 2.0.0). C'est le comportement par défaut de npm install.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle commande permet de vérifier les vulnérabilités de sécurité dans les dépendances ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "npm check",
                "npm audit",
                "npm security",
                "npm vulnerabilities"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! npm audit est l'outil de sécurité intégré.",
            messageForIncorrectAnswer: "Incorrect. NPM a un outil dédié à la sécurité.",
            explanation: "npm audit analyse les dépendances pour détecter les vulnérabilités connues. npm audit fix tente de les corriger automatiquement en mettant à jour vers des versions sûres.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est la différence entre 'dependencies' et 'peerDependencies' dans package.json ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "dependencies sont installées, peerDependencies ne le sont jamais",
                "peerDependencies indiquent une compatibilité requise sans installation automatique",
                "peerDependencies sont pour les bibliothèques peer-to-peer uniquement",
                "Il n'y a pas de différence, c'est du legacy"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Bravo ! Vous comprenez les types de dépendances avancés.",
            messageForIncorrectAnswer: "Pas tout à fait. peerDependencies a un rôle spécifique.",
            explanation: "peerDependencies spécifie qu'un paquet nécessite une certaine version d'un autre paquet déjà installé par le projet parent (ex: un plugin React qui nécessite React). NPM v3+ affiche un warning si la peer dependency n'est pas satisfaite, mais ne l'installe pas automatiquement.",
            point: 20,
            difficulty: "expert"
        }
    ]
};
