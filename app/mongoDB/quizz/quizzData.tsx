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
    quizTitle: "Quizz MongoDB",
    quizSynopsis: <>Ce quiz est conçu pour tester vos connaissances sur MongoDB, une base de données NoSQL orientée documents.
        <br />
        À travers ces questions, vous allez explorer les concepts clés de MongoDB, y compris le modèle de données, les opérations CRUD et la modélisation. Bonne chance !
    </>,
    questions: [
        // 🟢 Questions faciles (3 questions - 1/3)
        {
            question: "Que signifie l'acronyme NoSQL ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "No SQL allowed",
                "Not Only SQL",
                "New SQL",
                "Non-Structured Query Language"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! NoSQL signifie 'Not Only SQL', soulignant qu'il ne se limite pas au modèle relationnel SQL.",
            messageForIncorrectAnswer: "Incorrect. NoSQL signifie 'Not Only SQL'.",
            explanation: "NoSQL est une approche de gestion de données qui diffère des bases de données relationnelles traditionnelles.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quel format de données MongoDB utilise-t-il pour stocker les documents ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "XML",
                "JSON",
                "BSON",
                "CSV"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Exact ! MongoDB stocke les données au format BSON (Binary JSON).",
            messageForIncorrectAnswer: "Incorrect. Bien que cela ressemble à du JSON, MongoDB utilise le format BSON en interne.",
            explanation: "BSON est une représentation binaire de documents JSON, permettant plus de types de données et une efficacité accrue.",
            point: 10,
            difficulty: "facile"
        },
        {
            question: "Quelle commande permet d'insérer un seul document dans une collection ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "db.collection.addOne()",
                "db.collection.insert()",
                "db.collection.insertOne()",
                "db.collection.push()"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! `insertOne()` est la méthode recommandée pour insérer un document unique.",
            messageForIncorrectAnswer: "Incorrect. La commande précise est `insertOne()`.",
            explanation: "`insertOne()` insère un seul document, tandis que `insertMany()` en insère plusieurs.",
            point: 10,
            difficulty: "facile"
        },

        // 🟡 Questions intermédiaires (3 questions - 1/3)
        {
            question: "Comment récupérer tous les documents d'une collection nommée 'users' ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "db.users.all()",
                "db.users.get()",
                "db.users.find()",
                "db.users.search()"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Bravo ! `db.users.find()` retourne tous les documents de la collection.",
            messageForIncorrectAnswer: "Incorrect. La méthode standard est `find()`.",
            explanation: "Sans arguments, `find()` retourne un curseur vers tous les documents de la collection.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Quelle méthode permet de limiter le nombre de résultats retournés par une requête ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "top()",
                "limit()",
                "take()",
                "max()"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! `limit()` restreint le nombre de documents retournés.",
            messageForIncorrectAnswer: "Incorrect. C'est la méthode `limit()`.",
            explanation: "Par exemple, `db.collection.find().limit(5)` retourne les 5 premiers résultats.",
            point: 15,
            difficulty: "intermédiaire"
        },
        {
            question: "Dans la modélisation MongoDB, comment représenter une relation 'un-à-un' ou 'un-à-peu' de manière performante ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "En utilisant des jointures SQL",
                "En créant une nouvelle table",
                "En utilisant des sous-documents (embedding)",
                "En dupliquant la base de données"
            ],
            correctAnswer: [3],
            messageForCorrectAnswer: "Correct ! L'imbrication (embedding) via des sous-documents est souvent préférée.",
            messageForIncorrectAnswer: "Incorrect. On privilégie souvent les sous-documents (embedding).",
            explanation: "Les sous-documents permettent de stocker des données liées dans le même enregistrement, améliorant les performances de lecture.",
            point: 15,
            difficulty: "intermédiaire"
        },

        // 🔴 Questions expertes (3 questions - 1/3)
        {
            question: "Quelle commande permet de lancer le shell MongoDB ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "start-mongo",
                "mongosh",
                "run-db",
                "mongo-start"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Correct ! `mongosh` (ou anciennement `mongo`) lance le shell.",
            messageForIncorrectAnswer: "Incorrect. La commande est `mongosh`.",
            explanation: "`mongosh` est la nouvelle interface en ligne de commande pour interagir avec MongoDB.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quel est l'avantage principal de l'absence de schéma rigide (schemaless) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Garantir l'intégrité référentielle stricte",
                "Flexibilité pour faire évoluer la structure des données",
                "Réduire l'espace disque utilisé",
                "Empêcher l'insertion de données incorrectes"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Exact ! Cela permet d'adapter facilement la structure des données sans migrations lourdes.",
            messageForIncorrectAnswer: "Incorrect. L'avantage principal est la flexibilité.",
            explanation: "Vous pouvez ajouter de nouveaux champs à des documents sans affecter les documents existants.",
            point: 20,
            difficulty: "expert"
        },
        {
            question: "Quelle est la meilleure pratique pour représenter une relation 'un-à-plusieurs' avec beaucoup d'éléments (ex: 1000+ commentaires par article) ?",
            questionType: "text",
            answerSelectionType: "single",
            answers: [
                "Embedding : tout dans le même document",
                "Referencing : stocker les IDs et utiliser $lookup",
                "Dupliquer les données dans chaque collection",
                "Utiliser des tables SQL à la place"
            ],
            correctAnswer: [2],
            messageForCorrectAnswer: "Parfait ! Vous comprenez les patterns de modélisation avancés.",
            messageForIncorrectAnswer: "Attention, embedding n'est pas toujours la solution.",
            explanation: "Quand la relation contient beaucoup d'éléments, l'embedding peut créer des documents trop volumineux (limite 16MB). Le referencing avec des IDs et l'opérateur $lookup (équivalent de JOIN) est plus approprié pour éviter la croissance illimitée du document.",
            point: 20,
            difficulty: "expert"
        }
    ]
};
