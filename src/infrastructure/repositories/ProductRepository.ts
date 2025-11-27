import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { AppDataSource } from "../db";
import { ProductEntity } from "../db/entities/ProductEntity";
import { ProductMapper } from "../mappers/ProductMapper";

export class ProductRepository implements IProductRepository {

    private repo = AppDataSource.getRepository(ProductEntity);
    async getProductById(id: string): Promise<Product | null> {
        const entity = await this.repo.findOneBy({ id });
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
        const newProduct = ProductMapper.toEntity(product)

        const saved = await this.repo.save(newProduct);
        return ProductMapper.toDomain(saved);
    }
    async updateProduct(id: string, data: Product): Promise<Product> {

        const existing = await this.repo.findOne({
            where: { id },
            relations: ["category"]
        });

        if (!existing) {
            throw new Error(`Product with id ${id} not found`);
        }

        console.log("Existing product before update:", existing);

        console.log("Update data:", data);


        // Update primitive fields
        existing.productName = data.productName ?? existing.productName;
        existing.productSKU = data.productSKU ?? existing.productSKU;
        existing.price = data.price ?? existing.price;

         // Update category (correct way)
    if (data.category?.id) {
        existing.category = { id: data.category.id } as any;  
    }

        existing.updatedAt = new Date();

        const saved = await this.repo.save(existing);

        return ProductMapper.toDomain(saved);
    }
    async deleteProduct(id: string): Promise<void> {
        await this.repo.delete({ id });
    }

}