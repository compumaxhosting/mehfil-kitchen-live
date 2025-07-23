export type ServiceKey = 'birthday' | 'wedding' | 'party' | 'event' | 'corporate' | 'ondemand';

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface MenuItem {
  name: string;
  description: string;
}

export interface ServiceData {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  introTitle: string;
  introParagraphs: string[]; // Changed from introText to introParagraphs
  introImage: string;
  features: Feature[];
  menuItems: MenuItem[];
  galleryImages: string[];
  ctaTitle: string;
  ctaText: string;
  linkContent: string;
  ctaLink?: {
    url: string;
  };
}

export interface ServicePageProps {
  service: ServiceKey;
}

export const serviceData: Record<ServiceKey, ServiceData> = {
  'birthday': {
    title: 'Birthday Catering',
    heroSubtitle: 'Celebrate your special day with authentic Hyderabadi flavors',
    heroImage: '/birthday-hero.jpg',
    introTitle: 'Birthday Catering Services in Skokie – Mehfil Kitchen',
    introParagraphs: [
      "From kids' parties to adult milestone celebrations, our birthday catering services bring joy and flavor to every age group.",
      "We handle everything from food to setup, so you can focus on making memories.",
      "Looking for birthday catering in Skokie, IL? Mehfil Kitchen offers budget birthday catering packages with authentic Hyderabadi food catering services to make your celebration special.",
      "Our birthday catering menus feature Mutton Biryani, Chicken Biryani, Hyderabadi Dum Biryani, Chicken Reshmi Kabob, Chicken-65, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, Shahi Rice, and more.",
      "We are known as the best birthday caterer in Skokie IL, providing customized birthday catering, delivery, and affordable catering packages for all ages and occasions. Serving Skokie, Evanston, Lincolnwood, and nearby areas, we bring the taste of Hyderabad to your party."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com/birthday'
    },
    linkContent: 'for your birthday catering needs in Skokie today!',
    introImage: '/birthday-intro.jpg',
    features: [
      {
        title: "Custom Birthday Menus",
        description: "Choose from our selection or work with our chefs to create a personalized menu",
        icon: '/catering-icons/cake.gif'
      },
      {
        title: "Theme Coordination",
        description: "We align our presentation with your party theme for a cohesive experience",
        icon: '/catering-icons/palette.png'
      },
      {
        title: "Age-Appropriate Options",
        description: "Special menus for kids, teens, and adult celebrations",
        icon: '/catering-icons/menu.gif'
      },
      {
        title: "Full Service",
        description: "Delivery, setup, servers, cleanup",
        icon: '/catering-icons/box.gif'
      },
      {
        title: "Trusted Across Chicago",
        description: "Catering in Schaumburg, Naperville, Skokie, and more",
        icon: '/catering-icons/rating.png'
      }
    ],
    menuItems: [
      { name: "Mini Kabob Platters", description: "Assorted kabobs perfect for party finger food" },
      { name: "Biryani Stations", description: "Interactive biryani serving with all accompaniments" },
      { name: "Chaat Corner", description: "Build-your-own chaat station with various toppings" },
      { name: "Chicken 65", description: "Spicy fried chicken, a popular Indian appetizer" },
      { name: "Fish Fry", description: "Crispy fried fish, seasoned with traditional spices" },
      { name: "Masala Chai", description: "Fragrant spiced tea served with traditional snacks" },
      { name: "Mango Lassi", description: "Creamy mango yogurt drink, a perfect complement to any meal" },
      { name: "Gulab Jamun Towers", description: "Impressive dessert display with warm gulab jamun" }
    ],
    galleryImages: ['catering/chicken-biryani.png', 'catering/malai-boti.png', 'catering/snacks.png'],
    ctaTitle: "Plan Your Birthday Feast",
    ctaText: "Contact us to discuss menu options and pricing for your celebration"
  },

  'wedding': {
    title: 'Wedding Catering',
    heroSubtitle: 'Making your special day truly memorable with royal Hyderabadi cuisine',
    heroImage: '/wedding-hero.webp',
    introTitle: 'Wedding Catering Services in Skokie, IL – Mehfil Kitchen',
    introParagraphs: [
      "Make your special day unforgettable with Mehfil Kitchen's wedding catering services in Skokie, IL.",
      "We offer affordable wedding catering packages featuring authentic Hyderabadi and Indian wedding catering menus like Mutton Biryani, Chicken Biryani, Hyderabadi Dum Biryani, Chicken Reshmi Kabob, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, and Shahi Rice.",
      "As one of the best wedding caterers in Skokie IL, we provide halal wedding catering, wedding buffet catering, small wedding catering, and luxury wedding dinner catering.",
      "We cater to outdoor weddings, receptions, and customized wedding events across Skokie, Evanston, Lincolnwood, and nearby areas."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com/wedding'
    },
    linkContent: 'Discover top-rated wedding catering services in Skokie IL',
    introImage: '/wedding-intro.jpg',
    features: [
      {
        title: "Royal Wedding Menus",
        description: "Traditional Nizami cuisine fit for your special day",
        icon: '/catering-icons/crown.gif'
      },
      {
        title: "Multiple Event Packages",
        description: "Covering mehndi, nikah, walima, and reception events",
        icon: '/catering-icons/wedding-ceremony.png'
      },
      {
        title: "Tasting Sessions",
        description: "Private tastings to finalize your menu selections",
        icon: '/catering-icons/food-delivery.gif'
      },
      {
        title: "Authentic Hyderabadi Taste",
        description: "Our chefs are experts in age-old recipes from Hyderabad, blending spices and slow-cooking techniques to deliver rich, flavorful dishes.",
        icon: '/catering-icons/rating.png'
      },
      {
        title: "Customized Wedding Menus",
        description: "Choose from a wide selection of dishes including Hyderabadi Chicken Biryani, Mutton Korma, Bagara Baingan, Haleem, and more. We offer vegetarian, non-vegetarian, and fusion menus tailored to your theme.",
        icon: '/catering-icons/menu.gif'
      },
      {
        title: "Full-Service Indian Catering",
        description: "We handle everything—from food preparation and live stations to professional staff and elegant presentation. Whether it's a sangeet, mehndi, nikah, or wedding reception, we've got you covered.",
        icon: '/catering-icons/catering.gif'
      }
    ],
    menuItems: [
      { name: "Hyderabadi Dum Biryani", description: "Fragrant basmati rice with tender meat, cooked in dum style" },
      { name: "Haleem", description: "Slow-cooked meat and lentil stew, a Hyderabadi specialty" },
      { name: "Murgh Badami", description: "Chicken in creamy almond sauce with delicate spices" },
      { name: "Mutton Korma", description: "Rich, aromatic mutton curry with traditional spices" },
      { name: "Bagara Baingan", description: "Eggplant cooked in a tangy peanut and sesame sauce" },
      { name: "Nihari", description: "Slow-cooked beef stew, perfect for late-night feasts" },
      { name: "Kebabs Galore", description: "A selection of chicken, mutton, and vegetable kebabs" },
      { name: "Raita and Salads", description: "Refreshing yogurt-based sides to complement the meal" },
      { name: "Sheermal", description: "Saffron-infused traditional bread for ceremonial occasions" },
      { name: "Live Chaat", description: "Assorted Indian street food served live" },
      { name: "Khubani Ka Meetha", description: "Apricot dessert with a rich, creamy texture" },
      { name: "Double Ka Meetha", description: "Traditional Hyderabadi dessert made with bread, milk, and dry fruits" }
    ],
    galleryImages: ['catering/mutton-biryani.png', 'catering/badami-chicken.png', 'catering/reshmi-kabob.png'],
    ctaTitle: "Begin Planning Your Wedding Menu",
    ctaText: "Schedule a consultation with our wedding catering specialists"
  },

  'party': {
    title: 'Party Orders',
    heroSubtitle: 'Flavorful gatherings with our signature party menus',
    heroImage: '/party-hero.jpg',
    introTitle: 'Party Catering Services in Skokie, IL – Mehfil Kitchen',
    introParagraphs: [
      "Looking for party catering services in Skokie, IL? Mehfil Kitchen offers affordable party catering packages with authentic Hyderabadi and Indian food.",
      "Our party catering menu includes Mutton Biryani, Chicken Biryani, Hyderabadi Dum Biryani, Chicken Reshmi Kabob, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, and Shahi Rice, perfect for any celebration.",
      "We are known as one of the best party caterers in Skokie IL, providing halal party catering, kids party catering, small party catering, outdoor party catering, and corporate party catering with delivery options.",
      "Enjoy customized party catering for home gatherings and events across Skokie, Evanston, Lincolnwood, and nearby areas."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com'
    },
    linkContent: 'Choose top-rated party catering in Skokie IL',
    introImage: '/party-intro.jpg',
    features: [
      {
        title: "Crowd-Pleasing Favorites",
        description: "All the dishes your guests will love and remember",
        icon: '/catering-icons/rating.png'
      },
      {
        title: "Flexible Portion Sizes",
        description: "From intimate gatherings to large celebrations",
        icon: '/catering-icons/pie-chart.png'
      },
      {
        title: "Last-Minute Availability",
        description: "Quality catering even with short notice",
        icon: '/catering-icons/quick-response.gif'
      }
    ],
    menuItems: [
      { name: "Mehfils Chicken", description: "Signature chicken dish with a blend of spices" },
      { name: "Mutton Biryani", description: "Fragrant basmati rice layered with tender mutton" },
      { name: "Fish Fry", description: "Crispy fried fish seasoned with traditional spices" },
      { name: "Paneer Tikka", description: "Grilled paneer cubes marinated in spices" },
      { name: "Vegetable Biryani", description: "Aromatic rice with mixed vegetables and spices" },
      { name: "Kebabs and Rolls", description: "Assorted kebabs served with fresh rolls" },
      { name: "Chicken 65 Platters", description: "Our signature spicy appetizer in party-sized portions" },
      { name: "Kalimirchi Beef", description: "Pepper-crusted beef that's always a hit" },
      { name: "Veggie Samosa Towers", description: "Crispy samosas arranged as a centerpiece" },
      { name: "Mirchi Ka Salan", description: "Traditional chili curry for authentic flavor" }
    ],
    galleryImages: ['catering/chicken-65.png', 'catering/kalimirchi-beef.png', 'catering/mehfils-chicken.png'],
    ctaTitle: "Order Your Party Catering",
    ctaText: "Call +1 786-763-4000 for quick quotes and orders"
  },

  'event': {
    title: 'Event Catering',
    heroSubtitle: 'Professional catering for corporate and social events',
    heroImage: '/event-hero.jpg',
    introTitle: 'Event Catering Services in Skokie, IL – Mehfil Kitchen',
    introParagraphs: [
      "Looking for event catering in Skokie, IL? Mehfil Kitchen offers affordable event catering packages featuring authentic Hyderabadi and Indian cuisine.",
      "Our event catering menu includes Mutton Biryani, Chicken Biryani, Hyderabadi Dum Biryani, Chicken Reshmi Kabob, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, and Shahi Rice, perfect for any occasion.",
      "As one of the best event caterers in Skokie IL, we provide halal event catering, corporate event catering, small and large event catering, outdoor and private event catering, with customized packages to suit your needs.",
      "Serving Skokie, Evanston, Lincolnwood, and nearby areas, we ensure top-quality food and service."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com/event'
    },
    linkContent: 'Choose top-rated event catering in Skokie IL at',
    introImage: '/event-intro.jpg',
    features: [
      {
        title: "Custom Event Packages",
        description: "Tailored to your event type and guest count",
        icon: '/catering-icons/package.gif'
      },
      {
        title: "Professional Service Staff",
        description: "Uniformed attendants for seamless service",
        icon: '/catering-icons/professional.png'
      },
      {
        title: "Live Catering Stations",
        description: "Pani Puri, Seekh Kebab, Tandoori specials",
        icon: '/catering-icons/food-stall.png'
      },
      {
        title: "Equipment Rental",
        description: "China, linens, and serving equipment available",
        icon: '/catering-icons/platter.gif'
      }
    ],
    menuItems: [
      { name: "Gourmet Appetizer Platters", description: "A selection of our finest starters" },
      { name: "Executive Lunch Boxes", description: "Gourmet meals in premium packaging" },
      { name: "Action Stations", description: "Interactive cooking demonstrations" },
      { name: "International Fusion Options", description: "Blending Hyderabadi with global flavors" },
      { name: "Diet-Specific Menus", description: "Vegetarian, vegan, gluten-free, and halal options" },
      { name: "Custom Dessert Stations", description: "Personalized sweets and treats for your event" },
      { name: "Late Night Snack Stations", description: "Tasty bites for after-hours events" },
      { name: "Beverage Packages", description: "Coffee, tea, and soft drink options" }
    ],
    galleryImages: ['catering/fish-fry.png', 'catering/mutton-biryani.png', 'catering/butter-chicken.png'],
    ctaTitle: "Discuss Your Event Needs",
    ctaText: "Get a customized proposal for your upcoming event"
  },

  'corporate': {
    title: 'Corporate Meals',
    heroSubtitle: 'Delight your team with professionally prepared meals',
    heroImage: '/corporate-hero.jpg',
    introTitle: 'Business Dining Solutions',
    introParagraphs: [
      "Spice up your corporate events with the rich and royal flavors of Hyderabadi cuisine!",
      "We specialize in Hyderabadi corporate catering in Chicago, offering a unique menu that blends traditional Indian spices with Mughlai finesse — perfect for impressing your clients, colleagues, or employees.",
      "From executive lunches to large corporate gatherings, we bring authentic flavors to your workplace."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com/corporate'
    },
    linkContent: 'for your corporate dining needs today!',
    introImage: '/corporate-intro.jpg',
    features: [
      {
        title: "Office Lunch Programs",
        description: "Regular scheduled deliveries for your workplace",
        icon: '/catering-icons/lunch-box.gif'
      },
      {
        title: "Client Meeting Menus",
        description: "We offer flexible menu packages tailored to suit your event size, dietary needs (vegetarian, vegan, halal), and budget. From full buffets to individually packed lunch boxes, we've got you covered.",
        icon: '/catering-icons/customization.png'
      },
      {
        title: "Perfect for Meetings, Conferences & Office Parties",
        description: "Whether it's a business lunch, a holiday office party, or a client appreciation dinner, we deliver consistent quality and taste that leaves a lasting impression.",
        icon: '/catering-icons/meeting.gif'
      },
      {
        title: "Bulk Order Discounts",
        description: "Special pricing for recurring corporate clients",
        icon: '/catering-icons/price-tag.png'
      }
    ],
    menuItems: [
      { name: "Office Lunch Packages", description: "Convenient meals for busy workdays" },
      { name: "Executive Thali Meals", description: "Balanced meals with varied flavors" },
      { name: "Box Lunch Options", description: "Neatly packaged individual meals" },
      { name: "Conference Buffets", description: "Self-serve setups for large groups" },
      { name: "Vegetarian and Vegan Options", description: "Healthy choices for all dietary needs" },
      { name: "Dessert Platters", description: "Sweet treats to end the meal on a high note" },
      { name: "Beverage Packages", description: "Coffee, tea, and soft drinks for meetings" },
      { name: "Gourmet Platters", description: "Artfully arranged selections for sharing" },
      { name: "Coffee Break Packages", description: "With snacks and beverages" }
    ],
    galleryImages: ['catering/mutton-biryani.png', 'catering/shahi-rice.png', 'catering/chicken-kadai.png'],
    ctaTitle: "Enhance Your Workplace Dining",
    ctaText: "Ask about our corporate account benefits"
  },

  'ondemand': {
    title: 'On-Demand Orders',
    heroSubtitle: 'Freshly prepared meals at your convenience',
    heroImage: '/ondemand-hero.jpg',
    introTitle: 'Quality Meals When You Need Them',
    introParagraphs: [
      "Looking for Delicious Hyderabadi Food On-Demand in Chicago?",
      "We've got you covered with authentic Hyderabadi catering, made fresh and delivered fast — perfect for small parties, family dinners, office lunches, and last-minute events.",
      "Whether you need a quick meal for 10 or a feast for 200, our on-demand service delivers quality every time."
    ],
    ctaLink: {
      url: 'https://mehfilkitchen.com/ondemand'
    },
    linkContent: 'for your on-demand catering needs today!',
    introImage: '/ondemand-intro.jpg',
    features: [
      {
        title: "Quick Turnaround",
        description: "Freshly prepared meals with minimal wait",
        icon: '/catering-icons/fast-time.png'
      },
      {
        title: "Customized Portions",
        description: "Order for 10 to 200+ guests",
        icon: '/catering-icons/pie-chart.png'
      },
      {
        title: "Family Meal Packages",
        description: "Complete dinners for hassle-free meals",
        icon: '/catering-icons/tray.png'
      },
      {
        title: "Contactless Delivery",
        description: "Safe and hygienic food handling",
        icon: '/catering-icons/delivery-man.png'
      }
    ],
    menuItems: [
      { name: "Family Meal Packages", description: "Complete dinners for hassle-free meals" },
      { name: "Customized Portions", description: "Order for 10 to 200+ guests" },
      { name: "Express Delivery", description: "Fast service for last-minute orders" },
      { name: "Signature Dishes", description: "Popular items like Biryani, Kebabs, and Curries" },
      { name: "Vegetarian and Vegan Options", description: "Healthy choices for all dietary needs" },
      { name: "Daily Specials", description: "Chef's selections made fresh each day" },
      { name: "Combo Meals", description: "Complete with main, sides, and bread" },
      { name: "Dessert Add-ons", description: "Sweet endings to your meal" }
    ],
    galleryImages: ['catering/chicken-biryani.png', 'catering/beef-masala.png', 'catering/malai-boti.png'],
    ctaTitle: "Place Your Order Now",
    ctaText: "Call +1 786-763-4000 for immediate service"
  }
};