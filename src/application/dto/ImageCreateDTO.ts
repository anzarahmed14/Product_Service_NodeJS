import { IsNotEmpty } from "class-validator";

export class ImageCreateDTO{

    @IsNotEmpty()
    ImageName!:string;

    @IsNotEmpty()
    ImageData!:string;
    
    @IsNotEmpty()
    isActive!:boolean;
}