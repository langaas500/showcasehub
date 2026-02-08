export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  tags: string[];
  url?: string;
}

export const categories = [
  {
    id: "restauranter",
    title: "Restauranter & Fastfood",
    description: "Nettsider og løsninger for restauranter, kafeer og fastfood-kjeder",
    icon: "🍽️",
    gradient: "from-orange-500 to-red-600",
    count: 4,
  },
  {
    id: "handverker",
    title: "Håndverker",
    description: "Profesjonelle nettsider for håndverkere i ulike fag",
    icon: "🔨",
    gradient: "from-blue-500 to-cyan-500",
    count: 5,
    subcategories: [
      { id: "snekker", title: "Snekker", icon: "🪚", description: "Møbelsnekring, innredning og skreddersydde løsninger" },
      { id: "elektriker", title: "Elektriker", icon: "⚡", description: "Elektriske installasjoner og smarthus-løsninger" },
      { id: "tomrer", title: "Tømrer", icon: "🏗️", description: "Husbygging, tilbygg og konstruksjonsarbeid" },
      { id: "ventilasjon", title: "Ventilasjon", icon: "💨", description: "Ventilasjonssystemer og inneklima" },
      { id: "rorlegger", title: "Rørlegger", icon: "🔧", description: "VVS-arbeid, bad og vanninstallasjoner" },
    ],
  },
];

export const projects: Project[] = [
  // Restauranter
  {
    id: "restaurant-1",
    title: "Sjøbris Restaurant",
    description: "Elegant nettside for en sjømatrestaurant med online bestilling, meny-visning og bordreservasjon.",
    category: "restauranter",
    image: "/projects/restaurant-1.jpg",
    tags: ["Next.js", "Reservasjon", "Meny"],
  },
  {
    id: "restaurant-2",
    title: "Pizza Express",
    description: "Moderne fastfood-nettside med hurtig online bestilling, leveringssporing og lojalitetsprogram.",
    category: "restauranter",
    image: "/projects/restaurant-2.jpg",
    tags: ["React", "Bestilling", "Levering"],
  },
  {
    id: "restaurant-3",
    title: "Café Nordlys",
    description: "Koselig kafé-nettside med kaffe-meny, arrangement-kalender og gavekort-system.",
    category: "restauranter",
    image: "/projects/restaurant-3.jpg",
    tags: ["Next.js", "Kalender", "E-handel"],
  },
  {
    id: "restaurant-4",
    title: "Burger & Co",
    description: "Dynamisk fastfood-kjede nettside med filialfinne, tilpassbar meny og mobil bestilling.",
    category: "restauranter",
    image: "/projects/restaurant-4.jpg",
    tags: ["React", "Geolokasjon", "Mobil"],
  },

  // Snekker
  {
    id: "snekker-1",
    title: "Nordvik Snekkerverksted",
    description: "Portfolio-nettside for et snekkerverksted med prosjektgalleri, prisforespørsel og kundeanmeldelser.",
    category: "handverker",
    subcategory: "snekker",
    image: "/projects/snekker-1.jpg",
    tags: ["Portfolio", "Galleri", "Kontaktskjema"],
  },
  {
    id: "snekker-2",
    title: "Møbelmaker Hansen",
    description: "Eksklusiv nettside for skreddersydde møbler med 3D-visning og bestillingssystem.",
    category: "handverker",
    subcategory: "snekker",
    image: "/projects/snekker-2.jpg",
    tags: ["3D-visning", "E-handel", "Tilpasning"],
  },

  // Elektriker
  {
    id: "elektriker-1",
    title: "SparkEl AS",
    description: "Profesjonell elektriker-nettside med tjenesteoversikt, priskalkultor og nødsituasjon-kontakt.",
    category: "handverker",
    subcategory: "elektriker",
    image: "/projects/elektriker-1.jpg",
    tags: ["Kalkulator", "Booking", "Responsiv"],
  },
  {
    id: "elektriker-2",
    title: "SmartHjem Elektro",
    description: "Smarthus-spesialist nettside med produktkatalog, installasjonsguider og fjernstyrings-demo.",
    category: "handverker",
    subcategory: "elektriker",
    image: "/projects/elektriker-2.jpg",
    tags: ["Smarthus", "IoT", "Demo"],
  },

  // Tømrer
  {
    id: "tomrer-1",
    title: "Fjell Tømrer & Bygg",
    description: "Byggefirma-nettside med prosjektportefølje, byggetillatelse-guide og kostnadsestimator.",
    category: "handverker",
    subcategory: "tomrer",
    image: "/projects/tomrer-1.jpg",
    tags: ["Portefølje", "Estimator", "Guide"],
  },
  {
    id: "tomrer-2",
    title: "Bygg & Bo",
    description: "Tømrerfirma med fokus på tilbygg og renovering, med før/etter-galleri og referanser.",
    category: "handverker",
    subcategory: "tomrer",
    image: "/projects/tomrer-2.jpg",
    tags: ["Før/Etter", "Referanser", "Tilbygg"],
  },

  // Ventilasjon
  {
    id: "ventilasjon-1",
    title: "Ren Luft Ventilasjon",
    description: "Ventilasjonsfirma-nettside med systemkonfigurator, vedlikeholdsavtaler og energibesparelser.",
    category: "handverker",
    subcategory: "ventilasjon",
    image: "/projects/ventilasjon-1.jpg",
    tags: ["Konfigurator", "Vedlikehold", "Energi"],
  },
  {
    id: "ventilasjon-2",
    title: "KlimaKontroll AS",
    description: "Inneklima-spesialist med sensordata-dashboard, serviceavtaler og prosjektoversikt.",
    category: "handverker",
    subcategory: "ventilasjon",
    image: "/projects/ventilasjon-2.jpg",
    tags: ["Dashboard", "IoT", "Service"],
  },

  // Rørlegger
  {
    id: "rorlegger-1",
    title: "Vannmester VVS",
    description: "VVS-firma nettside med akutt-tjeneste, baderomsplanlegger og vannlekkasje-varsling.",
    category: "handverker",
    subcategory: "rorlegger",
    image: "/projects/rorlegger-1.jpg",
    tags: ["Akutt", "Planlegger", "Varsling"],
  },
  {
    id: "rorlegger-2",
    title: "Rør & Bad Kompaniet",
    description: "Baderomsrenovering-spesialist med inspirasjonsgalleri, budsjettverktøy og prosjekttidslinje.",
    category: "handverker",
    subcategory: "rorlegger",
    image: "/projects/rorlegger-2.jpg",
    tags: ["Inspirasjon", "Budsjett", "Tidslinje"],
  },
];

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectsBySubcategory(subcategory: string): Project[] {
  return projects.filter((p) => p.subcategory === subcategory);
}
