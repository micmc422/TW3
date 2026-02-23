"use client";

import { type ReactNode, useRef, useCallback } from "react";

const glossary: Record<string, string> = {
  // 🌐 Web fondamentaux
  API: "Application Programming Interface – interface permettant à deux applications de communiquer entre elles.",
  REST: "Representational State Transfer – style d'architecture pour les API web utilisant les méthodes HTTP.",
  HTTP: "HyperText Transfer Protocol – protocole de communication utilisé pour transférer des pages web.",
  HTTPS: "Version sécurisée du protocole HTTP, chiffrée via TLS/SSL.",
  URL: "Uniform Resource Locator – adresse unique identifiant une ressource sur le web.",
  JSON: "JavaScript Object Notation – format léger d'échange de données, lisible par l'humain et la machine.",
  CRUD: "Create, Read, Update, Delete – les quatre opérations de base pour la gestion de données.",
  DOM: "Document Object Model – représentation arborescente d'un document HTML manipulable en JavaScript.",
  SSR: "Server-Side Rendering – rendu de la page côté serveur avant envoi au navigateur.",
  SSG: "Static Site Generation – génération de pages HTML statiques au moment du build.",
  CSR: "Client-Side Rendering – rendu de la page côté client via JavaScript dans le navigateur.",
  SPA: "Single Page Application – application web qui charge une seule page et met à jour dynamiquement le contenu.",
  SEO: "Search Engine Optimization – ensemble de techniques pour améliorer la visibilité d'un site dans les moteurs de recherche.",
  CDN: "Content Delivery Network – réseau de serveurs distribués pour diffuser du contenu rapidement.",

  "lazy loading": "Chargement différé – technique qui retarde le chargement d'une ressource (image, composant, module) jusqu'à ce qu'elle soit réellement nécessaire.",
  "code splitting": "Découpage du code JavaScript en plusieurs fichiers (chunks) chargés à la demande, pour réduire le temps de chargement initial.",
  streaming: "Technique de rendu progressif côté serveur permettant d'envoyer le HTML au navigateur par morceaux au fur et à mesure qu'il est généré.",

  // ⚛️ React
  React: "Bibliothèque JavaScript créée par Meta pour construire des interfaces utilisateur à base de composants.",
  JSX: "JavaScript XML – syntaxe permettant d'écrire du HTML directement dans du JavaScript, utilisée par React.",
  hook: "Fonction spéciale de React (useState, useEffect…) permettant d'ajouter état et effets dans un composant fonctionnel.",
  composant: "Bloc réutilisable d'interface utilisateur dans React, défini comme une fonction ou une classe.",
  props: "Propriétés passées d'un composant parent à un composant enfant en React.",
  state: "État local d'un composant React, dont le changement déclenche un nouveau rendu.",
  "Virtual DOM": "Représentation virtuelle du DOM utilisée par React pour optimiser les mises à jour de l'interface.",

  // 🚀 Next.js
  "Next.js": "Framework React créé par Vercel, offrant SSR, SSG, routage et optimisations intégrées.",
  middleware: "Fonction exécutée avant le traitement d'une requête, utilisée pour l'authentification, les redirections, etc.",
  "Server Action": "Fonction asynchrone côté serveur dans Next.js, appelable directement depuis un composant React.",
  "App Router": "Système de routage de Next.js basé sur le dossier `app/`, supportant layouts et Server Components.",

  // 📦 Node.js & npm
  "event loop": "Boucle d'événements – mécanisme central de Node.js qui gère les opérations asynchrones en exécutant les callbacks quand les tâches I/O sont terminées.",
  "Node.js": "Environnement d'exécution JavaScript côté serveur, basé sur le moteur V8 de Chrome.",
  npm: "Node Package Manager – gestionnaire de paquets par défaut de Node.js.",
  Express: "Framework minimaliste pour Node.js facilitant la création de serveurs web et d'API.",
  "package.json": "Fichier de configuration d'un projet Node.js, listant les dépendances et les scripts.",

  // 🐳 Docker
  Docker: "Plateforme de conteneurisation permettant d'empaqueter une application avec ses dépendances dans un conteneur isolé.",
  conteneur: "Instance exécutable d'une image Docker, isolée du système hôte.",
  image: "Modèle immuable utilisé par Docker pour créer des conteneurs, construit à partir d'un Dockerfile.",
  Dockerfile: "Fichier texte contenant les instructions pour construire une image Docker.",
  volume: "Mécanisme Docker permettant de persister des données en dehors du cycle de vie d'un conteneur.",
  "Docker Compose": "Outil permettant de définir et gérer des applications multi-conteneurs via un fichier YAML.",

  // 🏗️ Infrastructure & architecture
  virtualisation: "Technologie qui permet de créer des versions virtuelles de ressources matérielles (serveurs, stockage, réseau) sur une même machine physique.",
  Kubernetes: "Plateforme open source d'orchestration de conteneurs, automatisant le déploiement, la mise à l'échelle et la gestion d'applications conteneurisées.",
  orchestration: "Gestion automatisée du déploiement, de la mise à l'échelle et de la coordination de plusieurs conteneurs ou services.",
  microservices: "Architecture logicielle découpant une application en petits services indépendants, chacun responsable d'une fonctionnalité spécifique et communiquant via des API.",
  scalabilité: "Capacité d'un système à gérer une augmentation de charge (utilisateurs, données, requêtes) en ajoutant des ressources sans perte de performance.",

  // 🗄️ MongoDB
  MongoDB: "Base de données NoSQL orientée documents, stockant les données au format BSON (JSON binaire).",
  NoSQL: "Famille de bases de données non relationnelles, adaptées aux données non structurées ou semi-structurées.",
  collection: "Équivalent d'une table en SQL – regroupement de documents dans MongoDB.",
  document: "Enregistrement dans MongoDB, stocké au format BSON (similaire à JSON).",
  schéma: "Structure définissant la forme attendue des données dans une collection (via Mongoose par exemple).",
  Mongoose: "Bibliothèque ODM (Object Document Mapping) pour MongoDB et Node.js.",
  BSON: "Binary JSON – format binaire utilisé par MongoDB pour stocker les documents, plus compact et rapide que le JSON texte.",

  // 🔀 Git
  Git: "Système de contrôle de version distribué pour suivre les modifications du code source.",
  commit: "Instantané enregistré des modifications dans un dépôt Git.",
  branche: "Ligne de développement indépendante dans Git, permettant de travailler en parallèle.",
  merge: "Fusion de deux branches Git, combinant leurs historiques de commits.",
  "pull request": "Demande de fusion d'une branche dans une autre, permettant la revue de code.",

  // 🔐 Authentification
  JWT: "JSON Web Token – standard pour transmettre des informations de manière sécurisée entre deux parties.",
  OAuth: "Protocole d'autorisation permettant à une application d'accéder aux ressources d'un utilisateur sans connaître son mot de passe.",
  session: "Mécanisme côté serveur pour maintenir l'état d'un utilisateur connecté entre les requêtes.",
  cookie: "Petit fichier stocké dans le navigateur, utilisé pour conserver des données entre les requêtes HTTP.",
  Bcrypt: "Algorithme de hachage de mots de passe conçu pour être lent et résistant aux attaques par force brute.",

  // 🖥️ Système & architecture
  Hyperviseur: "Logiciel (VMware, VirtualBox, Hyper-V) qui crée et gère des machines virtuelles en partageant les ressources matérielles d'un hôte.",
  thread: "Fil d'exécution – unité de traitement la plus petite qu'un processeur peut planifier, permettant l'exécution parallèle au sein d'un même processus.",
  Heuristique: "Méthode de résolution de problèmes basée sur des règles empiriques ou l'expérience, utilisée quand une solution optimale est trop coûteuse à calculer.",

  // 🧰 Outils & formats
  MDX: "Format combinant Markdown et composants React, utilisé pour la documentation interactive.",
  TypeScript: "Sur-ensemble typé de JavaScript qui ajoute un système de types statiques.",
  Tailwind: "Framework CSS utilitaire permettant de styliser directement dans le HTML via des classes prédéfinies.",
  ESLint: "Outil d'analyse statique pour identifier les problèmes dans le code JavaScript/TypeScript.",
  Prettier: "Formateur de code automatique assurant un style cohérent dans le projet.",
};

