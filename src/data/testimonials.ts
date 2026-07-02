export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Whitfield',
    role: 'Homeowner, Park Avenue',
    quote: 'They listened to how we live, then designed around it. Every room feels intentional yet effortless. The penthouse finally feels like ours.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't2',
    name: 'Marcus Bellini',
    role: 'Owner, Maison Verde',
    quote: 'Our restaurant doubled its reservations within a month of reopening. The space tells a story before a single plate arrives.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't3',
    name: 'Priya Anand',
    role: 'Apartment Owner, Brooklyn',
    quote: 'The renovation was seamless. They managed every contractor, every delivery. We moved in to a finished, styled home.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't4',
    name: 'James Holloway',
    role: 'Developer, Hudson Lofts',
    quote: 'A rare studio that balances aesthetics with buildability. They delivered on time, on budget, and beyond expectation.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't5',
    name: 'Sofia Marchetti',
    role: 'Homeowner, Hamptons',
    quote: 'The coastal retreat is everything we dreamed. Calm, natural, and quietly luxurious. We never want to leave.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't6',
    name: 'David Chen',
    role: 'CEO, Atelier Group',
    quote: 'Our office now reflects our brand without saying a word. Clients comment on the space before the meeting starts.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];
