import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "Quizz Docker",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur Docker 🐳, une plateforme populaire de conteneurisation d'applications. À travers ces questions, vous allez évaluer votre compréhension des concepts fondamentaux, des commandes essentielles et des bonnes pratiques Docker.<br />
        Prenez quelques instants pour répondre aux questions et ainsi vérifier votre maîtrise des bases de Docker 🐳. Bonne chance !
    </>,
    questions: [
        // 🟢 Questions faciles (1/3)
        {
            question: "Qu'est-ce que Docker 🐳 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un système de gestion de base de données",
                "Un environnement de développement intégré",
                "Une plateforme de conteneurisation d'applications 🐳",
                "Un langage de programmation"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! Docker est bien une plateforme de conteneurisation.",
            messageForIncorrectAnswer: "Incorrect. Docker n'est pas ce que vous avez choisi.",
            explanation: "Docker est une plateforme qui permet de créer et de gérer des conteneurs, des unités légères et portables pour les applications logicielles.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet de lancer un nouveau conteneur 🚚 à partir d'une image 📦 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "docker run",
                "docker start",
                "docker create",
                "docker launch"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Exact ! La commande docker run lance un nouveau conteneur.",
            messageForIncorrectAnswer: "Non, ce n'est pas la bonne commande.",
            explanation: "La commande docker run permet de créer et de démarrer un nouveau conteneur à partir d'une image spécifiée.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Que signifie le terme 'image' 📦 dans le contexte de Docker 🐳 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un fichier de configuration du conteneur",
                "Une instance en cours d'exécution d'un conteneur 🚚",
                "Un modèle (template) immuable utilisé pour créer des conteneurs 🚚",
                "Un volume 💾 persistant pour stocker des données"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Très bien ! Vous avez compris le concept d'image Docker.",
            messageForIncorrectAnswer: "Ce n'est pas tout à fait correct.",
            explanation: "Dans Docker, une image est un modèle immuable utilisé pour créer des conteneurs. Elle contient le code de l'application, ses dépendances et les configurations nécessaires.",
            point: 10,
            difficulty: "facile"
        },
        // 🟡 Questions intermédiaires (1/3)
        {
            question: "Quelle commande permet de supprimer tous les conteneurs 🚚 arrêtés ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "docker rm $(docker ps -aq)",
                "docker rmi $(docker images -q)",
                "docker system prune",
                "docker container prune"
            ],
            correctAnswer: [4],
            messageForCorrectAnswer: "Excellent ! Vous connaissez la commande pour nettoyer les conteneurs inutilisés.",
            messageForIncorrectAnswer: "Pas tout à fait. Il existe une commande plus appropriée pour cela.",
            explanation: "La commande docker container prune supprime tous les conteneurs arrêtés. C'est une façon efficace de libérer de l'espace disque en éliminant les conteneurs non utilisés.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quel est l'avantage principal de l'utilisation de volumes 💾 Docker 🐳 ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Améliorer les performances du conteneur",
                "Permettre la persistance des données entre les redémarrages du conteneur",
                "Réduire la taille des images Docker",
                "Simplifier la gestion des réseaux entre les conteneurs"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Bien joué ! Vous avez identifié l'un des avantages clés des volumes Docker.",
            messageForIncorrectAnswer: "Ce n'est pas l'avantage principal des volumes Docker.",
            explanation: "Les volumes Docker permettent de persister les données même lorsque le conteneur est arrêté ou supprimé. Cela facilite la sauvegarde et la récupération des données importantes.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Dans un Dockerfile, quelle instruction permet de définir le répertoire de travail du conteneur ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "RUN cd /app",
                "WORKDIR /app",
                "CD /app",
                "DIR /app"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! WORKDIR est bien l'instruction pour définir le répertoire de travail.",
            messageForIncorrectAnswer: "Incorrect. WORKDIR est l'instruction appropriée.",
            explanation: "L'instruction WORKDIR définit le répertoire de travail pour toutes les instructions RUN, CMD, ENTRYPOINT, COPY et ADD qui suivent dans le Dockerfile.",
            point: 15,
            difficulty: "intermédiaire"
        },
        // 🔴 Questions expertes (1/3)
        {
            question: "Quelle est la différence entre CMD et ENTRYPOINT dans un Dockerfile ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "CMD ne peut pas être écrasé au runtime, ENTRYPOINT peut l'être",
                "ENTRYPOINT définit l'exécutable principal, CMD fournit les arguments par défaut",
                "CMD s'exécute au build, ENTRYPOINT au runtime",
                "Il n'y a pas de différence significative"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Excellent ! Vous maîtrisez les subtilités du Dockerfile.",
            messageForIncorrectAnswer: "Pas tout à fait. Ces deux instructions ont des rôles complémentaires.",
            explanation: "ENTRYPOINT définit la commande principale qui sera toujours exécutée, tandis que CMD fournit des arguments par défaut qui peuvent être écrasés au runtime. Ils sont souvent utilisés ensemble.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle stratégie permet d'optimiser la taille d'une image Docker ?",
            questionType: "text",
            answerSelectionType: "multiple",
            answers: [
                "Utiliser des images de base Alpine Linux",
                "Combiner plusieurs instructions RUN en une seule avec &&",
                "Utiliser le multi-stage build",
                "Éviter de nettoyer le cache apt après installation"
            ],
            correctAnswer: [1, 2, 3],
            messageForCorrectAnswer: "Parfait ! Vous connaissez les meilleures pratiques d'optimisation.",
            messageForIncorrectAnswer: "Pas tout à fait. Plusieurs stratégies sont correctes.",
            explanation: "Pour optimiser la taille d'une image : utiliser des images de base légères (Alpine), combiner les commandes RUN pour réduire les layers, utiliser le multi-stage build pour exclure les outils de build, et nettoyer les caches.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Dans un environnement de production, quelle est la meilleure pratique pour gérer les secrets dans Docker ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Les inclure directement dans le Dockerfile avec ENV",
                "Les passer en argument de build (ARG)",
                "Utiliser Docker Secrets ou des variables d'environnement chargées au runtime",
                "Les stocker dans l'image en tant que fichiers"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Bravo ! Vous comprenez les enjeux de sécurité avec Docker.",
            messageForIncorrectAnswer: "Attention, cette méthode n'est pas sécurisée.",
            explanation: "Les secrets ne doivent jamais être inclus dans l'image (Dockerfile ou layers). En production, utilisez Docker Secrets (Swarm), Kubernetes Secrets, ou des variables d'environnement injectées au runtime depuis un gestionnaire de secrets.",
            point: 20,
            difficulty: "expert"
        }
    ]
};
