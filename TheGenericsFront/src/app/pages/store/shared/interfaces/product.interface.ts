export enum ProductCategoryEnum {
    MUSIC,
    MERCH
}

export interface ProductInterface {
    id: number;
    name: string;
    imageLink: string;
    price: number;
    category: ProductCategoryEnum;
}