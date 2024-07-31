interface TechItem {
  id: string;
  name: string;
  alt: string;
  link: string;
}

interface TechCategory {
  id: number;
  stack: string;
  list: TechItem[];
}

type TechData = TechCategory[];

export type { TechItem, TechCategory, TechData };
