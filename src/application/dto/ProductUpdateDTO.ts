import { IsNotEmpty } from "class-validator";

export class ProductUpdateDTO {
    
       
          @IsNotEmpty()
        categoryId:string="";
    
         @IsNotEmpty()
        productName!:string;
    
        @IsNotEmpty()
        productSKU!:string;

         @IsNotEmpty()
        productImage!:string;
    
    
        @IsNotEmpty()
        price!:number;
    
        
}