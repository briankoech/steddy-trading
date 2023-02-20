export interface IService {
  link: string;
  img: string;
  description: string;
  longText?: string;
  title: string;
  featured?: boolean;
}

export interface IProject {
  link: string;
  img: string;
  title: string;
  featured?: boolean;
}

export interface IHeroData {
  title: string;
  description: string;
  img: string;
  link: string;
}
