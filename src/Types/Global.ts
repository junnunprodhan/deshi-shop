export type TInput = {
  type: string;
  edit: string;
  name: string;
};

export interface TProduct {
  _id: number;
  createdAt: string;
  discountEndDate: string;
  price: number;
  discountPrice: number;
  name: string;
  category: string;
  image: string;
  isFlash: boolean,
  description: string;
  nutrients: {
    vitamins: string[];
    minerals: string[];
  };
  rating: number
}

export interface TTopCard {
  category?: string;
  image?: string;
  name?: string;
  price?: number;
  discountPrice?: number;
  product?: TProduct;
  path: string,
}
