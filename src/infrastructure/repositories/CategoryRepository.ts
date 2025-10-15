import { Category } from "../../domain/entities/Category";
import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { AppDataSource } from "../db";
import { CategoryEntity } from "../db/entities/CategoryEntity";

export class CategoryRepository implements ICategoryRepository{

    private repo = AppDataSource.getRepository(CategoryEntity);
    async getCategoryById(id: string): Promise<Category | null> {


        const entity = await this.repo.findOneBy({id}) ;
      if (!entity) throw new Error("Role not found");
       return entity ;
    }
   async createCategory(category: Partial<Category>): Promise<Category> {
       const entity = new CategoryEntity();
      
        entity.categoryName = category.categoryName!;
        entity.isActive = category.isActive!;

        const saveCategory = await this.repo.save(entity);

        

       return new Category(saveCategory.id, saveCategory.categoryName, saveCategory.isActive);

    }
    async updateCategory(id: string, data: Partial<Category>): Promise<Category> {
        await this.repo.update(id, data);
        const updated = await this.repo.findOneBy({ id });
        if (!updated) throw new Error("User not found");
        return new Category(updated.id, updated.categoryName, updated.isActive);
    }
    async deleteCategory(id: string): Promise<void> {
        await this.repo.delete({id})
    }
    async getCategories(): Promise<Category[]> {
         const entities = await this.repo.find();
         return entities.map(e => new Category(e.id,e.categoryName,e.isActive))
    }
    
}