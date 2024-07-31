interface iFruit {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: iNutrition;
}

interface iNutrition {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export type { iFruit, iNutrition };
