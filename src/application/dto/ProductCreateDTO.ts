import { IsNotEmpty } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class ProductCreateDTO {

       
        id!:string;
    
         @IsNotEmpty()
        productName!:string;
    
        @IsNotEmpty()
        productSKU!:string;
    
        @IsNotEmpty()
        price!:number;

        @IsNotEmpty()
        productImage!:string;
    
        @IsNotEmpty()
        categoryId:string="";
    
        @CreateDateColumn()
      createdAt!: Date;
    
      @UpdateDateColumn()
      updatedAt!: Date;
}