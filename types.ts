
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: 'col-span-1' | 'col-span-2' | 'row-span-1' | 'row-span-2';
}
