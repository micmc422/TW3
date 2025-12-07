# API Route: Quiz Data Export

## 📍 Endpoint

`GET /api/quiz-data`

## 📋 Description

Cette route API exporte toutes les données des quiz au format JSON. Elle collecte les données de tous les fichiers `quizzData.tsx` présents dans les modules du cours (à l'exception du module UX-UI).

## 🎯 Modules inclus

- Docker
- React
- Authentification
- Next.js
- NPM
- Tooling
- MongoDB
- Git
- Node.js

## 📦 Format de réponse

```json
{
  "module-name": {
    "quizTitle": "Titre du quiz",
    "quizSynopsis": "Description textuelle du quiz (ReactNode converti en texte)",
    "questions": [
      {
        "question": "Texte de la question",
        "questionType": "text" | "photo",
        "answerSelectionType": "single" | "multiple",
        "answers": ["Réponse 1", "Réponse 2", ...],
        "correctAnswer": [1, 2],
        "messageForCorrectAnswer": "Message de succès",
        "messageForIncorrectAnswer": "Message d'erreur",
        "helpMessages": {
          "0": "Message d'aide pour la réponse 0",
          "1": "Message d'aide pour la réponse 1"
        },
        "explanation": "Explication de la réponse",
        "point": 10,
        "difficulty": "facile" | "intermédiaire" | "expert",
        "codeSnippet": {
          "code": "console.log('example')",
          "language": "javascript",
          "title": "Titre optionnel"
        }
      }
    ]
  }
}
```

## 🔧 Utilisation

### Récupérer toutes les données

```bash
curl http://localhost:3000/api/quiz-data
```

### Récupérer les données d'un module spécifique avec jq

```bash
curl http://localhost:3000/api/quiz-data | jq '.docker'
```

### Compter le nombre de questions par module

```bash
curl http://localhost:3000/api/quiz-data | jq 'to_entries | map({module: .key, count: (.value.questions | length)})'
```

## 🛠️ Implémentation

Le fichier source se trouve dans `app/api/quiz-data/route.ts`.

### Conversion ReactNode

Les synopsis de quiz utilisent des ReactNode (JSX) qui ne sont pas directement sérialisables en JSON. La fonction `reactNodeToString()` convertit ces éléments en texte simple :
- Les éléments `<br />` sont convertis en `\n`
- Les éléments avec enfants sont traités récursivement
- Le texte brut est préservé

## ⚠️ Notes

- Le module UX-UI est exclu de l'export
- Les données sont générées dynamiquement à chaque requête
- Le format est compatible avec la structure `QuizData` définie dans `components/quiz/types.ts`
