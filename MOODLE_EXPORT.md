# 📚 Export Moodle - Guide d'utilisation

Ce fichier vous guide pour exporter et importer les quiz du cours TW3 dans Moodle.

## 🎯 Méthode 1: Utiliser le fichier pré-généré

Le fichier `examen.xml` à la racine du repository contient un export complet de tous les quiz au format Moodle XML.

### Importation dans Moodle

1. Téléchargez le fichier `examen.xml`
2. Connectez-vous à votre instance Moodle en tant qu'enseignant/administrateur
3. Accédez à votre cours
4. Allez dans **Banque de questions** → **Importer**
5. Sélectionnez le format **Moodle XML**
6. Choisissez le fichier `examen.xml`
7. Cliquez sur **Importer**

Les questions seront organisées en catégories:
- TW3/Docker (15 questions)
- TW3/React (15 questions)
- TW3/Authentification (13 questions)
- TW3/Next.js (20 questions)
- TW3/NPM (12 questions)
- TW3/Tooling (9 questions)
- TW3/MongoDB (15 questions)
- TW3/Git (9 questions)
- TW3/Node.js (9 questions)

**Total: 117 questions**

## 🚀 Méthode 2: Générer un export à jour

Si le contenu des quiz a été modifié, vous pouvez générer un export à jour via l'API.

### Prérequis
- Le serveur Next.js doit être lancé

### Étapes

1. **Démarrer le serveur de développement:**
   ```bash
   npm install
   npm run dev
   ```

2. **Télécharger l'export XML:**
   
   **Via navigateur:**
   ```
   http://localhost:3000/api/quiz-moodle
   ```
   
   **Via curl:**
   ```bash
   curl http://localhost:3000/api/quiz-moodle -o tw3-quiz-moodle.xml
   ```
   
   **Via wget:**
   ```bash
   wget http://localhost:3000/api/quiz-moodle -O tw3-quiz-moodle.xml
   ```

3. **Importer dans Moodle** (même procédure que la Méthode 1)

## 📊 Contenu exporté

### Types de questions
- **Questions à choix unique** (108 questions)
  - Une seule bonne réponse
  - 100% des points pour la bonne réponse
  - 0% pour les mauvaises réponses

- **Questions à choix multiples** (9 questions)
  - Plusieurs bonnes réponses possibles
  - Points distribués équitablement entre les bonnes réponses
  - 0% pour les mauvaises réponses

### Fonctionnalités incluses
✅ **Feedback personnalisé** par réponse incorrecte
✅ **Explications générales** pour chaque question
✅ **Attribution de points** (10-20 points par question selon la difficulté)
✅ **Emojis et caractères Unicode** préservés
✅ **Mélange automatique** des réponses activé
✅ **Numérotation alphabétique** (a, b, c, d...)

### Modules exclus
- ❌ UX-UI (exclu volontairement)

## 🔧 Configuration Moodle appliquée

Les paramètres suivants sont automatiquement configurés dans le XML:

```xml
<single>true/false</single>           <!-- Choix unique ou multiple -->
<shuffleanswers>true</shuffleanswers> <!-- Mélanger les réponses -->
<answernumbering>abc</answernumbering> <!-- Numérotation alphabétique -->
<penalty>0.3333333</penalty>           <!-- Pénalité pour mauvaises réponses -->
```

## 📝 Structure des catégories

Les questions sont organisées selon cette hiérarchie:

```
$course$/top/
└── TW3/
    ├── Docker/
    ├── React/
    ├── Authentification/
    ├── Next.js/
    ├── NPM/
    ├── Tooling/
    ├── MongoDB/
    ├── Git/
    └── Node.js/
```

## 🛠️ Dépannage

### Le XML ne s'importe pas dans Moodle

1. **Vérifiez la version de Moodle**: Le format est compatible avec Moodle 3.9+ et 4.x
2. **Vérifiez les permissions**: Assurez-vous d'avoir les droits d'importation dans le cours
3. **Vérifiez l'encodage**: Le fichier doit être en UTF-8

### Les emojis ne s'affichent pas correctement

- Assurez-vous que votre instance Moodle supporte UTF-8
- Vérifiez les paramètres de langue de Moodle

### Les catégories ne sont pas créées

- Si les catégories existent déjà, Moodle ajoutera les questions aux catégories existantes
- Vous pouvez modifier le chemin de catégorie dans l'import si nécessaire

## 📚 Documentation complémentaire

Pour plus de détails sur l'API d'export:
- Consultez `app/api/quiz-moodle/README.md`

Pour plus d'informations sur le format Moodle XML:
- [Documentation officielle Moodle](https://docs.moodle.org/en/Moodle_XML_format)
- [Guide d'import de questions](https://docs.moodle.org/en/Question_bank#Importing_questions)

## ⚙️ Personnalisation

Si vous souhaitez modifier le format d'export, éditez le fichier:
```
app/api/quiz-moodle/route.ts
```

Puis regénérez l'export avec la Méthode 2.

## 🔄 Mise à jour du fichier examen.xml

Pour mettre à jour le fichier `examen.xml` dans le repository après des modifications:

```bash
# Démarrer le serveur
npm run build
npm start

# Télécharger le nouvel export
curl http://localhost:3000/api/quiz-moodle -o examen.xml

# Commiter le changement
git add examen.xml
git commit -m "Update Moodle exam export"
```

## 📞 Support

En cas de problème:
1. Vérifiez la validité du XML avec un validateur en ligne
2. Consultez les logs Moodle lors de l'import
3. Ouvrez une issue sur le repository GitHub
