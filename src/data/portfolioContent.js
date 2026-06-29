import tracfinForm from '/src/assets/projects/tracfin-form.png';
import tracfinDashboard from '/src/assets/projects/tracfin-ticket.png';
import tracfinTicket from '/src/assets/projects/tracfin-ticket.png';
import tdbExample from '/src/assets/projects/tdb-exemple-tableau.png';
import agendaFilter from '/src/assets/projects/agenda-filtre-groupe.png';
import wikijsInterface from '/src/assets/projects/wikijs-interface.png';
import wikijsStructure from '/src/assets/projects/wikijs-arborescence.png';
import wikijsDashboard from '/src/assets/projects/wikijs-tableau-de-bord.png';
import tdbSortieTests from '/src/assets/projects/tdb-sortie-tests.png';


export const projectImages = {
  tracfinForm,
  tracfinDashboard,
  tdbExample,
  agendaFilter,
  wikijsInterface,
  wikijsStructure,
  tdbSortieTests,
  tracfinTicket,
  wikijsDashboard
};

export const navItems = [
  { id: 'home', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'projects', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];


export const skillsFR = [
  {
    id: 'react',
    name: 'React',
    category: 'Front-end',
    level: 'Intermédiaire',
    relatedTo: ['portfolio-site'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Langage',
    level: 'Intermédiaire',
    relatedTo: ['portfolio-site', 'stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    level: 'Bases solides',
    relatedTo: ['portfolio-site'],
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Front-end',
    level: 'Solide',
    relatedTo: ['stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Front-end',
    level: 'Solide',
    relatedTo: ['stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Back-end',
    level: 'Bases solides',
    relatedTo: ['stage-inventory', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Front-end',
    level: 'Bases solides',
    relatedTo: ['stage-refonte-site'],
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'Outil',
    level: 'Solide',
    relatedTo: ['stage-inventory', 'stage-rdv'],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Back-end',
    level: 'Bases',
    relatedTo: ['stage-visio'],
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Outil',
    level: 'Quotidien',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-wikijs', 'alternance-autres'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Langage',
    level: 'Quotidien',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-autres'],
  },
  {
    id: 'java-reflection',
    name: 'Réflexion Java',
    category: 'Langage',
    level: 'Bases solides',
    relatedTo: ['alternance-tdb'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Données',
    level: 'Quotidien',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-autres'],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Données',
    level: 'Bases solides',
    relatedTo: ['stage-rdv', 'stage-refonte-site'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Langage',
    level: 'Intermédiaire',
    relatedTo: ['alternance-wikijs'],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'Back-end',
    level: 'Bases solides',
    relatedTo: ['alternance-wikijs'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Outil',
    level: 'Bases solides',
    relatedTo: ['alternance-wikijs', 'sae-s4-symfony'],
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'Outil',
    level: 'Quotidien',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-wikijs', 'alternance-autres'],
  },
];

export const skillsEN = [
  {
    id: 'react',
    name: 'React',
    category: 'Front-end',
    level: 'Intermediate',
    relatedTo: ['portfolio-site'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    level: 'Intermediate',
    relatedTo: ['portfolio-site', 'stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    level: 'Solid foundations',
    relatedTo: ['portfolio-site'],
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Front-end',
    level: 'Solid',
    relatedTo: ['stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Front-end',
    level: 'Solid',
    relatedTo: ['stage-inventory', 'stage-visio', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Back-end',
    level: 'Solid foundations',
    relatedTo: ['stage-inventory', 'stage-rdv', 'stage-refonte-site', 'sae-s3-rezisten', 'sae-s4-symfony'],
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Front-end',
    level: 'Solid foundations',
    relatedTo: ['stage-refonte-site'],
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'Tool',
    level: 'Solid',
    relatedTo: ['stage-inventory', 'stage-rdv'],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Back-end',
    level: 'Foundations',
    relatedTo: ['stage-visio'],
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tool',
    level: 'Daily use',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-wikijs', 'alternance-autres'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Language',
    level: 'Daily use',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-autres'],
  },
  {
    id: 'java-reflection',
    name: 'Java Reflection',
    category: 'Language',
    level: 'Solid foundations',
    relatedTo: ['alternance-tdb'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Data',
    level: 'Daily use',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-autres'],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data',
    level: 'Solid foundations',
    relatedTo: ['stage-rdv', 'stage-refonte-site'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Language',
    level: 'Intermediate',
    relatedTo: ['alternance-wikijs'],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'Back-end',
    level: 'Solid foundations',
    relatedTo: ['alternance-wikijs'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tool',
    level: 'Solid foundations',
    relatedTo: ['alternance-wikijs', 'sae-s4-symfony'],
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'Tool',
    level: 'Daily use',
    relatedTo: ['alternance-tracfin', 'alternance-tdb', 'alternance-wikijs', 'alternance-autres'],
  },
];

export const itemsFR = [
  {
    id: 'portfolio-site',
    type: 'school',
    kind: 'Projet',
    title: 'Portfolio personnel',
    period: '2026',
    summary:
      'Site bilingue pour présenter mon profil, mes expériences et mes projets avec une navigation claire.',
    impact: 'Structure réutilisable et contenu facile à mettre à jour.',
    skills: ['react', 'javascript', 'figma'],
    links: {
      demo: '#',
      source: 'https://github.com/MaluCelusniak/PortfolioReact',
    },
  },

  // ── Alternance ─────────────────────────────────────────────────────────────

  {
    id: 'alternance-tracfin',
    type: 'alternance',
    kind: 'Mission',
    title: 'Fiches de vigilance Tracfin — Atlanticlog',
    period: 'Janvier – Mars 2026',
    summary:
      "Extension d’une fonctionnalité réglementaire de Gemarcur (logiciel métier pour les administrateurs et mandataires judiciaires) : l’implémentation des fiches de vigilance anti-blanchiment Tracfin, jusque-là réservées aux dirigeants d’entreprise, à une nouvelle catégorie d’intervenants (copropriétaires, indivisaires, héritiers, locataires). Le travail a couvert l’analyse d'un module métier inconnu, l'adaptation du modèle de données, et l'implémentation complète en Java et SQL, jusqu’à la mise en production.",
    impact:
      "Fonctionnalité livrée en production sans régression, en respectant un formulaire imposé par la réglementation de l’État. Mise en place d’une nouvelle recherche de contacts qui n’existait pas dans le logiciel, et rédaction de scénarios de test détaillés pour une équipe de testeurs externe.",
    skills: ['java', 'postgresql', 'jira', 'git'],
    longDescription: [
      {
        type: 'text',
        text: 'Dans le cadre de la lutte contre le blanchiment de capitaux, les administrateurs et mandataires judiciaires (AJMJ) ont l’obligation légale de remplir des fiches de vigilance pour les personnes impliquées dans leurs dossiers. Gemarcur proposait déjà ce système pour les dirigeants d’entreprise ; une évolution législative a étendu cette obligation à une nouvelle catégorie d’intervenants, jusque-là non couverte par le logiciel.',
      },
      {
        type: 'image',
        src: tracfinForm,
        alt: 'Formulaire de fiche de vigilance Tracfin dans Gemarcur',
        caption: 'La fiche de vigilance telle qu’elle apparaît dans Gemarcur pour un intervenant civiliste.',
      },
      {
        type: 'heading',
        text: 'Le défi technique',
      },
      {
        type: 'text',
        text: "La principale difficulté venait d’une différence de structure en base de données : un dirigeant correspond directement à un contact, tandis qu’un intervenant de cette nouvelle catégorie est une entité distincte, pouvant être reliée ou non à un contact existant. Cela a nécessité l’ajout d'un nouveau champ de relation, ainsi que la création d'une fonctionnalité de recherche de contacts qui n'existait pas auparavant dans le logiciel.",
      },
      {
        type: 'list',
        items: [
          "Analyse d'un module métier que je découvrais, pour éviter toute régression sur les fonctionnalités déjà en production",
          "Conception du modèle de données et des requêtes SQL pour la nouvelle entité",
          "Implémentation Java respectant un formulaire dont le contenu est imposé par la réglementation de l'État",
          "Tests manuels en local puis scénarios de test détaillés pour une équipe de testeurs externe",
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'La fonctionnalité a été livrée en production après une phase de tests, avec deux ajustements mineurs suite aux retours des testeurs (message de confirmation, prévention des doublons). Cette mission illustre une compétence clé du développement en contexte professionnel : adapter un mécanisme existant à un nouveau contexte, plutôt que de tout reconstruire.',
      },
      {
        type: 'image',
        src: tracfinDashboard,
        alt: 'Ticket Jira parent et sous-tâches de la mission Tracfin',
        caption: 'Décomposition du ticket Jira en sous-tâches, utilisée pour structurer le travail sur un module inconnu.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'alternance-tdb',
    type: 'alternance',
    kind: 'Mission',
    title: 'Infrastructure de tests automatisés — Atlanticlog',
    period: 'Avril – Mai 2026',
    summary:
      "Conception d'une infrastructure de tests pour fiabiliser environ 730 tableaux de bord du logiciel Gemarcur, organisés en 320 familles hiérarchiques. Plutôt que de modifier une classe centrale ancienne et risquée à toucher, j'ai créé une classe complémentaire utilisant la réflexion Java pour découvrir et tester automatiquement chaque tableau de bord, puis chaque famille entière, sans intervention manuelle.",
    impact:
      "Mise en place d'un test global capable de couvrir l'ensemble du logiciel en une seule exécution, et suppression du risque d'oubli lors de l'ajout de nouveaux tableaux de bord. Une démarche d'analyse et d'optimisation d'un problème de qualité existant, plutôt qu'une reconstruction complète.",
    skills: ['java', 'java-reflection', 'postgresql', 'jira'],
    longDescription: [
      {
        type: 'text',
        text: 'Gemarcur compte environ 730 tableaux de bord (TDB), des interfaces qui permettent aux utilisateurs d\'afficher et de filtrer des données selon une liste de critères. Ces TDB sont organisés en 320 familles par héritage : un TDB parent qui sert de base, et des TDB dérivés qui le spécialisent. Des tests existaient déjà sur l\'ensemble de ces tableaux, mais ils échouaient systématiquement à chaque exécution, sans que personne ne les corrige : ils n\'apportaient donc aucune garantie réelle.',
      },
      {
        type: 'image',
        src: tdbExample,
        alt: 'Exemple de tableau de bord dans Gemarcur',
        caption: 'Un tableau de bord (TDB) avec ses critères de filtrage, tel qu\'il apparaît dans Gemarcur.',
      },
      {
        type: 'heading',
        text: 'La contrainte technique',
      },
      {
        type: 'text',
        text: 'Le logiciel s\'appuie sur une classe centrale chargée d\'instancier le bon tableau de bord à chaque fois que l\'application en a besoin. C\'est une classe ancienne, devenue très volumineuse au fil des années, et jamais retravaillée en profondeur. La modifier directement pour les besoins des tests aurait représenté un risque de régression trop important sur une partie sensible du logiciel.',
      },
      {
        type: 'heading',
        text: 'La solution mise en place',
      },
      {
        type: 'list',
        items: [
          "Création d'une classe complémentaire utilisant la réflexion Java pour scanner dynamiquement le code et découvrir automatiquement tous les TDB disponibles",
          "Cette classe ne prend le relais que si la classe d'origine ne trouve pas le tableau demandé, ce qui préserve intégralement le comportement existant",
          "Construction de la solution en trois étapes : tester tous les critères d'un TDB, tester une famille entière en un seul appel, puis exécuter un test global sur les 320 familles",
          "Appui sur Claude, l'assistant IA d'Anthropic, notamment pour avancer sur la dernière partie du développement",
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'Un test global couvre désormais l\'ensemble du logiciel en une seule exécution, et tout nouveau tableau de bord est automatiquement découvert sans intervention manuelle. Une démarche d\'analyse et d\'optimisation d\'un problème de qualité existant, plutôt qu\'une reconstruction complète.',
      },
      {
        type: 'image',
        src: '/assets/projects/tdb-sortie-tests.png',
        alt: 'Exemple de sortie de tests sur une famille de tableaux de bord',
        caption: 'Sortie produite lors de l\'exécution des tests automatisés sur une famille complète de TDB.',
      },
    ],
  },

  {
    id: 'alternance-wikijs',
    type: 'alternance',
    kind: 'Mission',
    title: 'Migration de documentation vers WikiJs — Atlanticlog',
    period: 'Mai – Juin 2026',
    summary:
      'Conception et développement d\'un pipeline complet en Python pour migrer 1380 documents internes d\'une instance Jira vieillissante vers WikiJs : conversion de format vers Markdown, export via une API GraphQL, structuration de la documentation selon le modèle ITIL SKMS, puis refactorisation en un package Python structuré, testé et réutilisable. Projet mené en collaboration directe avec le DevOps de l\'entreprise.',
    impact:
      'Le projet le plus complet de l\'alternance : analyse de l\'existant, choix techniques, pipeline de migration fiable (reprise sur erreur, mode simulation, tests unitaires avec mocks) et documentation finale accessible à toute l\'entreprise. Une expérience de travail en autonomie sur un projet à fort impact pour l\'équipe.',
    skills: ['python', 'graphql', 'docker', 'git', 'jira'],
    longDescription: [
      {
        type: 'text',
        text: 'Atlanticlog disposait d\'une documentation interne étendue — guides développeurs, guides support, documentation fonctionnelle — hébergée sur une instance Jira datant de 2005, devenue difficile à naviguer. L\'objectif était de migrer l\'ensemble de cette documentation vers WikiJs, une plateforme offrant une meilleure navigation et une recherche plus efficace. Le projet a démarré sur un périmètre limité de 320 documents techniques, avant d\'être étendu à l\'ensemble de la documentation de l\'entreprise, pour atteindre 1380 documents migrés.',
      },
      {
        type: 'image',
        src: wikijsInterface,
        alt: 'Interface WikiJs avec la documentation migrée',
        caption: 'Page de documentation migrée, avec ses métadonnées et ses sous-tâches.',
      },
      {
        type: 'heading',
        text: 'Le pipeline technique',
      },
      {
        type: 'list',
        items: [
          'Conversion du contenu Jira vers le format Markdown, à partir d\'une bibliothèque open source adaptée pour gérer les cas particuliers (emojis, blocs de code, tableaux)',
          'Export vers WikiJs via son API GraphQL, avec gestion d\'une limitation de fréquence sur les requêtes',
          'Structuration de la documentation selon le modèle ITIL SKMS : le tri a été exécuté par un outil d\'IA selon des critères que nous avions définis, mais Thomas (le DevOps de l\'entreprise) et moi avons validé et décidé du classement final document par document',
          'Refactorisation complète du projet en un package Python structuré, avec tests unitaires, mocks et pre-commit hooks',
        ],
      },
      {
        type: 'image',
        src: wikijsStructure,
        alt: 'Arborescence de la documentation structurée selon le modèle ITIL SKMS',
        caption: 'Structure finale de la documentation après classement selon ITIL SKMS.',
      },
      {
        type: 'heading',
        text: "Pourquoi c'est le projet le plus marquant",
      },
      {
        type: 'text',
        text: 'Cette refactorisation a été décisive : elle a permis de réutiliser les mêmes scripts, sans les retoucher en profondeur, pour migrer le reste de la documentation. Le projet final inclut un mécanisme de reprise sur erreur et un mode simulation pour valider des changements avant de les appliquer — des choix pensés pour qu\'il puisse être maintenu par quelqu\'un d\'autre que moi.',
      },
      {
        type: 'image',
        src: wikijsDashboard,
        alt: 'Tableau de bord d\'administration WikiJs',
        caption: 'Tableau de bord WikiJs : pages, étiquettes et activité de l\'équipe.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'alternance-autres',
    type: 'alternance',
    kind: 'Mission',
    title: 'Évolutions fonctionnelles de l\'agenda — Atlanticlog',
    period: 'Toute l\'année',
    summary:
      'Plusieurs développements ponctuels sur le module agenda de Gemarcur : un filtre permettant d\'afficher en un clic tous les événements des membres d\'un groupe (par exemple toute l\'équipe de développement), et un algorithme calculant correctement la date de fin d\'une chaîne d\'absences consécutives en tenant compte des week-ends et jours fériés.',
    impact:
      'Fonctionnalités livrées en production et adoptées par les utilisateurs, avec itérations supplémentaires suite à des retours réels après mise en service — une bonne illustration du cycle de vie complet d\'une fonctionnalité en contexte professionnel.',
    skills: ['java', 'postgresql', 'jira', 'git'],
    longDescription: [
      {
        type: 'text',
        text: 'En parallèle des trois missions principales, j\'ai traité plusieurs tickets de maintenance plus ponctuels sur le module agenda de Gemarcur. J\'ai notamment implémenté un filtre permettant d\'afficher en un clic tous les événements des membres d\'un groupe d\'utilisateurs — par exemple, pour visualiser d\'un coup les disponibilités de toute l\'équipe de développement plutôt que de devoir sélectionner chaque personne individuellement.',
      },
      {
        type: 'image',
        src: agendaFilter,
        alt: 'Vue agenda Gemarcur avec un filtre par groupe appliqué',
        caption: 'Vue agenda filtrée sur le groupe « développement ».',
      },
      {
        type: 'heading',
        text: 'Le calcul des absences consécutives',
      },
      {
        type: 'text',
        text: 'J\'ai aussi développé un algorithme calculant correctement la date de fin d\'une chaîne d\'absences consécutives, en tenant compte des week-ends et des jours fériés. Par exemple, si un utilisateur est absent jusqu\'à un jeudi, que le vendredi suivant est un jour férié, puis qu\'il est de nouveau absent le lundi, l\'algorithme reconnaît qu\'il s\'agit d\'une seule chaîne continue et affiche la vraie date de fin — le mardi — plutôt que la date de la première absence prise isolément.',
      },
      {
        type: 'heading',
        text: 'Et après la mise en production ?',
      },
      {
        type: 'text',
        text: 'Ces fonctionnalités ont continué à évoluer après leur mise en production, suite à des retours d\'utilisateurs réels : ajustement de la durée maximale de récurrence pour les événements annuels, et adaptation du système d\'import-export entre études clientes pour qu\'il prenne correctement en charge ces nouveaux cas. Une bonne illustration du fait qu\'une fonctionnalité livrée n\'est jamais totalement « terminée ».',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  // ── Stage Ubilink ──────────────────────────────────────────────────────────

  {
    id: 'stage-inventory',
    type: 'stage',
    kind: 'Mission',
    title: 'Fonctionnalité Inventory — Back-Office Ubilink',
    period: 'Juin 2025',
    company: 'Ubilink',
    summary:
      "Développement d'une interface d'édition des inventaires dans le back-office d'Ubilink. Le module existait côté 3D, mais n'était pas accessible depuis l'outil web de gestion. Mission réalisée en PHP, JavaScript et HTML/CSS, avec gestion multilingue FR/EN via fichiers JSON.",
    impact:
      "Page Inventory livrée et fonctionnelle, correctement intégrée aux conventions techniques de l'entreprise (SVG, traductions dynamiques, responsive). Correction d'un bug de synchronisation des langues lors de la modification des champs.",
    skills: ['php', 'javascript', 'html', 'css', 'json'],
    longDescription: [
      {
        type: 'text',
        text: "L'inventaire existait déjà dans les projets de réalité virtuelle et en base de données, mais aucune page web ne permettait de le visualiser ni de le modifier. La mission consistait à créer cette interface en respectant l'architecture interne (PHP, JSON multilingue, SVG).",
      },
      {
        type: 'heading',
        text: 'Défi technique',
      },
      {
        type: 'text',
        text: "Le système de traduction de l'entreprise repose sur deux fichiers content.json (FR/EN) et un fichier master qui détecte la langue active. Lorsqu'un champ était modifié, la modification ne s'appliquait qu'à la langue visible — pas à l'autre. J'ai conçu une solution manuelle : un tableau des catégories dans les deux langues et une logique de synchronisation automatique.",
      },
      {
        type: 'list',
        items: [
          "Analyse de l'architecture du back-office (PHP, navigation, gestion des données)",
          "Modélisation de la page à partir d'une page similaire existante (\"Speech\")",
          'Affichage dynamique des champs traduits selon la langue du navigateur',
          'Correction du bug de synchronisation bilingue lors de la modification',
          'Usage des SVG à la place de PNG pour des composants visuels modifiables via CSS',
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: "La page Inventory est aujourd'hui fonctionnelle, adaptable et respecte les conventions techniques d'Ubilink. Elle constitue une brique supplémentaire dans la gestion des projets clients via le back-office.",
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-visio',
    type: 'stage',
    kind: 'Mission',
    title: "Étude et intégration d'un outil de visioconférence — Ubilink",
    period: 'Juin – Juillet 2025',
    company: 'Ubilink',
    summary:
      "Étude comparative de solutions de visioconférence open source pour une intégration dans la plateforme web d'Ubilink. Rédaction d'un tableau comparatif, choix de l'outil Hello, et implémentation de la page de pré-connexion avec génération de clés de session.",
    impact:
      "Base technique établie pour l'intégration visio : page de pré-connexion fonctionnelle, génération de clés, compréhension des flux WebRTC (P2P, TURN/STUN). Projet poursuivi par un autre stagiaire à partir de cette fondation.",
    skills: ['javascript', 'nodejs', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'Ubilink souhaitait intégrer un système de visioconférence dans ses outils internes et son site web, sans dépendre de services tiers lourds. La mission, réalisée en binôme avec un autre stagiaire, couvrait l\'analyse des solutions existantes puis le démarrage de l\'intégration.',
      },
      {
        type: 'heading',
        text: 'Étude comparative',
      },
      {
        type: 'text',
        text: 'Cinq solutions ont été analysées (Jitsi, Mediasoup, BigBlueButton, Hello, OpenVidu) selon quatre critères : facilité d\'implémentation, fonctionnalités audio/vidéo, esthétique et prise en main du code. Hello a été retenu pour sa simplicité, sa documentation claire et sa capacité d\'intégration dans l\'écosystème existant.',
      },
      {
        type: 'list',
        items: [
          'Compréhension du fonctionnement WebRTC (P2P, serveurs TURN/STUN, échange de clés)',
          'Rédaction d\'un tableau comparatif des cinq solutions étudiées',
          'Implémentation de la page de pré-connexion et génération de clés de session',
          'Mise en place du serveur Node.js pour la gestion des connexions',
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'La base technique a été posée et transmise à l\'autre stagiaire pour finalisation. Cette mission m\'a permis de comprendre les enjeux de la communication en temps réel sur le web, et l\'importance d\'adapter une technologie existante aux contraintes spécifiques d\'une entreprise.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-rdv',
    type: 'stage',
    kind: 'Mission',
    title: 'Système de prise de rendez-vous connecté au CRM — Ubilink',
    period: 'Juillet – Août 2025',
    company: 'Ubilink',
    summary:
      'Conception et développement complet d\'un système de réservation de créneaux en ligne, connecté au CRM SuiteCRM d\'Ubilink. Gestion des disponibilités en temps réel, des fuseaux horaires internationaux, de la sécurité anti-bot, des confirmations par email et de l\'intégration entre le CRM et l\'outil visio.',
    impact:
      'Mis en production sur le site d\'Ubilink. Les rendez-vous s\'affichent correctement dans les agendas des collaborateurs. Environ 5 semaines de développement solo. Système adapté et réutilisé pour un client externe.',
    skills: ['php', 'javascript', 'sql', 'json', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'L\'ancien système de prise de rendez-vous était visuellement cassé et ne vérifiait pas les disponibilités réelles des collaborateurs. L\'objectif était de construire un système fiable, sécurisé et intégré aux outils internes de l\'entreprise.',
      },
      {
        type: 'heading',
        text: 'Défi : intégration CRM',
      },
      {
        type: 'text',
        text: 'SuiteCRM propose une API basée sur des Beans nécessitant une authentification de session — incompatible avec un formulaire public. J\'ai opté pour un accès direct à la base de données via PHP et SQL, en insérant également dans les tables de liaison (calls_leads, user_meetings) pour que les rendez-vous apparaissent dans les calendriers des collaborateurs.',
      },
      {
        type: 'heading',
        text: 'Problématiques techniques',
      },
      {
        type: 'list',
        items: [
          'Calcul des créneaux de 30 min avec gestion des "paddings" de préparation (non stockés en base)',
          'Gestion des fuseaux horaires : détection côté JS, conversion GMT0 côté serveur, affichage GMT+2 dans le CRM',
          'Algorithme de disponibilités multi-utilisateurs : disponibilité conjointe (visio) vs individuelle (appel)',
          'Limitation par session PHP pour prévenir les réservations abusives',
          'Envoi automatique d\'un email de confirmation avec lien d\'annulation sécurisé',
          'Liaison entre une meeting CRM et une visio stockée dans une base de données distincte',
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'Système mis en production sur le site Ubilink. Le module a ensuite été adapté pour un client externe avec trois types de rendez-vous (appel, visio, physique) et une gestion différenciée des profils utilisateurs (Leads vs Accounts).',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-refonte-site',
    type: 'stage',
    kind: 'Mission',
    title: 'Refonte et modernisation du site web d\'un client — Ubilink',
    period: 'Août 2025',
    company: 'Ubilink',
    summary:
      'Refonte complète d\'un site web client externe : nettoyage du code HTML/CSS legacy, mise en responsive (mobile → desktop Full HD), et développement de fonctionnalités interactives (cartes 3D, SVG animé, barre de navigation dynamique, carte Google Maps). Intégration du système de prise de rendez-vous et de visioconférence développés précédemment.',
    impact:
      'Site restructuré sur une base saine, responsive sur tous les écrans, avec des fonctionnalités interactives modernes. Fonctionnalités essentielles livrées dans le temps imparti. Base posée pour une future intégration de paiement en ligne.',
    skills: ['html', 'css', 'javascript', 'bootstrap', 'sql', 'php'],
    longDescription: [
      {
        type: 'text',
        text: 'Le site existant reposait sur une base HTML obsolète, non maintenue et uniquement conçue pour le desktop. J\'ai commencé par une remise à zéro complète du code pour repartir sur une base lisible et maintenable.',
      },
      {
        type: 'heading',
        text: 'Responsive design',
      },
      {
        type: 'text',
        text: 'J\'ai implémenté et adapté les classes CSS d\'Ubilink (mobile, desktop, full HD) avec des media queries, pour offrir une expérience cohérente sur tous les types d\'écrans.',
      },
      {
        type: 'heading',
        text: 'Fonctionnalités interactives développées',
      },
      {
        type: 'list',
        items: [
          'Cartes avec effet de retournement 3D (JavaScript pur)',
          'SVG animé dont le remplissage varie selon la position de défilement',
          'Barre de navigation dynamique changeant de couleur selon la position dans la page',
          'Gradient du logo recalculé dynamiquement en fonction du scroll (valeurs RGB)',
          'Carte Google Maps intégrée via iframe sur la page contact',
          'Composants Bootstrap : accordéons, listes déroulantes avec effet hover',
        ],
      },
      {
        type: 'heading',
        text: 'Intégration des modules existants',
      },
      {
        type: 'text',
        text: 'Le calendrier de prise de rendez-vous a été adapté à trois types de rendez-vous (appel, visio, physique), avec une logique de base de données distincte : un client prenant un rendez-vous physique payant est directement inscrit en table Accounts (clients confirmés), et non en Leads (prospects).',
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'Les fonctionnalités prioritaires ont été livrées dans le temps imparti. Le site est désormais responsive, maintenable et visuellement moderne. Une intégration de paiement en ligne est prévue pour la suite (hors stage).',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  // ── École ──────────────────────────────────────────────────────────────────

  {
    id: 'sae-s3-rezisten',
    type: 'school',
    kind: 'SAÉ',
    title: 'Création d\'un site narratif interactif',
    period: 'BUT2 — Semestre 3',
    summary:
      'Développement d\'un site web narratif permettant aux utilisateurs de consulter ou publier des histoires avec des personnages et des quiz associés. Projet de groupe de six étudiants, sans framework, structuré en MVC.',
    impact:
      'Première expérience approfondie en développement backend avec PHP et architecture MVC. Découverte des contrôleurs, du CRUD et de la gestion des comptes utilisateurs.',
    skills: ['html', 'css', 'javascript', 'php'],
    longDescription: [
      {
        type: 'text',
        text: 'Dans le cadre de la SAE du semestre 3, notre groupe de six étudiants a été chargé de concevoir et développer un site web interactif autour du concept d\'histoires à choix multiples. Un utilisateur pouvait lire des histoires sous forme de parcours narratifs, répondre à des questions dans un style quiz, et, après validation de son compte, créer ses propres histoires et personnages.',
      },
      {
        type: 'heading',
        text: 'Architecture MVC',
      },
      {
        type: 'text',
        text: 'Pour assurer une homogénéité technique au sein du groupe, nous avons décidé d\'utiliser PHP et JavaScript sans framework, ce qui nous a poussés à structurer le projet selon le modèle MVC (Modèle-Vue-Contrôleur).',
      },
      {
        type: 'heading',
        text: 'Travail individuel',
      },
      {
        type: 'list',
        items: [
          'Création des vues et de l\'interface utilisateur (HTML/CSS)',
          'Développement des controllers (CRUD personnages / histoires)',
          'Interactions JavaScript (popups)',
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'Ce projet a été une étape essentielle dans ma montée en compétences backend. Ne pas utiliser de framework nous a obligés à comprendre chaque partie du système en profondeur — une expérience exigeante mais très formatrice.',
      },
    ],
    links: {
      source: 'https://github.com/thomas26215/rezisten',
    },
  },

  {
    id: 'sae-s4-symfony',
    type: 'school',
    kind: 'SAÉ',
    title: 'Refonte d\'une application Symfony / Android',
    period: 'BUT2 — Semestre 4',
    summary:
      'Amélioration d\'une application existante composée d\'un back-office web Symfony et d\'une application mobile Android en Java. L\'application souffrait de dysfonctionnements techniques et d\'un manque d\'ergonomie.',
    impact:
      'Environnement Docker opérationnel permettant un déploiement rapide et reproductible. Interfaces web refondues selon les critères d\'ergonomie de Bastien et Scapin. Compétences DevOps consolidées.',
    skills: ['php', 'docker', 'javascript', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'Le projet portait sur l\'amélioration d\'une application existante composée de deux éléments : une interface back-office web sous Symfony, destinée aux professionnels, et une application mobile Android en Java, destinée aux clients finaux. L\'application souffrait à la fois de dysfonctionnements techniques et d\'un manque d\'ergonomie rendant son utilisation peu intuitive.',
      },
      {
        type: 'heading',
        text: 'Travail individuel',
      },
      {
        type: 'list',
        items: [
          'Mise en place d\'un environnement Docker pour l\'installation et le test de l\'application Symfony',
          'Refonte de plusieurs interfaces web du back-office en s\'appuyant sur les critères ergonomiques de Bastien et Scapin',
        ],
      },
      {
        type: 'heading',
        text: 'Résultat',
      },
      {
        type: 'text',
        text: 'Ce projet m\'a permis de consolider mes compétences en DevOps avec la création d\'images Docker adaptées, et d\'approfondir mes connaissances en Symfony et en conception d\'interfaces web modernes. Le travail en équipe a également été important, nécessitant une coordination constante entre les développeurs du back-office et ceux de l\'application mobile.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },
];

export const itemsEN = [
  {
    id: 'portfolio-site',
    type: 'school',
    kind: 'Project',
    title: 'Personal portfolio',
    period: '2026',
    summary:
      'Bilingual website to present my profile, experience and projects with a clear navigation structure.',
    impact: 'Reusable structure and easy-to-update content.',
    skills: ['react', 'javascript', 'figma'],
    links: {
      demo: '#',
      source: 'https://github.com/MaluCelusniak/PortfolioReact',
    },
  },

  // ── Work-study ─────────────────────────────────────────────────────────────

  {
    id: 'alternance-tracfin',
    type: 'alternance',
    kind: 'Mission',
    title: 'Tracfin compliance forms — Atlanticlog',
    period: 'January – March 2026',
    summary:
      'Extension of a regulatory feature in Gemarcur (business software for judicial administrators and representatives): implementing Tracfin anti-money-laundering compliance forms, previously available only for company executives, for a new category of stakeholders (co-owners, joint owners, heirs, tenants). The work covered analysis of an unfamiliar business module, adapting the data model, and a full Java/SQL implementation through to production.',
    impact:
      'Feature shipped to production with no regressions, while matching a form format imposed by state regulation. Built a new contact search feature that did not previously exist in the software, and wrote detailed test scenarios for an external QA team.',
    skills: ['java', 'postgresql', 'jira', 'git'],
    longDescription: [
      {
        type: 'text',
        text: 'As part of the fight against money laundering, judicial administrators and representatives (AJMJ) are legally required to fill out compliance forms for people involved in their cases. Gemarcur already supported this for company executives; a change in the law extended the requirement to a new category of stakeholders, previously not covered by the software.',
      },
      {
        type: 'image',
        src: tracfinForm,
        alt: 'Tracfin compliance form in Gemarcur',
        caption: 'The compliance form as it appears in Gemarcur for a civil-case stakeholder.',
      },
      {
        type: 'heading',
        text: 'The technical challenge',
      },
      {
        type: 'text',
        text: 'The main difficulty came from a difference in the data model: an executive maps directly to a contact, while a stakeholder in this new category is a separate entity that may or may not be linked to an existing contact. This required adding a new relationship field, as well as building a contact search feature that did not exist before in the software.',
      },
      {
        type: 'list',
        items: [
          'Analysis of a business module I was discovering, to avoid any regression on features already in production',
          'Design of the data model and SQL queries for the new entity',
          'Java implementation matching a form whose content is set by state regulation',
          'Manual local testing, then detailed test scenarios for an external QA team',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'The feature was shipped to production after a testing phase, with two minor adjustments following tester feedback (confirmation message, duplicate prevention). This mission illustrates a key skill in professional development: adapting an existing mechanism to a new context, rather than rebuilding everything from scratch.',
      },
      {
        type: 'image',
        src: tracfinDashboard,
        alt: 'Parent Jira ticket and subtasks for the Tracfin mission',
        caption: 'Breakdown of the Jira ticket into subtasks, used to structure the work on an unfamiliar module.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'alternance-tdb',
    type: 'alternance',
    kind: 'Mission',
    title: 'Automated test infrastructure — Atlanticlog',
    period: 'April – May 2026',
    summary:
      'Design of a test infrastructure to reliably cover around 730 dashboards in Gemarcur, organised into 320 hierarchical families. Rather than modifying a risky legacy central class, I created a complementary class using Java Reflection to automatically discover and test every dashboard — and every full family — without manual intervention.',
    impact:
      'A single test run now covers the entire software, and any new dashboard is discovered automatically. An analytical approach to an existing quality problem, rather than a full rebuild.',
    skills: ['java', 'java-reflection', 'postgresql', 'jira'],
    longDescription: [
      {
        type: 'text',
        text: 'Gemarcur has around 730 dashboards (TDB) — interfaces that let users display and filter data against a list of criteria. These dashboards are organised into 320 families by inheritance: a parent TDB as the base, and derived TDBs that specialise it. Tests already existed across all of them, but they failed on every run without anyone fixing them, so they provided no real guarantee.',
      },
      {
        type: 'image',
        src: tdbExample,
        alt: 'Example dashboard in Gemarcur',
        caption: 'A dashboard (TDB) with its filter criteria, as it appears in Gemarcur.',
      },
      {
        type: 'heading',
        text: 'The technical constraint',
      },
      {
        type: 'text',
        text: 'The software relies on a central class that instantiates the correct dashboard whenever the application needs one. It is an old class, grown very large over the years and never refactored in depth. Modifying it directly for testing purposes would have carried too great a risk of regression on a sensitive part of the software.',
      },
      {
        type: 'heading',
        text: 'The solution',
      },
      {
        type: 'list',
        items: [
          'Created a complementary class using Java Reflection to dynamically scan the codebase and automatically discover all available dashboards',
          'This class only takes over if the original class cannot find the requested dashboard, fully preserving existing behaviour',
          'Built the solution in three stages: test all criteria of one TDB, test an entire family in a single call, then run a global test across all 320 families',
          'Used Claude, Anthropic\'s AI assistant, to help progress through the final part of the development',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'A single global test now covers the entire software in one run, and any new dashboard is automatically discovered without manual intervention. An analytical approach to an existing quality problem, rather than a full rebuild.',
      },
      {
        type: 'image',
        src: '/assets/projects/tdb-sortie-tests.png',
        alt: 'Sample test output for a dashboard family',
        caption: 'Output produced when running automated tests across a complete TDB family.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'alternance-wikijs',
    type: 'alternance',
    kind: 'Mission',
    title: 'Documentation migration to WikiJs — Atlanticlog',
    period: 'May – June 2026',
    summary:
      'Design and development of a full Python pipeline to migrate 1,380 internal documents from an ageing Jira instance to WikiJs: format conversion to Markdown, export via a GraphQL API, structuring of documentation according to the ITIL SKMS model, then refactoring into a structured, tested and reusable Python package. Project carried out in direct collaboration with the company\'s DevOps engineer.',
    impact:
      'The most complete project of the work-study year: analysis of the existing system, technical choices, a reliable migration pipeline (error recovery, simulation mode, unit tests with mocks) and final documentation accessible to the whole company.',
    skills: ['python', 'graphql', 'docker', 'git', 'jira'],
    longDescription: [
      {
        type: 'text',
        text: 'Atlanticlog had an extensive internal documentation base — developer guides, support guides, functional documentation — hosted on a Jira instance dating from 2005 that had become hard to navigate. The goal was to migrate everything to WikiJs, a platform offering better navigation and search. The project started with a limited scope of 320 technical documents before expanding to the full company documentation, reaching 1,380 documents migrated.',
      },
      {
        type: 'image',
        src: wikijsInterface,
        alt: 'WikiJs interface with migrated documentation',
        caption: 'A migrated documentation page, with its metadata and subtasks.',
      },
      {
        type: 'heading',
        text: 'The technical pipeline',
      },
      {
        type: 'list',
        items: [
          'Conversion of Jira content to Markdown, using an open-source library adapted to handle edge cases (emojis, code blocks, tables)',
          'Export to WikiJs via its GraphQL API, with rate-limit handling on requests',
          'Structuring of documentation according to the ITIL SKMS model: sorting was executed by an AI tool based on criteria we defined, but Thomas (the company\'s DevOps) and I validated and decided the final classification document by document',
          'Full refactoring of the project into a structured Python package, with unit tests, mocks and pre-commit hooks',
        ],
      },
      {
        type: 'image',
        src: wikijsStructure,
        alt: 'Documentation tree structured according to the ITIL SKMS model',
        caption: 'Final documentation structure after classification according to ITIL SKMS.',
      },
      {
        type: 'heading',
        text: 'Why this is the most significant project',
      },
      {
        type: 'text',
        text: 'The refactoring was the key decision: it allowed the same scripts to be reused, without deep changes, to migrate the rest of the documentation. The final project includes an error-recovery mechanism and a simulation mode to validate changes before applying them — choices made so that someone other than me could maintain it.',
      },
      {
        type: 'image',
        src: wikijsDashboard,
        alt: 'WikiJs administration dashboard',
        caption: 'WikiJs dashboard: pages, tags and team activity.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'alternance-autres',
    type: 'alternance',
    kind: 'Mission',
    title: 'Calendar feature improvements — Atlanticlog',
    period: 'Year-round',
    summary:
      'Several targeted developments on Gemarcur\'s calendar module: a filter to display all events for members of a group in one click (e.g. the entire dev team), and an algorithm correctly computing the end date of a chain of consecutive absences, accounting for weekends and public holidays.',
    impact:
      'Features shipped to production and adopted by users, with additional iterations following real-world feedback after go-live — a good illustration of the full lifecycle of a feature in a professional context.',
    skills: ['java', 'postgresql', 'jira', 'git'],
    longDescription: [
      {
        type: 'text',
        text: 'Alongside the three main missions, I handled several smaller maintenance tickets on Gemarcur\'s calendar module. I implemented a filter to display all events for members of a user group in one click — for example, to see the whole development team\'s availability at once rather than selecting each person individually.',
      },
      {
        type: 'image',
        src: agendaFilter,
        alt: 'Gemarcur calendar with a group filter applied',
        caption: 'Calendar view filtered on the "development" group.',
      },
      {
        type: 'heading',
        text: 'The consecutive absence calculation',
      },
      {
        type: 'text',
        text: 'I also developed an algorithm that correctly computes the end date of a chain of consecutive absences, accounting for weekends and public holidays. For example, if a user is absent until a Thursday, the following Friday is a public holiday, and they are absent again on Monday, the algorithm recognises this as a single continuous chain and displays the true end date — Tuesday — rather than the date of the first absence in isolation.',
      },
      {
        type: 'heading',
        text: 'After go-live',
      },
      {
        type: 'text',
        text: 'These features continued to evolve after going live, based on real user feedback: adjustment of the maximum recurrence length for annual events, and updates to the import/export system between client files to correctly handle the new cases. A good illustration of the fact that a shipped feature is never truly "finished".',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  // ── Internship Ubilink ─────────────────────────────────────────────────────

  {
    id: 'stage-inventory',
    type: 'stage',
    kind: 'Mission',
    title: 'Inventory feature — Ubilink Back-Office',
    period: 'June 2025',
    company: 'Ubilink',
    summary:
      'Development of an inventory editing interface in Ubilink\'s back-office. The inventory already existed on the 3D side, but was not accessible from the web management tool. Built in PHP, JavaScript and HTML/CSS, with FR/EN multilingual support via JSON content files.',
    impact:
      'Inventory page delivered and functional, fully integrated with the company\'s technical conventions (SVG, dynamic translations, responsive layout). Fixed a language-sync bug that prevented edits from being saved in the non-active language.',
    skills: ['php', 'javascript', 'html', 'css', 'json'],
    longDescription: [
      {
        type: 'text',
        text: 'The inventory already existed in the VR projects and in the database, but no web page let users view or edit it. The mission was to build that interface while following the internal architecture (PHP, multilingual JSON, SVG).',
      },
      {
        type: 'heading',
        text: 'Technical challenge',
      },
      {
        type: 'text',
        text: 'The company\'s translation system relies on two content.json files (FR/EN) and a master file that detects the active language. When a field was edited, the change was only saved in the visible language — not the other. I designed a manual fix: a categories table in both languages and an automatic sync logic.',
      },
      {
        type: 'list',
        items: [
          'Analysis of the back-office architecture (PHP, navigation, data flow)',
          'Modelled the new page on an existing similar page ("Speech")',
          'Dynamic display of translated fields based on browser language',
          'Fixed the bilingual sync bug on field edit',
          'Used SVG components instead of PNG for CSS-controllable visuals',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'The Inventory page is now functional, adaptable, and matches Ubilink\'s technical conventions. It adds a new management layer to the client project back-office.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-visio',
    type: 'stage',
    kind: 'Mission',
    title: 'Video-conferencing tool study and integration — Ubilink',
    period: 'June – July 2025',
    company: 'Ubilink',
    summary:
      'Comparative study of open-source video-conferencing solutions for integration into Ubilink\'s web platform. Wrote a comparison matrix, selected the Hello tool, and implemented the pre-connection page with session key generation.',
    impact:
      'Technical foundation established: working pre-connection page, key generation, and understanding of WebRTC flows (P2P, TURN/STUN). Project handed off to a fellow intern who built on this base.',
    skills: ['javascript', 'nodejs', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'Ubilink wanted to embed a video-conferencing system in its internal tools and website, without relying on heavy third-party services. The mission was shared with another intern and covered both the tool analysis and the start of the integration.',
      },
      {
        type: 'heading',
        text: 'Comparative study',
      },
      {
        type: 'text',
        text: 'Five solutions were evaluated (Jitsi, Mediasoup, BigBlueButton, Hello, OpenVidu) across four criteria: ease of integration, audio/video features, aesthetics, and code accessibility. Hello was chosen for its simplicity, clear documentation and clean fit with the existing stack.',
      },
      {
        type: 'list',
        items: [
          'Understanding of WebRTC concepts (P2P, TURN/STUN servers, key exchange)',
          'Wrote a comparison matrix for all five solutions',
          'Implemented the pre-connection page and session key generation',
          'Set up a Node.js server for connection management',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'The technical foundation was handed off to another intern for completion. This mission gave me a solid understanding of real-time web communication, and reinforced the value of adapting an existing technology to a specific company\'s constraints rather than building from scratch.',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-rdv',
    type: 'stage',
    kind: 'Mission',
    title: 'CRM-connected appointment booking system — Ubilink',
    period: 'July – August 2025',
    company: 'Ubilink',
    summary:
      'Full design and development of an online slot-booking system connected to Ubilink\'s SuiteCRM. Covers real-time availability, international timezone handling, anti-bot session limits, confirmation emails, and cross-database linking between the CRM and the video tool.',
    impact:
      'Shipped to production on the Ubilink website. Appointments correctly appear in staff calendars. Around 5 weeks of solo development. System later adapted and reused for an external client.',
    skills: ['php', 'javascript', 'sql', 'json', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'The previous booking system was visually broken and did not check whether staff were actually available. The goal was to build a reliable, secure system fully integrated with the company\'s internal tools.',
      },
      {
        type: 'heading',
        text: 'Challenge: CRM integration',
      },
      {
        type: 'text',
        text: 'SuiteCRM\'s API relies on Beans that require a user session — incompatible with a public-facing form. I opted for direct database access via PHP/SQL, and also inserted into the CRM\'s join tables (calls_leads, user_meetings) so appointments would correctly appear in staff calendars.',
      },
      {
        type: 'heading',
        text: 'Technical highlights',
      },
      {
        type: 'list',
        items: [
          '30-minute slot calculation with preparation "padding" (computed, not stored in DB)',
          'Timezone handling: JS detects client offset, server converts to GMT0, CRM displays GMT+2',
          'Multi-user availability algorithm: joint availability for video calls, individual for phone calls',
          'PHP session-based rate limiting to prevent abuse',
          'Automatic confirmation email with a secure cancellation link',
          'Cross-database link between a CRM meeting and a video session stored in a separate DB',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'Shipped to production on the Ubilink website. The module was later adapted for an external client with three appointment types (call, video, in-person) and differentiated user handling (Leads vs Accounts).',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  {
    id: 'stage-refonte-site',
    type: 'stage',
    kind: 'Mission',
    title: 'Full website redesign for an external client — Ubilink',
    period: 'August 2025',
    company: 'Ubilink',
    summary:
      'Complete overhaul of an external client\'s website: cleanup of legacy HTML/CSS, full responsive design (mobile to Full HD desktop), and development of interactive features (3D flip cards, animated SVG, dynamic navbar, Google Maps). Integration of the appointment and video-conferencing modules built earlier in the internship.',
    impact:
      'Site rebuilt on a clean, maintainable codebase, responsive across all screen sizes, with modern interactive features. Priority features delivered within the time available. Foundation laid for a future online payment integration.',
    skills: ['html', 'css', 'javascript', 'bootstrap', 'sql', 'php'],
    longDescription: [
      {
        type: 'text',
        text: 'The existing site was built on obsolete HTML, hard to maintain and desktop-only. I started with a full code cleanup to establish a readable, maintainable base where every component is traceable.',
      },
      {
        type: 'heading',
        text: 'Responsive design',
      },
      {
        type: 'text',
        text: 'I implemented and adapted Ubilink\'s CSS class system (mobile, desktop, full HD) with media queries, ensuring a consistent, fluid experience across all device sizes.',
      },
      {
        type: 'heading',
        text: 'Interactive features built',
      },
      {
        type: 'list',
        items: [
          '3D flip cards with reveal-on-hover (vanilla JavaScript)',
          'Animated SVG whose fill level changes with page scroll position',
          'Dynamic navbar that changes colour based on scroll context',
          'Logo gradient dynamically recomputed from RGB values on scroll',
          'Google Maps iframe on the contact page',
          'Bootstrap components: accordions and dropdowns with hover effects',
        ],
      },
      {
        type: 'heading',
        text: 'Module integration',
      },
      {
        type: 'text',
        text: 'The appointment calendar was adapted for three booking types (call, video, in-person). In-person bookings require payment, so those users are stored directly in the Accounts table (confirmed clients) rather than Leads (prospects).',
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'Priority features were delivered within the internship timeframe. The site is now responsive, maintainable and visually modern. An online payment step is planned for a future release (post-internship).',
      },
    ],
    links: {
      demo: '#',
      source: '#',
    },
  },

  // ── School ─────────────────────────────────────────────────────────────────

  {
    id: 'sae-s3-rezisten',
    type: 'school',
    kind: 'SAÉ',
    title: 'Interactive narrative website',
    period: 'BUT2 — Semester 3',
    summary:
      'Development of a narrative web platform where users can read or publish stories with associated characters and quizzes. Group project of six students, built without a framework, structured with MVC.',
    impact:
      'First in-depth experience with backend development using PHP and MVC architecture. Hands-on introduction to controllers, CRUD operations and user account management.',
    skills: ['html', 'css', 'javascript', 'php'],
    longDescription: [
      {
        type: 'text',
        text: 'As part of the Semester 3 project, our group of six students designed and built an interactive website around the concept of multiple-choice stories. A user could read stories as narrative journeys, answer quiz-style questions, and — once their account was validated — create their own stories and characters, which other users could then read.',
      },
      {
        type: 'heading',
        text: 'MVC architecture',
      },
      {
        type: 'text',
        text: 'To ensure technical consistency across the team, we decided to use PHP and JavaScript without any framework, which led us to structure the project using the MVC (Model-View-Controller) pattern.',
      },
      {
        type: 'heading',
        text: 'Individual contributions',
      },
      {
        type: 'list',
        items: [
          'Built the views and user interface (HTML/CSS)',
          'Developed the controllers (CRUD for characters and stories)',
          'JavaScript interactions (popups)',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'This project was a key step in building my backend skills. Working without a framework forced us to understand every part of the system in depth — a demanding but very formative experience.',
      },
    ],
    links: {
      source: 'https://github.com/thomas26215/rezisten',
    },
  },

  {
    id: 'sae-s4-symfony',
    type: 'school',
    kind: 'SAÉ',
    title: 'Redesign of a Symfony / Android application',
    period: 'BUT2 — Semester 4',
    summary:
      'Improvement of an existing application made up of a Symfony web back-office and a Java Android mobile app. The application suffered from technical issues and poor ergonomics.',
    impact:
      'Operational Docker environment enabling fast, reproducible deployments. Web interfaces redesigned according to Bastien and Scapin\'s ergonomic criteria. DevOps skills consolidated.',
    skills: ['php', 'docker', 'javascript', 'html', 'css'],
    longDescription: [
      {
        type: 'text',
        text: 'The project involved improving an existing application made up of two components: a Symfony web back-office for professionals, and a Java Android mobile app for end users. The application had both technical issues and usability problems that made it unintuitive.',
      },
      {
        type: 'heading',
        text: 'Individual contributions',
      },
      {
        type: 'list',
        items: [
          'Set up a Docker environment for installing and testing the Symfony application',
          'Redesigned several web interfaces in the back-office using Bastien and Scapin\'s ergonomic criteria',
        ],
      },
      {
        type: 'heading',
        text: 'Result',
      },
      {
        type: 'text',
        text: 'This project helped me consolidate my DevOps skills through building adapted Docker images, and deepen my knowledge of Symfony and modern web interface design. Teamwork was essential throughout, requiring constant coordination between the back-office and mobile app developers.',
      },
    ],
  },
];


export const content = {
  fr: {
    profile: {
      name: 'Maria Luiza Celusniak de Souza',
      role: 'Développeuse full-stack',
      location: 'Grenoble, France',
      email: 'malu.celusniak@gmail.com',
      availability: 'Ouverte à des opportunités de CDI, CDD, projets software et web',
      intro:
        'Je conçois des interfaces claires, accessibles et utiles, avec une attention particulière portée à l’expérience utilisateur et à la qualité du code.',
      portraitAlt: 'Portrait de Maria Luiza Celusniak de Souza',
    },
    actions: {
      contact: 'Me contacter',
      projects: 'Voir les projets',
      download: 'CV',
      source: 'Source',
      demo: 'Démo',
    },
    home: {
      eyebrow: 'Portfolio',
      title: 'Interfaces modernes, projets solides, parcours lisible.',
      summary:
        'Bienvenue sur mon portfolio ! Étudiante en BUT Informatique à l’IUT2 de Grenoble, je termine actuellement une alternance en développement full-stack chez Atlanticlog, où j’interviens aussi bien sur du Java legacy que sur des projets Python construits de zéro. Je recherche aujourd’hui un poste de développeuse full-stack / web.',
      stats: [
        { value: '3+', label: 'ans de projets web et logiciel' },
        { value: '10+', label: 'projets et missions menés' },
        { value: '2', label: 'entreprises, deux univers tech' },
      ],
    },
    about: {
      title: 'À propos',
      body:
        'Je suis en troisième année de BUT Informatique, Parcours A, à l’IUT2 de Grenoble. Dans le cadre de mon alternance chez Atlanticlog, une entreprise spécialisée dans les logiciels métier pour les professionnels du droit, j’ai travaillé en tant que développeuse sur Gemarcur, leur logiciel principal en Java, ainsi que sur un projet interne de migration de documentation construit en Python. Originaire du Brésil, j’ai aussi développé une vraie capacité à m’adapter rapidement à des environnements techniques et professionnels nouveaux, dans une langue qui n’est pas la mienne. Je suis aujourd’hui à la recherche d’un poste de développeuse full-stack, où je pourrai continuer à travailler sur des projets variés, du backend à l’interface utilisateur.',
      valuesTitle: 'Ce que je valorise',
      values: ['Interfaces utiles', 'Code maintenable', 'Apprentissage continu'],
      skillTitle: 'Langages et outils',
      skillIntro:
        'Chaque compétence peut être reliée à des projets ou expériences pour montrer où elle a été utilisée concrètement.',
      usedIn: 'Utilisé dans',
    },
    projects: {
      title: 'Projets et expériences',
      intro:
        'Une sélection de réalisations issues de stages, d’alternance et de projets scolaires, avec les compétences mobilisées pour chaque contexte.',
      filters: {
        all: 'Tout',
        personnel: 'Personnel',
        stage: 'Stage',
        alternance: 'Alternance',
        school: 'École',
      },
      empty: 'Aucun élément pour ce filtre.',
    },
    contact: {
      title: 'Contact',
      intro:
        'Présentez ici la meilleure façon de vous joindre pour un stage, une alternance, un projet ou une collaboration.',
      emailLabel: 'Email',
      socialTitle: 'Liens',
      formTitle: 'Message rapide',
      name: 'Nom',
      message: 'Message',
      send: 'Ouvrir mon email',
    },
    experienceLabel: 'Expérience',
    projectLabel: 'Projet',
    skills: skillsFR,
    items: itemsFR,
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maria-luiza-celusniak-de-souza-59a838270/' },
      { label: 'GitHub', url: 'https://github.com/MaluCelusniak' },
      { label: 'CV', url: '/src/assets/Maria_Luiza_Celusniak_CV.pdf' },
    ],
  },
  en: {
    profile: {
      name: 'Maria Luiza Celusniak',
      role: 'Full-stack developer',
      location: 'Grenoble, France',
      email: 'malu.celusniak@gmail.com',
      availability: 'Open to full-time, fixed-term and software/web project opportunities',
      intro:
        'I build clear, accessible and useful interfaces, with a strong focus on user experience and code quality.',
      portraitAlt: 'Portrait of Maria Luiza Celusniak',
    },
    actions: {
      contact: 'Contact me',
      projects: 'View projects',
      download: 'Resume',
      source: 'Source',
      demo: 'Demo',
    },
    home: {
      eyebrow: 'Portfolio',
      title: 'Modern interfaces, strong projects, a clear story.',
      summary:
        'Welcome to my portfolio! I am a third-year Computer Science student at IUT2 Grenoble, currently finishing a work-study program in full-stack development at Atlanticlog, where I work on legacy Java systems as well as Python projects built from scratch. I am now looking for a full-stack / web developer position.',
      stats: [
        { value: '3+', label: 'ans de projets web et logiciel' },
        { value: '10+', label: 'projets et missions menés' },
        { value: '2', label: 'entreprises, deux univers tech' },
      ],
    },
    about: {
      title: 'About me',
      body:
        'I am in my third year of a Computer Science degree (BUT Informatique), Parcours A, at IUT2 Grenoble. As part of my work-study program at Atlanticlog, a company specialising in business software for legal professionals, I worked as a developer on Gemarcur, their main Java product, as well as on an internal documentation migration project built in Python. Originally from Brazil, I have also built a strong ability to adapt quickly to new technical and professional environments, while working in a language that is not my own. I am now looking for a full-stack developer role, where I can keep working across the stack, from backend logic to user interfaces.',
      valuesTitle: 'What I value',
      values: ['Useful interfaces', 'Maintainable code', 'Continuous learning'],
      skillTitle: 'Languages and tools',
      skillIntro:
        'Each skill can be connected to projects or experiences to show where it was used in practice.',
      usedIn: 'Used in',
    },
    projects: {
      title: 'Projects and experience',
      intro:
        'A selection of work from internships, apprenticeships and school projects, with the skills used in each context.',
      filters: {
        all: 'All',
        personnel: 'Personnel',
        stage: 'Internship',
        alternance: 'Apprenticeship',
        school: 'School',
      },
      empty: 'No item for this filter.',
    },
    contact: {
      title: 'Contact',
      intro:
        'Use this page to share the best way to reach you for an internship, apprenticeship, project or collaboration.',
      emailLabel: 'Email',
      socialTitle: 'Links',
      formTitle: 'Quick message',
      name: 'Name',
      message: 'Message',
      send: 'Open my email',
    },
    experienceLabel: 'Experience',
    projectLabel: 'Project',
    skills: skillsEN,
    items: itemsEN,
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maria-luiza-celusniak-de-souza-59a838270/' },
      { label: 'GitHub', url: 'https://github.com/MaluCelusniak' },
      { label: 'Resume', url: '/src/assets/Maria_Luiza_Celusniak_CV.pdf' },
    ],
  },
};
