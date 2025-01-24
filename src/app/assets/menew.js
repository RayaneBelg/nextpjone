const menu = [
    // Viande Section
    { id: 1, type: "viande", plat: "plat chaud", nom: "Entrecôte de boeuf", description: "Entrecôte grillée juteuse accompagnée d'une sauce au poivre maison, servie avec une salade et des frites maison", prix: 18, src: "../../shoot6.jpg" },
    { id: 2, type: "viande", plat: "entrée", nom: "Assiette brochette", description: "Brochettes marinée accompagnée , servie avec une salade et des frites maison", prix: 12.0, src: "../../shoot4.jpg" },


    { id: 3, type: "viande", plat: "plat chaud", nom: "Côtelettes d'Agneau", description: "Brochettes marinée accompagnée , servie avec une salade et des frites maison", prix: 18.0, src: "../../shoot4.jpg" },


    { id: 19, type: "viande", plat: "plat chaud", nom: "Cordon bleu", description: "Cordon bleu maison , servie avec une salade et des frites maison", prix: 12.0, src: "../../shoot3.jpg" },

    { id: 20, type: "viande", plat: "plat chaud", nom: "Côtes de veau", description: "Brochettes marinée accompagnée , servie avec une salade et des frites maison", prix: 18.0, src: "../../shoot4.jpg" },

   


  
    // Poisson Section
    { id: 4, type: "poisson", plat: "plat chaud", nom: "Fish and chips", description: "Filet de cabillaud façon fish and chips, panure du chef et sauce tartare maison aux herbes fraîches, servi avec frites maison", prix: 12.0, src: "../../shoot2.jpg" },
    { id: 5, type: "poisson", plat: "entrée", nom: "Rosa Fish Burger", description: "Filet de cabillaud façon fish and chips, panure du chef et sauce tartare maison aux herbes fraîches servi avec frites maison ", prix: 9.5, src: "../../rbryani.png" },

  
    // Desserts Section
    { id: 7, type: "dessert", plat: "dessert", nom: "Moelleux au Chocolat", description: "Moelleux au chocolat noir intense, avec un cœur fondant et servi avec une boule de glace à la vanille.", prix: 9.0, src: "../../shoot12.jpg" },
    { id: 8, type: "dessert", plat: "dessert", nom: "Tiramisu", description: "Tiramisu classique  ou Speculoos", prix: 7.0, src: "../../shoot12.jpg" },
    { id: 9, type: "dessert", plat: "dessert", nom: "Crumble aux Fruits Rouges", description: "Pâte sablée croustillante garnie d'une compotée de fruits rouges frais.", prix: 8.5, src: "../../shoot9.jpg" },
  
    // Pizzas Section
    { id: 10, type: "pizzas", plat: "plat chaud", nom: "Margherita Classique", description: "Base tomate fraîche, mozzarella fondante et basilic frais pour une pizza classique et irrésistible.", prix: 9, src: "../../shoot11.jpg" },
    { id: 11, type: "pizzas", plat: "plat chaud", nom: "trois Fromages", description: "Un mélange harmonieux de mozzarella, gorgonzola, parmesan pour une explosion de saveurs.", prix: 11, src: "../../rbryani.png" },
    { id: 12, type: "pizzas", plat: "plat chaud", nom: "Peperoni", description: "Jambon savoureux, champignons frais, mozzarella et une touche d'origan sur une base de tomate maison.", prix: 12, src: "../../rbryani.png" },
    { id: 21, type: "pizzas", plat: "plat chaud", nom: "Thon", description: "Jambon savoureux, champignons frais, mozzarella et une touche d'origan sur une base de tomate maison.", prix: 12, src: "../../rbryani.png" },
    { id: 22, type: "pizzas", plat: "plat chaud", nom: "Saumon", description: "Saumon fumé , champignons frais, mozzarella et une touche d'origan sur une base crème maison", prix: 12, src: "../../rbryani.png" },
  
    // Burgers Section
    { id: 13, type: "burgers", plat: "plat chaud", nom: "Rosa Burger ", description: "Un steak de boeuf juteux, cheddar fondant, salade croquante, tomate fraîche et sauce maison.", prix: 9.5, src: "../../shoot1.jpg" },
    { id: 14, type: "burgers", plat: "plat chaud", nom: "Chicken Burger", description: "Filet de poulet croustillant, mayonnaise légère, laitue croquante et une touche de paprika.", prix: 10.5, src: "../../rbryani.png" },
    { id: 15, type: "burgers", plat: "plat chaud", nom: "Sandwich Baguette", description: "Baguette entière , viande au choix , frites maison , crudités", prix: 9.0, src: "../../shoot7.jpg" },
  
    // Salades Section
    { id: 16, type: "salades", plat: "entrée", nom: "Salade César", description: "Mélange de laitue romaine croquante, poulet grillé, croûtons dorés et une sauce césar crémeuse, garnie de copeaux de parmesan.", prix: 9.5, src: "../../shoot13.jpg" },
    { id: 17, type: "salades", plat: "entrée", nom: "Salade Niçoise", description: "Thon, olives noires, œufs durs, haricots verts croquants et pommes de terre servies sur un lit de salade fraîche.", prix: 10.0, src: "../../shoot13.jpg" },
    { id: 18, type: "salades", plat: "entrée", nom: "Salade Végétarienne", description: "Un mélange coloré de légumes frais, quinoa, graines croquantes et une vinaigrette légère au citron.", prix: 8.5, src: "../../shoot13.jpg" },

    //pdj

    { id: 23, type: "chef", plat: "plat du jour", nom: "Lasagnes", description: "Mélange de laitue romaine croquante, poulet grillé, croûtons dorés et une sauce césar crémeuse, garnie de copeaux de parmesan.", prix: 9.5, src: "../../rbryani.png" },
    { id: 24, type: "chef", plat: "plat du jour", nom: "Gratin dauphinois", description: "Thon, olives noires, œufs durs, haricots verts croquants et pommes de terre servies sur un lit de salade fraîche.", prix: 10.0, src: "../../rbryani.png" },
    { id: 25, type: "chef", plat: "plat du jour", nom: "émincé de boeuf sauf poivre", description: "Un mélange coloré de légumes frais, quinoa, graines croquantes et une vinaigrette légère au citron.", prix: 8.5, src: "../../rbryani.png" },

    { id: 26, type: "chef", plat: "plat du jour", nom: "Poulet basquaise", description: "Mélange de laitue romaine croquante, poulet grillé, croûtons dorés et une sauce césar crémeuse, garnie de copeaux de parmesan.", prix: 9.5, src: "../../rbryani.png" },
    { id: 27, type: "chef", plat: "plat du jour", nom: "Chili con carne", description: "Thon, olives noires, œufs durs, haricots verts croquants et pommes de terre servies sur un lit de salade fraîche.", prix: 10.0, src: "../../rbryani.png" },
    { id: 28, type: "chef", plat: "plat du jour", nom: "Parmentier Poulet", description: "Un mélange coloré de légumes frais, quinoa, graines croquantes et une vinaigrette légère au citron.", prix: 8.5, src: "../../rbryani.png" }
  ];
  export default menu 