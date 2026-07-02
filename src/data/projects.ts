export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'The Park Avenue Penthouse',
    category: 'Residential',
    location: 'New York, NY',
    year: '2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'A light-filled penthouse layered with warm oak, brushed brass, and tactile linen.',
  },
  {
    id: 'p2',
    title: 'Atelier Maison Boutique',
    category: 'Commercial',
    location: 'Paris, FR',
    year: '2024',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'A retail concept where heritage architecture meets a contemporary product narrative.',
  },
  {
    id: 'p3',
    title: 'Coastal Retreat',
    category: 'Residential',
    location: 'Hamptons, NY',
    year: '2023',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'An understated beach house built around natural light and a muted, mineral palette.',
  },
  {
    id: 'p4',
    title: 'The Hudson Loft',
    category: 'Renovation',
    location: 'Brooklyn, NY',
    year: '2023',
    image: 'https://images.pexels.com/photos/2453694/pexels-photo-2453694.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'An industrial loft softened with curated textiles and a sculptural kitchen island.',
  },
  {
    id: 'p5',
    title: 'Maison Verde Restaurant',
    category: 'Hospitality',
    location: 'Milan, IT',
    year: '2024',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'A dining room wrapped in deep green, terracotta, and hand-thrown ceramics.',
  },
  {
    id: 'p6',
    title: 'The Garden Townhouse',
    category: 'Residential',
    location: 'London, UK',
    year: '2022',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260',
    description: 'A Victorian townhouse reimagined with a sun-soaked garden room and calm palette.',
  },
];
