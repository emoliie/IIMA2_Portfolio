export type Lang = "en" | "fr";

export const translations = {
  en: {
    header: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      title: "Crafting the Future of Web Innovation",
      description:
        "I'm Emilie, I design and code with a passion for building meaningful and impactful digital experiences. Let's discuss !",
      exploreWork: "Explore My Work",
      letsConnect: "Let's Connect",
      imageAlt: "Person on her laptop",
    },
    projects: {
      eyebrow: "Real-world Results",
      title: "Featured Projects",
      description:
        "See how I bring ideas to life with a focus on simplicity, creativity, and user-friendliness.",
      viewRepo: "View Repository",
      seeDetails: "See Details",
      close: "Close",
      techStack: "Tech Stack",
      items: [
        {
          description:
            "A retro-styled to-do list application built entirely in TypeScript. Users can sign in, manage their tasks, and enjoy a unique pixel-art inspired interface. Focuses on type safety and clean architecture.",
          tech: ["HTML", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase"],
          functionalities: [
            "User authentication for secure access",
            "Task management for organization",
            "Retro-inspired design for a unique look",
          ],
        },
        {
          description:
            "A website dedicated to surfing at the 2024 Paris Olympics. It displays real-time scores, athlete profiles, and event results with a clean responsive UI and an integrated marketing strategy. Built as a cross-disciplinary school project.",
          tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
          functionalities: [
            "Responsive UI for smooth interaction",
            "Score database for storage and display",
            "Integrated visuals & marketing strategy",
          ],
        },
        {
          description:
            "A full-stack web application where users can collect and trade Harry Potter character cards. Built during my first year at IIM, it features a card collection system, a peer-to-peer trading mechanism, and secure user authentication.",
          tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
          functionalities: [
            "Collect Harry Potter's characters cards",
            "Trading cards with other users",
            "User Authentication",
          ],
        },
      ],
    },
    tape: {
      words: [
        "Creative",
        "Innovative",
        "Accessible",
        "Empathetic",
        "Detail-Oriented",
        "Inclusive",
        "Problem-Solver",
        "Responsive",
        "Optimized",
        "Scalable",
        "Maintainable",
        "Efficient",
        "Reliable",
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "Explore My World of Code & Creativity",
      description: "Learn more about who I am, what I do, and what inspires me.",
      journey: {
        title: "My journey",
        description: "Find out about how I got here.",
        githubBtn: "Explore my Github",
        cvBtn: "Discover my CV",
        cvHref: "CV_Emilie_Xu_2026_eng.pdf",
      },
      toolbox: {
        title: "My Toolbox",
        description:
          "Explore the technologies and tools I use to create digital experiences.",
      },
      hobbies: {
        title: "Beyond the Code",
        description: "Explore my interests and hobbies.",
        items: [
          { title: "Movies", emoji: "🎬", left: "5%", top: "5%" },
          { title: "TV Series", emoji: "🍿", left: "5%", top: "65%" },
          { title: "Travel", emoji: "✈️", left: "50%", top: "5%" },
          { title: "Gaming", emoji: "🎮", left: "35%", top: "40%" },
          { title: "Crochet", emoji: "🧶", left: "10%", top: "35%" },
          { title: "Music", emoji: "🎤", left: "70%", top: "45%" },
          { title: "Matcha", emoji: "🍵", left: "45%", top: "70%" },
        ],
        mapAlt: "Map of Paris",
        memojiAlt: "Smiling memoji",
      },
    },
    contact: {
      title: "Let's Connect & Create Together",
      description:
        "Have a project, question, or just want to chat? Feel free to reach out—I'd love to hear from you!",
      btn: "Contact Me",
    },
    form: {
      eyebrow: "Contact Me",
      title: "Let's Build Something Great Together",
      description:
        "Whether you have a project in mind, a question, or just want to connect, feel free to reach out!",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your message",
      sendBtn: "Send",
      toastSending: "Sending...",
      toastSuccess: "Message sent successfully!",
      toastError: "Error sending the message. Please try again.",
      toastNetwork: "Network error. Please try again later.",
    },
    footer: {
      copyright: "© 2026. All rights reserved.",
    },
  },
  fr: {
    header: {
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      available: "Disponible pour de nouveaux projets",
      title: "Façonner l'avenir de l'innovation web",
      description:
        "Je suis Emilie, je conçois et code avec passion pour créer des expériences numériques significatives et impactantes. Discutons !",
      exploreWork: "Découvrir mon travail",
      letsConnect: "Connectons-nous",
      imageAlt: "Personne sur son ordinateur portable",
    },
    projects: {
      eyebrow: "Résultats concrets",
      title: "Projets phares",
      description:
        "Découvrez comment je donne vie aux idées en mettant l'accent sur la simplicité, la créativité et l'ergonomie.",
      viewRepo: "Voir le dépôt",
      seeDetails: "Voir les détails",
      close: "Fermer",
      techStack: "Stack technique",
      items: [
        {
          description:
            "Une application to-do list au style rétro, développée entièrement en TypeScript. Les utilisateurs peuvent se connecter, gérer leurs tâches et profiter d'une interface inspirée du pixel art. L'accent est mis sur la sécurité des types et une architecture propre.",
          tech: ["HTML", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase"],
          functionalities: [
            "Authentification sécurisée des utilisateurs",
            "Gestion des tâches pour l'organisation",
            "Design rétro pour un look unique",
          ],
        },
        {
          description:
            "Un site dédié au surf aux Jeux Olympiques de Paris 2024. Il affiche les scores en temps réel, les profils des athlètes et les résultats des épreuves, avec une interface responsive soignée et une stratégie marketing intégrée. Projet transversal réalisé en école.",
          tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
          functionalities: [
            "Interface responsive pour une interaction fluide",
            "Base de données des scores pour stockage et affichage",
            "Visuels intégrés et stratégie marketing",
          ],
        },
        {
          description:
            "Une application web full-stack permettant aux utilisateurs de collecter et d'échanger des cartes de personnages Harry Potter. Réalisée en première année à l'IIM, elle intègre un système de collection, un mécanisme d'échange entre utilisateurs et une authentification sécurisée.",
          tech: ["PHP", "Symfony", "MySQL", "HTML", "CSS", "JavaScript"],
          functionalities: [
            "Collecter les cartes des personnages de Harry Potter",
            "Échanger des cartes avec d'autres utilisateurs",
            "Authentification utilisateur",
          ],
        },
      ],
    },
    tape: {
      words: [
        "Créative",
        "Innovante",
        "Accessible",
        "Empathique",
        "Attentive aux détails",
        "Inclusive",
        "Résolutrice",
        "Responsive",
        "Optimisée",
        "Scalable",
        "Maintenable",
        "Efficace",
        "Fiable",
      ],
    },
    about: {
      eyebrow: "À propos de moi",
      title: "Explorez mon univers du code et de la créativité",
      description: "En savoir plus sur qui je suis, ce que je fais et ce qui m'inspire.",
      journey: {
        title: "Mon parcours",
        description: "Découvrez comment j'en suis arrivée là.",
        githubBtn: "Explorer mon Github",
        cvBtn: "Découvrir mon CV",
        cvHref: "CV_Emilie_Xu_2026_fr.pdf",
      },
      toolbox: {
        title: "Ma boîte à outils",
        description:
          "Explorez les technologies et outils que j'utilise pour créer des expériences numériques.",
      },
      hobbies: {
        title: "Au-delà du code",
        description: "Explorez mes centres d'intérêt et hobbies.",
        items: [
          { title: "Films", emoji: "🎬", left: "5%", top: "5%" },
          { title: "Séries TV", emoji: "🍿", left: "5%", top: "65%" },
          { title: "Voyage", emoji: "✈️", left: "50%", top: "5%" },
          { title: "Gaming", emoji: "🎮", left: "35%", top: "40%" },
          { title: "Crochet", emoji: "🧶", left: "10%", top: "35%" },
          { title: "Musique", emoji: "🎤", left: "70%", top: "45%" },
          { title: "Matcha", emoji: "🍵", left: "45%", top: "70%" },
        ],
        mapAlt: "Carte de Paris",
        memojiAlt: "Memoji souriant",
      },
    },
    contact: {
      title: "Connectons-nous et créons ensemble",
      description:
        "Vous avez un projet, une question ou juste envie de discuter ? N'hésitez pas à me contacter !",
      btn: "Me contacter",
    },
    form: {
      eyebrow: "Me contacter",
      title: "Construisons quelque chose de génial ensemble",
      description:
        "Que vous ayez un projet en tête, une question ou que vous vouliez simplement vous connecter, n'hésitez pas !",
      namePlaceholder: "Nom",
      emailPlaceholder: "E-mail",
      subjectPlaceholder: "Sujet",
      messagePlaceholder: "Votre message",
      sendBtn: "Envoyer",
      toastSending: "Envoi en cours...",
      toastSuccess: "Message envoyé avec succès !",
      toastError: "Erreur lors de l'envoi. Veuillez réessayer.",
      toastNetwork: "Erreur réseau. Veuillez réessayer plus tard.",
    },
    footer: {
      copyright: "© 2026. Tous droits réservés.",
    },
  },
};
