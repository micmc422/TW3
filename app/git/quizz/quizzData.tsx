import { QuizData } from "@/components/quiz/types";

export const quiz: QuizData = {
    quizTitle: "🐙 Quizz Git",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur Git, un système de contrôle de version distribué. À travers ces questions, vous allez évaluer votre compréhension des concepts fondamentaux de Git, de ses commandes de base, de la gestion des branches et du travail collaboratif.
        <br />
        Prenez quelques instants pour répondre aux questions et ainsi vérifier votre maîtrise des bases de Git. Bonne chance !
    </>,
    questions: [
        // 🟢 Questions faciles (4 questions - 1/3)
        {
            question: "Qu'est-ce que Git ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Un système de gestion de base de données",
                "Un environnement de développement intégré",
                "Un système de contrôle de version distribué",
                "Un langage de programmation"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! Git est bien un système de contrôle de version distribué.",
            messageForIncorrectAnswer: "Ces options sont incorrectes. Git est un outil spécifique pour la gestion de version.",
            helpMessages: {
                0: "💡 Git n'est pas une base de données ! C'est un système de contrôle de version qui suit l'historique des modifications. 📖 Voir le cours: /git/introduction",
                1: "💡 Git n'est pas un IDE comme VS Code ! C'est un outil de gestion de versions qui s'intègre avec les IDEs. 📖 Voir: https://git-scm.com/book/fr/v2",
                3: "💡 Git n'est pas un langage de programmation ! C'est un outil en ligne de commande pour gérer les versions de code. 📖 Voir le cours: /git/introduction"
            },
            explanation: "Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées à un projet au fil du temps.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet d'initialiser un nouveau dépôt Git local ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git init",
                "git create",
                "git setup",
                "git initialize"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git init initialise un nouveau dépôt Git local.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git create' n'existe pas ! Utilisez 'git init' pour initialiser un dépôt Git. 📖 Voir le cours: /git/commandes-base",
                2: "💡 'git setup' n'existe pas ! La commande correcte est 'git init'. 📖 Voir: https://git-scm.com/docs/git-init",
                3: "💡 'git initialize' n'existe pas ! La forme courte est 'git init'. 📖 Voir le cours: /git/commandes-base"
            },
            explanation: "La commande git init crée un nouveau dépôt Git dans le dossier courant. Elle initialise un sous-dossier .git qui contient tous les fichiers nécessaires au suivi de la version.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet de voir l'état actuel du dépôt Git ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git status",
                "git check",
                "git state",
                "git condition"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git status affiche l'état actuel du dépôt.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git check' n'existe pas ! Utilisez 'git status' pour voir l'état du dépôt. 📖 Voir le cours: /git/commandes-base",
                2: "💡 'git state' n'existe pas ! La commande correcte est 'git status'. 📖 Voir: https://git-scm.com/docs/git-status",
                3: "💡 'git condition' n'existe pas ! Utilisez 'git status' pour afficher l'état. 📖 Voir le cours: /git/commandes-base"
            },
            explanation: "La commande git status affiche l'état actuel du dépôt, montrant les fichiers modifiés, ajoutés ou supprimés.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet d'ajouter des fichiers à la zone de staging ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git add",
                "git stage",
                "git prepare",
                "git ready"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git add ajoute des fichiers à la zone de staging.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git stage' n'est pas une commande standard ! Utilisez 'git add' pour ajouter des fichiers au staging. 📖 Voir le cours: /git/staging",
                2: "💡 'git prepare' n'existe pas ! La commande pour préparer un commit est 'git add'. 📖 Voir: https://git-scm.com/docs/git-add",
                3: "💡 'git ready' n'existe pas ! Utilisez 'git add' pour ajouter des fichiers au staging. 📖 Voir le cours: /git/staging"
            },
            explanation: "La commande git add permet d'ajouter des fichiers à la zone de staging. On peut ajouter un fichier spécifique ou tous les fichiers modifiés avec git add .",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (4 questions - 1/3)
        {
            question: "Quelle commande permet de créer une nouvelle branche et de s'y déplacer immédiatement ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git checkout -b nom_de_la_branche",
                "git branch nom_de_la_branche",
                "git switch -c nom_de_la_branche",
                "git create nom_de_la_branche"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git checkout -b crée une nouvelle branche et s'y déplace.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git branch' crée seulement la branche SANS s'y déplacer ! Ajoutez -b avec checkout ou utilisez switch -c. 📖 Voir le cours: /git/branches",
                2: "💡 'git switch -c' est aussi correct (nouvelle syntaxe Git) ! Mais la réponse attendue est checkout -b (classique). 📖 Voir: https://git-scm.com/docs/git-switch",
                3: "💡 'git create' n'existe pas ! Utilisez 'git checkout -b' ou 'git switch -c'. 📖 Voir le cours: /git/branches"
            },
            explanation: "La commande git checkout -b nom_de_la_branche crée une nouvelle branche et s'y déplace immédiatement. C'est une forme courte de git branch nom_de_la_branche puis git checkout nom_de_la_branche. Note : git switch -c est aussi correcte avec les versions récentes de Git.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `# Méthode classique en une commande
