# 📚 Export Moodle - Guide d'utilisation

Ce fichier vous guide pour exporter et importer les quiz du cours TW3 dans Moodle.

## 🎯 Méthode 1: Utiliser le fichier pré-généré

Le fichier `examen.xml` à la racine du repository contient un export sélectionné de 50 questions au format Moodle XML.

### Sélection des questions

L'export contient **50 questions** soigneusement sélectionnées selon les critères suivants:
- **50% de questions faciles** (25 questions)
- **25% de questions intermédiaires** (13 questions)
- **25% de questions expertes** (12 questions)
- **Distribution équitable entre tous les modules** (9 catégories)

### Importation dans Moodle

1. Téléchargez le fichier `examen.xml`
2. Connectez-vous à votre instance Moodle en tant qu'enseignant/administrateur
3. Accédez à votre cours
4. Allez dans **Banque de questions** → **Importer**
5. Sélectionnez le format **Moodle XML**
6. Choisissez le fichier `examen.xml`
7. Cliquez sur **Importer**

Les questions seront organisées en catégories (répartition approximative):
- TW3/Docker (~7 questions)
- TW3/React (~7 questions)
- TW3/Authentification (~7 questions)
- TW3/Next.js (~6 questions)
- TW3/NPM (~5 questions)
- TW3/Tooling (~5 questions)
- TW3/MongoDB (~5 questions)
- TW3/Git (~4 questions)
- TW3/Node.js (~4 questions)

**Total: 50 questions** (sélection équilibrée par difficulté et module)

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

### Sélection automatique (50 questions)

L'export est limité à **50 questions** avec une distribution optimale:

**Par difficulté:**
- **Questions faciles** (50% - 25 questions)
  - Points: 5-10 points
  - Concepts de base et commandes essentielles
  
- **Questions intermédiaires** (26% - 13 questions)
  - Points: 10-15 points
  - Concepts avancés et bonnes pratiques
  
- **Questions expertes** (24% - 12 questions)
  - Points: 15-20 points
  - Architectures complexes et optimisations

**Par module:**
- Distribution équitable entre les 9 modules
- Chaque module contribue proportionnellement à sa taille
- Garantit une couverture complète des sujets du cours

### Fonctionnalités incluses
✅ **Sélection intelligente** de 50 questions (50% faciles, 25% intermédiaires, 25% expertes)
✅ **Répartition équitable** entre les 9 modules du cours
✅ **Feedback personnalisé** par réponse incorrecte
✅ **Explications générales** pour chaque question
✅ **Attribution de points** (5-20 points selon la difficulté)
✅ **Emojis et caractères Unicode** préservés
✅ **Mélange automatique** des réponses activé
✅ **Numérotation alphabétique** (a, b, c, d...)

### Types de questions inclus
- **Questions à choix unique**: Une seule bonne réponse (100% des points)
- **Questions à choix multiples**: Plusieurs bonnes réponses (points distribués équitablement)

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
