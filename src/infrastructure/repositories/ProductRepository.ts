import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { AppDataSource } from "../db";
import { ProductEntity } from "../db/entities/ProductEntity";
import { ProductMapper } from "../mappers/ProductMapper";

export class ProductRepository implements IProductRepository{

    private repo = AppDataSource.getRepository(ProductEntity);
    async getProductById(id: string): Promise<Product | null> {
         const entity = await this.repo.findOneBy({id});
         if (!entity) {
            throw new Error(`Product with id ${id} not found`);
        }
        return entity
    }
    async getProducts(): Promise<Product[]> {
        const allProducts = await this.repo.find();
        const productDto = allProducts.map(product => ProductMapper.toDomain(product));
        return productDto;
    }
   async createProduct(product: Product): Promise<Product> {
         const newUser =  ProductMapper.toEntity(product)

        const saved = await this.repo.save(newUser);
        return ProductMapper.toDomain(saved);
    }
   async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
         await this.repo.update(id,data);
       const updated = await this.repo.findOneBy({id});
       if (!updated) throw new Error("product not found");
       return ProductMapper.toDomain(updated);
    }
   async deleteProduct(id: string): Promise<void> {
        await this.repo.delete({id});
    }
    
}