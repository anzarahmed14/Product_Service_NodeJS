import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { CategoryCreateDTO } from "../dto/CategoryCreateDTO";
import { CategoryUpdateDTO } from "../dto/CategoryUpdateDTO";

export class CategoryService{
    private repo = new CategoryRepository();
 async createCategory(dto:CategoryCreateDTO){
        return this.repo.createCategory(
           {
               categoryName: dto.categoryName,
               isActive: dto.isActive
               
           }
        );
    }

    async updateCategory(id:string,dto:CategoryUpdateDTO){
        return this.repo.updateCategory(id,{
            categoryName: dto.categoryName,
               isActive: dto.isActive
        })
    }

    // getRoleByName(name:string){
    //     return this.repo.getRoleByName(name);

    // }

    getCategoryById(id:string){
        return this.repo.getCategoryById(id);
    }

    deleteCategory(id:string){
        return this.repo.deleteCategory(id);
    }

    getCategories(){
        return this.repo.getCategories();
    }

}