
import type { Event, StaffMember, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Annual Science Fair',
    date: '2024-10-26',
    description: 'A showcase of innovative projects from our brilliant students. Join us to see the future of technology.',
    imageUrl: 'https://picsum.photos/seed/science/400/300',
  },
  {
    id: '2',
    title: 'Codefest 2024',
    date: '2024-11-15',
    description: 'A 24-hour coding competition for students to solve real-world problems. Prizes and glory await!',
    imageUrl: 'https://picsum.photos/seed/code/400/300',
  },
  {
    id: '3',
    title: 'Sports Day Extravaganza',
    date: '2024-12-05',
    description: 'A day of fun, games, and healthy competition. Parents are welcome to cheer for their children.',
    imageUrl: 'https://picsum.photos/seed/sports/400/300',
  },
    {
    id: '4',
    title: 'Art & Tech Exhibition',
    date: '2025-01-20',
    description: 'Explore the intersection of creativity and technology. Featuring digital art, 3D printing, and more.',
    imageUrl: 'https://picsum.photos/seed/art/400/300',
  },
];

export const MOCK_STAFF: StaffMember[] = [
  {
    id: 's1',
    name: 'Dr. Evelyn Reed',
    role: 'Principal',
    imageUrl: 'https://picsum.photos/seed/principal/300/300',
    bio: 'With over 20 years of experience in education, Dr. Reed is passionate about fostering a learning environment that encourages curiosity and innovation.'
  },
  {
    id: 's2',
    name: 'Mr. Samuel Chen',
    role: 'Head of Science Department',
    imageUrl: 'https://picsum.photos/seed/sciencehead/300/300',
    bio: 'Mr. Chen specializes in applied physics and robotics, inspiring students to explore the wonders of science.'
  },
  {
    id: 's3',
    name: 'Ms. Priya Sharma',
    role: 'Head of Arts & Design',
    imageUrl: 'https://picsum.photos/seed/arthead/300/300',
    bio: 'An accomplished digital artist, Ms. Sharma guides students in blending artistic principles with modern technology.'
  },
    {
    id: 's4',
    name: 'Mr. Ben Carter',
    role: 'Athletics Director',
    imageUrl: 'https://picsum.photos/seed/sportshead/300/300',
    bio: 'Mr. Carter believes in the power of sports to build character, discipline, and teamwork among students.'
  }
];

export const MOCK_GALLERY_IMAGES: GalleryImage[] = [
    { id: 'g1', src: 'https://picsum.photos/seed/gallery1/800/600', alt: 'Students in a lab', span: 'row-span-2' },
    { id: 'g2', src: 'https://picsum.photos/seed/gallery2/600/800', alt: 'School building', span: 'col-span-1' },
    { id: 'g3', src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Art class', span: 'col-span-1' },
    { id: 'g4', src: 'https://picsum.photos/seed/gallery4/800/600', alt: 'Coding competition', span: 'col-span-2' },
    { id: 'g5', src: 'https://picsum.photos/seed/gallery5/600/800', alt: 'Sports day', span: 'row-span-2' },
    { id: 'g6', src: 'https://picsum.photos/seed/gallery6/800/600', alt: 'Library', span: 'col-span-1' },
    { id: 'g7', src: 'https://picsum.photos/seed/gallery7/800/600', alt: 'Graduation ceremony', span: 'col-span-1' },
];

export const SCHOOL_INFO = {
    address: 'Jr Technical School, Bondel Rd, Kadri Hills, Kadri, Mangaluru, Karnataka 575004',
    phone: '+91 123 456 7890',
    email: 'contact@juniortech.edu'
};
