/* ==========================================================================
   DONNÉES DU PORTFOLIO — c'est LE fichier à modifier.
   - CONTACT : ton email et tes liens (utilisés partout sur le site)
   - PROJETS : textes, liens YouTube, images de chaque projet
   - PHOTOS  : la galerie Photographie de la page À propos
   Après modification, enregistre et recharge la page.
   ========================================================================== */

/* Laisse "[à compléter]" tant que tu n'as pas l'info : le lien ne sera pas
   cliquable (et sera masqué dans le pied de page) pour éviter les liens morts. */
window.CONTACT = {
  email: "lennybaremond@gmail.com",   // ← ton adresse email
  telephone: "07 67 25 59 88",          // ← ton numéro, ex. "06 12 34 56 78"
  linkedin: "https://www.linkedin.com/in/lenny-baremond-330253417/",           // ← lien complet, ex. "https://www.linkedin.com/in/ton-profil"
  instagram: "https://www.instagram.com/lenny_brmd/"           // ← lien complet, ex. "https://www.instagram.com/ton-compte"
};

/* --------------------------------------------------------------------------
   PROJETS (affichés dans cet ordre)
   - categories : "graphisme", "video", "web" (un projet peut en avoir plusieurs)
   - youtube    : colle le lien YouTube dans url: "" (n'importe quel format de lien)
   - images     : chemins des fichiers dans le dossier images/projets/...
   -------------------------------------------------------------------------- */
