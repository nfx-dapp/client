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

export interface Schema {
  definition: Definition;
}

export type Definition = {
  name: string;
  optional?: boolean;
  array?: boolean;
  type: Type;
  refers?: string;
}[];

export type Type = "string" | "number" | "reference" | Definition;
