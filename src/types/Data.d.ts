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

interface ABIParameter {
  name: string;
  type: string;
}

interface ABIEntry {
  constant?: boolean;
  inputs: ABIParameter[];
  name: string;
  outputs: ABIParameter[];
  payable?: boolean;
  stateMutability?: "pure" | "view" | "nonpayable" | "payable";
  type: string;
}

type ABI = ABIEntry[];

interface NFTcontract {
  project: { slug: string };
  name: string;
  address: `0x${string}`;
  metadata: { schemaString: string };
  functions: {
    name: { nfx: string; legacy: string };
    description: string;
    outputs: { name: { nfx: string; legacy: string }; type: string }[];
  }[];
}

interface Project {
  slug: string;
  name: string;
  description: string;
  owner: string;
}
