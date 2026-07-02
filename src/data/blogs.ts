export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Quiet Power of a Neutral Palette',
    excerpt: 'Why restrained color schemes create rooms that age gracefully and feel effortlessly layered over time.',
    category: 'Design Theory',
    date: 'May 14, 2024',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Isabelle Laurent',
  },
  {
    id: 'b2',
    title: 'Lighting: The Invisible Architect',
    excerpt: 'How layered lighting — ambient, task, accent — shapes mood more than any single piece of furniture.',
    category: 'Lighting',
    date: 'Apr 28, 2024',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/2453694/pexels-photo-2453694.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marcus Reed',
  },
  {
    id: 'b3',
    title: 'Designing for Small Spaces',
    excerpt: 'Five principles for making compact homes feel expansive without sacrificing warmth or personality.',
    category: 'Living',
    date: 'Apr 10, 2024',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sofia Marchetti',
  },
  {
    id: 'b4',
    title: 'Materials That Tell a Story',
    excerpt: 'From hand-thrown ceramics to reclaimed oak, the textures that give a room its soul.',
    category: 'Materials',
    date: 'Mar 22, 2024',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Isabelle Laurent',
  },
  {
    id: 'b5',
    title: 'The Art of the Gallery Wall',
    excerpt: 'A measured approach to hanging art — composition, spacing, and the courage to leave space.',
    category: 'Styling',
    date: 'Mar 05, 2024',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'David Chen',
  },
  {
    id: 'b6',
    title: 'Outdoor Rooms, Indoor Comfort',
    excerpt: 'Blurring the line between terrace and living room with durable, beautiful materials.',
    category: 'Outdoor',
    date: 'Feb 18, 2024',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marcus Reed',
  },
];
