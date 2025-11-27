import { Image } from "../entities/Image";

export interface IImageRepository{
    getImageById(id:string): Promise<Image | null>;
    createImage(Category:Partial<Image>): Promise<Image>;
    // updateCategory(id: string,data:Partial<Category>): Promise<Category>;
    deleteImage(id:string):Promise<void>;
    // getRoleByName(roleName:string): Promise<role | null>;
    getImageses():Promise<Image[]>;
}