git checkout -b ma-nouvelle-feature

# Méthode en deux étapes (équivalent)
git branch ma-nouvelle-feature
git checkout ma-nouvelle-feature

# Nouvelle syntaxe Git (2.23+)
git switch -c ma-nouvelle-feature

# Créer une branche depuis un commit spécifique
git checkout -b hotfix abc1234

# Vérifier sur quelle branche on est
git branch
# * ma-nouvelle-feature
#   main`,
                language: "bash",
                title: "Création et changement de branche"
            }
        },
        {
            question: "Quelle commande permet de fusionner une branche dans la branche active ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git merge nom_de_la_branche",
                "git join nom_de_la_branche",
                "git combine nom_de_la_branche",
                "git blend nom_de_la_branche"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git merge fusionne une branche dans la branche active.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git join' n'existe pas ! Utilisez 'git merge' pour fusionner des branches. 📖 Voir le cours: /git/merge",
                2: "💡 'git combine' n'existe pas ! La commande correcte est 'git merge'. 📖 Voir: https://git-scm.com/docs/git-merge",
                3: "💡 'git blend' n'existe pas ! Utilisez 'git merge' pour fusionner. 📖 Voir le cours: /git/merge"
            },
            explanation: "La commande git merge permet de fusionner une branche dans la branche active. Par exemple, git merge feature fusionnerait la branche 'feature' dans la branche actuelle.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `# Créer et fusionner une branche