interface GlossaryTermProps {
  word: string;
  children?: ReactNode;
}

export function GlossaryTerm({ word, children }: GlossaryTermProps) {
  const definition = glossary[word] || "Définition non trouvée.";
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const adjustPosition = useCallback(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    // Reset to default CSS position before measuring
    tooltip.style.left = "";
    tooltip.style.top = "";
    tooltip.style.bottom = "";

    const rect = tooltip.getBoundingClientRect();
    const vw = window.innerWidth;
    const pad = 8;

    // Horizontal clamping
    if (rect.left < pad) {
      tooltip.style.left = `calc(50% + ${pad - rect.left}px)`;
    } else if (rect.right > vw - pad) {
      tooltip.style.left = `calc(50% - ${rect.right - (vw - pad)}px)`;
    }

    // Vertical: if overflows top, show below instead
    if (rect.top < pad) {
      tooltip.style.bottom = "auto";
      tooltip.style.top = `calc(100% + 0.5rem)`;
    }
  }, []);

  const resetPosition = useCallback(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;
    tooltip.style.left = "";
    tooltip.style.top = "";
    tooltip.style.bottom = "";
  }, []);

  return (
    <span
      className="glossary-term"
      onMouseEnter={adjustPosition}
      onFocus={adjustPosition}
      onMouseLeave={resetPosition}
      onBlur={resetPosition}
    >
      <span
        className="underline decoration-dotted decoration-primary/50 underline-offset-2 cursor-help"
        tabIndex={0}
        aria-describedby={`glossary-${word}`}
      >
        {children || word}
      </span>
      <span
        role="tooltip"
        id={`glossary-${word}`}
        className="glossary-tooltip"
        ref={tooltipRef}
      >
        <strong>{word}</strong>
        <br />
        {definition}
      </span>
    </span>
  );
}

export default GlossaryTerm;
