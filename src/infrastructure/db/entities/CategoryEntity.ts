import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class CategoryEntity{
     @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    categoryName:string="";

    @Column()
    isActive:boolean=true;
}