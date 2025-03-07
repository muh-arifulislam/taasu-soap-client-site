export type TProduct = {
  _id: string;
  productId: string;
  name: string;
  title: string;
  price: number; // Or change to `number` if price should be a numeric value
  descriptions: string[];
  quantity: string; // Or `number` if quantity should be numeric
  sold: string; // Or `number` if sold should be numeric
  advantages: string[];
  ingredients: string[];
  addInformation: {
    weight: string;
    dimension: string;
    direction: string;
    warnings: string;
  };
  images: string[];
};
