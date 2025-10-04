import { type BlogPost } from "../types/blogPostType";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Guida Completa a Rio de Janeiro: Le 10 Cose da Non Perdere",
    excerpt: "Scopri i segreti della Cidade Maravilhosa, dalle spiagge iconiche di Copacabana e Ipanema ai quartieri storici di Santa Teresa e Lapa. Una guida completa per vivere Rio al massimo.",
    author: "Marco Rossi",
    publishDate: "2024-01-15",
    readTime: "8 min",
    category: "Sud America",
    imageUrl: "../assets/rio-hero.jpg",
    tags: ["Rio de Janeiro", "Brasile", "Spiagge", "Cultura"]
  },
  {
    id: "2", 
    title: "Machu Picchu: Il Mistero degli Inca Rivive",
    excerpt: "Un viaggio nel tempo attraverso le rovine più famose del Perù. Dalla Città Perduta degli Inca alle tradizioni millenarie che ancora oggi sopravvivono tra le Ande.",
    author: "Sofia Chen",
    publishDate: "2024-01-10",
    readTime: "12 min",
    category: "Sud America",
    imageUrl: "../assets/rio-hero.jpg", // Placeholder - would be actual Machu Picchu image
    tags: ["Machu Picchu", "Perù", "Inca", "Storia"]
  },
  {
    id: "3",
    title: "Tokyo by Night: I Segreti della Città che Non Dorme Mai",
    excerpt: "Esplora il lato nascosto di Tokyo dopo il tramonto. Dai quartieri illuminati di Shibuya e Shinjuku ai locali segreti dove i giapponesi si rilassano dopo il lavoro.",
    author: "Yuki Tanaka",
    publishDate: "2024-01-08",
    readTime: "10 min", 
    category: "Asia",
    imageUrl: "../assets/rio-hero.jpg", // Placeholder - would be actual Tokyo image
    tags: ["Tokyo", "Giappone", "Notturno", "Cultura"]
  },
  {
    id: "4",
    title: "Bangkok: Tra Templi e Street Food",
    excerpt: "Un'avventura culinaria e spirituale nella capitale thailandese. Dai templi dorati del Wat Pho alle bancarelle di street food che animano i vicoli di Chinatown.",
    author: "Anna Bianchi",
    publishDate: "2024-01-05",
    readTime: "7 min",
    category: "Asia", 
    imageUrl: "../assets/rio-hero.jpg", // Placeholder - would be actual Bangkok image
    tags: ["Bangkok", "Thailandia", "Street Food", "Templi"]
  }
];
