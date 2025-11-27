import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("images")
export class ImageEntity{
     @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    imageName:string="";

    @Column()
    imageData:string="";

    @Column()
    isActive:boolean=true;
}