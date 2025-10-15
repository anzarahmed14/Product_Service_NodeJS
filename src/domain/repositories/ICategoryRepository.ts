import { Category } from "../entities/Category";

export interface ICategoryRepository{
    getCategoryById(id:string): Promise<Category | null>;
    createCategory(Category:Partial<Category>): Promise<Category>;
    updateCategory(id: string,data:Partial<Category>): Promise<Category>;
    deleteCategory(id:string):Promise<void>;
    // getRoleByName(roleName:string): Promise<role | null>;
    getCategories():Promise<Category[]>;
}