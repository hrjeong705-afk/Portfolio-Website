
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  category: 'graphic' | 'motion';
  thumbnail: string;
  description: string;
  images: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}
