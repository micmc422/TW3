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
            helpMessages: {
                0: "💡 Docker n'est pas une base de données ! C'est une plateforme qui permet d'empaqueter des applications (qui peuvent inclure des bases de données) dans des conteneurs.",
                1: "💡 Docker n'est pas un IDE comme VS Code ou IntelliJ. C'est un outil de conteneurisation qui peut être utilisé avec n'importe quel IDE.",
                3: "💡 Docker n'est pas un langage de programmation. Il utilise des fichiers de configuration (Dockerfiles) mais reste une plateforme d'infrastructure."
            },
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
            helpMessages: {
                1: "💡 `docker start` sert à redémarrer un conteneur existant qui est arrêté, pas à en créer un nouveau depuis une image.",
                2: "💡 `docker create` crée un conteneur mais ne le démarre pas automatiquement. Il faudrait ensuite utiliser `docker start`.",
                3: "💡 `docker launch` n'existe pas ! Les commandes Docker principales sont `run`, `start`, `stop`, `create`, etc."
            },
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
            helpMessages: {
                0: "💡 Une image n'est pas un simple fichier de configuration. C'est un système de fichiers complet contenant tout le nécessaire pour exécuter une application.",
                1: "💡 Attention ! Une image n'est PAS un conteneur en cours d'exécution. C'est le modèle (template) qui permet de CRÉER des conteneurs. Un conteneur est une instance d'une image.",
                3: "💡 Un volume est différent d'une image ! Les volumes servent à persister les données, tandis qu'une image est un modèle pour créer des conteneurs."
            },
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
            helpMessages: {
                0: "💡 Cette commande supprime TOUS les conteneurs (même en cours d'exécution avec -f). 'container prune' est plus sûr : il ne supprime que les conteneurs arrêtés. 📖 Voir le cours: /docker/commandes",
                1: "💡 'docker rmi' supprime des IMAGES, pas des conteneurs ! Attention à ne pas confondre images et conteneurs. 📖 Voir: https://docs.docker.com/engine/reference/commandline/rmi/",
                2: "💡 'docker system prune' est trop agressif ! Il supprime conteneurs arrêtés, images non utilisées, réseaux ET volumes. Utilisez 'container prune' pour cibler uniquement les conteneurs. 📖 Voir le cours: /docker/commandes"
            },
            explanation: "La commande docker container prune supprime tous les conteneurs arrêtés. C'est une façon efficace de libérer de l'espace disque en éliminant les conteneurs non utilisés.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `# Supprimer uniquement les conteneurs arrêtés
docker container prune

# Voir les conteneurs arrêtés avant suppression
docker ps -a --filter "status=exited"`,
                language: "bash",
                title: "Nettoyage des conteneurs"
            }
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
            helpMessages: {
                0: "💡 Les volumes n'améliorent pas directement les performances. Leur but principal est la PERSISTANCE des données au-delà du cycle de vie du conteneur. 📖 Voir le cours: /docker/volumes",
                2: "💡 Les volumes ne réduisent pas la taille des images ! Les images restent immuables. Les volumes servent à persister les données générées par les conteneurs. 📖 Voir: https://docs.docker.com/storage/volumes/",
                3: "💡 La gestion réseau utilise les réseaux Docker, pas les volumes ! Les volumes servent à stocker et persister les données. 📖 Voir le cours: /docker/volumes"
            },
            explanation: "Les volumes Docker permettent de persister les données même lorsque le conteneur est arrêté ou supprimé. Cela facilite la sauvegarde et la récupération des données importantes.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `# Créer un volume nommé
docker volume create mon-volume

# Utiliser un volume avec un conteneur
docker run -d \\
  --name mon-app \\
  -v mon-volume:/app/data \\
  nginx

