import { QuizData } from "@/components/quiz/types";

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
            helpMessages: {
                0: "💡 C'est l'inverse ! L'identification ne vérifie rien, elle déclare juste l'identité (ex: 'Je suis Alice'). L'authentification prouve ensuite cette identité. 📖 Voir le cours: /authentification/fondamentaux",
                2: "💡 Non, ce sont deux étapes distinctes ! L'identification c'est 'Qui êtes-vous ?' et l'authentification c'est 'Prouvez-le !'. 📖 Voir le cours: /authentification/fondamentaux",
                3: "💡 L'ordre est crucial ! D'abord on s'identifie (déclarer qui on est), puis on s'authentifie (prouver qu'on est bien cette personne). 📖 Voir le cours: /authentification/fondamentaux"
            },
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
            helpMessages: {
                0: "💡 Non, Basic Auth n'utilise pas de chiffrement AES. C'est un simple encodage Base64, très facile à décoder ! 📖 Voir: https://developer.mozilla.org/fr/docs/Web/HTTP/Authentication",
                1: "💡 Heureusement non ! Les identifiants ne sont jamais dans l'URL avec Basic Auth. Ils sont dans l'en-tête HTTP 'Authorization'. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/HTTP/Authentication",
                3: "💡 Le hachage MD5 est utilisé pour stocker des mots de passe, pas pour les transmettre. Basic Auth utilise Base64 (réversible !). 📖 Voir le cours: /authentification/protocoles"
            },
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
            helpMessages: {
                0: "💡 Bien que HTTPS améliore le SEO, ce n'est qu'un effet secondaire. Le but principal est la SÉCURITÉ ! 📖 Voir le cours: /authentification/securite",
                1: "💡 La compression n'est pas l'objectif de HTTPS. Le protocole SSL/TLS sert à CHIFFRER les communications pour les protéger. 📖 Voir: https://developer.mozilla.org/fr/docs/Glossary/HTTPS",
                3: "💡 En fait, HTTPS peut parfois ralentir légèrement (overhead du chiffrement), mais c'est un prix négligeable pour la sécurité ! 📖 Voir le cours: /authentification/securite"
            },
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
            helpMessages: {
                0: "💡 OAuth 2.0 n'est PAS un protocole d'authentification ! Pour l'authentification, utilisez OpenID Connect (construit sur OAuth 2.0). 📖 Voir: https://oauth.net/2/",
                2: "💡 OAuth 2.0 ne s'occupe pas du chiffrement des mots de passe. Son rôle est de déléguer des droits d'accès via des tokens. 📖 Voir le cours: /authentification/oauth",
                3: "💡 La gestion de session est un concept différent. OAuth 2.0 délègue des autorisations via des tokens d'accès. 📖 Voir le cours: /authentification/oauth"
            },
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
            helpMessages: {
                0: "💡 C'est l'attribut 'Secure' qui force HTTPS, pas HttpOnly ! HttpOnly protège contre les scripts malveillants (XSS). 📖 Voir le cours: /authentification/cookies",
                2: "💡 Ça c'est le rôle de l'attribut 'Domain' ! HttpOnly empêche JavaScript d'accéder au cookie via document.cookie. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies",
                3: "💡 HttpOnly ne chiffre rien ! Il empêche simplement JavaScript de lire le cookie, protégeant ainsi contre le vol par XSS. 📖 Voir le cours: /authentification/cookies"
            },
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
            helpMessages: {
                0: "💡 Le phishing est une attaque d'ingénierie sociale (faux emails/sites). La force brute teste automatiquement toutes les combinaisons. 📖 Voir le cours: /authentification/attaques",
                2: "💡 L'injection SQL exploite des failles dans les requêtes de base de données, pas les mots de passe directement. 📖 Voir: https://owasp.org/www-community/attacks/SQL_Injection",
                3: "💡 Le Man-in-the-Middle intercepte les communications. L'attaque par force brute teste systématiquement toutes les combinaisons possibles. 📖 Voir le cours: /authentification/attaques"
            },
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
            helpMessages: {
                0: "💡 Stocker toutes les données côté client serait très dangereux ! Seul un identifiant unique (Session ID) est conservé. 📖 Voir le cours: /authentification/sessions",
                1: "💡 Jamais de mot de passe côté client ! Même chiffré, c'est un risque. Seul un Session ID aléatoire est stocké. 📖 Voir le cours: /authentification/securite",
                3: "💡 Il y a bien quelque chose ! Le Session ID est nécessaire pour que le serveur reconnaisse l'utilisateur à chaque requête. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/HTTP/Session"
            },
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
            messageForIncorrectAnswer: "Incorrect. SameSite est la réponse.",
            helpMessages: {
                0: "💡 'Secure' garantit que le cookie n'est envoyé que via HTTPS, mais ne protège pas contre CSRF ! C'est 'SameSite' qui empêche l'envoi cross-site. 📖 Voir le cours: /authentification/cookies",
                1: "💡 'HttpOnly' empêche JavaScript d'accéder au cookie (protection XSS), mais pas CSRF ! 'SameSite' contrôle l'envoi cross-site. 📖 Voir: https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies",
                3: "💡 'Domain' définit le domaine du cookie, mais ne protège pas contre CSRF ! 'SameSite' empêche l'envoi depuis d'autres sites. 📖 Voir le cours: /authentification/csrf"
            },
            explanation: "SameSite=Strict ou SameSite=Lax empêche l'envoi automatique de cookies lors de requêtes provenant d'autres sites, protégeant ainsi contre CSRF.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `// Configuration des cookies sécurisés en Express.js
app.use(session({
  name: 'sessionId',
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,     // Protection XSS : JS ne peut pas lire le cookie
    secure: true,       // HTTPS uniquement
    sameSite: 'strict', // Protection CSRF : pas d'envoi cross-site
    maxAge: 3600000     // 1 heure
  },
  resave: false,
  saveUninitialized: false
}));

// Valeurs possibles pour SameSite :
// - 'strict' : Jamais envoyé en cross-site (même liens)
// - 'lax' : Envoyé pour navigation (GET), pas pour POST cross-site
// - 'none' : Toujours envoyé (nécessite Secure=true)`,
                language: "javascript",
                title: "Configuration sécurisée des cookies de session"
            }
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
            helpMessages: {
                0: "💡 C'est l'inverse ! JWT stocke tout dans le token côté client (stateless), les sessions stockent les données côté serveur. 📖 Voir le cours: /authentification/jwt",
                2: "💡 JWT n'est pas moins sécurisé par nature, mais nécessite une gestion rigoureuse (signature, expiration, révocation). 📖 Voir: https://jwt.io/introduction",
                3: "💡 Au contraire ! L'avantage de JWT est qu'il ne nécessite PAS de base de données (stateless). Tout est dans le token signé. 📖 Voir le cours: /authentification/jwt"
            },
            explanation: "Avec JWT, toutes les informations d'authentification sont dans le token (côté client). Le serveur n'a pas besoin de stocker d'état de session, ce qui facilite la scalabilité mais nécessite une gestion rigoureuse de la sécurité (signature, expiration, révocation).",
            point: 20,
            difficulty: "expert"
        }
    ]
};
