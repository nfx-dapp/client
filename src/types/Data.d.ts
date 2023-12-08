export interface Feature {
  key: string;
  title: string;
  description: string;
  image: string;
  sections: {
    image: string;
    caption: string;
    title: string;
    description: string;
    items: string[];
  }[];
}
