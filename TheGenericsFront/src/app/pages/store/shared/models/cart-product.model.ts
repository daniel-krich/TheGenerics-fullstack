import { CartProductInterface } from "../interfaces/cart-product.interface";

export class CartProductModel implements CartProductInterface {
    public productId: number;
    public productQuantity: number;

    constructor(productId: number, productQuantity: number) {
        this.productId = productId;
        this.productQuantity = productQuantity;
    }

}