window.PROJETS = [
  {
    id: "carmix",
    titre: "Car'Mix",
    sousTitre: "La pub vidéo d'une poudre à cocktail signée Carambar",
    categories: ["video"],
    infos: ["Projet de groupe (4)", "27 avril – 8 juin 2026", "BUT MMI 1"],
    cover: "images/projets/carmix/cover.jpg",
    youtube: [
      { titre: "Publicité Car'Mix", url: "https://youtu.be/xXMiM9wJkEo" }
    ],
    contexte:
      "Le défi : imaginer un produit innovant pour une vraie marque française, puis construire toute sa communication. Avec mon groupe, on a choisi Carambar et inventé Car'Mix, une poudre à cocktail en trois saveurs nostalgiques (caramel, barbe à papa et atomic) pour les 18-35 ans. L'idée de la campagne : retrouver les bonbons de l'enfance dans une ambiance de soirée entre adultes.",
    role: [
      "Montage complet de la pub sous DaVinci Resolve : tri des rushes, construction de la timeline, rythme et effets sonores",
      "Étalonnage couleur clip par clip, avec une teinte chaude et colorée fidèle à l'univers Carambar",
      "Sous-titrage de la vidéo en anglais",
      "Prise de vue et retouche des photos pour les posts Instagram"
    ],
    groupe: [
      "Tournage des séquences de la pub",
      "Composition de toute la musique de la pub, 100 % originale",
      "Charte graphique, stratégie de communication et contenus réseaux sociaux"
    ],
    logiciels: ["DaVinci Resolve"],
    appris: [
      "Mener une vidéo promo de A à Z, de la réception des rushes jusqu'à l'export final",
      "Étalonner avec le Parade RGB pour donner une vraie identité couleur à un film",
      "Organiser les fichiers d'un projet partagé (conversions, codecs, dossiers propres)",
      "Respecter le cadre légal d'une pub : loi Évin, mention légale en fin de vidéo, droits d'auteur"
    ],
    resultat:
      "Une pub rythmée et colorée, cohérente avec l'univers Carambar, sous-titrée en anglais, avec une bande-son entièrement composée par le groupe et la mention légale loi Évin en fin de vidéo.",
    liens: [],
    images: [
      { src: "images/projets/carmix/1.jpg", legende: "Extrait de la pub" },
      { src: "images/projets/carmix/2.jpg", legende: "Étalonnage sous DaVinci Resolve" },
      { src: "images/projets/carmix/3.jpg", legende: "Photo pour Instagram" },
      { src: "images/projets/carmix/4.jpg", legende: "Photo pour Instagram" }
    ]
  },

  {
    id: "vlog-japon",
    titre: "Vlog Japon",
    sousTitre: "Mon voyage au Japon, filmé et monté de A à Z",
    categories: ["video"],
    infos: ["Projet personnel", "Tourné en 2024, monté en 2024-2025", "Durée : [durée]"], // ← remplace [durée], ex. "12 min"
    cover: "images/projets/vlog-japon/cover.jpg",
    youtube: [
      { titre: "Vlog Japon", url: "https://youtu.be/R8v6A06opBA" }
    ],
    contexte:
      "Un projet perso, en dehors des cours. En 2024, je suis parti au Japon avec ma caméra Insta360 et j'ai voulu ramener plus que des photos : un vrai film du voyage, que je pourrais revoir et partager.",
    role: [
      "Tournage sur place avec ma caméra Insta360, au fil du voyage",
      "Tri et sélection des rushes",
      "Montage et mise en rythme sous Insta360 Studio",
      "Écriture du fil narratif du vlog, étape par étape"
    ],
    logiciels: ["Insta360 Studio"],
    appris: [
      "Filmer en conditions réelles, seul et sans équipe",
      "Transformer des heures de rushes en une histoire qui se suit",
      "Tenir un projet personnel sur la durée, de 2024 à 2025"
    ],
    resultat:
      "Un vlog complet qui raconte mon voyage au Japon, et le projet qui m'a donné envie d'aller plus loin dans le montage vidéo.",
    liens: [],
    images: [
      { src: "images/projets/vlog-japon/1.jpg", legende: "Capture du vlog" },
      { src: "images/projets/vlog-japon/2.jpg", legende: "Capture du vlog" },
      { src: "images/projets/vlog-japon/3.jpg", legende: "Capture du vlog" }
    ]
  },

  {
    id: "aigles",
    titre: "Les Aigles du Velay",
    sousTitre: "Une campagne pour faire du club de handibasket un lieu où chacun a sa place",
    categories: ["graphisme", "video"],
    infos: ["Projet de groupe (4)", "Octobre 2026", "BUT MMI 2"],
    cover: "images/projets/aigles/cover.jpg",
    youtube: [
      { titre: "Vidéo publicitaire (30 s)", url: "https://youtu.be/vMxyyZyZgiA" }
    ],
    contexte:
      "Une campagne de communication RSE pour Les Aigles du Velay, le club de handibasket de l'association Handisport Le Puy-en-Velay. Notre pilier : l'inclusion. L'objectif, c'est d'attirer de nouveaux joueurs et d'ouvrir le club au grand public, alors que le handisport reste encore peu connu.",
    role: [
      "Audit de la communication du club : relevé de la page Facebook, relevé des autres réseaux avec le groupe (Instagram, LinkedIn) et calcul des taux d'engagement",
      "Tests de référencement sur Google avec des mots-clés grand public",
      "Classement des problèmes selon leur impact sur la visibilité Google, puis recommandations pour que le club soit mieux trouvé, avec la justification SEO de chaque action",
      "L'affiche de la campagne : accroche « Vous aimez le basket ? Vous n'avez jamais vu ça », annonce des séances découverte, QR code d'inscription",
      "Deux visuels LinkedIn et deux visuels Facebook",
      "Tous mes visuels sont faits sous Canva, dans la direction artistique définie avec le groupe"
    ],
    groupe: [
      "Recommandation stratégique et plan de communication",
      "Identité visuelle de la campagne",
      "Communiqué de presse et maquettes animées",
      "Vidéo publicitaire de 30 secondes : scénario, storyboard, tournage et montage"
    ],
    logiciels: ["Canva", "Trello", "Google Docs"],
    appris: [
      "Faire un audit à partir de chiffres relevés moi-même et relier chaque problème à son effet sur Google",
      "Créer des supports print et web qui respectent une direction artistique commune",
      "Adapter un même message à chaque réseau : LinkedIn pour les entreprises, Facebook pour le public local",
      "Communiquer sur le handisport de façon positive et inclusive"
    ],
    resultat:
      "Une campagne complète autour du message « Prends place » : une affiche, quatre visuels pour les réseaux, un audit chiffré avec ses recommandations SEO, et une pub vidéo de 30 secondes.",
    liens: [],
    images: [
      { src: "images/projets/aigles/affiche.jpg", legende: "L'affiche, support print" },
      { src: "images/projets/aigles/linkedin-1.jpg", legende: "LinkedIn : « Prenez place dans le fauteuil »" },
      { src: "images/projets/aigles/linkedin-2.jpg", legende: "LinkedIn : « Le club du Velay qui joue en Europe recrute »" },
      { src: "images/projets/aigles/facebook-1.jpg", legende: "Facebook : « Match, c'est demain ! »" },
      { src: "images/projets/aigles/facebook-2.jpg", legende: "Facebook : « Séance découverte »" },
      { src: "images/projets/aigles/logo.png", legende: "Le logo du club" }
    ]
  },

  {
    id: "interface",
    titre: "Magazine Interface n°26",
    sousTitre: "Un magazine étudiant imprimé sur le thème de la mode",
    categories: ["graphisme"],
    infos: ["Pôle graphisme (21 étudiants)", "BUT MMI 1"],
    cover: "images/projets/interface/cover.jpg",
    youtube: [],
    contexte:
      "Interface, c'est le magazine étudiant du BUT MMI, et le n°26 avait pour thème la mode. J'étais dans le pôle graphisme, qui gérait toute la partie visuelle : identité, iconographie, visuels, jeux, illustrations et mise en page finale avant l'impression.",
    role: [
      "Création du moodboard avec le pôle, pour fixer la direction graphique du numéro",
      "Recherche d'icônes pour les rubriques, en accord avec le style choisi",
      "Montages photo sous Photoshop pour illustrer les articles Outfit of the Day et Shatta",
      "Jeu des 7 différences : idées de différences et mise en place du décor pour les photos",
      "Mise en page de la page jeux (7 différences et jeu des Mii)",
      "Mise en page des pages 23, 24, 25 et 28 sous InDesign"
    ],
    logiciels: ["InDesign", "Photoshop"],
    appris: [
      "Travailler dans une grande équipe en suivant une direction artistique commune",
      "Respecter un gabarit et construire une hiérarchie claire entre titres, textes et images",
      "Passer d'un type de contenu à l'autre : articles, jeux, icônes",
      "Préparer des pages pour l'impression"
    ],
    resultat:
      "Un magazine imprimé, et des pages lisibles et cohérentes avec l'ambiance du numéro. Le magazine complet est en ligne sur Calaméo.",
    liens: [
      { label: "Feuilleter le magazine sur Calaméo", url: "https://www.calameo.com/read/0051699394dd664a135ed" },
      { label: "Le site d'Interface", url: "https://www.interface-media.com/" }
    ],
    images: [
      { src: "images/projets/interface/page-23.jpg", legende: "Page 23" },
      { src: "images/projets/interface/page-24.jpg", legende: "Page 24" },
      { src: "images/projets/interface/page-25.jpg", legende: "Page 25" },
      { src: "images/projets/interface/page-28.jpg", legende: "Page 28" },
      { src: "images/projets/interface/page-jeux.jpg", legende: "La page jeux" }
    ]
  },

  {
    id: "tuto-avion",
    titre: "Interview & tutoriel avion en papier",
    sousTitre: "Une interview express et un tuto en anglais avec une mini-fiction",
    categories: ["video"],
    infos: ["Interview solo + tutoriel à 4", "BUT MMI 1"],
    cover: "images/projets/tuto-avion/cover.jpg",
    youtube: [
      { titre: "Interview (30 s)", url: "https://youtu.be/qeZSwP_xDCU" },
      { titre: "Tutoriel avion en papier (en anglais)", url: "https://youtu.be/SDPIy5UOQ7E" }
    ],
    contexte:
      "Deux vidéos avec des contraintes précises. D'abord une interview de 30 secondes, où chacun tenait tous les postes : j'y raconte mon voyage au Japon. Ensuite un tutoriel en anglais d'environ 2 minutes, réalisé à quatre : on a choisi de montrer comment fabriquer un avion en papier, en y glissant une petite fiction pour le rendre plus original.",
    role: [
      "Interview : cadrage (plan d'ensemble et gros plan), prise de son à la perche avec un enregistreur externe, montage",
      "Tutoriel : écriture du script, prise de vue et prise de son",
      "Montage final du tutoriel",
      "Acteur dans la mini-fiction"
    ],
    groupe: [
      "Choix du sujet et storyboard du tutoriel"
    ],
    logiciels: [], // ← ajoute ici le logiciel de montage utilisé, ex. ["DaVinci Resolve"]
    appris: [
      "Toutes les étapes d'un projet audiovisuel, de l'écriture à la diffusion",
      "Soigner la prise de son pour un rendu propre",
      "Raconter quelque chose en 30 secondes chrono",
      "Écrire et tourner en anglais"
    ],
    resultat:
      "Deux vidéos claires qui respectent les contraintes de durée et de format, avec un son soigné et un tuto qui sort de l'ordinaire grâce à sa mini-fiction.",
    liens: [],
    images: [
      { src: "images/projets/tuto-avion/1.jpg", legende: "Interview" },
      { src: "images/projets/tuto-avion/2.jpg", legende: "Tournage du tutoriel" }
    ]
  },

  {
    id: "zelda",
    titre: "Site Zelda Breath of the Wild",
    sousTitre: "Un site dynamique sur l'univers d'Hyrule, branché sur une base de données",
    categories: ["web"],
    infos: ["Projet individuel", "BUT MMI 1"],
    cover: "images/projets/zelda/cover.jpg",
    youtube: [],
    contexte:
      "Concevoir un site web relié à une base de données, autour d'un lieu. J'ai choisi Hyrule, le monde de Zelda: Breath of the Wild. Le site affiche les lieux, les personnages et les armes du jeu, et permet de les ajouter, les modifier et les supprimer.",
    role: [
      "Modélisation des données : un MCD avec plusieurs entités et une relation plusieurs-à-plusieurs",
      "Wireframe augmenté pour prévoir les requêtes SQL derrière chaque page",
      "Développement en PHP et MySQL : affichage, ajout, modification et suppression (CRUD), requêtes avec jointures",
      "Trois interactions en JavaScript natif, sans librairie (clic, survol, manipulation du DOM)",
      "Suivi du projet avec Git, un commit par étape"
    ],
    logiciels: ["VS Code", "PHP", "MySQL", "JavaScript", "Git"],
    appris: [
      "Modéliser une base de données avant de coder",
      "Faire dialoguer PHP et SQL pour générer des pages à partir de données",
      "Manipuler le DOM en JavaScript natif",
      "Travailler de façon itérative avec Git"
    ],
    resultat:
      "Un site fonctionnel où les données sont liées entre elles (par exemple, une arme possédée par un personnage précis) et s'affichent comme prévu sur le wireframe de départ.",
    liens: [],
    images: [
      { src: "images/projets/zelda/1.jpg", legende: "Page d'accueil" },
      { src: "images/projets/zelda/2.jpg", legende: "Liste des personnages" },
      { src: "images/projets/zelda/3.jpg", legende: "Page d'ajout d'un élément" },
      { src: "images/projets/zelda/4.jpg", legende: "Le MCD" }
    ]
  }
];