# Les données dans /app/data persistent même si le conteneur est supprimé`,
                language: "bash",
                title: "Utilisation des volumes Docker"
            }
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
            helpMessages: {
                0: "💡 RUN cd /app ne persiste pas ! Chaque instruction RUN s'exécute dans un nouveau contexte. WORKDIR change le répertoire pour toutes les instructions suivantes. 📖 Voir le cours: /docker/dockerfile",
                2: "💡 CD n'est pas une instruction Dockerfile ! C'est une commande shell. Utilisez WORKDIR pour définir le répertoire de travail. 📖 Voir: https://docs.docker.com/engine/reference/builder/#workdir",
                3: "💡 DIR n'existe pas en Dockerfile ! L'instruction correcte est WORKDIR pour définir le répertoire de travail. 📖 Voir le cours: /docker/dockerfile"
            },
            explanation: "L'instruction WORKDIR définit le répertoire de travail pour toutes les instructions RUN, CMD, ENTRYPOINT, COPY et ADD qui suivent dans le Dockerfile.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]`,
                language: "dockerfile",
                title: "Exemple de Dockerfile avec WORKDIR"
            }
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
            helpMessages: {
                0: "💡 C'est l'inverse ! CMD peut être écrasé facilement (docker run image nouvelle-commande), mais ENTRYPOINT nécessite --entrypoint pour être modifié. 📖 Voir le cours: /docker/dockerfile",
                2: "💡 Les deux s'exécutent au runtime ! Aucune instruction ne s'exécute pendant le build (sauf RUN). 📖 Voir: https://docs.docker.com/engine/reference/builder/#cmd",
                3: "💡 Il y a une différence majeure ! ENTRYPOINT est difficile à écraser, CMD est facile à remplacer. On les combine souvent. 📖 Voir le cours: /docker/dockerfile"
            },
            explanation: "ENTRYPOINT définit la commande principale qui sera toujours exécutée, tandis que CMD fournit des arguments par défaut qui peuvent être écrasés au runtime. Ils sont souvent utilisés ensemble.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `# Dockerfile avec ENTRYPOINT + CMD
FROM python:3.11-slim
ENTRYPOINT ["python", "app.py"]
CMD ["--port", "8000"]

# Exécution par défaut : python app.py --port 8000
# docker run mon-image

# Écraser CMD : python app.py --port 9000
# docker run mon-image --port 9000

# Écraser ENTRYPOINT (rare) :
# docker run --entrypoint /bin/bash mon-image`,
                language: "dockerfile",
                title: "Différence entre ENTRYPOINT et CMD"
            }
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
            helpMessages: {
                3: "💡 Au contraire ! Il FAUT nettoyer le cache apt (apt-get clean && rm -rf /var/lib/apt/lists/*) pour réduire la taille de l'image. 📖 Voir le cours: /docker/optimisation"
            },
            explanation: "Pour optimiser la taille d'une image : utiliser des images de base légères (Alpine), combiner les commandes RUN pour réduire les layers, utiliser le multi-stage build pour exclure les outils de build, et nettoyer les caches.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `# ❌ Mauvaise pratique : plusieurs layers
FROM node:18
RUN npm install -g typescript
RUN npm install -g webpack
RUN apt-get update
RUN apt-get install -y curl

# ✅ Bonne pratique : un seul layer
FROM node:18-alpine
RUN npm install -g typescript webpack && \\
    apk add --no-cache curl

# ✅ Multi-stage build : image finale plus petite
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]`,
                language: "dockerfile",
                title: "Optimisation de la taille des images Docker"
            }
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
            helpMessages: {
                0: "💡 DANGER ! Les ENV dans le Dockerfile sont visibles dans l'historique de l'image (docker history). Les secrets doivent être injectés au runtime ! 📖 Voir le cours: /docker/securite",
                1: "💡 DANGER ! Les ARG sont visibles dans l'historique du build et persistent dans l'image. Ne JAMAIS utiliser ARG pour des secrets ! 📖 Voir: https://docs.docker.com/engine/swarm/secrets/",
                3: "💡 DANGER ! Les fichiers dans l'image sont visibles par quiconque y a accès. Les secrets doivent être injectés au runtime, jamais buildés dans l'image ! 📖 Voir le cours: /docker/securite"
            },
            explanation: "Les secrets ne doivent jamais être inclus dans l'image (Dockerfile ou layers). En production, utilisez Docker Secrets (Swarm), Kubernetes Secrets, ou des variables d'environnement injectées au runtime depuis un gestionnaire de secrets.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `# ❌ MAUVAIS : secret dans le Dockerfile
FROM node:18
ENV DB_PASSWORD=supersecret123  # Visible dans l'image !

# ❌ MAUVAIS : secret dans ARG
ARG API_KEY=secret123  # Visible dans docker history !

# ✅ BON : secret passé au runtime
# docker run -e DB_PASSWORD=\${DB_PASSWORD} mon-app

# ✅ MEILLEUR : Docker Secrets (Swarm)
# echo "supersecret123" | docker secret create db_password -
# docker service create --secret db_password mon-app

# ✅ MEILLEUR : Variables d'environnement depuis un fichier
# docker run --env-file .env mon-app  # .env est dans .gitignore`,
                language: "dockerfile",
                title: "Gestion sécurisée des secrets"
            }
        }
    ]
};
