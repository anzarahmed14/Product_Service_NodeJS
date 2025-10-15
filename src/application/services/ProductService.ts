import { ProductRepository } from "../../infrastructure/repositories/ProductRepository";
import {v4 as  uuidv4} from 'uuid';
import { ProductCreateDTO } from "../dto/ProductCreateDTO";
import { ProductUpdateDTO } from "../dto/ProductUpdateDTO";
import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { Product } from "../../domain/entities/Product";
import { Category } from "../../domain/entities/Category";
export class ProductService{
    private repo = new ProductRepository();
    private categoryRepo = new CategoryRepository();
    async getProductById(id:string){
        return this.repo.getProductById(id);
    }

     async createProduct(dto: ProductCreateDTO) {
const categoryEntity = await this.categoryRepo.getCategoryById(dto.categoryId);
 if (!categoryEntity) throw new Error(`Role not found ${dto.categoryId}`)



        const product : Product ={
            id: uuidv4(),
           productName:dto.productName,
            productSKU:dto.productSKU,
            price:dto.price,
            category:categoryEntity,
            createdAt:  new Date(),
            updatedAt:  new Date(), 

        }     
        console.log("Services user" , product);
        return this.repo.createProduct(product);

        // return this.repo.create({
        // name: dto.name,
        // email: dto.email,
        // password: dto.password,
        //     role: roleEntity ,
        // updatedAt:dto.updatedAt,
        // createdAt:dto.createdAt
        // });
    }
    async updateProduct(id:string, dto: ProductUpdateDTO){
        return this.repo.updateProduct(id,{
            productName:dto.productName,
            productSKU:dto.productSKU,
            price:dto.price
        })
    }

    async deleteProduct(id:string){
        return this.repo.deleteProduct(id);
    }

    async getProducts(){
        return this.repo.getProducts();
    }
}