/* --------------------------------------------------------------------------
   PHOTOGRAPHIE (page À propos) — mes photos prises au téléphone
   Une ligne = une case de la galerie, affichées dans cet ordre.
   - fichier : nom du fichier dans images/photos/ (attention aux majuscules)
   - legende : légende courte. Tant qu'elle vaut "[légende à compléter]",
               elle n'est pas affichée sur le site.
   - alt     : description de la photo pour les personnes malvoyantes
   Ajouter une photo = déposer le fichier dans images/photos/ + ajouter une ligne.
   Retirer une photo = supprimer sa ligne (le fichier peut rester dans le dossier).
   Versions allégées (conseillé) : voir LISEZ-MOI.md, « Rubrique Photographie ».
   -------------------------------------------------------------------------- */
window.PHOTOS = [
  { fichier: "photo-1.jpg",  legende: "[légende à compléter]", alt: "Palmiers au bord d'un cours d'eau, au pied d'une falaise rocheuse" },
  { fichier: "photo-2.jpg",  legende: "[légende à compléter]", alt: "Façade couverte d'une grande fresque colorée sous un ciel bleu" },
  { fichier: "photo-3.jpg",  legende: "[légende à compléter]", alt: "Passerelle en bois qui s'enfonce dans une végétation tropicale" },
  { fichier: "photo-4.jpg",  legende: "[légende à compléter]", alt: "Voiture américaine ancienne jaune à bandes noires garée dans la rue" },
  { fichier: "photo-5.jpg",  legende: "[légende à compléter]", alt: "Voiture de sport sombre garée sur des pavés, devant un cyprès" },
  { fichier: "photo-6.jpg",  legende: "[légende à compléter]", alt: "Ouverture ronde dans la roche d'une grotte, laissant voir le ciel" },
  { fichier: "photo-7.jpg",  legende: "[légende à compléter]", alt: "Terrasse couverte d'une maison avec chaises orange et coussin fleuri" },
  { fichier: "photo-8.jpg",  legende: "[légende à compléter]", alt: "Coucher de soleil doré sur la mer, reflété sur le sable mouillé" },
  { fichier: "photo-9.jpg",  legende: "[légende à compléter]", alt: "Maison abandonnée envahie par la végétation, entre deux murs" },
  { fichier: "photo-10.jpg", legende: "[légende à compléter]", alt: "Feuilles de bananier au milieu d'une végétation dense" },
  { fichier: "photo-11.jpg", legende: "[légende à compléter]", alt: "Fleur d'hibiscus rouge devant une vieille façade" },
  { fichier: "photo-12.jpg", legende: "[légende à compléter]", alt: "Cocotier penché au-dessus d'une côte, avec un rocher au large" },
  { fichier: "photo-13.jpg", legende: "[légende à compléter]", alt: "Assiette de riz, salade et viande grillée, avec deux jus de fruits" },
  { fichier: "photo-14.jpg", legende: "[légende à compléter]", alt: "Sillage d'un bateau sur la mer au coucher du soleil" },
  { fichier: "photo-15.jpg", legende: "[légende à compléter]", alt: "Palmes de cocotiers vues d'en bas sur un ciel bleu nuageux" },
  { fichier: "photo-16.jpg", legende: "[légende à compléter]", alt: "Soleil couchant sur une baie où mouillent des voiliers" },
  { fichier: "photo-17.jpg", legende: "[légende à compléter]", alt: "Silhouettes sur une plage sous un palmier, au coucher du soleil" },
  { fichier: "photo-18.jpg", legende: "[légende à compléter]", alt: "Ciel orangé au crépuscule au-dessus d'une maison avec piscine" },
  { fichier: "photo-19.jpg", legende: "[légende à compléter]", alt: "Ruelle aux maisons blanches menant à un clocher, ciel bleu" },
  { fichier: "photo-20.jpg", legende: "[légende à compléter]", alt: "Plage de sable au pied de falaises ocre, mer calme" },
  { fichier: "photo-21.jpg", legende: "[légende à compléter]", alt: "Vue sur une ville ancienne à travers une arche en pierre" },
  { fichier: "photo-22.jpg", legende: "[légende à compléter]", alt: "Falaises de roche orangée vues depuis l'entrée d'une grotte" },
  { fichier: "photo-23.jpg", legende: "[légende à compléter]", alt: "Catamaran seul sur la mer sous un ciel nuageux" },
  { fichier: "photo-24.jpg", legende: "[légende à compléter]", alt: "Soleil couchant au-dessus de la mer, avec une île à l'horizon" }
];

/* Projets mis en avant sur la page d'accueil */
window.PROJETS_ACCUEIL = ["carmix", "vlog-japon", "aigles", "interface"];
