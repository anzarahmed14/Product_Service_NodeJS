import { IsNotEmpty } from "class-validator";

export class CategoryUpdateDTO{

    @IsNotEmpty()
    categoryName!:string;

    @IsNotEmpty()
    isActive!:boolean;
}