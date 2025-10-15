import { validate } from "class-validator";
import { Request, Response } from "express";
import { CategoryCreateDTO } from "../../application/dto/CategoryCreateDTO";
import { CategoryUpdateDTO } from "../../application/dto/CategoryUpdateDTO";
import { CategoryService } from "../../application/services/CategoryService";

export class CategoryController{
    private categoryService = new CategoryService();

    createCategory = async(req:Request,res:Response) =>{
        
        const dto = Object.assign(new CategoryCreateDTO(),req.body);
         console.log(`DTO  ${JSON.stringify(dto)}`);
        const error = await validate(dto); 
         if (error.length > 0) return res.status(400).json({ error });
        const category= await this.categoryService.createCategory(dto);
         res.status(201).json(category);
    }

    updateCategory = async(req:Request,res:Response)=>{
       
            const dto = Object.assign(new CategoryUpdateDTO(),req.body);
            const id = req.params.id;
            await validate(dto); 
        const error = await validate(dto); 
             if (error.length > 0) return res.status(400).json({ error });
             const category = await this.categoryService.updateCategory(id,dto);
            res.json(category);
        

    }

    

    getCategoryById = async(req:Request,res:Response)=>{
        try{const id = req.params.id;
        const category = await this.categoryService.getCategoryById(id);
        res.json(category);
        }catch(error){
            return res.status(404).json({error: "Category not found"});
        }
    }

    deleteCategory = async(req:Request,res:Response) =>{
        try{
            const id = req.params.id;
            await this.categoryService.deleteCategory(id);
             res.send();
        }catch(error){
             return res.status(404).json({error: "Category not found"});
        }
    }

    getCategories = async(req:Request,res:Response)=>{
        try{
            const roles = await this.categoryService.getCategories();
            res.json(roles);
        }catch(error){
             return res.status(404).json({error: "Role not found"});
        }
    }
}