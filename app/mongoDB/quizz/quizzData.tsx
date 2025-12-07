import { QuizData } from "@/components/quiz/types";

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
            helpMessages: {
                0: "💡 Non, SQL est toujours utilisé ! NoSQL signifie 'Not Only SQL' - c'est une approche complémentaire, pas exclusive. 📖 Voir le cours: /mongoDB/introduction",
                2: "💡 Pas 'New' mais 'Not Only' ! NoSQL indique qu'il existe d'autres modèles de données au-delà du relationnel SQL. 📖 Voir: https://www.mongodb.com/nosql-explained",
                3: "💡 Pas 'Non-Structured' mais 'Not Only' ! NoSQL peut avoir des structures (comme les documents JSON en MongoDB). 📖 Voir le cours: /mongoDB/introduction"
            },
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
            helpMessages: {
                0: "💡 XML n'est pas utilisé par MongoDB ! MongoDB utilise BSON (Binary JSON), plus performant et avec plus de types. 📖 Voir le cours: /mongoDB/bson",
                1: "💡 Presque ! Vous manipulez du JSON, mais MongoDB stocke en BSON (Binary JSON) en interne pour les performances. 📖 Voir: https://www.mongodb.com/docs/manual/reference/bson-types/",
                3: "💡 CSV est un format tabulaire ! MongoDB utilise BSON (Binary JSON) pour stocker des documents structurés. 📖 Voir le cours: /mongoDB/bson"
            },
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
            helpMessages: {
                0: "💡 'addOne()' n'existe pas en MongoDB ! Utilisez 'insertOne()' pour insérer un document. 📖 Voir le cours: /mongoDB/crud",
                1: "💡 'insert()' est obsolète depuis MongoDB 3.2 ! Utilisez 'insertOne()' ou 'insertMany()' selon vos besoins. 📖 Voir: https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/",
                3: "💡 'push()' n'existe pas en MongoDB ! C'est une méthode JavaScript de tableaux. Utilisez 'insertOne()'. 📖 Voir le cours: /mongoDB/crud"
            },
            explanation: "`insertOne()` insère un seul document, tandis que `insertMany()` en insère plusieurs.",
            point: 10,
            difficulty: "facile",
            codeSnippet: {
                code: `// Insérer un document
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 25
});`,
                language: "javascript",
                title: "insertOne() dans MongoDB"
            }
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
            helpMessages: {
                0: "💡 'all()' n'existe pas en MongoDB ! Utilisez 'find()' sans paramètres pour tout récupérer. 📖 Voir le cours: /mongoDB/requetes",
                1: "💡 'get()' n'est pas une méthode MongoDB ! Utilisez 'find()' pour les requêtes de lecture. 📖 Voir: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/",
                3: "💡 'search()' n'est pas la méthode standard ! Utilisez 'find()' pour les requêtes MongoDB. 📖 Voir le cours: /mongoDB/requetes"
            },
            explanation: "Sans arguments, `find()` retourne un curseur vers tous les documents de la collection.",
            point: 15,
            difficulty: "intermédiaire",
            codeSnippet: {
                code: `// Récupérer tous les documents
db.users.find()

// Récupérer avec un filtre
db.users.find({ age: { $gte: 18 } })

// Récupérer avec projection (sélection de champs)
db.users.find(
  { age: { $gte: 18 } },
  { name: 1, email: 1, _id: 0 }
)

// Chaîner avec d'autres méthodes
db.users.find()
  .sort({ name: 1 })
  .limit(10)
  .skip(5)`,
                language: "javascript",
                title: "Utilisation de find() en MongoDB"
            }
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
            helpMessages: {
                0: "💡 'top()' n'existe pas en MongoDB ! Utilisez 'limit(n)' pour limiter le nombre de résultats. 📖 Voir le cours: /mongoDB/requetes",
                2: "💡 'take()' est une méthode LINQ (.NET), pas MongoDB ! En MongoDB, c'est 'limit()'. 📖 Voir: https://www.mongodb.com/docs/manual/reference/method/cursor.limit/",
                3: "💡 'max()' est pour trouver le maximum d'une valeur, pas pour limiter les résultats ! Utilisez 'limit()'. 📖 Voir le cours: /mongoDB/requetes"
            },
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
            helpMessages: {
                0: "💡 MongoDB n'utilise pas de jointures SQL ! Privilégiez l'embedding (sous-documents) pour les relations un-à-un ou un-à-peu. 📖 Voir le cours: /mongoDB/modelisation",
                1: "💡 MongoDB n'a pas de 'tables' mais des 'collections' ! Et pour un-à-un, privilégiez l'embedding dans le même document. 📖 Voir: https://www.mongodb.com/docs/manual/core/data-model-design/",
                3: "💡 Dupliquer la base de données est très inefficace ! Utilisez l'embedding (sous-documents) pour les relations simples. 📖 Voir le cours: /mongoDB/modelisation"
            },
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
            helpMessages: {
                0: "💡 'start-mongo' n'existe pas ! Utilisez 'mongosh' (nouveau shell) ou 'mongo' (ancien, obsolète). 📖 Voir le cours: /mongoDB/shell",
                2: "💡 'run-db' n'est pas une commande MongoDB ! La commande correcte est 'mongosh'. 📖 Voir: https://www.mongodb.com/docs/mongodb-shell/",
                3: "💡 'mongo-start' n'existe pas ! Utilisez 'mongosh' pour lancer le shell MongoDB. 📖 Voir le cours: /mongoDB/shell"
            },
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
            helpMessages: {
                0: "💡 L'absence de schéma rend justement l'intégrité référentielle moins stricte ! L'avantage est la flexibilité d'évolution. 📖 Voir le cours: /mongoDB/schema",
                2: "💡 Le schemaless n'optimise pas forcément l'espace disque ! Son avantage est la flexibilité pour modifier la structure. 📖 Voir: https://www.mongodb.com/docs/manual/core/data-modeling-introduction/",
                3: "💡 Au contraire ! Sans schéma strict, n'importe quelle structure peut être insérée. L'avantage est la flexibilité, pas la validation. 📖 Voir le cours: /mongoDB/schema"
            },
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
            helpMessages: {
                0: "💡 Avec 1000+ éléments, l'embedding créerait des documents énormes (limite 16MB) ! Utilisez le referencing avec $lookup. 📖 Voir le cours: /mongoDB/relations",
                2: "💡 La duplication multiplie l'espace utilisé et pose des problèmes de cohérence ! Utilisez le referencing avec IDs. 📖 Voir: https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/",
                3: "💡 MongoDB peut gérer les relations complexes ! Utilisez le referencing (IDs) et $lookup pour les jointures. 📖 Voir le cours: /mongoDB/relations"
            },
            explanation: "Quand la relation contient beaucoup d'éléments, l'embedding peut créer des documents trop volumineux (limite 16MB). Le referencing avec des IDs et l'opérateur $lookup (équivalent de JOIN) est plus approprié pour éviter la croissance illimitée du document.",
            point: 20,
            difficulty: "expert",
            codeSnippet: {
                code: `// ❌ MAUVAIS : Embedding avec 1000+ commentaires (limite 16MB)
{ title: "Article", comments: [/* 1000+ items */] }

// ✅ BON : Referencing avec $lookup
// Collection comments : { articleId: ObjectId("..."), text: "..." }
db.articles.aggregate([
  { $lookup: { from: "comments", localField: "_id", 
               foreignField: "articleId", as: "comments" }}
]);`,
                language: "javascript",
                title: "Embedding vs Referencing"
            }
        }
    ]
};
