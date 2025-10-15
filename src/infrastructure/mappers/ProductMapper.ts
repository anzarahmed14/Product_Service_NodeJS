import { Product } from "../../domain/entities/Product";
import { CategoryEntity } from "../db/entities/CategoryEntity";
import { ProductEntity } from "../db/entities/ProductEntity";

export class ProductMapper{
    static toDomain(entity:ProductEntity) : Product {
        const product : Product = {
            id:entity.id,
            productName:entity.productName,
            productSKU:entity.productSKU,
            price:entity.price,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            category:{
                id: entity.category.id,
                categoryName: entity.category.categoryName,
                isActive: entity.category.isActive,
            }
        };
        return product;
    }

    static toEntity(domain: Product){
        const entity = new ProductEntity();

        if (domain.id) {
            entity.id = domain.id; // optional, skip if DB auto-generates
        }

        entity.productName = domain.productName;
        entity.productSKU = domain.productName;
        entity.price = domain.price;

        const categoryEntity = new CategoryEntity();
        categoryEntity.id = domain.category.id!;
        categoryEntity.categoryName= domain.category.categoryName;
        categoryEntity.isActive = domain.category.isActive;

        entity.category= categoryEntity;
        entity.createdAt =  domain.createdAt;
        entity.updatedAt = domain.updatedAt;

        return entity;
    }
}