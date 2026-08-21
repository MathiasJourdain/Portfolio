// src/data/projectsData.js
export const projectsData = [
  {
    id: "tout-venant",
    title: "Logiciel 'Tout Venant'",
    shortDesc: "Développement full-stack d'une solution logicielle complète de gestion.",
    fullDesc: "Présentation détaillée du projet 'Tout Venant'. Ce site permet de gérer les inscriptions des Mercredis en Pratique, le suivi et l'organisation avec une interface réactive.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    features: ["Gestion en temps réel", "Dashboard analytique", "Authentification sécurisée", "Présentation du programme"],
    link: "https://lafabriquedefi-calaisis.fr/intranet/developpement_fep/inscriptions_tv/",
    imageUrl: "/images/TTV.png" 
  },
  {
    id: "simulations-metiers",
    title: "Simulations & Jeux Métiers",
    shortDesc: "Création d'expériences interactives gamifiées pour la découverte de différents corps de métiers.",
    fullDesc: "Une suite d'outils interactifs et ludiques conçus pour simuler des scénarios professionnels réels et faciliter l'apprentissage. Au programme, la création de 5 jeux distincts pour couvrir différents secteurs.",
    tech: ["HTML/CSS", "JavaScript", "PHP"],
    features: ["Mini-jeux interactifs", "Scénarios à choix multiples", "Suivi des scores"],
    links: [
      {
        label: "Découvrir les jeux métiers",
        url: "https://view.genially.com/6926b8e92c531a3482150e25"
      },
      {
        label: "Tester la simulation soudure",
        url: "https://lafabriquedefi-calaisis.fr/intranet/developpement_fep/test_soudure/soudure.html"
      }
    ],
    imageUrl: "/images/Cabine.png"
  },
  {
    id: "animations-digitales",
    title: "Animations Digitales",
    shortDesc: "Mise en place d'outils numériques événementiels pour les différentes FEP thématiques.",
    fullDesc: "Création de modules web et d'animations interactives déployés lors d'événements pour engager le public de la Fabrique.Afin de montrer les partenaires présents lors des événements.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: ["Panneaux d'acceuil dynamiques", "Tableau de bord live", "Design responsive"],
    link: "#",
    imageUrl: "/images/Acceuil.png"
  },
   {
    id: "site-internet",
    title: "Site Internet",
    shortDesc: "Développement d'un site internet pour l'entreprise Kardol Groupe'.",
    fullDesc: "Création d'un site web moderne et responsive pour présenter les activités de la Fabrique d'Innovation et faciliter la communication avec les partenaires et les utilisateurs.",
    tech: ["PHP", "Node.js", "HTML", "Tailwind CSS"],
    features: ["Design responsive", "Gestion de contenu facile", "Optimisation pour les moteurs de recherche"],
    link: "https://www.groupe-kardol.fr/",
    imageUrl: "/images/Kardol.png"
  }
];

