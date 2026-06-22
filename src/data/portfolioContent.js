export const navItems = [
  { id: 'home', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'projects', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

export const content = {
  fr: {
    profile: {
      name: 'Maria Luiza Celusniak',
      role: 'Développeuse web et Java',
      location: 'France',
      email: 'malu.celusniak@gmail.com',
      availability: 'Ouverte à des opportunités de CDI, CDD, projets software et web',
      intro:
        'Je conçois des interfaces claires, accessibles et utiles, avec une attention particulière portée à l’expérience utilisateur et à la qualité du code.',
      portraitAlt: 'Portrait de Maria Luiza Celusniak',
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
        'Bienvenue sur mon portfolio !',
      stats: [
        { value: '04', label: 'pages prêtes' },
      ],
    },
    about: {
      title: 'À propos',
      body:
        'BUT Informatique à l\'IUT de Grenoble, alternance en développement software en Java.',
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
    skills: [
      {
        id: 'react',
        name: 'React',
        category: 'Front-end',
        level: 'Intermédiaire',
        relatedTo: ['portfolio-site', 'dashboard-stage'],
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Langage',
        level: 'Intermédiaire',
        relatedTo: ['portfolio-site', 'dashboard-stage', 'school-api'],
      },
      {
        id: 'figma',
        name: 'Figma',
        category: 'Design',
        level: 'Bases solides',
        relatedTo: ['portfolio-site', 'ux-redesign'],
      },
      {
        id: 'git',
        name: 'Git',
        category: 'Outil',
        level: 'Quotidien',
        relatedTo: ['dashboard-stage', 'alternance-platform', 'school-api'],
      },
      {
        id: 'node',
        name: 'Node.js',
        category: 'Back-end',
        level: 'Bases',
        relatedTo: ['school-api', 'alternance-platform'],
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'Données',
        level: 'Bases',
        relatedTo: ['alternance-platform'],
      },
    ],
    items: [
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
          source: '#',
        },
      }
    ],
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'CV', url: '#' },
    ],
  },
  en: {
    profile: {
      name: 'Your Name',
      role: 'Web developer in training',
      location: 'France',
      email: 'hello@your-email.com',
      availability: 'Open to internships, apprenticeships and web projects',
      intro:
        'I build clear, accessible and useful interfaces, with a strong focus on user experience and code quality.',
      portraitAlt: 'Profile portrait placeholder',
    },
    actions: {
      contact: 'Contact me',
      projects: 'View projects',
      download: 'Resume',
      source: 'Source',
      demo: 'Demo',
    },
    home: {
      eyebrow: 'Bilingual portfolio',
      title: 'Modern interfaces, strong projects, a clear story.',
      summary:
        'A place to present internships, apprenticeships and school projects, connect every piece of work to the tools used, and share your profile in French or English.',
      stats: [
        { value: '04', label: 'ready pages' },
        { value: '02', label: 'languages' },
        { value: '100%', label: 'editable content' },
      ],
    },
    about: {
      title: 'About me',
      body:
        'Replace this text with your story: your studies, what you enjoy building, how you work, and the type of opportunity you are looking for.',
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
    skills: [
      {
        id: 'react',
        name: 'React',
        category: 'Front-end',
        level: 'Intermediate',
        relatedTo: ['portfolio-site', 'dashboard-stage'],
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Language',
        level: 'Intermediate',
        relatedTo: ['portfolio-site', 'dashboard-stage', 'school-api'],
      },
      {
        id: 'figma',
        name: 'Figma',
        category: 'Design',
        level: 'Solid basics',
        relatedTo: ['portfolio-site', 'ux-redesign'],
      },
      {
        id: 'git',
        name: 'Git',
        category: 'Tool',
        level: 'Daily use',
        relatedTo: ['dashboard-stage', 'alternance-platform', 'school-api'],
      },
      {
        id: 'node',
        name: 'Node.js',
        category: 'Back-end',
        level: 'Basics',
        relatedTo: ['school-api', 'alternance-platform'],
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'Data',
        level: 'Basics',
        relatedTo: ['alternance-platform'],
      },
    ],
    items: [
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
          source: '#',
        },
      }
 
     
    ],
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'Resume', url: '#' },
    ],
  },
};
