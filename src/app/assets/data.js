const menu = [
    { id: 1, type: "viande", plat: "plat chaud", nom: "Entrecôte grillée", description: "Entrecôte grillée juteuse accompagnée d'une sauce au poivre maison, servie avec une garniture de légumes de saison et de pommes de terre sautées.", prix: 25.5 , src : "../../rbu.png"},
    { id: 2, type: "viande", plat: "entrée", nom: "Carpaccio de boeuf", description: "Fines tranches de boeuf marinées, servies avec une salade de roquette, des copeaux de parmesan et un filet d'huile d'olive extra vierge.", prix: 12.0 ,src : "../../rbryani.png"}, 
    { id: 3, type: "viande", plat: "dessert", nom: "Tartelette aux noix", description: "Tartelette croustillante garnie d'un mélange riche de noix caramélisées et nappée d'un caramel beurre salé onctueux.", prix: 8.0 , src : "../../fish.png"},
    { id: 4, type: "poisson", plat: "plat chaud", nom: "Filet de saumon", description: "Filet de saumon cuit à la perfection, accompagné d'une purée de patates douces et d'une sauce citronnée aux herbes fraîches.", prix: 22.0 , src : "../../rbryani.png"},
    { id: 5, type: "poisson", plat: "entrée", nom: "Ceviche de dorade", description: "Dorade fraîchement marinée au citron vert, avec des morceaux de coriandre, d'oignons rouges et une touche d'épices légères.", prix: 14.5 , src : "../../stk.png"},
    { id: 6, type: "poisson", plat: "dessert", nom: "Crème brûlée", description: "Crème brûlée classique avec une fine croûte caramélisée et une subtile saveur de zeste d'orange pour une touche fruitée.", prix: 7.0 , src : "../../rbryani.png"},
    { id: 7, type: "viande", plat: "plat chaud", nom: "Poulet basquaise", description: "Poulet mijoté dans une sauce savoureuse à base de tomates, poivrons et épices, servi avec un riz délicatement parfumé au safran.", prix: 18.0 , src : "../../rbryani.png"},
    { id: 8, type: "poisson", plat: "plat chaud", nom: "Bouillabaisse", description: "Bouillabaisse traditionnelle composée de divers poissons, fruits de mer et légumes, servie avec une rouille maison et des croûtons.", prix: 26.0 , src : "../../rbryani.png"},
    { id: 9, type: "viande", plat: "entrée", nom: "Terrine de foie gras", description: "Terrine de foie gras artisanale accompagnée d'un chutney de figues et de tranches de pain brioché légèrement grillées.", prix: 15.0 , src : "../../rbryani.png"},
    { id: 10, type: "poisson", plat: "entrée", nom: "Tartare de thon", description: "Tartare de thon frais mélangé à de l'avocat, des graines de sésame et assaisonné avec une sauce soja légère.", prix: 13.5 , src : "../../rbryani.png"},
    { id: 11, type: "dessert", plat: "dessert", nom: "Moelleux au chocolat", description: "Moelleux au chocolat noir intense, avec un cœur fondant et servi avec une boule de glace à la vanille.", prix: 9.0 , src : "../../rbryani.png"},
    { id: 12, type: "dessert", plat: "dessert", nom: "Panna cotta", description: "Panna cotta à la vanille douce et soyeuse, accompagnée d'un coulis de fruits rouges pour une touche acidulée.", prix: 6.5 , src : "../../rbryani.png"},
    { id: 13, type: "poisson", plat: "plat chaud", nom: "Cabillaud au four", description: "Cabillaud délicatement cuit au four, servi avec des légumes grillés et une sauce légère à base de beurre citronné.", prix: 21.0 , src : "../../rbryani.png"},
    { id: 14, type: "viande", plat: "plat chaud", nom: "Côtelette d'agneau", description: "Côtelette d'agneau juteuse et savoureuse, servie avec un gratin dauphinois crémeux et une sauce au thym.", prix: 27.0 , src : "../../rbryani.png"},
    { id: 15, type: "viande", plat: "entrée", nom: "Brochette de volaille", description: "Brochette de volaille marinée aux herbes méditerranéennes, servie avec une petite salade croquante.", prix: 10.5 , src : "../../rbryani.png"}
  ];
  
  export default menu;

  export const offers = [
    {
      id: 1,
      nom: "Petit-Déjeuner",
      description: "Un petit-déjeuner complet pour bien commencer la journée : croissant ou pain au chocolat, boisson chaude au choix et un jus d'orange pressé.",
      prix: 7.5,
      disponibilite: "Matin uniquement",

      inclus: [["Croissant ou Pain au chocolat"] , ["jus de fruit au choix"] , ["café ou thé"]]
    },
    {
      id: 2,
      nom: "Dejeuner",
      description: "Un repas équilibré pour le déjeuner : plat du jour au choix, une boisson et un dessert maison pour finir en beauté.",
      prix: 15.0,
      disponibilite: "Midi uniquement",
      inclus: [["Croissant ou Pain au chocolat"] , ["jus de fruit au choix"] , ["café ou thé"]]
    },
    {
      id: 3,
      nom: "Goûter",
      description: "Une pause gourmande pour l'après-midi : une part de tarte maison, un cookie ou une madeleine, accompagné d'une boisson chaude ou d'un jus de fruits.",
      prix: 6.0,
      disponibilite: "Après-midi uniquement",
      inclus: [["Croissant ou Pain au chocolat"] , ["jus de fruit au choix"] , ["café ou thé"]]
    },
   
    {
      id: 4,
      nom: " Diner",
      description: "Un dîner complet et raffiné : entrée, plat et dessert avec une boisson incluse pour une expérience gastronomique.",
      prix: 25.0,
      disponibilite: "Soir uniquement",
      inclus: [["Croissant ou Pain au chocolat"] , ["jus de fruit au choix"] , ["café ou thé"]]
    },
 
  ];
  
 export const articles = [
    {
      id: 1,
      categorie: "Nouveautés",
      titre: "Ouverture de notre nouvelle terrasse",
      sousTitre: "Un espace chaleureux pour vos repas en plein air",
      contenu: "Nous sommes ravis de vous annoncer l'ouverture de notre toute nouvelle terrasse. Située à l'arrière du restaurant, cette terrasse offre un espace convivial et verdoyant pour vos repas en famille ou entre amis. Venez profiter d'une expérience unique en plein air, tout en savourant nos délicieuses spécialités.",
      datePublication: "2024-12-10",
      auteur: "L'équipe du restaurant",
      image: "terrasse-ouverture.jpg",
      tags: ["terrasse", "nouveautés", "expérience plein air"]
    },
    {
      id: 2,
      categorie: "Recettes",
      titre: "La recette de notre tarte tatin maison",
      sousTitre: "Un dessert classique pour régaler vos proches",
      contenu: "Vous nous l'avez demandé, et la voici ! Notre fameuse recette de tarte tatin maison est enfin disponible. Avec ses pommes caramélisées et sa pâte croustillante, ce dessert fera sensation à votre table. Suivez nos instructions simples pour réussir cette douceur emblématique.",
      datePublication: "2024-11-25",
      auteur: "Chef Marie",
      image: "recette-tarte-tatin.jpg",
      tags: ["recettes", "desserts", "tarte tatin"]
    },
    {
      id: 3,
      categorie: "Événements",
      titre: "Soirée thématique : cuisine italienne",
      sousTitre: "Voyagez en Italie sans quitter votre ville",
      contenu: "Rejoignez-nous pour une soirée inoubliable autour de la cuisine italienne. Au menu : antipasti, pizzas authentiques, pasta et tiramisu maison. L'ambiance sera assurée par des musiques italiennes et une décoration immersive. Pensez à réserver votre table pour ce voyage culinaire exceptionnel !",
      datePublication: "2024-12-01",
      auteur: "L'équipe du restaurant",
      image: "soiree-italienne.jpg",
      tags: ["événements", "cuisine italienne", "soirées thématiques"]
    },
    {
      id: 4,
      categorie: "Conseils",
      titre: "Comment choisir un bon vin pour accompagner vos repas",
      sousTitre: "Les astuces d'un sommelier pour sublimer vos plats",
      contenu: "Le choix du vin peut transformer un repas ordinaire en une véritable expérience gastronomique. Dans cet article, notre sommelier partage ses astuces pour marier les saveurs de vos plats avec le vin parfait. Que vous préfériez le rouge, le blanc ou le rosé, suivez nos conseils pour impressionner vos convives.",
      datePublication: "2024-12-05",
      auteur: "Sommelier Julien",
      image: "choisir-bon-vin.jpg",
      tags: ["conseils", "vins", "accord mets et vins"]
    },
    {
      id: 5,
      categorie: "Partenariats",
      titre: "Collaboration avec des producteurs locaux",
      sousTitre: "Soutenir l'agriculture locale tout en garantissant la qualité",
      contenu: "Nous sommes fiers de collaborer avec des producteurs locaux pour vous offrir des ingrédients frais et de saison. Dans cet article, découvrez nos partenaires et leur savoir-faire. En privilégiant les circuits courts, nous soutenons l'économie locale tout en respectant l'environnement.",
      datePublication: "2024-11-20",
      auteur: "L'équipe du restaurant",
      image: "partenariats-locaux.jpg",
      tags: ["partenariats", "local", "qualité"]
    }
  ];

  export const flash = [
    {
      id : 1,
      src : "../../burger.png",
    },
    {
      id : 2,
      src : "../../steaks.png",
    },
    {
      id : 3,
      src : "../../fishnchips.png",
    },
    
  ]