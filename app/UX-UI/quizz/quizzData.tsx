import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "🎨🧠 Quiz sur l'UX/UI Design",
    quizSynopsis: <>📝 Ce quiz est conçu pour tester vos connaissances sur les principes fondamentaux de l'UX/UI Design. À travers ces questions, vous évaluerez votre compréhension des concepts clés liés à l'expérience utilisateur (UX) et à l'interface utilisateur (UI).<br/>
        ✅ Prenez quelques instants pour répondre aux questions et vérifier votre maîtrise des bases de l'UX/UI Design. Bonne chance !</>,
    questions: [
        // 🟢 Questions faciles (4 questions - 1/3)
        {
            question: "Qu'est-ce que l'UX Design ?",
            questionType: "text",
            answers: [
                "La conception de l'interface utilisateur",
                "L'expérience utilisateur, centrée sur la satisfaction et l'efficacité de l'utilisateur",
                "La programmation des fonctionnalités d'un site web",
                "L'optimisation du référencement d'un site"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! L'UX Design se concentre sur la satisfaction et l'efficacité de l'utilisateur.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'L'expérience utilisateur, centrée sur la satisfaction et l'efficacité de l'utilisateur'.",
            explanation: "L'UX (User Experience) Design se concentre sur l'expérience globale de l'utilisateur avec un produit, incluant la facilité d'utilisation, l'accessibilité et la satisfaction.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle est la différence principale entre l'UX Design et l'UI Design ?",
            questionType: "text",
            answers: [
                "L'UX Design se concentre sur l'expérience globale de l'utilisateur, tandis que l'UI Design se focalise sur l'aspect visuel et l'interaction.",
                "L'UX Design concerne la programmation, et l'UI Design concerne le design graphique.",
                "L'UX Design est uniquement utilisé pour les applications mobiles, tandis que l'UI Design est pour les sites web.",
                "Il n'y a pas de différence, ce sont des synonymes."
            ],
            correctAnswer: [1],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! L'UX Design se concentre sur l'expérience globale, tandis que l'UI Design se focalise sur l'aspect visuel et l'interaction.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'L'UX Design se concentre sur l'expérience globale de l'utilisateur, tandis que l'UI Design se focalise sur l'aspect visuel et l'interaction.'.",
            explanation: "L'UX concerne le parcours et les émotions de l'utilisateur, tandis que l'UI concerne les éléments visuels concrets (boutons, couleurs, typographie).",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Parmi les principes de design visuel suivants, lequel n'est pas inclus dans la règle CRAP ?",
            questionType: "text",
            answers: [
                "Contraste",
                "Répétition",
                "Alignement",
                "Proximité",
                "Simplicité"
            ],
            correctAnswer: [5],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! La simplicité n'est pas incluse dans la règle CRAP.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Simplicité'.",
            helpMessages: {
                0: "💡 Le Contraste FAIT partie de CRAP ! C'est le 'C' de l'acronyme (Contrast, Repetition, Alignment, Proximity). 📖 Voir le cours: /UX-UI/crap",
                1: "💡 La Répétition FAIT partie de CRAP ! C'est le 'R' de l'acronyme. La simplicité, bien qu'importante, n'en fait pas partie. 📖 Voir le cours: /UX-UI/crap",
                2: "💡 L'Alignement FAIT partie de CRAP ! C'est le 'A' de l'acronyme. La simplicité est un autre principe, mais pas dans CRAP. 📖 Voir le cours: /UX-UI/crap",
                3: "💡 La Proximité FAIT partie de CRAP ! C'est le 'P' de l'acronyme. CRAP contient 4 principes, pas 5. 📖 Voir le cours: /UX-UI/crap"
            },
            explanation: "CRAP signifie Contrast (Contraste), Repetition (Répétition), Alignment (Alignement), Proximity (Proximité). Ce sont les 4 principes fondamentaux du design visuel.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quel outil est couramment utilisé pour le prototypage en UX/UI Design ?",
            questionType: "text",
            answers: [
                "Figma",
                "Photoshop",
                "Visual Studio Code",
                "WordPress"
            ],
            correctAnswer: [1],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Figma est couramment utilisé pour le prototypage en UX/UI Design.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Figma'.",
            helpMessages: {
                1: "💡 Photoshop est excellent pour éditer des images, mais Figma est SPÉCIFIQUEMENT conçu pour le design UI/UX et le prototypage collaboratif. 📖 Voir le cours: /UX-UI/conception",
                2: "💡 VS Code est un éditeur de CODE, pas un outil de design ! Pour le prototypage UI/UX, utilisez Figma, Sketch ou Adobe XD. 📖 Voir le cours: /UX-UI/conception",
                3: "💡 WordPress est un CMS pour créer des sites web, pas un outil de prototypage ! Figma permet de designer des interfaces avant de les développer. 📖 Voir le cours: /UX-UI/conception"
            },
            explanation: "Figma est un outil de design collaboratif basé sur le web, très populaire pour créer des maquettes, prototypes et systèmes de design.",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (4 questions - 1/3)
        {
            question: "Qu'est-ce que le contraste en design visuel ?",
            questionType: "text",
            answers: [
                "L'utilisation de couleurs similaires pour créer une harmonie",
                "L'utilisation d'éléments répétitifs pour renforcer la cohérence",
                "L'utilisation de différences marquées entre les éléments pour attirer l'attention",
                "L'alignement des éléments pour créer une structure claire"
            ],
            correctAnswer: [3],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Le contraste implique l'utilisation de différences marquées pour attirer l'attention.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'L'utilisation de différences marquées entre les éléments pour attirer l'attention'.",
            explanation: "Le contraste permet de créer une hiérarchie visuelle en différenciant les éléments par la taille, couleur, forme ou poids, guidant l'œil de l'utilisateur.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Pourquoi la répétition est-elle importante en design UI ?",
            questionType: "text",
            answers: [
                "Pour rendre le design plus complexe",
                "Pour assurer la cohérence et renforcer l'identité visuelle",
                "Pour éviter l'alignement des éléments",
                "Pour créer des contrastes forts"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Correct ! La répétition assure la cohérence et renforce l'identité visuelle.",
            messageForIncorrectAnswer: "Incorrect. La bonne réponse est : 'Pour assurer la cohérence et renforcer l'identité visuelle'.",
            explanation: "La répétition d'éléments visuels (couleurs, formes, typographie) crée une unité et aide l'utilisateur à reconnaître et comprendre l'interface plus rapidement.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un persona en UX Design ?",
            questionType: "text",
            answers: [
                "Un template de site web",
                "Une représentation fictive d'un utilisateur type basée sur des données réelles",
                "Un outil de prototypage",
                "Un framework CSS"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Un persona représente un utilisateur type.",
            messageForIncorrectAnswer: "Incorrect. Un persona est un outil de recherche utilisateur.",
            explanation: "Les personas sont des archétypes d'utilisateurs créés à partir de recherches, incluant leurs objectifs, motivations et frustrations, pour guider les décisions de design.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Qu'est-ce que la loi de Fitts en UX Design ?",
            questionType: "text",
            answers: [
                "Plus un élément est grand et proche, plus il est facile et rapide à atteindre",
                "Les utilisateurs préfèrent les interfaces symétriques",
                "Les couleurs chaudes attirent plus l'attention que les froides",
                "Un site doit charger en moins de 3 secondes"
            ],
            correctAnswer: [1],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Excellent ! Vous connaissez les lois fondamentales de l'UX.",
            messageForIncorrectAnswer: "Incorrect. La loi de Fitts concerne la taille et la distance.",
            explanation: "La loi de Fitts stipule que le temps nécessaire pour atteindre une cible dépend de sa taille et de sa distance. C'est pourquoi les boutons importants doivent être grands et facilement accessibles.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (4 questions - 1/3)
        {
            question: "Qu'est-ce que l'accessibilité (a11y) en design web ?",
            questionType: "text",
            answers: [
                "La compatibilité avec tous les navigateurs",
                "La conception d'interfaces utilisables par tous, y compris les personnes en situation de handicap",
                "L'optimisation du temps de chargement",
                "La traduction multilingue du site"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! L'accessibilité concerne l'inclusion de tous les utilisateurs.",
            messageForIncorrectAnswer: "Incorrect. L'accessibilité va au-delà de la compatibilité technique.",
            explanation: "L'accessibilité (a11y) vise à rendre les interfaces utilisables par tous, incluant les personnes avec handicaps visuels, auditifs, moteurs ou cognitifs, selon les standards WCAG.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quel est le ratio de contraste minimum recommandé par les WCAG 2.1 pour le texte normal (niveau AA) ?",
            questionType: "text",
            answers: [
                "3:1",
                "4.5:1",
                "7:1",
                "10:1"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Exact ! Le ratio 4.5:1 est le minimum pour le niveau AA.",
            messageForIncorrectAnswer: "Incorrect. Le standard WCAG 2.1 niveau AA exige 4.5:1.",
            explanation: "Les WCAG (Web Content Accessibility Guidelines) recommandent un ratio de contraste minimal de 4.5:1 pour le texte normal et 3:1 pour le texte large (niveau AA) pour assurer la lisibilité.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Qu'est-ce que la loi de Hick en UX Design ?",
            questionType: "text",
            answers: [
                "Plus il y a de choix, plus le temps de décision augmente",
                "Les utilisateurs scannent les pages en forme de F",
                "Les éléments similaires sont perçus comme un groupe",
                "Les utilisateurs préfèrent les interfaces familières"
            ],
            correctAnswer: [1],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Bravo ! Vous maîtrisez les lois cognitives du design.",
            messageForIncorrectAnswer: "Incorrect. La loi de Hick concerne la prise de décision.",
            explanation: "La loi de Hick stipule que le temps nécessaire pour prendre une décision augmente avec le nombre d'options. C'est pourquoi il faut limiter les choix dans les interfaces.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Qu'est-ce qu'un Design System ?",
            questionType: "text",
            answers: [
                "Un logiciel de design graphique",
                "Un ensemble de composants, règles et standards réutilisables pour assurer la cohérence d'un produit",
                "Une méthode de gestion de projet",
                "Un framework CSS comme Bootstrap"
            ],
            correctAnswer: [2],
            answerSelectionType: "single",
            messageForCorrectAnswer: "Parfait ! Un Design System est un référentiel de composants.",
            messageForIncorrectAnswer: "Incorrect. Un Design System va au-delà d'un simple framework.",
            explanation: "Un Design System est une collection de composants réutilisables, de guidelines de design et de principes qui assurent la cohérence et accélèrent le développement (exemples: Material Design, Ant Design, Carbon).",
            point: 20,
            difficulty: "expert"
        }
    ]
};
