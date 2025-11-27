import { ProductRepository } from "../../infrastructure/repositories/ProductRepository";
import { v4 as uuidv4 } from 'uuid';
import { ProductCreateDTO } from "../dto/ProductCreateDTO";
import { ProductUpdateDTO } from "../dto/ProductUpdateDTO";
import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { Product } from "../../domain/entities/Product";
import { Category } from "../../domain/entities/Category";
import { ProductDto } from "../dto/ProductDto";
export class ProductService {
    private repo = new ProductRepository();
    private categoryRepo = new CategoryRepository();
    async getProductById(id: string) {
      


         const productDomain =  await this.repo.getProductById(id);

         if (!productDomain) {
            throw new Error(`Product with id ${id} not found`);
        }
        const productDto =  new ProductDto ();
        productDto.categoryId =  productDomain.category.id?? "";;
        productDto.id = productDomain.id?? "";;
        productDto.price = productDomain.price?? 0;;
        productDto.productName = productDomain.productName?? "";;
        productDto.productSKU = productDomain.productSKU?? "";
        productDto.file = productDomain.productImage?? "";
        productDto.createdAt = productDomain.createdAt;
        productDto.updatedAt = productDomain.updatedAt;

        return productDto;

    }

    async createProduct(dto: ProductCreateDTO)  {
        const categoryEntity = await this.categoryRepo.getCategoryById(dto.categoryId);
        if (!categoryEntity) throw new Error(`Category not found ${dto.categoryId}`)



        const product: Product = {
            id: uuidv4(),
            productName: dto.productName,
            productSKU: dto.productSKU,
            price: dto.price,
            productImage: dto.productImage,
            category: categoryEntity,
            createdAt: new Date(),
            updatedAt: new Date(),

        }
        console.log("Services user", product);
        return this.repo.createProduct(product);

       
    }
    async updateProduct(id: string, dto: ProductUpdateDTO) {
         const categoryEntity = await this.categoryRepo.getCategoryById(dto.categoryId);

        
         if (!categoryEntity) throw new Error(`Category not found ${dto.categoryId}`)   

          const product: Product = {
             id: id,
            productName: dto.productName,
            productSKU: dto.productSKU,
            price: dto.price,
            productImage: dto.productImage,
            category: categoryEntity,
            createdAt: new Date(),
            updatedAt: new Date(),

        }

        return this.repo.updateProduct(id, product);


        // return this.repo.updateProduct(id, {
        //     productName: dto.productName,
        //     productSKU: dto.productSKU,
        //     price: dto.price,
        //     category: categoryEntity,
        // })
    }

    async deleteProduct(id: string) {
        return this.repo.deleteProduct(id);
    }

    async getProducts() {
        return this.repo.getProducts();
    }
}