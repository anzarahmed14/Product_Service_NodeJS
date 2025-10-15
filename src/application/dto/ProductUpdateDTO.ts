import { IsNotEmpty } from "class-validator";

export class ProductUpdateDTO {
    
       
    
         @IsNotEmpty()
        productName!:string;
    
        @IsNotEmpty()
        productSKU!:string;
    
        @IsNotEmpty()
        price!:number;
    
        
}