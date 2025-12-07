# API Route: Quiz Moodle XML Export

## 📍 Endpoint

`GET /api/quiz-moodle`

## 📋 Description

Cette route API exporte toutes les données des quiz au format **Moodle XML** compatible pour l'importation directe dans Moodle. Elle collecte les données de tous les fichiers `quizzData.tsx` présents dans les modules du cours (à l'exception du module UX-UI) et les convertit en format XML Moodle standard.

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

## 📦 Format de sortie

Le fichier XML généré suit le format standard Moodle XML Quiz avec :
- Une structure `<quiz>` racine
- Des catégories pour organiser les questions par module (`TW3/NomDuModule`)
- Des questions de type `multichoice` (choix multiples)
- Support des questions à choix unique (`single=true`) et multiple (`single=false`)
- Feedback général et spécifique par réponse
- Attribution des points (grades) par question
- Support des extraits de code dans les questions

### Structure XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <!-- Catégorie pour un module -->
  <question type="category">
    <category>
      <text>$course$/top/TW3/Docker</text>
    </category>
  </question>
  
  <!-- Question à choix unique ou multiple -->
  <question type="multichoice">
    <name>
      <text>TW3/Docker - Question 1001</text>
    </name>
    <questiontext format="html">
      <text><![CDATA[<p>Qu'est-ce que Docker ?</p>]]></text>
    </questiontext>
    <generalfeedback format="html">
      <text><![CDATA[Explication générale...]]></text>
    </generalfeedback>
    <defaultgrade>10</defaultgrade>
    <single>true</single>
    <shuffleanswers>true</shuffleanswers>
    <answernumbering>abc</answernumbering>
    
    <!-- Réponses avec leur fraction (pourcentage de points) -->
    <answer fraction="100" format="html">
      <text><![CDATA[Une plateforme de conteneurisation]]></text>
      <feedback format="html">
        <text><![CDATA[Correct ! Docker est bien une plateforme de conteneurisation.]]></text>
      </feedback>
    </answer>
    <answer fraction="0" format="html">
      <text><![CDATA[Un système de gestion de base de données]]></text>
      <feedback format="html">
        <text><![CDATA[💡 Docker n'est pas une base de données...]]></text>
      </feedback>
    </answer>
    <!-- ... autres réponses ... -->
  </question>
</quiz>
```

## 🔧 Utilisation

### Télécharger le fichier XML

#### Depuis un navigateur
Visitez simplement l'URL :
```
http://localhost:3000/api/quiz-moodle
```

Le navigateur téléchargera automatiquement le fichier `tw3-quiz-moodle.xml`.

#### Avec curl
```bash
curl http://localhost:3000/api/quiz-moodle -o tw3-quiz-moodle.xml
```

#### Avec wget
```bash
wget http://localhost:3000/api/quiz-moodle -O tw3-quiz-moodle.xml
```

### Importer dans Moodle

1. Connectez-vous à votre instance Moodle en tant qu'enseignant ou administrateur
2. Accédez à votre cours
3. Allez dans **Banque de questions** > **Importer**
4. Sélectionnez le format **Moodle XML**
5. Choisissez le fichier `tw3-quiz-moodle.xml` téléchargé
6. Configurez les options d'import selon vos besoins
7. Cliquez sur **Importer**

Les questions seront organisées dans des catégories correspondant aux modules du cours (TW3/Docker, TW3/React, etc.).

## 🎨 Caractéristiques

### Questions à choix unique vs multiple
- **Choix unique** (`answerSelectionType: "single"`) : Une seule réponse correcte, 100% des points pour la bonne réponse
- **Choix multiple** (`answerSelectionType: "multiple"`) : Plusieurs réponses correctes possibles, points distribués équitablement

### Feedback personnalisé
- **Feedback correct** : Message affiché quand l'étudiant sélectionne la bonne réponse
- **Feedback incorrect** : Messages d'aide personnalisés par réponse incorrecte (champ `helpMessages`)
- **Explication générale** : Explication affichée après la réponse (champ `explanation`)

### Extraits de code
Les questions avec des extraits de code (`codeSnippet`) sont exportées avec le code formaté en HTML :
```html
<pre><code class="language-javascript">console.log('Hello');</code></pre>
```

### Points et difficulté
- Les points de chaque question sont préservés (champ `point`)
- Le niveau de difficulté (facile/intermédiaire/expert) est conservé dans les métadonnées

## ⚙️ Configuration

### Paramètres Moodle appliqués
- **Mélange des réponses** : Activé (`shuffleanswers=true`)
- **Numérotation** : Alphabétique (a, b, c, d...)
- **Pénalité** : 0.33 pour les mauvaises réponses
- **Instructions standard** : Affichées

### Échappement et sécurité
- Tous les caractères spéciaux XML sont correctement échappés (`&`, `<`, `>`, `"`, `'`)
- Les sections CDATA sont utilisées pour préserver le formatage HTML
- Les emojis et caractères Unicode sont préservés

## 🛠️ Implémentation technique

### Fichiers source
- Route API : `app/api/quiz-moodle/route.ts`
- Types : `components/quiz/types.ts`
- Quiz sources : `app/*/quizz/quizzData.tsx`

### Fonctions principales
- `generateMoodleXML()` : Génère le XML complet
- `questionToMoodleXML()` : Convertit une question en XML Moodle
- `createCategory()` : Crée une catégorie Moodle
- `reactNodeToString()` : Convertit les ReactNode en texte
- `escapeXml()` : Échappe les caractères XML spéciaux
- `escapeCDATA()` : Échappe le contenu CDATA

### Identifiants de questions
Les questions reçoivent des identifiants uniques basés sur :
- Un hash du nom du module
- L'index de la question dans le module

Cela garantit des IDs stables entre les exports.

## 📚 Ressources

- [Documentation Moodle XML format](https://docs.moodle.org/en/Moodle_XML_format)
- [Question bank import](https://docs.moodle.org/en/Question_bank#Importing_questions)
- [Multichoice question type](https://docs.moodle.org/en/Multiple_Choice_question_type)

## ⚠️ Notes importantes

### Limitations
- Le module **UX-UI** est exclu de l'export (comme pour l'API JSON)
- Les images dans les questions ne sont pas supportées dans cette version
- Les questions de type "photo" sont traitées comme du texte

### Validation
- Le XML généré est conforme au DTD Moodle XML Quiz
- Testé avec Moodle 3.9+ et 4.x
- Compatible avec l'import standard Moodle

### Maintenance
- Les données sont générées dynamiquement à chaque requête
- Aucun cache n'est appliqué
- Les modifications des quiz sont immédiatement reflétées dans l'export

## 🔄 Comparaison avec `/api/quiz-data`

| Caractéristique | `/api/quiz-data` | `/api/quiz-moodle` |
|----------------|------------------|-------------------|
| Format | JSON | XML |
| Usage | API web, développement | Import Moodle |
| Structure | Objets JavaScript | XML Moodle standard |
| Feedback | Tous les champs | Optimisé pour Moodle |
| ReactNode | Converti en texte | Converti en HTML/texte |
| Téléchargement | Non | Oui (Content-Disposition) |

## 🚀 Exemple d'utilisation avancée

### Script de déploiement automatique

```bash
#!/bin/bash
# deploy-quizzes.sh

# Télécharger le XML
curl http://localhost:3000/api/quiz-moodle -o quiz-export.xml

# Vérifier que le fichier est valide XML
xmllint --noout quiz-export.xml

# Compter les questions
echo "Nombre de questions : $(grep -c '<question type="multichoice">' quiz-export.xml)"

# Upload vers Moodle via CLI (nécessite moodle-cli configuré)
# moosh question-import -c "TW3 Course" quiz-export.xml

echo "Export terminé : quiz-export.xml"
```

### Intégration CI/CD

```yaml
# .github/workflows/export-quizzes.yml
name: Export Moodle Quizzes

on:
  push:
    paths:
      - 'app/**/quizz/quizzData.tsx'

jobs:
  export:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: npm start &
      - run: sleep 10
      - run: curl http://localhost:3000/api/quiz-moodle -o quiz-export.xml
      - uses: actions/upload-artifact@v3
        with:
          name: moodle-quiz-export
          path: quiz-export.xml
```
