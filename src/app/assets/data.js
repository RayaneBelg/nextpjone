const menu = [
    { id: 1, type: "viande", plat: "plat chaud", nom: "Entrecôte grillée", description: "Entrecôte grillée juteuse accompagnée d'une sauce au poivre maison, servie avec une garniture de légumes de saison et de pommes de terre sautées.", prix: 25.5 , src : "../../rbryani.png"},
    { id: 2, type: "viande", plat: "entrée", nom: "Carpaccio de boeuf", description: "Fines tranches de boeuf marinées, servies avec une salade de roquette, des copeaux de parmesan et un filet d'huile d'olive extra vierge.", prix: 12.0 ,src : "../../rbryani.png"}, 
    { id: 3, type: "viande", plat: "dessert", nom: "Tartelette aux noix", description: "Tartelette croustillante garnie d'un mélange riche de noix caramélisées et nappée d'un caramel beurre salé onctueux.", prix: 8.0 , src : "../../rbryani.png"},
    { id: 4, type: "poisson", plat: "plat chaud", nom: "Filet de saumon", description: "Filet de saumon cuit à la perfection, accompagné d'une purée de patates douces et d'une sauce citronnée aux herbes fraîches.", prix: 22.0 , src : "../../rbryani.png"},
    { id: 5, type: "poisson", plat: "entrée", nom: "Ceviche de dorade", description: "Dorade fraîchement marinée au citron vert, avec des morceaux de coriandre, d'oignons rouges et une touche d'épices légères.", prix: 14.5 , src : "../../rbryani.png"},
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
      nom: "Formule Petit-Déjeuner",
      description: "Un petit-déjeuner complet pour bien commencer la journée : croissant ou pain au chocolat, boisson chaude au choix et un jus d'orange pressé.",
      prix: 7.5,
      disponibilite: "Matin uniquement",
      inclus: ["Viennoiserie", "Boisson chaude", "Jus de fruits"]
    },
    {
      id: 2,
      nom: "Formule Goûter Gourmand",
      description: "Une pause gourmande pour l'après-midi : une part de tarte maison, un cookie ou une madeleine, accompagné d'une boisson chaude ou d'un jus de fruits.",
      prix: 6.0,
      disponibilite: "Après-midi uniquement",
      inclus: ["Pâtisserie maison", "Boisson chaude ou froide"]
    },
    {
      id: 3,
      nom: "Formule Midi",
      description: "Un repas équilibré pour le déjeuner : plat du jour au choix, une boisson et un dessert maison pour finir en beauté.",
      prix: 15.0,
      disponibilite: "Midi uniquement",
      inclus: ["Plat du jour", "Dessert maison", "Boisson"]
    },
    {
      id: 4,
      nom: "Formule Soir",
      description: "Un dîner complet et raffiné : entrée, plat et dessert avec une boisson incluse pour une expérience gastronomique.",
      prix: 25.0,
      disponibilite: "Soir uniquement",
      inclus: ["Entrée", "Plat", "Dessert", "Boisson"]
    }
  ];
  
  