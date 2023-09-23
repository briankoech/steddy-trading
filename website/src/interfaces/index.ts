export interface Thumbnail {
  url: string;
  file: any;
  localFile: any;
}

export interface Service {
  slug: string;
  thumbnail: Thumbnail;
  title: string;
  featured: boolean;
  headline: string;
}

export interface Property {
  images: any;
  title: string;
  featured: boolean;
  slug: string;
  price: number;
  thumbnail: Thumbnail;
  size: string;
  location: string;
  sold: boolean;
}

export interface IHeroData {
  title: string;
  description: string;
  img: any;
  link: string;
}