git checkout -b feature
git commit -m "Ajout feature"
git checkout main
git merge feature  # Fusionne feature dans main`,
                language: "bash",
                title: "git merge"
            }
        },
        {
            question: "Quelle commande permet de cloner un dépôt distant sur votre machine locale ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git clone URL_du_dépôt",
                "git download URL_du_dépôt",
                "git fetch URL_du_dépôt",
                "git pull URL_du_dépôt"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git clone permet de cloner un dépôt distant.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git download' n'existe pas ! Utilisez 'git clone' pour copier un dépôt. 📖 Voir le cours: /git/remote",
                2: "💡 'git fetch' récupère les modifications SANS cloner ! Pour cloner un dépôt complet, utilisez 'git clone'. 📖 Voir: https://git-scm.com/docs/git-clone",
                3: "💡 'git pull' met à jour un dépôt existant ! Pour copier un nouveau dépôt, utilisez 'git clone'. 📖 Voir le cours: /git/remote"
            },
            explanation: "La commande git clone permet de copier un dépôt existant vers un nouveau dossier. Elle crée une copie complète du dépôt, incluant toute l'histoire des commits.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle commande permet d'envoyer vos modifications vers un dépôt distant ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git push origin nom_de_la_branche",
                "git send origin nom_de_la_branche",
                "git upload origin nom_de_la_branche",
                "git sync origin nom_de_la_branche"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git push envoie vos modifications vers un dépôt distant.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git send' n'existe pas ! Utilisez 'git push' pour envoyer des commits. 📖 Voir le cours: /git/remote",
                2: "💡 'git upload' n'existe pas ! La commande correcte est 'git push'. 📖 Voir: https://git-scm.com/docs/git-push",
                3: "💡 'git sync' n'est pas une commande Git standard ! Utilisez 'git push' pour publier vos commits. 📖 Voir le cours: /git/remote"
            },
            explanation: "La commande git push permet d'envoyer vos commits locaux vers un dépôt distant. Par exemple, git push origin main enverrait vos commits de la branche main vers le dépôt distant nommé 'origin'.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (4 questions - 1/3)
        {
            question: "Quelle commande permet d'obtenir les dernières modifications depuis un dépôt distant ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git pull origin nom_de_la_branche",
                "git fetch origin nom_de_la_branche",
                "git get origin nom_de_la_branche",
                "git receive origin nom_de_la_branche"
            ],
            correctAnswer: [1],
            messageForCorrectAnswer: "Correct ! La commande git pull obtient les dernières modifications depuis un dépôt distant.",
            messageForIncorrectAnswer: "Ces options ne sont pas correctes. La commande correcte est différente.",
            helpMessages: {
                1: "💡 'git fetch' télécharge SANS fusionner ! git pull = git fetch + git merge automatique. 📖 Voir le cours: /git/pull-fetch",
                2: "💡 'git get' n'existe pas ! Utilisez 'git pull' pour récupérer ET fusionner. 📖 Voir: https://git-scm.com/docs/git-pull",
                3: "💡 'git receive' n'existe pas ! La commande correcte est 'git pull'. 📖 Voir le cours: /git/pull-fetch"
            },
            explanation: "La commande git pull combine les actions de git fetch et git merge. Elle récupère les changements depuis le dépôt distant et les fusionne dans votre branche locale.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est la différence entre 'git fetch' et 'git pull' ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git fetch télécharge et fusionne, git pull télécharge uniquement",
                "git fetch télécharge uniquement, git pull télécharge et fusionne",
                "Il n'y a aucune différence",
                "git fetch est pour les branches, git pull pour les commits"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous comprenez la nuance entre fetch et pull.",
            messageForIncorrectAnswer: "Incorrect. Il y a une différence importante.",
            helpMessages: {
                0: "💡 C'est l'inverse ! fetch télécharge SANS fusionner, pull télécharge ET fusionne automatiquement. 📖 Voir le cours: /git/pull-fetch",
                2: "💡 Il y a une différence cruciale ! fetch est plus sûr (télécharge sans modifier), pull fusionne automatiquement. 📖 Voir: https://git-scm.com/docs/git-fetch",
                3: "💡 Tous deux travaillent sur les branches ! La différence est que fetch ne fusionne PAS, pull oui. 📖 Voir le cours: /git/pull-fetch"
            },
            explanation: "git fetch récupère les changements du dépôt distant mais ne les fusionne pas automatiquement. git pull fait un fetch suivi d'un merge automatique. fetch est plus sûr pour inspecter les changements avant de les intégrer.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Que fait la commande 'git rebase' ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Crée une nouvelle branche à partir de la branche actuelle",
                "Réapplique les commits d'une branche sur une autre base",
                "Supprime tous les commits non poussés",
                "Fusionne deux branches avec un commit de merge"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Excellent ! Vous maîtrisez les concepts avancés de Git.",
            messageForIncorrectAnswer: "Pas tout à fait. Le rebase est une opération plus sophistiquée.",
            helpMessages: {
                0: "💡 Créer une branche c'est 'git branch' ! rebase RÉAPPLIQUE vos commits sur une nouvelle base pour un historique linéaire. 📖 Voir le cours: /git/rebase",
                2: "💡 rebase ne supprime rien ! Il RÉÉCRIT l'historique en rejouant vos commits sur une nouvelle base. 📖 Voir: https://git-scm.com/docs/git-rebase",
                3: "💡 C'est le rôle de merge ! rebase crée un historique LINÉAIRE sans commit de fusion. 📖 Voir le cours: /git/rebase"
            },
            explanation: "git rebase réapplique vos commits au-dessus d'une autre base (branche), créant un historique linéaire. Contrairement à merge, il ne crée pas de commit de fusion. Attention : ne jamais rebaser des commits déjà partagés publiquement.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `# REBASE : historique linéaire (pas de commit de fusion)
git checkout feature
git rebase main  # Réapplique les commits de feature sur main
# ⚠️ Ne JAMAIS rebaser des commits publics !`,
                language: "bash",
                title: "git rebase - historique linéaire"
            }
        },
        {
            question: "Comment annuler le dernier commit sans perdre les modifications ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "git reset --hard HEAD~1",
                "git reset --soft HEAD~1",
                "git revert HEAD",
                "git undo HEAD"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous connaissez les options de reset.",
            messageForIncorrectAnswer: "Attention, certaines options peuvent faire perdre du travail.",
            helpMessages: {
                0: "💡 --hard SUPPRIME les modifications ! Utilisez --soft pour garder les changements en staging. 📖 Voir le cours: /git/reset",
                2: "💡 revert crée un NOUVEAU commit inversé (bon pour l'historique public), mais reset --soft annule simplement le commit. 📖 Voir: https://git-scm.com/docs/git-reset",
                3: "💡 'git undo' n'existe pas ! Utilisez 'git reset --soft HEAD~1' pour annuler sans perdre les modifications. 📖 Voir le cours: /git/reset"
            },
            explanation: "git reset --soft HEAD~1 annule le dernier commit mais garde les modifications en zone de staging. --hard supprimerait les modifications (dangereux), et revert créerait un nouveau commit inversé (mieux pour l'historique public).",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `# reset --soft : garde les modifs en staging
git reset --soft HEAD~1

# reset --hard : ⚠️ SUPPRIME les modifications
git reset --hard HEAD~1

# revert : crée un commit inversé (historique public)
git revert HEAD`,
                language: "bash",
                title: "Annuler un commit"
            }
        }
    ]
};
