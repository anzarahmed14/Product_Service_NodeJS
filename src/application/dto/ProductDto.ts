import { IsNotEmpty } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class ProductDto {


    id!: string;
    productName!: string;
    productSKU!: string;
    file!: string;
    price!: number;
    categoryId: string = "";
    createdAt!: Date;
    updatedAt!: Date;
}