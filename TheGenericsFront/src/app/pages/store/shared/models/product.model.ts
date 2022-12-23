import { ProductCategoryEnum, ProductInterface } from "../interfaces/product.interface";

export class ProductModel implements ProductInterface {
    public id: number;
    public name: string;
    public imageLink: string;
    public price: number;
    public category: ProductCategoryEnum;

    constructor(product: ProductInterface);
    constructor(id: number,
                name: string,
                imageLink: string,
                price: number,
                category: ProductCategoryEnum)
    constructor(...args: any[]) {
        if(args[0] instanceof ProductModel) {
            this.id = (args[0] as ProductModel).id;
            this.name = (args[0] as ProductModel).name;
            this.imageLink = (args[0] as ProductModel).imageLink;
            this.price = (args[0] as ProductModel).price;
            this.category = (args[0] as ProductModel).category;
        }
        else {
            this.id = args[0];
            this.name = args[1];
            this.imageLink = args[2];
            this.price = args[3];
            this.category = args[4];
        }
    }

}