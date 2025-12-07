import { QuizData } from "@/components/quiz/types";

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
            helpMessages: {
                0: "💡 NPM n'est pas un éditeur de texte ! C'est un outil en ligne de commande pour installer et gérer des bibliothèques JavaScript. 📖 Voir le cours: /NPM/introduction",
                1: "💡 NPM n'est pas un IDE ! C'est un gestionnaire de paquets qui permet d'installer des bibliothèques tierces. 📖 Voir: https://docs.npmjs.com/about-npm",
                3: "💡 NPM n'est pas un serveur web ! Même si vous pouvez installer des serveurs web (comme Express) avec NPM. 📖 Voir le cours: /NPM/introduction"
            },
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
            helpMessages: {
                0: "💡 'npm start' lance un script défini dans package.json, il ne crée pas le projet ! 📖 Voir le cours: /NPM/commandes",
                1: "💡 'npm install' installe les dépendances listées dans package.json, mais ne crée pas le fichier initial ! 📖 Voir: https://docs.npmjs.com/cli/v10/commands/npm-init",
                3: "💡 'npm run' exécute des scripts personnalisés, mais ne crée pas le projet de base ! 📖 Voir le cours: /NPM/commandes"
            },
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
            helpMessages: {
                1: "💡 index.js est un fichier de code source, pas un fichier de configuration ! 📖 Voir le cours: /NPM/package-json",
                2: "💡 README.md est la documentation, pas la liste des dépendances ! 📖 Voir: https://docs.npmjs.com/cli/v10/configuring-npm/package-json",
                3: "💡 package-lock.json verrouille les versions exactes, mais c'est package.json qui définit les dépendances ! 📖 Voir le cours: /NPM/package-json"
            },
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
            helpMessages: {
                0: "💡 Sans flag, 'npm install' installe dans dependencies (production), pas devDependencies ! 📖 Voir le cours: /NPM/dependances",
                1: "💡 '--save' est devenu le défaut depuis NPM 5. Pour devDependencies, utilisez --save-dev ! 📖 Voir: https://docs.npmjs.com/cli/v10/commands/npm-install",
                3: "💡 '--global' installe le paquet globalement sur votre système, pas dans le projet ! 📖 Voir le cours: /NPM/dependances"
            },
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
            helpMessages: {
                0: "💡 'npm remove' fonctionne aussi (alias), mais la commande officielle est 'npm uninstall' ! 📖 Voir: https://docs.npmjs.com/cli/v10/commands/npm-uninstall",
                2: "💡 'npm delete' n'existe pas ! Utilisez 'npm uninstall', 'npm remove' ou 'npm rm' (alias). 📖 Voir le cours: /NPM/commandes",
                3: "💡 'npm rm' fonctionne aussi (alias court), mais la commande officielle est 'npm uninstall' ! 📖 Voir le cours: /NPM/commandes"
            },
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
            helpMessages: {
                0: "💡 Les deux sont importants ! package-lock.json garantit des installations reproductibles en verrouillant les versions exactes. 📖 Voir le cours: /NPM/package-lock",
                2: "💡 Yarn a son propre fichier yarn.lock ! package-lock.json est bien pour NPM et verrouille les versions exactes. 📖 Voir: https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json",
                3: "💡 Il y a une grande différence ! package.json définit les plages (^1.2.3), package-lock.json fixe les versions exactes installées. 📖 Voir le cours: /NPM/package-lock"
            },
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
            helpMessages: {
                0: "💡 Pour une version exacte, n'utilisez aucun symbole (juste 1.2.3). Le ^ accepte les mises à jour mineures et patches ! 📖 Voir le cours: /NPM/semver",
                2: "💡 Attention ! Le ^ n'accepte pas TOUTES les versions. Il limite aux versions < 2.0.0 pour éviter les breaking changes. 📖 Voir: https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies",
                3: "💡 Pour les patches uniquement, utilisez ~ (tilde), pas ^ (caret) ! Le caret accepte aussi les versions mineures. 📖 Voir le cours: /NPM/semver"
            },
            explanation: "Le ^ (caret) accepte les changements qui ne modifient pas le premier chiffre non nul. Pour ^1.2.3, cela permet 1.2.3 à 1.x.x (< 2.0.0). C'est le comportement par défaut de npm install.",
            point: 20,
            difficulty: "expert",
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
            helpMessages: {
                0: "💡 'npm check' n'est pas une commande NPM standard ! Utilisez 'npm audit' pour analyser les vulnérabilités. 📖 Voir le cours: /NPM/securite",
                2: "💡 'npm security' n'existe pas ! La commande correcte est 'npm audit' pour scanner les failles de sécurité. 📖 Voir: https://docs.npmjs.com/cli/v10/commands/npm-audit",
                3: "💡 'npm vulnerabilities' n'existe pas ! Utilisez 'npm audit' pour analyser et 'npm audit fix' pour corriger. 📖 Voir le cours: /NPM/securite"
            },
            explanation: "npm audit analyse les dépendances pour détecter les vulnérabilités connues. npm audit fix tente de les corriger automatiquement en mettant à jour vers des versions sûres.",
            point: 20,
            difficulty: "expert",
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
            helpMessages: {
                0: "💡 NPM v3-6 ne les installait pas auto, mais v7+ peut les installer ! Elles indiquent surtout une compatibilité requise. 📖 Voir le cours: /NPM/peer-dependencies",
                2: "💡 Rien à voir avec le réseau peer-to-peer ! C'est pour les plugins/bibliothèques qui nécessitent une version spécifique d'une dépendance parente. 📖 Voir: https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies",
                3: "💡 Ce n'est pas obsolète ! peerDependencies est essentiel pour les plugins (ex: un plugin React qui nécessite React installé par le projet parent). 📖 Voir le cours: /NPM/peer-dependencies"
            },
            explanation: "peerDependencies spécifie qu'un paquet nécessite une certaine version d'un autre paquet déjà installé par le projet parent (ex: un plugin React qui nécessite React). NPM v3+ affiche un warning si la peer dependency n'est pas satisfaite, mais ne l'installe pas automatiquement.",
            point: 20,
            difficulty: "expert",
        }
    ]
};
