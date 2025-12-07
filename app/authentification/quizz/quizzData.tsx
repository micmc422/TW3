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
    quizTitle: "Quizz Authentification & Sécurité",
    quizSynopsis: <>Ce quiz est conçu pour valider votre compréhension des mécanismes d'authentification web.
        <br />
        Vous serez interrogé sur les différences entre identification et authentification, les protocoles comme OAuth 2.0, la gestion des sessions et les mesures de sécurité essentielles.
    </>,
    questions: [
        // 🟢 Questions faciles (3 questions - 1/3)
        {
            question: "Quelle est la différence fondamentale entre l'identification et l'authentification ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "L'identification vérifie le mot de passe, l'authentification vérifie l'email",
                "L'identification déclare qui vous êtes, l'authentification prouve que c'est bien vous",
                "C'est la même chose, les termes sont interchangeables",
                "L'identification se fait après l'authentification"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! L'identification est la déclaration de l'identité (ex: login), et l'authentification est la preuve de cette identité (ex: mot de passe).",
            messageForIncorrectAnswer: "Incorrect. L'identification est la déclaration (je suis Alice), l'authentification est la vérification (voici mon mot de passe).",
            explanation: "L'identification répond à la question 'Qui êtes-vous ?', tandis que l'authentification répond à 'Prouvez-le'.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Dans le protocole HTTP Basic Auth, comment les identifiants sont-ils transmis ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Chiffrés en AES-256",
                "En clair dans l'URL",
                "Encodés en Base64 dans l'en-tête Authorization",
                "Hashés avec MD5"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! Ils sont encodés en Base64, ce qui n'est pas un chiffrement sécurisé, d'où la nécessité du HTTPS.",
            messageForIncorrectAnswer: "Incorrect. Ils sont simplement encodés en Base64.",
            explanation: "L'encodage Base64 est réversible. Sans HTTPS, les identifiants peuvent être facilement interceptés et lus.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Pourquoi est-il critique d'utiliser HTTPS pour l'authentification ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Pour améliorer le référencement SEO uniquement",
                "Pour compresser les données",
                "Pour chiffrer les échanges et empêcher l'interception des identifiants",
                "Pour accélérer le chargement de la page"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! HTTPS chiffre le canal de communication.",
            messageForIncorrectAnswer: "Incorrect. HTTPS est vital pour la confidentialité et l'intégrité des données.",
            explanation: "Sans HTTPS, les mots de passe et les cookies de session circulent en clair sur le réseau et peuvent être volés par une attaque Man-in-the-Middle.",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (3 questions - 1/3)
        {
            question: "Quel est l'objectif principal du protocole OAuth 2.0 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "L'authentification des utilisateurs",
                "L'autorisation (délégation d'accès)",
                "Le chiffrement des mots de passe",
                "La gestion des sessions serveur"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! OAuth 2.0 est un protocole d'autorisation permettant à une application d'accéder aux ressources d'un utilisateur sur un autre service.",
            messageForIncorrectAnswer: "Incorrect. OAuth 2.0 est conçu pour l'autorisation. Pour l'authentification, on utilise souvent OpenID Connect par-dessus.",
            explanation: "OAuth 2.0 permet de donner des droits d'accès (scopes) à une application tierce sans partager ses identifiants.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "À quoi sert l'attribut 'HttpOnly' sur un cookie de session ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "À forcer l'envoi du cookie uniquement via HTTPS",
                "À empêcher l'accès au cookie via JavaScript",
                "À rendre le cookie accessible uniquement sur le domaine d'origine",
                "À chiffrer le contenu du cookie"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Bravo ! Cela protège le cookie contre les attaques XSS (Cross-Site Scripting).",
            messageForIncorrectAnswer: "Incorrect. HttpOnly empêche l'accès via JavaScript (`document.cookie`).",
            explanation: "Si un attaquant injecte du script malveillant (XSS), il ne pourra pas lire les cookies marqués HttpOnly, protégeant ainsi la session.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle attaque consiste à essayer toutes les combinaisons possibles de mots de passe ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Phishing",
                "Attaque par force brute",
                "Injection SQL",
                "Man-in-the-Middle"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! C'est une méthode exhaustive pour deviner un mot de passe.",
            messageForIncorrectAnswer: "Incorrect. C'est l'attaque par force brute.",
            explanation: "Les attaques par force brute testent systématiquement les combinaisons. On s'en protège en limitant les tentatives ou en utilisant des mots de passe longs et complexes.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (3 questions - 1/3)
        {
            question: "Dans une gestion de session côté serveur, qu'est-ce qui est stocké côté client (navigateur) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Toutes les données de l'utilisateur",
                "Le mot de passe chiffré",
                "Un identifiant de session (Session ID)",
                "Rien du tout"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! Le client ne garde que l'ID de session, généralement dans un cookie.",
            messageForIncorrectAnswer: "Incorrect. Seul l'identifiant de session est stocké côté client.",
            explanation: "Le Session ID permet au serveur de retrouver les données de session correspondantes stockées de son côté (mémoire, BDD, Redis...).",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quel attribut de cookie permet de se protéger contre les attaques CSRF (Cross-Site Request Forgery) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Secure",
                "HttpOnly",
                "SameSite",
                "Domain"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! L'attribut SameSite contrôle si les cookies sont envoyés avec les requêtes cross-site.",
            messageForIncorrectAnswer: "Incorrect. C'est l'attribut SameSite.",
            explanation: "SameSite (avec les valeurs Strict ou Lax) empêche le navigateur d'envoyer le cookie lors de requêtes provenant d'un site tiers.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est la principale différence entre JWT (JSON Web Token) et les sessions traditionnelles ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "JWT stocke l'état côté serveur, les sessions côté client",
                "JWT est stateless (sans état côté serveur), les sessions sont stateful",
                "JWT est moins sécurisé que les sessions",
                "JWT nécessite toujours une base de données"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous comprenez l'architecture stateless vs stateful.",
            messageForIncorrectAnswer: "Incorrect. La différence clé est que JWT est stateless.",
            explanation: "Avec JWT, toutes les informations d'authentification sont dans le token (côté client). Le serveur n'a pas besoin de stocker d'état de session, ce qui facilite la scalabilité mais nécessite une gestion rigoureuse de la sécurité (signature, expiration, révocation).",
            point: 20,
            difficulty: "expert"
        }
    ]
};
