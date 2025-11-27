import { validate } from "class-validator";
import { ImageCreateDTO } from "../../application/dto/ImageCreateDTO";
import { ImageService } from "../../application/services/ImageService";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
export class ImageController{
    private imageService = new ImageService();

    createImage = async (req: Request, res: Response) => {
        const file = req.file;



        if (!file) {
            return res.status(400).json({ error: "File is required" });
        }
        const { imageName, isActive } = req.body;
        console.log(`DTO  ${JSON.stringify(req.body)}`);
        //  const dto = Object.assign(new ImageCreateDTO(),req.body);
        const dto = plainToInstance(ImageCreateDTO, {
            ImageName: req.body.imageName,
            ImageData: req.file?.filename,
            isActive: req.body.isActive === "true"
        });


        console.log(`DTO  ${JSON.stringify(dto)}`);
        const error = await validate(dto);
        if (error.length > 0) return res.status(400).json({ error });
        const image = await this.imageService.createImage(dto);
        res.status(201).json(image);
    }

    // updateCategory = async(req:Request,res:Response)=>{
       
    //         const dto = Object.assign(new CategoryUpdateDTO(),req.body);
    //         const id = req.params.id;
    //         await validate(dto); 
    //     const error = await validate(dto); 
    //          if (error.length > 0) return res.status(400).json({ error });
    //          const category = await this.categoryService.updateCategory(id,dto);
    //         res.json(category);
        

    // }

    

    getImageById = async(req:Request,res:Response)=>{
        try{const id = req.params.id;
        const image = await this.imageService.getImageById(id);
        res.json(image);
        }catch(error){
            return res.status(404).json({error: "Image not found"});
        }
    }

    // deleteCategory = async(req:Request,res:Response) =>{
    //     try{
    //         const id = req.params.id;
    //         await this.categoryService.deleteCategory(id);
    //          res.send();
    //     }catch(error){
    //          return res.status(404).json({error: "Category not found"});
    //     }
    // }

    // getCategories = async(req:Request,res:Response)=>{
    //     try{
    //         const roles = await this.categoryService.getCategories();
    //         res.json(roles);
    //     }catch(error){
    //          return res.status(404).json({error: "Role not found"});
    //     }
    // }
}