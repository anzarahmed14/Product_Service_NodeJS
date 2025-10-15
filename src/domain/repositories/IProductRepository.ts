import { Product } from "../entities/Product";

export interface IProductRepository{
    getProductById(id:string):Promise<Product | null>;
    getProducts():Promise<Product[]>;
    createProduct(product:Product): Promise<Product>;
    updateProduct(id:string,data:Partial<Product>):Promise<Product>;
    deleteProduct(id:string):Promise<void>;
}