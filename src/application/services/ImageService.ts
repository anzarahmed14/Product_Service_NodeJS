import { ImageRepository } from "../../infrastructure/repositories/ImageRepository";
import { ImageCreateDTO } from "../dto/ImageCreateDTO";

export class ImageService{
    private repo = new ImageRepository();
 async createImage(dto:any){
        return this.repo.createImage(
           {
                imageName: dto.ImageName,
              imageData: dto.ImageData,
               isActive: dto.isActive
           }
        );
    }

    // async updateCategory(id:string,dto:CategoryUpdateDTO){
    //     return this.repo.updateCategory(id,{
    //         categoryName: dto.categoryName,
    //            isActive: dto.isActive
    //     })
    // }

    // // getRoleByName(name:string){
    // //     return this.repo.getRoleByName(name);

    // // }

    getImageById(id:string){
        return this.repo.getImageById(id);
    }

    // deleteCategory(id:string){
    //     return this.repo.deleteCategory(id);
    // }

    // getCategories(){
    //     return this.repo.getCategories();
    // }

}