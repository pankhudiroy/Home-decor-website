export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Design',
    description: 'Bespoke interiors for homes that feel deeply personal — from city apartments to country estates.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Space planning', 'Furniture & finishes', 'Lighting design', 'Styling & accessorizing'],
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    description: 'Workplaces, retail, and hospitality environments engineered to impress and perform.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Brand-led concept', 'Functional layouts', 'Acoustic planning', 'Wayfinding'],
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    description: 'Expert guidance for a single room or a full refresh — flexible, focused, and actionable.',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Mood boards', 'Color & material', 'Layout review', 'Sourcing list'],
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    description: 'End-to-end delivery — from first sketch to the final styled detail, fully managed.',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Project management', 'Contractor coordination', 'Procurement', 'Final installation'],
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodel',
    description: 'Thoughtful transformations that honor the bones of a space while elevating its potential.',
    image: 'https://images.pexels.com/photos/2453694/pexels-photo-2453694.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Structural redesign', 'Kitchen & bath', 'Material upgrades', 'Lighting overhaul'],
  },
  {
    id: 'styling',
    title: 'Styling & Staging',
    description: 'Finishing touches and property staging that make spaces photograph beautifully and sell faster.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260',
    features: ['Art curation', 'Soft furnishings', 'Property staging', 'Photoshoot styling'],
  },
];
