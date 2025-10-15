import { IsNotEmpty } from "class-validator";

export class CategoryCreateDTO{

    @IsNotEmpty()
    categoryName!:string;

    @IsNotEmpty()
    isActive!:boolean;
}