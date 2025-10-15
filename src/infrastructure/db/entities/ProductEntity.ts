import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./CategoryEntity";

@Entity("product")
export class ProductEntity{
@PrimaryGeneratedColumn("uuid")
    id!:string;

     @Column()
    productName!:string;

    @Column()
    productSKU:string="";

    @Column()
    price!:number;

    @ManyToOne(() => CategoryEntity, { eager: true })
    category!:CategoryEntity;;

    @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

