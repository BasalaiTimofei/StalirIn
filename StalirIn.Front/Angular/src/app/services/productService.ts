import { Product } from '../models/product';

export class ProductService{
    constructor(){
    }

    getAllProducts() : Array<Product>{
        let products = new Array<Product>();
        for (let i = 0; i < 20; i++) {
            products[i] = this.getProduct();
        }
        return products;
    }

    getProduct() : Product{
        let product = new Product;
        product.Id = 'qwe';
        product.Img = 'https://slavbelstroy.by/image/cache/catalog/tovar-177x177.png';
        product.Name = 'SomeProductName';
        product.Price = 'SomeProductPrice';
        
        return product;
    }
}