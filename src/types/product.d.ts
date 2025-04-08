// src/types/product.d.ts

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  color: string;
  images: string[];
  mainCategory: string;
  collectionName: string;
  subCollectionName: string;
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
}
