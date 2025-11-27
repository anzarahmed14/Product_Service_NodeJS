import { Image } from "../../domain/entities/Image";
import { IImageRepository } from "../../domain/repositories/IImageRepository";
import { AppDataSource } from "../db";
import { ImageEntity } from "../db/entities/ImageEntity";

export class ImageRepository implements IImageRepository{
    async getImageById(id: string): Promise<Image | null> {
        const entity = await this.repo.findOneBy({id}) ;
      if (!entity) throw new Error("Image not found");
       return entity ;
    }

     private repo = AppDataSource.getRepository(ImageEntity);
   async createImage(Img: Partial<Image>): Promise<Image> {
       const entity = new ImageEntity();
       entity.imageName = Img.imageName!;
       entity.imageData = Img.imageData!;
         entity.isActive = Img.isActive!;
        const saveImage = await this.repo.save(entity);
         return new Image(saveImage.id, saveImage.imageName, saveImage.imageData, saveImage.isActive);
    }
    deleteImage(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getImageses(): Promise<Image[]> {
        throw new Error("Method not implemented.");
    }

}